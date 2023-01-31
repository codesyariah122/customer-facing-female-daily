import BannerHomepage from '../pages/CategoryPage/Banner';
import List from './List';
import Side from './Side';

const StorePage = () => {
  return (
    <main>
      <BannerHomepage />
      <div className="container mx-auto xl:max-w-screen-xl">
        <div className="mt-7 flex">
          <Side />
          <section className="flex-1 pl-5">
            <List />
          </section>
        </div>
      </div>
    </main>
  );
};

export default StorePage;
