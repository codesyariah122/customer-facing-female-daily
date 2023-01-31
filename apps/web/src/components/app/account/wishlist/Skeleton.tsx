import Account from '@components/app/commons/skeletons/Account';
import WishlistPage from '@components/app/commons/skeletons/WishlistPage';
/**
 * wishlist skeleton page
 * @author  Ahmad Jourdan <ahmad.jourdan@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */

const Skeleton = (): React.ReactElement => {
  return (
    <main className="container mx-auto mt-8 xl:max-w-screen-xl">
      <div className="flex">
        <Account />
        <WishlistPage />
      </div>
    </main>
  );
};

export default Skeleton;
