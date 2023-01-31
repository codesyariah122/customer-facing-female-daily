'use client';
import React, { useState, useEffect } from 'react';
import { Header, Footer } from '@components/app/commons';
import FlashSalePage from '@components/app/flash-sale/FlashSalePage';
import {
  fetchActiveCampaign,
  useActiveCampaign,
} from '@hooks/useActiveCampaign';
import {
  fetchCampaignProducts,
  useCampaignProducts,
} from '@hooks/useCampaignProducts';
import Loading from '@app/loading';

const FlashSale = () => {
  /**
   * Flash Sale Page Content
   * @author Hamam <os.hamam@ctcorpdigital.com>
   * @returns {React.ReactElement}
   *
   * FIXME: on countdown ended
   */

  const {
    data: dataCampaign,
    status: statusCampaign,
    error: errorCampaign,
    refetch: refetchCampaign,
  } = useActiveCampaign();

  const [productPage, setProductPage] = useState(1);
  const [loadingLoadMore, setLoadingLoadMore] = useState(false);
  const [isStarted, setIsStarted] = useState(true);

  // const dataActiveCampaign = dataCampaign;
  const [dataActiveCampaign, setDataActiveCampaign] = useState<any>([]);

  const [categoryList, setCategoryList] = useState([]);
  const [selectedTime, setSelectedTime] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<number[]>([]);

  const productSize = 18;

  const [dataCampaignProducts, setDataCampaignProducts] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0);

  /**
   * set tab categories and active tab time after get data campaign
   */
  useEffect(() => {
    setDataActiveCampaign(dataCampaign);
    setCategoryList(dataCampaign?.data?.sessions[0]?.categories);
    setSelectedTime(dataCampaign?.data?.sessions[0]);

    const props = {
      campaignCode: dataCampaign?.data?.code,
      sessionCode: dataCampaign?.data?.sessions[0].code,
      page: 1,
      size: productSize,
      categoryCode: [],
    };
    setLoadingLoadMore(true);
    fetchCampaignProducts(props)
      .then((res) => {
        setLoadingLoadMore(false);
        setDataCampaignProducts(res.data.items);
        setTotalProduct(res.data.total_data);
      })
      .finally(() => setLoadingLoadMore(false));
  }, [dataCampaign]);

  /**
   * set data products and total product every fetch product
   */
  // useEffect(() => {
  //   setDataCampaignProducts(dataProducts ? dataProducts?.data?.items : []);
  //   setTotalProduct(dataProducts ? dataProducts?.data?.total_data : 0);
  // }, [dataProducts, statusProducts]);

  /**
   * set data products, category, selected time when change time tab
   */
  const changeTabs = (time: any, index: number) => {
    setDataCampaignProducts([]);
    setLoadingLoadMore(true);
    setCategoryList(time.categories);
    setProductPage(1);
    setSelectedTime(time);
    setIsStarted(index == 0);
    setSelectedCategory([]);
    const props = {
      campaignCode: dataCampaign?.data.code,
      sessionCode: time.code,
      page: 1,
      size: productSize,
      categoryCode: [],
    };
    setLoadingLoadMore(true);
    fetchCampaignProducts(props)
      .then((res) => {
        setLoadingLoadMore(false);
        setDataCampaignProducts(res.data.items);
        setTotalProduct(res.data.total_data);
      })
      .finally(() => setLoadingLoadMore(false));
  };

  /**
   * set selected category on category clicked
   */
  const onClickCategory = (category: any) => {
    if (category) {
      if (selectedCategory.includes(category.code)) {
        const index = selectedCategory.findIndex((c) => c == category.code);
        const updated = [...selectedCategory];
        updated.splice(index, 1);
        setSelectedCategory(updated);
        onChangeCategory(updated);
      } else {
        const updated = [...selectedCategory, category.code];
        setSelectedCategory(updated);
        onChangeCategory(updated);
      }
    } else {
      setSelectedCategory([]);
      onChangeCategory([]);
    }
  };

  /**
   * fetch api get product with filter category
   */
  const onChangeCategory = (categories: any) => {
    setDataCampaignProducts([]);
    setLoadingLoadMore(true);
    const props = {
      campaignCode: dataCampaign?.data.code,
      sessionCode: dataCampaign?.data.sessions[0].code,
      page: 1,
      size: productSize,
      categoryCode: categories,
    };
    fetchCampaignProducts(props).then((res) => {
      setLoadingLoadMore(false);
      setProductPage(1);
      setDataCampaignProducts(res.data.items);
      setTotalProduct(res.data.total_data);
    });
  };

  /**
   * fetch api product on next page and concat it when load more button clicked
   */
  const loadMoreProducts = () => {
    setLoadingLoadMore(true);
    const props = {
      campaignCode: dataCampaign?.data.code,
      sessionCode: dataCampaign?.data.sessions[0].code,
      page: productPage + 1,
      size: productSize,
      categoryCode: [],
    };
    fetchCampaignProducts(props).then((res) => {
      if (res.data.items) {
        setProductPage(productPage + 1);
        const more = dataCampaignProducts.concat(res.data.items);
        setDataCampaignProducts(more);
      }
      setLoadingLoadMore(false);
    });
  };

  /**
   * Give some miliseconds to hide and display login info
   * to dismiss hydration error
   */
  const [isLoaded, setIsLoaded] = useState(false);
  setTimeout(() => {
    setIsLoaded(true);
  }, 100);
  return (
    <div>
      <Header isLoaded={isLoaded} />

      {statusCampaign === 'loading' ? (
        <>
          <Loading />
        </>
      ) : dataActiveCampaign?.data ? (
        <>
          <FlashSalePage
            dataCampaign={dataActiveCampaign}
            categoryList={categoryList}
            selectedTime={selectedTime}
            selectedCategory={selectedCategory}
            dataCampaignProducts={dataCampaignProducts}
            totalProduct={totalProduct}
            onChangeTabs={changeTabs}
            onClickCategory={onClickCategory}
            loadMoreProducts={() => loadMoreProducts()}
            loadingLoadMore={loadingLoadMore}
            isStarted={isStarted}
          />
        </>
      ) : (
        <>
          <div className="my-10 text-center">Tidak ada flash sale</div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default FlashSale;
