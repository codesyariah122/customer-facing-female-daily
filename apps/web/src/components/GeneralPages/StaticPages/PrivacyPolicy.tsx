/* eslint-disable react/no-unescaped-entities */
import GeneralPages from '../GeneralPages';

const StaticPages = {
  data: [
    {
      id: 1,
      title: 'Syarat & Ketentuan',
      content: '',
    },
  ],
};

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto xl:max-w-screen-xl">
      <GeneralPages data={StaticPages.data} />
      <div className="mx-auto w-9/12">
        <p>
          What kind of information do we collect? When registering and using our
          app or website, you may be asked to enter your personal information
          such as name, email address, mobile number, address, geospatial
          location, date of birth, gender, identity card, etc. What do we use
          your information for? Any of the information we collect from you may
          be used in one of the following ways:
        </p>
        <div>
          <ul className="list-disc p-4">
            <li>
              <strong>To personalize your experience.</strong> Your information
              helps us to respond to your individual needs better and
              exclusively.
            </li>
            <li>
              <strong>To improve our app and website. </strong> We continually
              strive to improve our app and website offers or features based on
              the information and the feedback we receive from you.
            </li>
            <li>
              <strong>To proceed with your transactions.</strong>
              Your information, whether public or private, will not be sold,
              exchanged, transferred, or given to any other company for any
              reason, without your consent, other than for the express purpose
              of delivering the product or service that a customer purchased or
              requested.
            </li>
            <li>
              <strong>To send emails.</strong> The email address we use to
              proceed your transaction may also be used to send you information
              and updates pertaining to your order. Other than that, we will
              also send you the latest news and updates about events, new
              features or related products or service information. You can
              unsubscribe from receiving future emails anytime. We have included
              all the ‘unsubscribe’ instructions at the bottom of each email.
            </li>
            <li>
              <strong>
                To administer a contest, promotion, survey or other site
                feature.
              </strong>
            </li>
            <li>
              <strong>
                To provide you with relevant marketing communications.
              </strong>
              Including by email, SMS, Whatsapp or Facebook Messenger messages,
              social media posts, blog posts or online advertising), related to
              our products and services, and those of our suppliers, retail
              partners and other CT Corp Group companies/business units. As part
              of this, online advertising that are relevant to your interests
              may be displayed on websites/applications across the CT Corp Group
              and on other organizations’ websites/apps and online media/social
              media/social video channels (of CT Corp Group products/services or
              similar products from other companies/groups/services that may be
              of your interest) that you visit. To achieve this, we also measure
              your responses to marketing communications relating to products
              and services we offer, which also means we can offer you products
              and services that might be suitable to your needs as a customer.
              We may also measure the effectiveness of our marketing
              communications and those of our suppliers and retail partners by
              using third party cookies.
            </li>
          </ul>
        </div>
        <br />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
