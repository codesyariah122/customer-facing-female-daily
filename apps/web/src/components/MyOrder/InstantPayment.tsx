import Barcode from '../../assets/images/barcode.svg';
import Image from 'next/image';

type PaymentData = {
  barcodeImage: any;
  downloadQris: Function;
  handlePayNow: Function;
};

const InstantPayment = ({
  barcodeImage,
  downloadQris,
  handlePayNow,
}: PaymentData) => {
  return (
    <div>
      <div className="flex justify-between border-b p-4 ">
        <div className="barcode-qris">
          {barcodeImage}
          {/* <Image
            src={barcodeImage}
            width={130}
            height={130}
            className="mx-auto py-4"
            alt="barcode"
          /> */}
          <div
            onClick={() => downloadQris()}
            className="h-[47px] w-[147px] cursor-pointer rounded border p-2 text-center text-sm font-semibold leading-7 tracking-wide"
          >
            Download
          </div>
        </div>
        <div className="py-4">
          <div
            onClick={() => handlePayNow()}
            className="bg-pink-primary h-[50px] w-[264px] cursor-pointer rounded p-2 text-center text-sm font-semibold leading-9 tracking-wide text-white"
          >
            Pay Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstantPayment;
