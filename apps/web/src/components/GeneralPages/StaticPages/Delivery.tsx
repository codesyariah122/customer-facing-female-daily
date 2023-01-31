/* eslint-disable react/no-unescaped-entities */
import GeneralPages from '../GeneralPages';
import { Disclosure } from '@headlessui/react';

const StaticPages = {
  data: [
    {
      id: 1,
      title: 'Shop with peace of mind like nowhere else!',
      content:
        'At FD Studio, we guarantee all orders to arrive safely and securely at your doorstep.',
    },
  ],
};

const Delivery = () => {
  return (
    <div className="container mx-auto xl:max-w-screen-xl">
      <GeneralPages data={StaticPages.data} />
      <div className="mx-auto w-9/12">
        <Disclosure>
          <Disclosure.Button className="bg-pink-primary mt-4 w-full rounded py-2 px-4 text-left font-semibold text-white ">
            Track my order
          </Disclosure.Button>
          <Disclosure.Panel className="w-full border-2 border-t-0 border-solid border-zinc-300 p-8 text-sm text-black text-black">
            <p>
              Tracking your order at FD Studio is as easy as 1, 2, 3!
              <ol className="ml-8 list-decimal">
                <li>Go to "My Order" </li>
                <li>
                  Open tab "In Delivery" to see all orders that are in delivery
                </li>
                <li>
                  Open an order you wish to track and click "Live Tracking"
                  button to get full access to discover where your order is at!
                </li>
              </ol>
            </p>
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure>
          <Disclosure.Button className="bg-pink-primary mt-4 w-full rounded py-2 px-4 text-left font-semibold text-white ">
            Delivery options and estimated shipping cost
          </Disclosure.Button>
          <Disclosure.Panel className="w-full border-2 border-t-0 border-solid border-zinc-300 p-8 text-sm text-black text-black">
            <p>
              FD Studio partners up with reputable delivery services to provide
              the best shipping and handling experience you could ask for.{' '}
              <br />
              Our delivery rate is rather competitive and calculated based on
              the delivery method, delivery distance, quantity, weight, product
              dimension or volume and delivery insurance of items in your cart.
              <br />
              To help you determine which delivery service to choose, we are
              giving you a helping hand with this following table:
              <br />
            </p>
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure>
          <Disclosure.Button className="bg-pink-primary mt-4 w-full rounded py-2 px-4 text-left font-semibold text-white ">
            Shipping cost
          </Disclosure.Button>
          <Disclosure.Panel className="w-full border-2 border-t-0 border-solid border-zinc-300 p-8 text-sm text-black text-black">
            <p>
              Delivery fee is calculated based on the selected delivery method,
              delivery distance, quantity, weight, product dimension or volume
              and delivery insurance. Delivery fee is set by FD Studio in
              accordance with delivery fee conditions and may change without
              prior notice. The total shipping & handling cost as well as the
              estimated date of delivery is listed on Order Summary.
              <br />
            </p>
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure>
          <Disclosure.Button className="bg-pink-primary mt-4 w-full rounded py-2 px-4 text-left font-semibold text-white ">
            How to select delivery method
          </Disclosure.Button>
          <Disclosure.Panel className="w-full border-2 border-t-0 border-solid border-zinc-300 p-8 text-sm text-black text-black">
            <ol className="list-decimal">
              <li>Proceed to checkout</li>
              <li>Select existing or add new delivery address</li>
              <li>
                Select your preferred delivery method and continue to Payment
              </li>
              <li>Select your preferred payment method and Checkout</li>
              <li>Sit back! We’ll notify you once your order is on its way!</li>
            </ol>
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure>
          <Disclosure.Button className="bg-pink-primary mt-4 w-full rounded py-2 px-4 text-left font-semibold text-white ">
            Delivery timescale
          </Disclosure.Button>
          <Disclosure.Panel className="w-full border-2 border-t-0 border-solid border-zinc-300 p-8 text-sm text-black text-black">
            <h2 className="font-semibold">
              How do you estimate your delivery arrivals?
            </h2>
            <br />
            <span className="font-semibold">Instant and Same-day delivery</span>
            <div>
              Your order will arrive on the same day* as your payment has been
              successfully verified. To enjoy this service, you must be:
              <ol className="ml-8 list-disc">
                <li>Proceed to checkout</li>
                <li>Select existing or add new delivery address</li>
                <li>
                  Select your preferred delivery method and continue to Payment
                </li>
                <li>Select your preferred payment method and Checkout</li>
                <li>
                  Sit back! We’ll notify you once your order is on its way!
                </li>
              </ol>
              <br />
              Please be noted that all Fresh products can only be delivered
              using Instant Delivery service.
              <br />
              <br />
            </div>
            <span className="font-semibold">Next-day delivery</span>
            <div>
              If you wish to receive your order on the next day, please ensure
              to complete your payment before 2PM so we can ensure your order is
              out for shipment on the next day. Please note that this service is
              valid only if the delivery address is within the coverage of our
              fulfillment location.
              <br />
              <br />
            </div>
            <span className="font-semibold">Regular delivery</span>
            <div>
              Delivery estimation may vary from 1-2 working days for
              Jabodetabek, and 3-12 working days for areas outside Jabodetabek,
              according to the delivery courier’s regulations and timescale. You
              can also get the estimated delivery date once you select the
              address and delivery method upon checkout.
              <br />
              <br />
            </div>
            <span className="font-semibold">Cargo</span>
            <div>
              This delivery service is available for products with estimated
              weight/volume min. 10kg. Please note that this service may take up
              to 25 working days, depending on your delivery location as they
              are delivered through the land and sea.
            </div>
          </Disclosure.Panel>
        </Disclosure>
      </div>
    </div>
  );
};

export default Delivery;
