import { useState } from 'react';
import ModalProductVariant from '../ProductList/ModalProductVariant';
import BannerHomepage from './Banner';
import Banner2 from './Banner2';
import Blog from './Blog';
import Coupon from './Coupon';
import Flashsale from './Flashsale';
import Highlight from './Highlight';
import PopularBrands from './PopularBrands';
import ProductListHighlight from './ProductListHighlight';
import ProductMatches from './ProductMatches';
import ProductRecommedation from './ProductRecommendation';
import PromoNotif from './PromoNotif';
import ShopByCategories from './ShopByCategories';

const Homepage = () => {
  const [openModal, setOpenModal] = useState<boolean | undefined>(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  const openModalFunc = () => {
    setOpenModal(true);
  };
  return (
    <main className="mt-5">
      <PromoNotif />
      <BannerHomepage />
      <ShopByCategories />
      <Flashsale />
      <Highlight />
      <ProductRecommedation
        openModalFunc={openModalFunc}
        title="What’s New"
        url={`/`}
        data={[...Array(10)]}
      />
      <Banner2 />
      <ProductMatches openModalFunc={openModalFunc} />
      <PopularBrands />
      <Coupon />
      <Blog />
      <ProductListHighlight openModalFunc={openModalFunc} />
      <ModalProductVariant
        isModalOpen={openModal}
        closeModal={closeModal}
        data={undefined}
      />
    </main>
  );
};

export default Homepage;
