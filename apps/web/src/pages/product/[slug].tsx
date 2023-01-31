/**
 * Product Detail Page
 */
import React, { useState, useEffect, useCallback, use } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { notFound, usePathname } from 'next/navigation';
import { HeaderMobile, Header, Footer } from '@components/app/commons';
import ProductDetail from '@components/pages/ProductDetail/ProductDetail';
import {
  isProductPromo,
  getFinalPrice,
  getOriginalPrice,
  getDiscPercent,
  getReviewData,
  getMainImage,
  getBrandData,
  getSpecification,
} from '@utils/pages/productDetail/productDetailAction';
// import { selectVariant } from '@utils/pages/productDetail/productVariantAction';
import {
  getMerchantTypeLabel,
  getFDMerchantLabel,
} from '@utils/commons/merchantHelper';
import { graphqlRequestClient } from '@graphql-ctcd/graphql-client';
import {
  useMemberReview,
  useOrderReview,
  useRecommendationPdp,
  useCustomerCoupon,
} from '@hooks/index';
import {
  prepareDataMemberReview,
  prepareDataOrderReview,
  prepareDataVariant,
  prepareRecommdationData,
} from '@utils/pages/productDetail/prepareData';
import { useGetPdpQuery } from '@graphql-ctcd/codegen';
import { convertMarkdownToHtml } from '@utils/helpers/markdown';
import { prepareFdSsoLoginUrl } from '@utils/helpers';
import { v4 as uuidv4 } from 'uuid';
import { GuestAddToCart, AddToCart } from '@utils/commons/cartHelper';
import { GetCustomerUUID, GetTokenJwt } from '@utils/commons/customerHelper';
// FIXME: duplicate component popup login register
import ModalLoginRegisterMPCPage from '@components/Global/ModalLoginRegisterMPCPage';
import { notify, Toast } from '@components/Global/Toast';
import {
  FetchAddProductItemToFavorites,
  useAccounts,
  useRemoveFavorites,
} from '@hooks/useAccounts';

const getProductCode = (slug: any): string => {
  if (slug) {
    const arraySlug = slug.split('-');
    const productCode = arraySlug.pop();
    return productCode.toUpperCase();
  }
  return '';
};

/**
 * Product Detail pages content
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */
export default function ProductDetailPage(): React.ReactElement {
  const isLogin = GetTokenJwt() ? true : false;
  const router = useRouter();
  const { slug } = router.query;
  const productCode = getProductCode(slug);

  /**
   * get product detail data with graphql
   */
  const { status, data, error, isFetching } = useGetPdpQuery(
    graphqlRequestClient,
    { code: productCode }
  );

  // FIXME: to avoid infinite loop
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const productDetail: any =
    data?.pdp && data.pdp?.length > 0 ? data?.pdp[0] : {};

  const [isFlashSale, setIsFlashSale] = useState<boolean>(false);
  const [flashSaleEnd, setFlashSaleEnd] = useState<any>('');

  /**
   * markdown product description
   */
  const [desc, setDesc] = useState<string>('');
  convertMarkdownToHtml(productDetail.description).then((d) => {
    setDesc(String(d));
  });

  /**
   * get recommendation product in PDP
   */
  const { data: dataRecommendation } = useRecommendationPdp({
    code: productCode,
  });

  const recommendationPdp: any = {};
  if (dataRecommendation) {
    recommendationPdp.title = dataRecommendation.title;
    recommendationPdp.url = dataRecommendation.url
      ? dataRecommendation.url
      : '/';
    recommendationPdp.recommendations = prepareRecommdationData(
      dataRecommendation.recommendations
    );
  }

  /**
   * state for product image
   */
  const [mainImage, setMainImage] = useState<any>(
    getMainImage(productDetail.medias)
  );
  const [images, setImages] = useState<any[]>();
  const [stock, setStock] = useState<number>(productDetail.stock);
  const [review, setReview] = useState<any>();

  /**
   * state product variant attribute
   */
  const [variantAttrOptions, setVariantAttrOptions] = useState<any>();
  productDetail.variantAttribute = prepareDataVariant(productDetail);

  /**
   * product sku state
   */
  const [productSku, setProductSku] = useState<string>(productDetail.code);

  // FIXME: fixing useState with object
  // param get member review
  const memberReview = {
    code: productCode,
    page: 1,
    size: 6,
  };

  /**
   * get member review data to API Core
   */
  const {
    data: dataMemberReview,
    isLoading: isLoadingRest,
    isFetching: isFetchingRest,
  } = useMemberReview(productSku, memberReview.page, memberReview.size); // hit API get member review data

  /**
   * param get order review
   */
  const orderReview = {
    code: productCode,
  };
  /**
   * get order review data from API Core
   */
  const { data: dataOrderReview } = useOrderReview(orderReview); // hit API get order review data

  if (productDetail) {
    productDetail.memberReview = prepareDataMemberReview(dataMemberReview);
    productDetail.orderReview = prepareDataOrderReview(dataOrderReview);
  }

  /**
   * get data my coupon
   */
  const { data: mycoupon } = useCustomerCoupon();

  /**
   * prepare review data
   */
  const currentReview = getReviewData(productDetail);

  const setupProductState = useCallback(() => {
    setProductSku(productDetail.code);
    setMainImage(getMainImage(productDetail.medias));
    setImages(productDetail.medias);
    setVariantAttrOptions(productDetail.variantAttribute.attr);
    setStock(productDetail.stock);
    setReview(currentReview);

    // flash sale
    if (productDetail.flashSale) {
      setIsFlashSale(productDetail.flashSale);
      const sessions: any[] = productDetail?.flashSaleDescription?.sessions;
      const activeSession = sessions[0];
      const end = activeSession.end;
      setFlashSaleEnd(end);
    }
  }, [
    currentReview,
    productDetail.code,
    productDetail.flashSale,
    productDetail?.flashSaleDescription?.sessions,
    productDetail.medias,
    productDetail.stock,
    productDetail.variantAttribute.attr,
  ]);

  /**
   * set main image, images, variant attribute, stick, review to each state
   */
  useEffect(() => {
    // FIXME: cause infinite loop
    setupProductState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productDetail.medias, productDetail.code]);

  // useEffect(() => {
  //   // FIXME: cause infinite loop
  //   setupProductState();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [setupProductState]);

  /**
   * select option variant
   */
  const [child, setChild] = useState<any>({});
  const [selectedVariant, setSelectedVariant] = useState<any>([]);

  /**
   * logic to prepare selected attribute
   */
  const selectOption = useCallback(
    (attrName: string, option: any) => {
      const picked = {
        name: attrName,
        code: option.code,
      };
      const existing = [...selectedVariant];

      // check if attribute already picked
      if (existing.length === 0) {
        existing.push(picked);
      } else {
        const index = existing.findIndex((opt) => opt.name === attrName);
        if (index === -1) {
          existing.push(picked);
        } else {
          existing[index] = picked;
        }
      }

      const newVariantAttributeOpt = [...variantAttrOptions];
      const variantAttrindex = newVariantAttributeOpt.findIndex(
        (attr: any) => attr.name === attrName
      );
      newVariantAttributeOpt[variantAttrindex] = {
        ...newVariantAttributeOpt[variantAttrindex],
        selected: option.name,
      };
      setVariantAttrOptions(newVariantAttributeOpt);

      setSelectedVariant(() => existing);
    },
    [selectedVariant, variantAttrOptions]
  );

  useEffect(() => {
    selectVariant(selectedVariant);
    // FIXME: fixing listening param
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedVariant]);

  /**
   * logic to select product child by selected attributes
   * @param {selectedVariant} any[] <array of data selected attribute>
   * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
   * @return {void}
   */
  const selectVariant = useCallback(
    (selectedVariant: any): void => {
      const parentProduct = productDetail;
      let childData: any = {};
      if (selectedVariant.length > 0) {
        const picked: any = [];
        selectedVariant.forEach((attr: { code: any }, ind: any) => {
          picked.push(attr.code);
        });
        const selected = picked.sort().join('&&&');
        const childOption = parentProduct.variantAttribute.childOpt;
        const checkIndex = childOption.findIndex(
          (child: any) => child.attr === selected
        );

        if (checkIndex !== -1) {
          const sku = childOption[checkIndex].sku;
          const childIndex = parentProduct.children.findIndex(
            (product: any) => product.code === sku
          );
          if (childIndex !== -1) {
            childData = parentProduct.children[childIndex];
          }
        }
      }
      setChild((child: any) => ({ ...childData }));
    },
    [productDetail]
  );

  const changeMainImage = useCallback(() => {
    setMainImage(() => getMainImage(child.medias));
  }, [child.medias]);

  const changeDataProduct = useCallback(() => {
    setProductSku(child.code);
    setStock(() => child.stock);
  }, [child.code, child.stock]);

  const changeDataReview = useCallback(() => {
    const updateReview = { ...review };
    updateReview.ratingMemberReview = child.ratingAverage;
    updateReview.totalMemberReview = child.reviewCount;
    setReview(updateReview);
  }, [child.ratingAverage, child.reviewCount, review]);

  const changeVariantErrStatus = useCallback((status: boolean) => {
    setErrVariant(status);
  }, []);

  /**
   * effect after child selected
   */
  useEffect(() => {
    const isChildEmpty = Object.entries(child).length === 0;
    changeDataProduct();
    if (!isChildEmpty) {
      changeDataReview();
      changeVariantErrStatus(false);
      if (child.medias?.length > 0) {
        // setMainImage(() => getMainImage(child.medias));
        changeMainImage();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [child]);

  const finalPrice = {
    normal: productDetail.finalPrice?.setoko,
    promo: productDetail.finalPrice?.promo,
    stock: productDetail.finalPrice?.stock,
    maxPurchase: productDetail.finalPrice?.maxPurchase,
  };

  const merchantData = {
    ...productDetail.merchant,
    ...{
      merchantTypeLabel: getMerchantTypeLabel(
        productDetail.merchant?.merchantType
      ),
      merchantFDLabel: getFDMerchantLabel(productDetail.merchant?.merchantType),
    },
  };

  /**
   * handle add to cart
   */
  const [errVariant, setErrVariant] = useState<boolean>(false);
  const [qty, setQty] = useState<number>(1);
  const handlerUpdateQty = (currentQty: number) => {
    setQty(currentQty);
  };
  const handleAddToCart = () => {
    const isLogin = GetTokenJwt() ? true : false;
    // const sku = isVariant ? childSku : productSku;
    const sku = productSku;
    const isChildEmpty = Object.entries(child).length === 0;
    const isVariant = productDetail?.children?.length > 0;
    if (isVariant && isChildEmpty) {
      setErrVariant(true);
      return;
    }

    if (!isLogin) {
      const guestId = GetCustomerUUID();

      setErrVariant(false);
      GuestAddToCart(guestId, sku, qty);
    } else {
      AddToCart(sku, qty);
    }
    notify({ message: 'Product has been added to shopping cart!' });
  };
  // end handle add to cart

  // handle add to wishlist
  const { mutate: mutateRemoveFavorites } = useRemoveFavorites();
  const handleAddToWishlit = (status: boolean): void => {
    if (isLogin) {
      if (status) {
        FetchAddProductItemToFavorites([{ product_code: productSku }]).then(
          (response: any) => {
            if (response) {
              console.log(response);
              refetchWishlist();
              notify({ message: 'Product has been added to wishlist!' });
            }
          }
        );
      } else {
        mutateRemoveFavorites(productSku, {
          onSuccess: () => {
            refetchWishlist();
            notify({ message: 'Product has been removed to wishlist!' });
          },
        });
      }
    } else {
      openModalMpc();
      return;
    }
  };

  /**
   * handle buy now
   */
  const handleBuyNow = () => {
    if (!isLogin) {
      openModalMpc();
      return;
    }
    const sku = productSku;
    const isChildEmpty = Object.entries(child).length === 0;
    const isVariant = productDetail?.children?.length > 0;
    if (isVariant && isChildEmpty) {
      setErrVariant(true);
      return;
    }
    router.push(`/checkout?buyNow=true&product=${sku}&qty=${qty}`);
  };

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  // METHODS
  const openModalMpc = () => {
    if (!modalOpen) {
      setModalOpen(true);
    }
  };

  const closeModalMpc = () => {
    if (modalOpen) {
      setModalOpen(false);
    }
  };

  // ROUTER
  const routerPath = usePathname();
  const getSsoAuthentication = (): string => {
    // Preparing payload to open FD SSO
    const origin =
      typeof window !== 'undefined' && window.location.origin
        ? window.location.origin
        : '';
    const currentUrl = `${origin}${routerPath}`;
    const fdSsoUrl: string = prepareFdSsoLoginUrl(currentUrl);
    return fdSsoUrl;
  };

  /**
   * Prepare breadcrumb data
   * @returns {string[]}
   */
  const prepareBreadcrumb = (): any[] => {
    const categoryLvl3 = productDetail?.categoryLv3;
    const array = categoryLvl3
      ? categoryLvl3.split(' > ').filter((element: any) => {
          return element !== '';
        })
      : [];
    const breadcrumb = [
      {
        key: `breadcrumb-${uuidv4()}`,
        id: 1,
        name: 'Home',
        url: '/',
      },
    ];
    array.forEach((row: any, ind: number) => {
      if (row) {
        const data = {
          key: `breadcrumb-${uuidv4()}`,
          id: ind + 2,
          name: row,
          url: ind === array.length - 1 ? '' : '/',
        };
        breadcrumb.push(data);
      }
    });
    return breadcrumb;
  };
  /**
   * @description implement useCallback to generateTitle, regarding warning error from Nextjs
   * @see https://github.com/vercel/next.js/discussions/38256
   */
  const generatedTitlePage = useCallback(() => {
    return productDetail
      ? `FemaleDaily Studio - ${productDetail?.name}`
      : 'FemaleDaily Studio - Indonesia’s No.1 Beauty Destination';
  }, [productDetail]);

  useEffect(() => {
    generatedTitlePage();
  }, [generatedTitlePage]);

  /**
   * Give some miliseconds to hide and display login info
   * to dismiss hydration error
   */
  const [isLoaded, setIsLoaded] = useState(false);
  setTimeout(() => {
    setIsLoaded(true);
  }, 100);

  // if (!productDetail.code) {
  //   window.location.href = '404';
  // }

  // get data wishlist user
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false);
  const {
    data: dataWishlist,
    isLoading: isLoadingWishlist,
    isFetched: isFetchedWishlist,
    isSuccess: isSuccessWishlist,
    refetch: refetchWishlist,
  } = useAccounts();

  useEffect(() => {
    const filterCall = () => {
      const filterWishlit = dataWishlist?.favorites?.some((item: any) => {
        return item.product_code === productDetail?.code;
      });
      setIsWishlisted(filterWishlit);
    };
    filterCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataWishlist, productDetail]);
  // ---

  return (
    <section>
      <Head>
        <title>{generatedTitlePage()}</title>
      </Head>
      <div className="sm:block xl:hidden">
        <HeaderMobile />
      </div>
      <div className="hidden xl:block">
        <Header isLoaded={isLoaded} />
        <React.Fragment key={uuidv4()}>
          <ProductDetail
            name={productDetail.name}
            code={productDetail.code}
            memberReviewsUrl={productDetail.memberReviewsUrl}
            finalPrice={getFinalPrice(finalPrice)}
            originalPrice={getOriginalPrice(finalPrice)}
            isPromo={isProductPromo(finalPrice)}
            isFlash={isFlashSale}
            flashSaleEnd={flashSaleEnd}
            flashSaleStock={productDetail.flashSaleDescription?.available}
            discPercentage={getDiscPercent(finalPrice)}
            images={images}
            mainImage={mainImage}
            review={review}
            // review={currentReview}
            brand={getBrandData(productDetail)}
            stock={stock}
            merchant={merchantData}
            description={desc}
            sepecification={getSpecification(productDetail.attributes)}
            variant={productDetail.children}
            // variantAttribute={productDetail.variantAttribute.attr}
            variantAttribute={variantAttrOptions}
            selectOption={selectOption}
            award={productDetail.productAward}
            dataBreadcrumb={prepareBreadcrumb()}
            productRecommendation={recommendationPdp}
            qty={qty}
            handlerUpdateQty={handlerUpdateQty}
            handleAddToCart={handleAddToCart}
            handleBuyNow={handleBuyNow}
            handleAddToWishlit={handleAddToWishlit}
            myCoupon={mycoupon?.data}
            errVariant={errVariant}
            isWishlisted={isWishlisted}
            isLoadingWishlist={isLoadingWishlist}
          />
          <ModalLoginRegisterMPCPage
            isModalOpen={modalOpen}
            closeModal={closeModalMpc}
            goToFdSso={getSsoAuthentication()}
          />
          <Toast />
        </React.Fragment>
        <Footer />
      </div>
    </section>
  );
}
