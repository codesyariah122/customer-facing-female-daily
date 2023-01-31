import Confirmed2Address from './Confirmed2Address';
import MultipleAddress from './MultipleAddress';
import SingleAddress from './SingleAddress';

const Checkout = () => {
  return (
    <main className="bg-ghost-white h-full py-[50px]">
      <div className="justify-space-between container mx-auto xl:max-w-screen-xl">
        {/* For Single Address */}
        <SingleAddress />
        {/* For Multiple Address */}
        <MultipleAddress />
        {/* For Confirmed Multiple Address */}
        <Confirmed2Address />
      </div>
    </main>
  );
};

export default Checkout;
