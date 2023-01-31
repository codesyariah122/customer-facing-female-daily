import Account from '@components/app/commons/skeletons/Account';
import PaymentPage from '@components/app/commons/skeletons/PaymentPage';
/**
 * payment skeleton page
 * @author  Ahmad Jourdan <ahmad.jourdan@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */

const Skeleton = (): React.ReactElement => {
  return (
    <main className="container mx-auto mt-8 xl:max-w-screen-xl">
      <div className="flex">
        <Account />
        <PaymentPage />
      </div>
    </main>
  );
};

export default Skeleton;
