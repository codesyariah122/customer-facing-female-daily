import { useState } from 'react';
import Breadcrumbs from '@components/pages/Breadcrumbs';
import BannerHomepage from '@components/Homepage/Banner';
import Flashsale from '@components/Homepage/Flashsale';
import ShopByCategories from '@components/Homepage/ShopByCategories';
import Coupon from './Coupon';
import Offers from './Offers';
import PopularBrands from './PopularBrands';
import ProductListHighlight from './ProductListHighlight';
import ProductRecommedation from '@components/Homepage/ProductRecommendation';
import Trending from './Trending';
import ModalProductVariant from '@components/ProductList/ModalProductVariant';

const data = [
  {
    id: 1,
    name: 'Home',
    url: '/',
  },
  {
    id: 2,
    name: 'Face',
    url: '/',
  },
  {
    id: 3,
    name: 'Foundation',
    url: '',
  },
];

const dataProduct = {
  title: 'What’s New',
  url: '/',
  data: [
    {
      id: 1,
      name: 'Maybelline Superstay Matte',
      url: '/',
    },
    {
      id: 2,
      name: 'test',
      url: '/',
    },
    {
      id: 3,
      name: 'test',
      url: '/',
    },
    {
      id: 4,
      name: 'test',
      url: '/',
    },
    {
      id: 5,
      name: 'test',
      url: '/',
    },
    {
      id: 6,
      name: 'test',
      url: '/',
    },
    {
      id: 7,
      name: 'test',
      url: '/',
    },
  ],
};

const CategoryPage = () => {
  const [openModal, setOpenModal] = useState<boolean | undefined>(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  const openModalFunc = () => {
    setOpenModal(true);
  };
  return (
    <main className="mt-5">
      <Breadcrumbs dataBreadcrumbs={data} />
      <BannerHomepage />
      <ShopByCategories title={`Skincare`} isLayoutCategory={true} />
      <Flashsale />
      <ProductRecommedation
        openModalFunc={openModalFunc}
        title="What’s New"
        url={`/`}
        data={[...Array(10)]}
      />
      <Coupon />
      <Offers />
      <Trending />
      <PopularBrands />
      <ProductRecommedation
        title="Recommended for You"
        url={`/`}
        data={[...Array(10)]}
        openModalFunc={openModalFunc}
      />
      <ProductListHighlight />
      <ModalProductVariant
        isModalOpen={openModal}
        closeModal={closeModal}
        data={undefined}
      />
    </main>
  );
};

export default CategoryPage;
