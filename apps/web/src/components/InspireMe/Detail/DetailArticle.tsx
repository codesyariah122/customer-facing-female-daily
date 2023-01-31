import Image from 'next/image';
import Breadcrumbs from '../../pages/Breadcrumbs';
import CardInspire from '../CardInspire';
import Toolbar from '../Toolbar';
import Content from './Content';
import OtherArticles from './OtherArticles';
import Products from './Products';

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
      <Content />
      <div className="border-flash-white my-6 border-y-4"></div>
      <Products title="In this article" url={`/`} data={[...Array(10)]} />
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
