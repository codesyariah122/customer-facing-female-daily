import PaymentError from '../../components/Payment/PaymentError';
import Layout from '../../layouts/Layout2';
const error = () => {
  return (
    <Layout title="Error Page">
      <PaymentError />
    </Layout>
  );
};

export default error;
