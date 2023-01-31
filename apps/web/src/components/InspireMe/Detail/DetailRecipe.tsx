import Image from 'next/image';
import Breadcrumbs from '../../pages/Breadcrumbs';
import CardInspire from '../CardInspire';
import Toolbar from '../Toolbar';
import ContentRecipe from './ContentRecipe';
import OtherArticles from './OtherArticles';
import ShopRecipe from './ShopRecipe';

const breadcrumbs = [
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

const DetailArticle = () => {
  return (
    <main className="mt-5">
      <Breadcrumbs dataBreadcrumbs={breadcrumbs} />
      <ContentRecipe />
      <div className="border-flash-white my-6 border-y-4"></div>
      <ShopRecipe />
      <div className="border-flash-white my-6 border-y-4"></div>
      <OtherArticles
        title="A lot of people read this"
        url={`/`}
        data={[...Array(10)]}
      />
    </main>
  );
};
export default DetailArticle;
