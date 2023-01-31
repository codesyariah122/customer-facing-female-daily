import Image from 'next/image';
import Breadcrumbs from '@components/pages/Breadcrumbs';
import Banner from './Banner';
import ProductList from './ProductList';
import EmptyCoupon from '@assets/images/ico-empty-product-promo.svg';
import { useGetDetailPromotionPageQuery } from '@graphql-ctcd/codegen';
import { graphqlRequestClient } from '@graphql-ctcd/graphql-client';

const data = [
  {
    id: 1,
    name: 'Home',
    url: '/',
  },
  {
    id: 2,
    name: 'Make Up',
    url: '/',
  },
  {
    id: 3,
    name: 'Face',
    url: '/',
  },
  {
    id: 4,
    name: 'Foundation',
    url: '',
  },
];

type TPromoDetail = {
  urlKey?: string | undefined;
};

const PromoDetail = ({ urlKey }: TPromoDetail): React.ReactElement => {
  const { data } = useGetDetailPromotionPageQuery(graphqlRequestClient, {
    tagCode: '',
    key: '',
    urlKey: urlKey,
    sort: 'LATEST_DEALS',
    categoryCode: '',
    option: '',
  });
  if (!data) {
    <h1>404 Page</h1>;
  }

  return (
    <main className="container mx-auto mt-8 xl:max-w-screen-xl">
      <Breadcrumbs dataBreadcrumbs={data} />
      <div>
        <Banner />
        <h2 className="text-22 mt-9 font-semibold">Products on promotion</h2>
        <div className="mt-4">
          <ProductList />
        </div>
        <div className="mt-16 flex justify-center">
          <div className="border-pink-primary text-pink-primary flex w-[148px] cursor-pointer justify-center rounded border py-3 text-sm font-semibold tracking-wide">
            <span>See More</span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-20">
          <Image
            src={EmptyCoupon}
            alt="empty coupon"
            width={254}
            height={254}
            className="mx-auto"
          />
          <p className="mt-8 text-center text-sm font-medium tracking-wider">
            Sorry, you don’t have any product
          </p>
        </div>
      </div>
    </main>
  );
};

export default PromoDetail;
