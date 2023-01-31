import Image from 'next/image';
import IcoPaymentSuccessfully from '@assets/images/ico-payment-successful.svg';
import IcoAlloBankPayment from '@assets/images/ico-allobank-payment.svg';
import { currencyFormat } from '@utils/commons/currencyHelper';
import { UtcToLocalTime } from '@utils/commons/dateTimeHelper';
import Link from 'next/link';
import { _DEFAULT_NO_IMAGE_ } from '@constants/staticAssets';

export const PaymentSuccess = ({ dataPayment }: { dataPayment: any }) => {
  return (
    <main className="container mx-auto py-5 xl:max-w-[586px]">
      <div className="flex flex-col justify-center rounded-2xl py-6 px-16 shadow">
        <h1 className="mx-auto w-full max-w-[320px] text-center text-2xl font-semibold tracking-wider">
          Your order will be prepared immediately!
        </h1>
        <Image
          src={IcoPaymentSuccessfully}
          width={193}
          height={193}
          alt="payment success"
          className="mx-auto mt-12 h-[193px] w-[193px]"
        />
        <div className="mt-7 text-center">
          <h2 className="text-success-dark text-2xl font-semibold tracking-wider">
            Payment Successful
          </h2>
          <time className="mt-2">
            {UtcToLocalTime(dataPayment.payment_date)}
          </time>
          <div className="border-gray-light mt-4 border-t border-b py-4">
            <div className="tracking-wider">Total Payment</div>
            <div className="mt-1.5 text-2xl font-semibold tracking-wider">
              {currencyFormat(dataPayment.total_amount)}
            </div>
          </div>
          <div className="mt-6 tracking-wider">Payment Method</div>
          <div className="mt-1.5">
            <Image
              src={dataPayment.payment_logo_url || _DEFAULT_NO_IMAGE_}
              width={47}
              height={42}
              alt="payment success"
              className="mx-auto max-h-[42px] max-w-[47px]"
            />
            <div className="mt-2 text-sm font-semibold tracking-wider">
              {dataPayment.payment_method_name}
            </div>
          </div>
          <div className="border-gray-light mt-5 border-t py-4">
            <div className="tracking-wider">Reference Number</div>
            <p className="mt-3 text-lg font-semibold tracking-wider">
              {dataPayment.reference_number}
            </p>
          </div>
          <div className="mt-6 flex justify-center space-x-10">
            <Link
              href="/"
              className="border-platinum border-pink-primary text-pink-primary flex w-40 cursor-pointer justify-center rounded-sm border py-3 text-sm font-semibold tracking-wide"
            >
              Back to Home
            </Link>
            <Link
              href="/order"
              className="bg-pink-primary flex w-40 cursor-pointer justify-center rounded-sm py-3 text-sm font-semibold tracking-wide text-white"
            >
              Go to My Order
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
