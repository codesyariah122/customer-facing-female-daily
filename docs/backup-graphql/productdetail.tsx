import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import HeaderMobile from '@components/Header/HeaderMobile';
import ProductDetail from '@components/pages/ProductDetail/ProductDetail';

const Product = () => {
  return (
    <div>
      <div className="sm:block xl:hidden">
        <HeaderMobile />
      </div>
      <div className="hidden xl:block">
        <Header />
      </div>
      <ProductDetail
        name={''}
        code={''}
        isPromo={false}
        finalPrice={0}
        mainImage={{
          kind: '',
          filename: '',
          url: '',
        }}
        brand={{
          name: '',
          code: '',
          url: '',
        }}
        stock={0}
        merchant={undefined}
        description={''}
        sepecification={[]}
        selectOption={() => {}}
        qty={0}
        handlerUpdateQty={() => {}}
        handleAddToCart={() => {}}
      />
      <Footer />
    </div>
  );
};

export default Product;
