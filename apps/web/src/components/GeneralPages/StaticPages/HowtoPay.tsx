/* eslint-disable react/no-unescaped-entities */
import GeneralPages from '../GeneralPages';
import EasyPayment from '../../../assets/images/banner/easypayment.svg';
import SafeSecure from '../../../assets/images/banner/safesecurity.svg';
import Automatic from '../../../assets/images/banner/automatic.svg';
import Allobank from '../../../assets/images/banner/allobank.svg';
import Bankmega from '../../../assets/images/banner/bankmega.svg';
import Bca from '../../../assets/images/banner/bca.svg';
import Bni from '../../../assets/images/banner/bni.svg';
import Bri from '../../../assets/images/banner/bri.svg';
import Mandiri from '../../../assets/images/banner/mandiri.svg';
import Alfamart from '../../../assets/images/banner/alfamart.svg';
import Indomart from '../../../assets/images/banner/indomart.svg';
import Mastercard from '../../../assets/images/banner/mastercard.svg';
import Visa from '../../../assets/images/banner/visa.svg';
import Qris from '../../../assets/images/banner/qris.svg';
import { Disclosure } from '@headlessui/react';

const StaticPages = {
  data: [
    {
      id: 1,
      title: 'Pay your order, at your convenience',
      content: '',
    },
  ],
};

const HowtoPay = () => {
  return (
    <div className="container mx-auto xl:max-w-screen-xl">
      <GeneralPages data={StaticPages.data} />
      <div className="flex text-center">
        <div className=" mx-auto w-80">
          <div className="mx-8 flex w-64 justify-center">
            <img src={Automatic.src} className="max-h-[150px] w-[150px] " />
          </div>
          <div className="align-left">
            <h2 className="my-8 text-lg font-semibold">Easy Payment Methods</h2>
            <div className="pb-8">24/7 Online Transactions</div>
          </div>
        </div>
        <div className=" mx-auto w-80">
          <div className="mx-8 flex w-64 justify-center">
            <img src={EasyPayment.src} className="max-h-[150px] w-[150px] " />
          </div>
          <div className="align-left">
            <h2 className="my-8 text-lg font-semibold">
              Automatic Verification
            </h2>
            <div className="pb-8">No payment receipt will be required</div>
          </div>
        </div>
        <div className=" mx-auto w-80">
          <div className="mx-8 flex w-64 justify-center">
            <img src={SafeSecure.src} className="max-h-[150px] w-[150px] " />
          </div>
          <div className="align-left">
            <h2 className="my-8 text-lg font-semibold">Safe and Secure</h2>
            <div className="pb-8">All information is encrypted</div>
          </div>
        </div>
      </div>
      <h2 className="text-center text-xl font-semibold">
        What are the available payment options?
      </h2>
      <div className="flex justify-center">
        <div className="mx-8 my-8 flex w-7/12 flex-wrap justify-center">
          <img src={Allobank.src} className="mx-4 max-h-[60px] w-[87px] " />
          <img src={Bankmega.src} className="mx-4 max-h-[60px] w-[87px]" />
          <img src={Bca.src} className="mx-4 max-h-[60px] w-[87px]" />
          <img src={Bni.src} className="mx-4 max-h-[60px] w-[87px]" />
          <img src={Bri.src} className="mx-4 max-h-[60px] w-[87px]" />
          <img src={Mandiri.src} className="mx-4 max-h-[60px] w-[87px]" />
          <img src={Alfamart.src} className="mx-4 max-h-[60px] w-[87px]" />
          <img src={Indomart.src} className="mx-4 max-h-[60px] w-[87px]" />
          <img src={Mastercard.src} className="mx-4 max-h-[60px] w-[87px]" />
          <img src={Visa.src} className="mx-4 max-h-[60px] w-[87px]" />
          <img src={Qris.src} className="mx-4 max-h-[60px] w-[87px]" />
        </div>
      </div>
      <div className="mx-auto grid w-9/12 justify-items-start">
        <Disclosure>
          <Disclosure.Button className="bg-pink-primary mt-4 w-full rounded py-2 px-4 text-left font-semibold text-white ">
            Allo Pay (Wallet)
          </Disclosure.Button>
          <Disclosure.Panel className="w-full border-2 border-t-0 border-solid border-zinc-300 p-8 text-sm text-black text-black">
            <p>
              Tracking your order at FD Studio is as easy as 1, 2, 3!
              <br />
              Go to <b>My Order</b>
              <br />
              Open tab <b>In Delivery</b> to see all orders that are in delivery
              <br />
              Open an order you wish to track and click <b>
                Live Tracking
              </b>{' '}
              button to get full access to discover where your order is at!
              <br />
            </p>
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure>
          <Disclosure.Button className="bg-pink-primary mt-4 w-full rounded py-2 px-4 text-left font-semibold text-white ">
            Tracking your order at FD Studio is as easy as 1, 2, 3!
          </Disclosure.Button>
          <Disclosure.Panel className="w-full border-2 border-t-0 border-solid border-zinc-300 p-8 text-sm text-black text-black">
            <ol className="list-decimal">
              <li>
                At FD Studio, you can easily pay your transaction with any debit
                / credit card associated with Bank Mega Payment Gateway. To
                complete your card payment, please follow the steps below:
              </li>
              <li>Checkout your order</li>
              <li>
                Select Credit / Debit / Bank Mega Credit Card payment method
              </li>
              <li>Enter card holder name</li>
              <li>Enter credit / debit card number</li>
              <li>Enter your card expiry date (MM/YY)</li>
              <li>
                Enter your card CVV / CVC (the last 3 digits on the back side of
                your card)
              </li>
              <li>
                Choose <b>Pay now</b>
              </li>
              <li>You will be redirected to our 3D Secure page</li>
              <li>An OTP will be sent to your registered phone number</li>
              <li>Please enter the OTP on 3D Secure page</li>
              <li>
                Choose <b>Submit</b>
              </li>
              <li>
                Once confirmed, you will receive a confirmation on{' '}
                <b>Payment Captured</b> page
              </li>
              <li>Your order should be ready to proceed anytime soon!</li>
            </ol>
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure>
          <Disclosure.Button className="bg-pink-primary mt-4 w-full rounded py-2 px-4 text-left font-semibold text-white ">
            How to pay with Bank Mega Virtual Account?
          </Disclosure.Button>
          <Disclosure.Panel className="stext-sm w-full border-2 border-t-0 border-solid border-zinc-300 p-8 text-black text-black">
            <p>
              To pay your transaction with Bank Mega Virtual Account, you can
              simply follow the steps below:
              <br />
              Checkout your order
              <br />
              Choose Bank Mega Virtual Account as your payment method
              <br />
              Your Bank Mega Virtual Account number will be generated
              automatically
              <br />
              Please transfer your transaction amount to your Bank Mega Virtual
              Account number by following these steps:
              <br />
              <br />
              Transfer from ATM
              <br />
              Enter your PIN
              <br />
              Choose "Other transactions"
              <br />
              Choose "Transfer"
              <br />
              Continue to "Transfer to Bank Mega Virtual Account"
              <br />
              Enter your Bank Mega Virtual Account number, and choose "Correct"
              <br />
              Enter your transaction amount, and choose "Correct"
              <br />
              Please validate your payment by checking the transaction details.
              If all details are correct, continue with "Yes"
              <br />
              Your payment is successful. Choose "No" to end your transaction,
              or "Yes" to continue your transaction
              <br />
              <br />
              Transfer through Mobile Banking
              <br />
              Please login to your M-Smile application
              <br />
              Choose "Transfer"
              <br />
              Continue to "Transfer to Bank Mega Virtual Account"
              <br />
              Enter your Bank Mega Virtual Account number, and choose "Correct"
              <br />
              Enter your transaction amount, and choose "Correct"
              <br />
              Please validate your payment by checking the transaction details.
              If all details are correct, continue with "Yes"
              <br />
              Your payment is successful. Choose "No" to end your transaction,
              or "Yes" to continue your transaction
              <br />
            </p>
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure>
          <Disclosure.Button className="bg-pink-primary mt-4 w-full rounded py-2 px-4 text-left font-semibold text-white ">
            How to pay with BCA Virtual Account?
          </Disclosure.Button>
          <Disclosure.Panel className="w-full border-2 border-t-0 border-solid border-zinc-300 p-8 text-sm text-black text-black">
            <p>
              To pay your transaction with BCA Virtual Account, you can simply
              follow the steps below:
              <br />
              Checkout your order
              <br />
              Choose BCA Virtual Account as your payment method
              <br />
              Your BCA Virtual Account number will be generated automatically
              <br />
              Please transfer your transaction amount to your BCA Virtual
              Account number by following these steps:
              <br />
              <br />
              Transfer from ATM
              <br />
              Insert your card to the ATM
              <br />
              Enter your PIN
              <br />
              Choose "Other transactions"
              <br />
              Choose "Transfer"
              <br />
              Continue to "To BCA Virtual Account"
              <br />
              Enter your BCA Virtual Account number, choose "Correct"
              <br />
              Enter your transaction amount, choose "Correct"
              <br />
              Please validate your payment by checking the transaction details.
              If all details are correct, continue with "Yes"
              <br />
              Your payment is successful. Choose "No" to end your transaction,
              or "Yes" to continue your transaction
              <br />
              <br />
              Transfer through BCA Mobile
              <br />
              Login to your BCA Mobile application
              <br />
              Choose "m-BCA", enter your BCA access code
              <br />
              Choose "m-Transfer"
              <br />
              Choose "BCA Virtual Account"
              <br />
              Enter your BCA Virtual Account number, or choose from your
              Transfer List
              <br />
              Enter your transaction amount
              <br />
              Enter your m-BCA PIN
              <br />
              Your transaction is successful!
              <br />
              <br />
              Transfer from KlikBCA Individual
              <br />
              Login to your KlikBCA Individual <br />
              Enter your User ID and PIN
              <br />
              Choose "Transfer Fund"
              <br />
              Choose "Transfer to BCA Virtual Account"
              <br />
              Enter your BCA Virtual Account number, or choose from your
              Transfer List
              <br />
              Enter your transaction amount
              <br />
              Please validate your payment by checking the transaction details.
              If all details are correct, enter the code that you received from
              KEYBCA APPLI 1, then choose "Send" Your transaction is successful!
              <br />
              <br />
              Transfer through KlikBCA Business
              <br />
              Login to your KlikBCA Business
              <br />
              Choose "Transfer Fund", "Transfer List", "Add"
              <br />
              Enter your BCA Virtual Account number, and "Send"
              <br />
              Choose "Transfer Fund"
              <br />
              Continue to "to BCA Virtual Account"
              <br />
              Choose your fund source and the BCA Virtual account
              <br />
              Then, enter your transaction amount, choose "Send"
              <br />
              Please validate your payment. This step has marked that your data
              has been successfully inputted. Choose "Save".
              <br />
              Choose "Transfer fund","Authorize transaction", and choose a
              transaction to be authorized
              <br />
              Your transaction is successful!
            </p>
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure>
          <Disclosure.Button className="bg-pink-primary mt-4 w-full rounded py-2 px-4 text-left font-semibold text-white ">
            How to pay with BNI Virtual Account?
          </Disclosure.Button>
          <Disclosure.Panel className="bgtext-blackborder-solid w-full border-2 border-t-0 border-zinc-300 p-8 text-sm	text-black">
            <p>
              To pay your transaction with BNI Virtual Account, you can simply
              follow the steps below:
              <br />
              Checkout your order
              <br />
              Choose BNI Virtual Account as your payment method
              <br />
              Your BNI Virtual Account number will be generated automatically
              <br />
              Please transfer your transaction amount to your BNI Virtual
              Account number by following these steps:
              <br />
              Transfer from ATM
              <br />
              Choose "Other menu","Transfer",Other transactions"
              <br />
              Choose "BNI account"
              <br />
              Enter your virtual account number and choose "Yes"
              <br />
              Enter your transaction amount, choose "Yes"
              <br />
              Please check all the information displayed on screen and ensure
              that all of the information and total amount are correct. If you
              have read the information, choose "Yes" Choose "No" to end your
              transaction.
              <br />
              <br />
              Transfer from Mobile Banking
              <br />
              Login to your mobile banking account by entering your User ID and
              MPIN
              <br />
              Choose "Transfer","Virtual Account Billing"
              <br />
              Choose "New Input"
              <br />
              Enter your Virtual Account number, and choose "Correct"
              <br />
              Enter your transaction amount, and choose "Correct"
              <br />
              Confirm your transaction and enter your password, then click
              "Continue"
              <br />
              If you've reached this step, your transaction has been
              successfully captured
              <br />
              <br />
              Transfer from Internet Banking
              <br />
              Login to your BNI internet banking site and enter your username
              and password
              <br />
              Choose "Transaction" menu, "Info and Administration transfer","Set
              Up Account","Add new account", then choose "OK"
              <br />
              Fill in the account data, choose "Continue"
              <br />
              Please check the confirmation details and enter the 8 digit
              numbers from APPLI 2 of your BNI token. If all the information are
              correct, choose "Proceed" to confirm A new account has just been
              registered
              <br />
              Choose "Transfer", "Transfer to BNI Account"
              <br />
              Complete the receiver data, and choose "Continue"
              <br />
              Transaction is successfully completed!
              <br />
              <br />
              Transfer from Other Banks ATM
              <br />
              Choose Other Menu
              <br />
              Choose Transfer
              <br />
              Choose an account
              <br />
              Choose "To other banks"
              <br />
              Enter the bank code, followed by your virtual account number (BNI
              009+xxxxxxxxxxxxxxx) <br />
              Enter the transaction amount <br />
              Done, your transaction is successful
              <br />
              <br />
              Transfer from Other Banks Internet Banking
              <br />
              Enter your User ID and Password
              <br />
              Choose Transfer
              <br />
              Choose an account
              <br />
              Choose "To other banks"
              <br />
              Enter the bank code, followed by your virtual account number (BNI
              009+xxxxxxxxxxxxxxx) <br />
              Enter the transaction amount <br />
              Done, your transaction is successful
              <br />
              <br />
              Transfer from Other Banks Mobile Banking
              <br />
              Enter your User ID and Password
              <br />
              Choose Transfer
              <br />
              Choose an account
              <br />
              Choose "To other banks"
              <br />
              Enter the bank code, followed by your virtual account number (BNI
              009+xxxxxxxxxxxxxxx) <br />
              Enter the transaction amount <br />
              Done, your transaction is successful
              <br />
              <br />
            </p>
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure>
          <Disclosure.Button className="bg-pink-primary mt-4 w-full rounded py-2 px-4 text-left font-semibold text-white ">
            How to pay with BRI Virtual Account?
          </Disclosure.Button>
          <Disclosure.Panel className="bgtext-blackborder-solid w-full border-2 border-t-0 border-zinc-300 p-8 text-sm	text-black">
            <p>
              To pay your transaction with BRI Virtual Account, you can simply
              follow the steps below:
              <br />
              Checkout your order
              <br />
              Choose BRI Virtual Account as your payment method
              <br />
              Your BRI Virtual Account number will be generated automatically
              <br />
              Please transfer your transaction amount to your BRI Virtual
              Account number by following these steps:
              <br />
              <br />
              Transfer from ATM
              <br />
              Choose "Other transactions"
              <br />
              Choose "Others"
              <br />
              Choose "Payment"
              <br />
              Select "BRIVA" menu
              <br />
              Enter your BRI Virtual Account number (For example
              26215-xxxxxxxxxxxx) then choose "Yes"
              <br />
              You will see a payment confirmation, choose "Yes" to confirm if
              all of the information are correct
              <br />
              Your transaction is successful!
              <br />
              <br />
              Transfer from Mobile Banking
              <br />
              Login to your BRI mobile banking
              <br />
              Choose "Payment" menu
              <br />
              Choose "BRIVA"
              <br />
              Enter your BRI Virtual Account number and your transaction amount
              <br />
              Enter your PIN
              <br />
              Choose "OK" to continue your transaction
              <br />
              Transaction success
              <br />
              You will receive a confirmation via SMS soon
              <br />
              <br />
              Transfer from Internet Banking
              <br />
              Open BRI Internet Banking website
              <br />
              Login with your User ID and password
              <br />
              Choose "Payment" menu
              <br />
              Choose "BRIVA"
              <br />
              Select an account
              <br />
              Enter your BRI Virtual Account number (For example
              26215-xxxxxxxxxxxx)
              <br />
              Continue with entering your transaction amount
              <br />
              Enter your password and Mtoken
              <br />
              Your transaction is successful!
              <br />
              <br />
              Transfer from Other Banks ATM
              <br />
              Choose Other Menu
              <br />
              Choose Transfer
              <br />
              Select an account
              <br />
              Choose Transfer te other banks
              <br />
              Enter the bank code, followed by your virtual account number (BRI
              002+xxxxxxxxxxxxxxx) <br />
              Enter the transaction amount <br />
              Done, your transaction is successful
              <br />
              Transfer from Other Banks Internet Banking
              <br />
              Enter your User ID and Password
              <br />
              Choose Transfer
              <br />
              Choose an account
              <br />
              Choose "To other banks"
              <br />
              Enter the bank code, followed by your virtual account number (BRI
              002+xxxxxxxxxxxxxxx) <br />
              Enter the transaction amount <br />
              Done, your transaction is successful
              <br />
              <br />
              Transfer from Other Banks Mobile Banking
              <br />
              Enter your User ID and Password
              <br />
              Choose Transfer
              <br />
              Choose an account
              <br />
              Choose "To other banks"
              <br />
              Enter the bank code, followed by your virtual account number (BRI
              002+xxxxxxxxxxxxxxx) <br />
              Enter the transaction amount <br />
              Done, your transaction is successful
              <br />
            </p>
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure>
          <Disclosure.Button className="bg-pink-primary mt-4 w-full rounded py-2 px-4 text-left font-semibold text-white ">
            How to pay with Mandiri Virtual Account?
          </Disclosure.Button>
          <Disclosure.Panel className="bgtext-blackborder-solid w-full border-2 border-t-0 border-zinc-300 p-8 text-sm	text-black">
            <p>
              To pay your transaction with Mandiri Virtual Account, you can
              simply follow the steps below:
              <br />
              Checkout your order
              <br />
              Choose Mandiri Virtual Account as your payment method
              <br />
              Your Mandiri Virtual Account number will be generated
              automatically
              <br />
              Please transfer your transaction amount to your Mandiri Virtual
              Account number by following these steps:
              <br />
              <br />
              Transfer from ATM
              <br />
              Choose "Pay/Buy" menu
              <br />
              You will see "Multi Payment" or "Bill Payment (PLN, PDAM, etc)
              payment types, to pay with VA, choose "Multi Payment"
              <br />
              Enter the company code, for example: “88908” (Xendit), then choose
              "Correct"
              <br />
              Enter your Virtual Account number (for example: 8890802001287578)
              and choose "Correct"
              <br />
              Enter your transaction amount, and choose "Correct"
              <br />
              Please ensure to have checked all of the information displayed on
              screen. If the transaction amount and other information are
              correct, press 1 and choose "Yes" Please validate the confirmation
              page and choose "Yes" to continue payment
              <br />
              Please keep your payment receipt as a legitimate proof from Bank
              Mandiri
              <br />
              Your transaction is successful!
              <br />
              <br />
              Transfer from Mobile Banking
              <br />
              Login from your mobile banking
              <br />
              Click "Icon menu" on the top left
              <br />
              Choose "Payment"
              <br />
              Continue to create "New Payment"
              <br />
              Choose "Multi Payment"
              <br />
              Choose "Service Provider", and select a company code, for example:
              “Xendit 88908”
              <br />
              Choose “No. Virtual”
              <br />
              Enter your Virtual Account number and company code (for example
              8890802001287578), choose "Add as a new number"
              <br />
              Enter your transaction amount and choose "Confirm" and "Continue"
              <br />
              Please ensure to have checked all of the information displayed on
              screen. If the transaction amount and other information are
              correct, scroll down and choose "Confirm" Enter your PIN and click
              "OK" <br />
              If you've reached this step, your transaction is confirmed success
              <br />
              <br />
              Transfer from Internet Banking
              <br />
              Login to Mandiri Online website with your User ID and PIN
              <br />
              Choose "Payment"
              <br />
              Choose "Multi Payment"
              <br />
              Select "Your account"
              <br />
              Choose "Service provider", for example: “Xendit 88908”
              <br />
              Choose "Virtual Account No"
              <br />
              Enter "Virtual Account Number"
              <br />
              You will enter the confirmation page 1<br />
              If the information is correct, choose "Total Bill" and "Continue"
              <br />
              You will enter the confirmation page 2<br />
              Enter the Challenge Code that you received on your Internet
              Banking Token, choose "Send"
              <br />
              You will see a payment confirmation page if the payment is
              successful
              <br />
              If your payment is made using Internet Banking, we highly suggest
              not to use "Save Transfer List" feature, as your previous
              transaction amount will be recorded and might interrupt your
              following payment. If you have used the feature, you can delete it
              on "Payment List" by following the steps below: Login to Mandiri
              Online using your username and password
              <br />
              Choose "Payment"
              <br />
              Choose "Payment List"
              <br />
              On your saved payment list, choose "Delete"
              <br />
              <br />
              Transfer from Other Banks ATM
              <br />
              Choose Other Menu
              <br />
              Choose Transfer
              <br />
              Choose an account
              <br />
              Choose Other Bank Account
              <br />
              Enter the bank code, followed by your virtual account number
              (Mandiri 008+nomor virtual account) <br />
              Enter your transaction amount
              <br />
              Done, your transaction is successful
              <br />
              <br />
              Transfer from Other Banks Internet Banking
              <br />
              Enter your User ID and Password
              <br />
              Choose Transfer
              <br />
              Choose an account
              <br />
              Choose "To other banks"
              <br />
              Enter the bank code, followed by your virtual account number
              (Mandiri 008+nomor virtual account) <br />
              Enter the transaction amount <br />
              Done, your transaction is successful
              <br />
              <br />
              Transfer from Other Banks Mobile Banking
              <br />
              Enter your User ID and Password
              <br />
              Choose Transfer
              <br />
              Choose an account
              <br />
              Choose "To other banks"
              <br />
              Enter the bank code, followed by your virtual account number
              (Mandiri 008+nomor virtual account) <br />
              Enter the transaction amount <br />
              Done, your transaction is successful
              <br />
            </p>
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure>
          <Disclosure.Button className="bg-pink-primary mt-4 w-full rounded py-2 px-4 text-left font-semibold text-white ">
            How to pay via Alfamart?
          </Disclosure.Button>
          <Disclosure.Panel className="bgtext-blackborder-solid w-full border-2 border-t-0 border-zinc-300 p-8 text-sm	text-black">
            <p>
              To pay your transaction via Retail Outlet Alfamart, you can simply
              follow the steps below:
              <br />
              Checkout your order
              <br />
              Choose Alfamart as your payment method
              <br />
              You will receive a payment code or barcode <br />
              Go to the Alfamart/Alfamidi/Lawson/DAN+DAN store nearest to you
              and make sure to complete your payment before your payment code
              expired
              <br />
              The cashier will help you complete your transaction. Please make
              sure to mention the details of brand merchant and payment code to
              the cashier If you have a barcode, you can ask the cashier to scan
              the barcode for you
              <br />
              Before completing your transaction, please make sure to check the
              transaction amount, and confirm if it's correct
              <br />
              Please make sure to keep your payment receipt from Alfamart
              <br />
              Your transaction is successful
              <br />
            </p>
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure>
          <Disclosure.Button className="bg-pink-primary mt-4 w-full rounded py-2 px-4 text-left font-semibold text-white ">
            How to pay via Indomaret?
          </Disclosure.Button>
          <Disclosure.Panel className="bgtext-blackborder-solid w-full border-2 border-t-0 border-zinc-300 p-8 text-sm	text-black">
            <p>
              To pay your transaction via Retail Outlet Indomaret, you can
              simply follow the steps below:
              <br />
              Checkout your order
              <br />
              Choose Indomaret as your payment method
              <br />
              You will receive a payment code or barcode <br />
              Go to any Indomaret store nearest to you and make sure to complete
              your payment before your payment code expired
              <br />
              The cashier will help you complete your transaction. Please make
              sure to mention the details of brand merchant and payment code to
              the cashier If you have a barcode, you can ask the cashier to scan
              the barcode for you
              <br />
              Before completing your transaction, please make sure to check the
              transaction amount, and confirm if it's correct
              <br />
              Please make sure to keep your payment receipt from Indomaret
              <br />
              Your transaction is successful
              <br />
            </p>
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure>
          <Disclosure.Button className="bg-pink-primary mt-4 w-full rounded py-2 px-4 text-left font-semibold text-white ">
            How to pay with QRIS?
          </Disclosure.Button>
          <Disclosure.Panel className="bgtext-blackborder-solid w-full border-2 border-t-0 border-zinc-300 p-8 text-sm	text-black">
            <p>
              To complete your transaction using QRIS, you can simply follow the
              steps below:
              <br />
              Checkout your order
              <br />
              Choose "QRIS" as your payment method
              <br />
              Choose "Mega Credit Card" tab for transactions using credit card
              fund, or choose "Mega Debit Card" tab for transactions using this
              debit card Choose "OTHERS" for transaction with other account
              associated with QRIS
              <br />
              Press "Show QR"
              <br />
              A QR code will be displayed and available for scan
              <br />
              Please open the app that is integrated with QRIS (or payment using
              QR code)
              <br />
              Scan QR Code
              <br />
              Press Submit/Pay
              <br />
              Enter your PIN or authentication code
              <br />
              Your payment is successful!
              <br />
            </p>
          </Disclosure.Panel>
        </Disclosure>
      </div>
    </div>
  );
};

export default HowtoPay;
