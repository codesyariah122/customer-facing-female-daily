import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, useEffect, Key } from 'react';
import { CustomerAddToCart, GuestAddToCart } from '@utils/commons/cartHelper';
import { GetCustomerUUID, GetTokenJwt } from '@utils/commons/customerHelper';
interface IImages {
  kind: string;
  filename: string;
  url: string;
}

interface IAttribute {
  kind: string;
  name: string;
  value: string;
  variance: boolean;
}

interface IChildren {
  attributes: Attribute[];
  code: string;
  name: string;
  description: string;
  weight: number;
  favorites: number;
  stock: number;
  merchantSku: string;
  categoryLv1: string;
  categoryLv2: string;
  categoryLv3: string;
  categoryLv4: string;
  categoryLv5: string;
  medias: Media[];
}

interface Attribute {
  kind: string;
  name: string;
  value: string;
  variance: boolean;
}

interface Media {
  url: string;
}

const ModalProductVariant = ({
  isModalOpen,
  closeModal,
  data,
}: {
  isModalOpen: boolean | undefined;
  closeModal: () => void;
  data: any;
}) => {
  const [discount, setDiscount] = useState<number>(0);
  const [imgs, setImgs] = useState<IImages[]>([]);
  const [selectedImg, setSelectedImg] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [variants, setVariants] = useState<any[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<IChildren>({
    attributes: [],
    code: '',
    name: '',
    description: '',
    weight: 0,
    favorites: 0,
    stock: 0,
    merchantSku: '',
    categoryLv1: '',
    categoryLv2: '',
    categoryLv3: '',
    categoryLv4: '',
    categoryLv5: '',
    medias: [],
  });
  const [mainIndex, setMainIndex] = useState<number>(0);
  const [isCounterError, setIsCounterError] = useState<boolean>(false);
  const [hasClickedVariance, setHasClickedVariance] = useState<boolean>(false);
  const [isFirstMounted, setIsMounted] = useState<boolean>(true);
  const [customerGuestId, setCustomerGuestId] = useState<any>({});

  useEffect(() => {
    setCustomerGuestId(GetCustomerUUID());
  }, []);

  useEffect(() => {
    let variances: any[] = [];
    if (data?.flashSale) {
      setDiscount(
        (data?.finalPrice.setoko - data?.finalPrice.promo) /
          data?.finalPrice.setoko
      );
    }
    setImgs(data?.medias ?? []);
    // console.log('popup-data: ', data)

    if (data?.attributes) {
      for (const attr of data?.attributes) {
        for (const [i, child] of data?.children.entries()) {
          if (
            child.attributes.some(
              (attrChild: IAttribute) => attrChild.value === attr.value
            )
          ) {
            variances.push({
              ...attr,
              value: JSON.parse(attr.value),
              childrenInformation: {
                index: i,
              },
              currentUserSelected: {},
            });
          }
        }
      }

      // console.log('variants', variances)
      setVariants(variances);
      setSelectedProduct(data);
    }
  }, [data]);

  useEffect(() => {
    setSelectedImg(0);
  }, [isModalOpen]);

  const setClickedVariant = (indexVarian: any, child: any) => {
    // console.log({ indexVarian, child})

    let found = {
      indexChildren: 0,
      indexAttributres: 0,
      indexValue: 0,
    };

    for (let i = 0; i < data.children.length; i++) {
      let toContinueI = true;
      let toContinueJ = true;
      let toContinueK = true;
      for (let j = 0; j < data.children[i].attributes.length; j++) {
        const parsedValue = JSON.parse(data.children[i].attributes[j].value);
        for (let k = 0; k < parsedValue.length; k++) {
          if (parsedValue[k].id === child.id) {
            // console.log('found', i, j, k)
            found = {
              indexChildren: i,
              indexAttributres: j,
              indexValue: k,
            };
            toContinueK = false;
            break;
          }
        }
        if (!toContinueJ) {
          toContinueI = false;
          break;
        }
      }
      if (!toContinueI) break;
    }

    setMainIndex(found.indexChildren);

    let updatedVariants = [...variants];
    updatedVariants[indexVarian].currentUserSelected = child;
    updatedVariants[indexVarian].found = found;
    setVariants(updatedVariants);

    const foundVariances = variants.filter((varian) => varian.found);

    if (foundVariances.length > 0) {
      const indexFound = foundVariances.map((val) => val.found);
      // console.log('index-found: ', indexFound)
    }
  };

  const setCounter = (num: number) => {
    const foundVariances = variants.filter((varian) => varian.found);

    if (foundVariances.length === variants.length) {
      setIsCounterError(false);
      if (num <= 0) num = 0;
      if (num > data?.stock) num = data?.stock;
      const counter = count + num;
      setCount(counter);
    } else {
      setIsCounterError(true);
    }
  };

  useEffect(() => {
    let ableToClickVarians = [];
    const anyVarianClicked =
      variants.filter((varian) => varian.found).length > 0;
    setHasClickedVariance(anyVarianClicked);
    if (anyVarianClicked) {
      setIsMounted(false);

      ableToClickVarians = variants.filter(
        (variant) => variant.childrenInformation.index === mainIndex
      );
      setSelectedProduct(
        data?.children?.[
          ableToClickVarians?.[0]?.childrenInformation?.index ?? 0
        ]
      );
    } else {
      setSelectedProduct(data);
      ableToClickVarians = [...variants];
    }
    // console.log('ab-tc-var: ', ableToClickVarians)
  }, [variants, mainIndex, data]);

  const addToCart = () => {
    if (!isCounterError) {
      const token = GetTokenJwt();
      if (token !== undefined) {
        CustomerAddToCart(selectedProduct.code, count);
      } else {
        GuestAddToCart(customerGuestId, selectedProduct.code, count);
      }
    }
  };

  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-[550px] transform overflow-hidden rounded-2xl bg-white p-5 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="relative pt-3 text-center text-lg font-semibold"
                >
                  <span>ADD TO CART</span>
                  <i
                    className="ico-close-circle absolute top-0 right-0 cursor-pointer"
                    onClick={closeModal}
                  />
                </Dialog.Title>
                <div className="mt-9">
                  <div className="border-gray-30 flex border-b pb-4">
                    <div>
                      <img
                        src={selectedProduct?.medias?.[0]?.url}
                        className="w-[77px]"
                        alt=""
                      />
                    </div>
                    <div className="pl-5">
                      <div className="text-sm font-semibold tracking-wider">
                        {data?.name}
                      </div>
                      <div className="mt-2">
                        <div className="flex items-center space-x-2.5">
                          {data?.flashSale ? (
                            <div>
                              <span className="bg-yellow-counter rounded py-1 px-2 text-xs font-semibold">
                                {discount}%
                              </span>
                              <span className="text-black-light text-sm tracking-wider line-through">
                                Rp
                                {new Intl.NumberFormat('id-ID').format(
                                  data?.finalPrice?.setoko ?? 0
                                )}
                              </span>
                            </div>
                          ) : null}
                        </div>
                        <div className="mt-2 text-sm font-semibold">
                          Rp
                          {new Intl.NumberFormat('id-ID').format(
                            data?.finalPrice?.promo ?? 0
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-gray-30 mt-1.5 flex flex-col space-y-5 border-b pb-6">
                    <div className="font-semibold tracking-wider">
                      Stock:{' '}
                      <span className="text-pink-primary font-normal tracking-wider">
                        {data?.stock}
                      </span>
                    </div>
                    {/* <div>
                      <div className="font-semibold tracking-wider">
                        Color:{' '}
                        <span className="text-black-olive font-normal tracking-wider">
                          NC15
                        </span>
                      </div>
                      <div className="mt-1 flex space-x-3 ">
                        { imgs.map((image, index) => <div
                          key={index}
                          onClick={()=> setSelectedImg(index + 1)}
                          className={`${(index + 1 === selectedImg) ? 'border-teal-primary' : ''} cursor-pointer rounded border p-1 shadow-[0px_2px_4px_rgba(0,0,0,0.1)]`}>
                          <img
                            src={image.url}
                            className="w-[60px] h-[56px]"
                            alt={image.filename} />
                        </div>)}
                      </div>
                    </div> */}
                    <div>
                      {variants.map((variant, index) => {
                        return (hasClickedVariance &&
                          variant.childrenInformation.index === mainIndex) ||
                          !hasClickedVariance ? (
                          <div key={index}>
                            <div className="font-semibold tracking-wider">
                              {`${variant.name}: `}
                              <span className="text-black-olive font-normal tracking-wider">
                                {variant.currentUserSelected.name}
                              </span>
                            </div>
                            <div className="mt-1 mb-4 flex space-x-2.5">
                              {variant.value.map(
                                (
                                  child: any,
                                  indexChild: Key | null | undefined
                                ) => {
                                  return (
                                    <div
                                      key={indexChild}
                                      className={
                                        child.id ===
                                        variant.currentUserSelected.id
                                          ? 'border-teal-primary cursor-pointer rounded border py-1 px-2 text-sm shadow-[0px_2px_2px_rgba(0,0,0,0.08)]'
                                          : 'border-grey-30 cursor-pointer rounded border py-1 px-2 text-sm shadow-[0px_2px_2px_rgba(0,0,0,0.08)]'
                                      }
                                      onClick={() =>
                                        setClickedVariant(index, child)
                                      }
                                    >
                                      {child.name}
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          </div>
                        ) : null;
                      })}
                      {/* <div className="mt-1 flex space-x-2.5">
                        <div className="border-teal-primary cursor-pointer rounded border py-1 px-2 text-sm shadow-[0px_2px_2px_rgba(0,0,0,0.08)]">
                          30 ml
                        </div>
                        <div className="border-grey-30 bg-flash-white cursor-default rounded border py-1 px-2 text-sm shadow-[0px_2px_2px_rgba(0,0,0,0.08)]">
                          15 ml
                        </div>
                        <div className="border-grey-30 cursor-pointer rounded border py-1 px-2 text-sm shadow-[0px_2px_2px_rgba(0,0,0,0.08)]">
                          10 ml
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div className="mt-5 flex flex-col justify-center space-y-2">
                    <div className="flex justify-center">
                      <div
                        className="text-gray-30 border-gray-30 flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded border text-[30px] font-semibold shadow"
                        onClick={() => setCounter(-1)}
                      >
                        -
                      </div>
                      <div className="text-black-olive flex h-[44px] w-[44px] items-center justify-center font-semibold">
                        {count}
                      </div>
                      <div
                        className="bg-pink-primary flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded text-[30px] font-semibold text-white shadow"
                        onClick={() => setCounter(1)}
                      >
                        +
                      </div>
                    </div>
                    <div
                      className={`text-venetian-red text-center text-xs font-medium`}
                    >
                      {isCounterError
                        ? 'Don’t forget to pick the variants.'
                        : ''}
                    </div>
                    <div
                      className="flex justify-center"
                      onClick={() => addToCart()}
                    >
                      <span className="bg-pink-primary flex w-[264px] cursor-pointer justify-center rounded border px-8 py-3 text-center font-semibold tracking-wider text-white">
                        + Add to Cart
                      </span>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalProductVariant;
