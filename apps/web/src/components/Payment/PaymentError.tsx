import Image from 'next/image';
import IcoPaymentUnsuccessfully from '@assets/images/ico-payment-unsuccessful.svg';
import IcoAlloBankPayment from '@assets/images/ico-allobank-payment.svg';
const PaymentError = () => {
  return (
    <main className="container mx-auto py-5 xl:max-w-[586px]">
      <div className="radius-2xl flex flex-col justify-center py-6 px-16 shadow">
        <h1 className="mx-auto w-full max-w-[390px] text-center text-2xl font-semibold tracking-wider">
          Sorry, your order has been canceled.
          <br />
          <span className="text-venetian-red">
            You need to complete your payment before the due time
          </span>
        </h1>
        <Image
          src={IcoPaymentUnsuccessfully}
          width={193}
          height={193}
          alt="payment success"
          className="mx-auto mt-12"
        />
        <div className="mt-7 text-center">
          <h2 className="text-venetian-red text-2xl font-semibold tracking-wider">
            Payment Unsuccessful
          </h2>
          <time className="mt-1.5">2 Feb 2021, 10:35</time>
          <div className="border-gray-light mt-4 border-t border-b py-4">
            <div className="tracking-wider">Total Payment</div>
            <div className="mt-1.5 text-2xl font-semibold tracking-wider">
              Rp791.000
            </div>
          </div>
          <div className="mt-4 tracking-wider">Payment Method</div>
          <div className="mt-1.5">
            <Image
              src={IcoAlloBankPayment}
              width={47}
              height={42}
              alt="payment success"
              className="mx-auto"
            />
            <div className="mt-1.5 text-sm font-semibold tracking-wider">
              Allo Pay
            </div>
          </div>
          <div className="border-gray-light mt-5 border-t py-4">
            <div className="tracking-wider">Reference Number</div>
            <strong className="mt-1.5 text-lg font-semibold tracking-wider">
              001290954090001
            </strong>
          </div>
          <div className="mt-8 flex justify-center space-x-10">
            <div className="border-platinum border-pink-primary text-pink-primary flex w-40 cursor-pointer justify-center rounded-sm border py-3 text-sm font-semibold tracking-wide">
              Back to Home
            </div>
            <div className="bg-pink-primary flex w-40 cursor-pointer justify-center rounded-sm py-3 text-sm font-semibold tracking-wide text-white">
              Go to My Order
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PaymentError;
