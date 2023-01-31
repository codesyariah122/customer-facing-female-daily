import GeneralPages from '../GeneralPages';
import { Disclosure } from '@headlessui/react';

const StaticPages = {
  data: [
    {
      id: 1,
      title: 'Shop risk-free at FD Studio!',
      content: '',
    },
  ],
};

const ReturnRefund = () => {
  return (
    <div className="container mx-auto xl:max-w-screen-xl">
      <GeneralPages data={StaticPages.data} />
      <div className="mx-auto w-9/12">
        <span>
          Before requesting for a return or refund, here’s what you need to
          know:
        </span>
        <Disclosure>
          <Disclosure.Button className="bg-pink-primary mt-4 w-full rounded py-2 px-4 text-left font-semibold text-white ">
            Return Policy
          </Disclosure.Button>
          <Disclosure.Panel className="w-full border-2 border-t-0 border-solid border-zinc-300 p-8 text-sm text-black text-black">
            <p>
              Our goal is to protect your satisfaction, and it includes granting
              your wishes to return or refund a product that you are unhappy
              with. However, there are certain conditions that you need to
              understand before you return a product:
            </p>
            <ul className="ml-8 list-disc">
              <li>
                You are not qualified to return a product if you have confirmed
                to complete your order by clicking “Order Completed” or if your
                order status has been updated automatically to “Order
                Completed”.
              </li>
              <li>
                Every return request must be followed with fair reasons. Any
                reason such as changing your mind is not acceptable.
              </li>
              <li>
                We do not accept any return requests without any proof of
                delivery, receipt or delivery note.
              </li>
              <li>
                All products must be returned in its original packaging and
                condition, complete with tag/label, and unused.
              </li>
              <li>
                FD Studio has the right to cancel any order with price issues.
              </li>
              <li>
                FD Studio has the right to investigate and escalate your request
                to other related parties such as suppliers or logistic partners
                (if necessary).
              </li>
              <li>
                As we investigate your issue, we will need a maximum of 10 (ten)
                working days to provide the best solution we can offer to you.{' '}
              </li>
              <li>
                FD Studio has the right to decline your return request if it
                does not follow our terms and conditions.
              </li>
              <li>
                Your return approvals will be notified by email or app
                notification. Please make sure to allow us to send you
                notifications via app notification or email so you can get
                notified anytime regarding your return status.
              </li>
            </ul>
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure>
          <Disclosure.Button className="bg-pink-primary mt-4 w-full rounded py-2 px-4 text-left font-semibold text-white ">
            Which products cannot be returned?
          </Disclosure.Button>
          <Disclosure.Panel className="w-full border-2 border-t-0 border-solid border-zinc-300 p-8 text-sm text-black text-black">
            <ul className="list-disc">
              <li>
                You are not qualified to return a product if you have confirmed
                to complete your order by clicking “Order received” on email or
                if your order status has been updated automatically to “Order
                received”.
              </li>
              <li>
                We do not accept return or refund requests on sale, groceries,
                fresh products, beauty, health, bathing and care, intimate
                (undergarments, swimwear, etc), personal care (electric razors,
                breast pumps, feeding equipment, etc) or digital products.{' '}
              </li>
              <li>
                Any product that contains personal data or
                manufacturer-registered (such as mobile phones, tablets,
                computers, etc), or any product that has been customized,
                personalised, or made to your specific measurements cannot be
                returned or refunded.
              </li>
              <li>
                Products that have been opened or unsealed (other than where
                necessary to inspect) will not be accepted for returns.
              </li>
              <li>Products without its original packaging or tags/labels</li>
              <li>
                Products or packagings that are returned in poor condition
              </li>
              <br />
            </ul>
            <div>
              You can also find the information if a product is not eligible for
              returns in the product description page, so make sure to check and
              read the terms and conditions before placing an order.
              <br />
              You can also find the information if a product is not eligible for
              returns in the product description page, so make sure to check and
              read the terms and conditions before placing an order.
            </div>
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure>
          <Disclosure.Button className="bg-pink-primary mt-4 w-full rounded py-2 px-4 text-left font-semibold text-white ">
            How to Request for Return?
          </Disclosure.Button>
          <Disclosure.Panel className="w-full border-2 border-t-0 border-solid border-zinc-300 p-8 text-sm text-black text-black">
            <span>
              {' '}
              If you wish to return a product, please follow the instructions
              below:
            </span>
            <ul className="ml-8 list-disc">
              <li>
                In FD Studio App/Website, go to “My Order” and select the
                “Delivered” tab{' '}
              </li>
              <li>
                Open the order with problems and hit the “Confirmation” button{' '}
              </li>
              <li>
                Choose “I have problem with this order” and you will be
                redirected to fill in a Return form
              </li>
              <li>
                Fill in all the required fields including reasons and details
              </li>
              <li>Attach some documents such as photos and videos as proofs</li>
              <li>Submit your report.</li>
            </ul>
            <br />
            <span>
              You can also raise your concern via Live Chat Agent or email to
              [email address].
            </span>
            <br />
            <div>
              Once submitted, FD Studio will investigate and review your request
              within (max.) 10 working days. Please make sure to allow us to
              send you notifications via app notification or email so you will
              get notified anytime regarding your return status.
            </div>
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure>
          <Disclosure.Button className="bg-pink-primary mt-4 w-full rounded py-2 px-4 text-left font-semibold text-white ">
            How to Return a product?
          </Disclosure.Button>
          <Disclosure.Panel className="w-full border-2 border-t-0 border-solid border-zinc-300 p-8 text-sm text-black text-black">
            <p>
              If your return request is approved, you will receive a
              notification by email or app notification and you might be (or
              might not be) required to return the products within 3 (three)
              days after your return request is approved. To return your
              product, please follow the steps below:
            </p>
            <ul className="ml-8 list-disc">
              <li>
                You are not qualified to return a product if you have confirmed
                to complete your order by clicking “Order Completed” or if your
                order status has been updated automatically to “Order
                Completed”.
              </li>
              <li>
                Every return request must be followed with fair reasons. Any
                reason such as changing your mind is not acceptable.
              </li>
              <li>
                We do not accept any return requests without any proof of
                delivery, receipt or delivery note.
              </li>
              <li>
                All products must be returned in its original packaging and
                condition, complete with tag/label, and unused.
              </li>
              <li>
                FD Studio has the right to cancel any order with price issues.
              </li>
              <li>
                FD Studio has the right to investigate and escalate your request
                to other related parties such as suppliers or logistic partners
                (if necessary).
              </li>
              <li>
                As we investigate your issue, we will need a maximum of 10 (ten)
                working days to provide the best solution we can offer to you.{' '}
              </li>
              <li>
                FD Studio has the right to decline your return request if it
                does not follow our terms and conditions.
              </li>
              <li>
                Your return approvals will be notified by email or app
                notification. Please make sure to allow us to send you
                notifications via app notification or email so you can get
                notified anytime regarding your return status.
              </li>
            </ul>
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure>
          <Disclosure.Button className="bg-pink-primary mt-4 w-full rounded py-2 px-4 text-left font-semibold text-white ">
            Refund Policy
          </Disclosure.Button>
          <Disclosure.Panel className="w-full border-2 border-t-0 border-solid border-zinc-300 p-8 text-sm text-black text-black">
            <p>
              Although unfortunate, our refund policies apply if any of these
              conditions eventuates:
            </p>
            <h2 className="font-semibold">A. Before Delivery</h2>
            <ul className="ml-8 list-disc">
              <li>
                If any error system is occured during your transaction, or if
                you make a double payment,
              </li>
              <li>
                If the product you ordered has a technical issue and we proceed
                to cancel your order,
              </li>
              <li>If your order doesn`t meet our terms and conditions,</li>
              <li>
                If the seller did not confirm your order within expected time,
              </li>
              <li>
                If you request to cancel your order and the seller has confirmed
                your cancel request when order status is In Progress,
              </li>
              <li>
                If some or all products you have ordered have failed to be
                fulfilled by FD Studio due to stock availability.
              </li>
            </ul>
            <h2 className="font-semibold">B. After Delivery</h2>
            <ul className="ml-8 list-disc">
              <li>If product you received is faulty, damaged, or mismatch,</li>
              <li>
                If you never received your order or if the product is missing.
              </li>
              <br />
              <div>
                If your payment was made with a Credit Card, refunds will be
                made automatically to your account during the pre-auth period
                (or before delivery). However, if your payment was made using
                other methods, or if you get refunded after products delivered
                to you, you will be required to fill in a refund request form
                and select any of these available refund options:
              </div>
              <li className="font-semibold">Allo Wallet</li>
              <div>
                This method is highly advisable as it takes only up to 2 working
                days to be added to your account. Your Allo Wallet balance can
                be used to transact in any of CT corp business including FD
                Studio with no expiry date.
              </div>
              <li className="font-semibold">E-voucher</li>
              <div>
                This method may take up to 3 working days before it’s ready for
                claims. All e-vouchers can only be used for transactions at FD
                Studio web/app only, and will expire within 30 days.
              </div>
              <li className="font-semibold">Original payment method</li>
              <div>
                This refund method may take up to 45 working days, depending on
                your bank’s policy. If you prefer to get your refund back to
                your bank account, please make sure to check your balance
                regularly once your refund status is confirmed successful.
              </div>
            </ul>
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure>
          <Disclosure.Button className="bg-pink-primary mt-4 w-full rounded py-2 px-4 text-left font-semibold text-white ">
            How do you get your refund through your preferred refund methods?
          </Disclosure.Button>
          <Disclosure.Panel className="w-full border-2 border-t-0 border-solid border-zinc-300 p-8 text-sm text-black text-black">
            <ol className="list-decimal">
              <li>
                You are not qualified to return a product if you have confirmed
                to complete your order by clicking “Order Completed” or if your
                order status has been updated automatically to “Order
                Completed”.
              </li>
              <li>
                Every return request must be followed with fair reasons. Any
                reason such as changing your mind is not acceptable.
              </li>
              <li>
                We do not accept any return requests without any proof of
                delivery, receipt or delivery note.
              </li>
              <li>
                All products must be returned in its original packaging and
                condition, complete with tag/label, and unused.
              </li>
              <li>
                FD Studio has the right to cancel any order with price issues.
              </li>
              <li>
                FD Studio has the right to investigate and escalate your request
                to other related parties such as suppliers or logistic partners
                (if necessary).
              </li>
              <li>
                As we investigate your issue, we will need a maximum of 10 (ten)
                working days to provide the best solution we can offer to you.{' '}
              </li>
              <li>
                FD Studio has the right to decline your return request if it
                does not follow our terms and conditions.
              </li>
              <li>
                Your return approvals will be notified by email or app
                notification. Please make sure to allow us to send you
                notifications via app notification or email so you can get
                notified anytime regarding your return status.
              </li>
            </ol>
          </Disclosure.Panel>
        </Disclosure>
      </div>
    </div>
  );
};

export default ReturnRefund;
