import Image from 'next/image';
import IcoPaymentSuccessfully from '@assets/images/ico-payment-successful.svg';
import IcoAlloBankPayment from '@assets/images/ico-allobank-payment.svg';
const PaymentSuccess = () => {
  return (
    <main className="container mx-auto py-5 xl:max-w-[586px]">
      <div className="radius-2xl flex flex-col justify-center py-6 px-16 shadow">
        <h1 className="mx-auto w-full max-w-[320px] text-center text-2xl font-semibold tracking-wider">
          Mission accomplished. Thank you for shopping!
        </h1>
        <Image
          src={IcoPaymentSuccessfully}
          width={193}
          height={193}
          alt="payment success"
          className="mx-auto mt-12"
        />
        <div className="mt-7 text-center">
          <h2 className="text-success-dark text-2xl font-semibold tracking-wider">
            Payment Successful
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

export default PaymentSuccess;
