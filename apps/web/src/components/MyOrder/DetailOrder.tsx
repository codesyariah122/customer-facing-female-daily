import Newsticker from '../Checkout/Newsticker';
import PartnerInfo from '../Checkout/PartnerInfo';
import BankMega from './BankMega';
import BcaVA from './BcaVA';
import CTADetail from './CTADetail';
import DetailTrack from './DetailTrack';
import InstantPayment from './InstantPayment';
import PaymentDetails from './PaymentDetails';
import ProductOrder from './ProductOrder';
import SubState from './SubState';
import Link from 'next/link';
import FailPageBone from '@components/Global/FailPageBone';
import { UtcToLocalTime } from '@utils/commons/dateTimeHelper';
import ImageSomethingWrong from '@assets/images/something-wrong.svg';
import { useQRCode } from 'next-qrcode';
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import { useCallback } from 'react';
import { AddToCart } from '@utils/commons/cartHelper';
import { notify, Toast } from '@components/Global/Toast';

/**
 * TODO:
 * QR CODE IS REQUIRED
 * PRINT INVOICE STILL DUMMY
 * SUBMIT REVIEW
 */

/**
 * Detail Order main page
 * @param props
 * @author Uniq<Uniq.Fadilah@ctcorpdigital.com>

 */
const DetailOrder = (props: any) => {
  const { Image } = useQRCode();

  const {
    order_id = '',
    destination,
    payment_method_name,
    courier,
    order_state,
    order_state_sub,
    reference_number,
    order_date,
    payment_expiration_date,
    payment_method,
    payment_va_number,
    total_amount,
    payment_reference_url,
    products = [],
    amount,
    shipping_fee,
    insurance_fee,
    use_insurance,
    free_shipping_amount,
    discount_amount,
    allo_point_earned,
    errors = [],
    merchant,
    warehouse,
    shipping_code,
    customer_note,
    origin,
  } = props.data;

  /**
   * handle pay now redirect to PG page
   * @return {void}
   */
  const handlePayNow = useCallback(() => {
    window.location.href = payment_reference_url;
  }, [payment_reference_url]);

  const handleOrderItems = (args: any) => {
    if (Array.isArray(args)) {
      args.map((product: any) => {
        AddToCart(product.product.code, product.quantity).then((res: any) => {
          if ([200, 204].includes(res.status)) {
            notify({ message: 'Product has been added to shopping cart!' });
          }
        });
      });
    } else {
      AddToCart(args.product.code, args.quantity).then((res: any) => {
        if ([200, 204].includes(res.status)) {
          notify({ message: 'Product has been added to shopping cart!' });
        }
      });
    }
  };
  let setTypePaymentMethod: string = '';
  const not_auth = errors.find((x: any) => x?.code === 'E100');
  if (not_auth) {
    console.log('UNAUTHORIZED');
  }
  if (errors.length > 0) {
    return (
      <FailPageBone
        contentWidth={488}
        imageAsset={ImageSomethingWrong}
        title="Oops! Order tidak ditemukan"
        description={[]}
      />
    );
  }
  if (payment_method) {
    const type = payment_method.split('_');
    setTypePaymentMethod = type.pop();
  }

  /**
   * get Qris barcode image
   * @returns {HTMLElement}
   */
  const getQris = () => {
    return (
      <Image
        text={payment_va_number}
        options={{
          type: 'image/jpeg',
          quality: 0.9,
          level: 'M',
          margin: 3,
          scale: 4,
          width: 130,
        }}
      />
    );
  };

  /**
   * handle Qris barcode image download
   * @returns {void}
   */
  const handleDownloadQris = async () => {
    const barcodeImg = document.querySelector<HTMLElement>('.barcode-qris img');
    if (!barcodeImg) return;

    const canvas = await html2canvas(barcodeImg);
    const dataURL = canvas.toDataURL('image/png');
    downloadjs(dataURL, 'barcode-qris.png', 'image/png');
  };

  return (
    <>
      {false && (
        <Newsticker caption="There is adjustment on your product. Please check your ticket" />
      )}
      <Toast />
      <div className="my-4 rounded border">
        {order_state && order_state.code === 'NEED_PAYMENT' && (
          <div>
            {setTypePaymentMethod === 'cc' && (
              <BcaVA
                payment_reference_url={payment_reference_url}
                targetDate={new Date(payment_expiration_date)}
              />
            )}
            {setTypePaymentMethod === 'va' && (
              <BankMega
                total_payment={parseInt(total_amount)}
                va_number={payment_va_number}
                payment_method_name={payment_method_name}
              />
            )}
            {payment_method !== 'va' && (
              <div className="alig-center  flex h-[56px] items-center bg-red-100 px-4">
                <i className="ico-information"></i>
                <span className="mx-2 text-red-500 ">
                  Your payment is due by{' '}
                  {UtcToLocalTime(payment_expiration_date)}
                </span>
              </div>
            )}
            {setTypePaymentMethod === 'qris' && (
              <InstantPayment
                barcodeImage={getQris()}
                downloadQris={handleDownloadQris}
                handlePayNow={handlePayNow}
              />
            )}
          </div>
        )}
        <div className=" flex justify-between rounded p-4">
          {/* if state waiting for payment*/}
          <div className="font-medium">
            <div className="mb-2 grid font-semibold">
              <span className=" text-xs  text-gray-500">Status</span>
              <span className="text-sm">{order_state?.en}</span>
            </div>
            <SubState caption={order_state_sub?.en} status={order_state} />
            <div className="grid">
              <span className="mt-4 text-xs text-gray-500">
                Reference Number
              </span>
              <div className="text-pink-primary flex text-sm">
                <span>{reference_number}</span>
                <span className="mx-1 text-black">| </span>
                <Link href="/invoice-order">
                  <span>Print Invoice</span>
                </Link>
              </div>
              <div className="mt-4 grid">
                <span className="mt-4 text-xs text-gray-500">Order Date</span>
                <span>{UtcToLocalTime(order_date)}</span>
              </div>
            </div>
          </div>
          {order_state?.code !== 'NEED_PAYMENT' && (
            <CTADetail
              Onreorder={() => handleOrderItems(products)}
              order_state_sub={order_state_sub}
              order_state={order_state}
              courier={courier}
              shipping_code={shipping_code}
              origin={origin}
              destination={destination}
              order_id={order_id}
              reference_number={reference_number}
            />
          )}
        </div>

        {order_state?.code !== 'NEED_PAYMENT' && (
          <DetailTrack
            order_state={order_state}
            order_state_sub={order_state_sub}
            shipping_code={shipping_code}
            reference_number={reference_number}
            order_id={order_id}
          />
        )}

        <div className="border-t-8 p-4">
          <h2 className="text-lg font-semibold">Your Order</h2>
          <p className="my-3 text-xs text-gray-500">Order ID: {order_id}</p>
          <div className="text-xs">
            {merchant && (
              <PartnerInfo merchant={merchant} warehouse={warehouse} />
            )}
          </div>
          <div className="flex flex-col  divide-y">
            {products.length > 0 &&
              products.map((product: any, i: number) => (
                <ProductOrder
                  order_state_sub={order_state_sub}
                  key={i}
                  customer_note={customer_note}
                  product={product}
                  state={order_state}
                  reOrder={() => {
                    handleOrderItems(product);
                  }}
                />
              ))}
          </div>

          {/* reorder conditions */}
          {/* <Reorder /> */}
        </div>
        <div className=" border-b-8 border-t-8 border-zinc-100 p-4 leading-6	">
          <h2 className="font-semibold">Delivery Details</h2>
          <div>
            <div className="mt-4 text-sm font-semibold text-gray-600">
              Delivery Method
            </div>
            <div>
              {courier.logistic_type}{' '}
              {courier.min_day > 0 || courier.min_day > 0 ? (
                <span>
                  ( {courier.min_day} - {courier.max_day} Days )
                </span>
              ) : (
                <span>( Same Days )</span>
              )}
            </div>
          </div>
          <div className="mt-4">
            <div className="text-sm font-semibold text-gray-600">Recipient</div>
            <div>{destination.recipient}</div>
          </div>
          <div className="mt-4">
            <div className="text-sm font-semibold text-gray-600">Address</div>
            <p className="text-justify leading-snug">
              {destination.address} {destination.phone}
            </p>
          </div>
        </div>
        <PaymentDetails
          total_amount={total_amount}
          amount={amount}
          items_total={products.length}
          payment_name={payment_method_name}
          shipping_fee={shipping_fee}
          insurance_fee={insurance_fee}
          use_insurance={use_insurance}
          free_shipping_amount={free_shipping_amount}
          discount_amount={discount_amount}
          allo_point_earned={allo_point_earned}
        />
        <div></div>
      </div>
    </>
  );
};

export default DetailOrder;
