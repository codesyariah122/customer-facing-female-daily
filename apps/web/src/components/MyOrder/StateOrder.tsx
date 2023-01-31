const StateOrder = () => {
  return (
    <div>
      {/* if waiting for confirmation */}
      <span className="text-gray-500">Waiting for confirmation</span>
      {/* received and confirmed */}
      <span className="hidden text-gray-500">
        Your order has been received by<strong>John</strong> and the reception
        has been confirmed.
      </span>
      {/* received */}
      <span className="hidden text-gray-500">
        Your order has been received by<strong>John</strong>
      </span>
      {/* waiting confirmation */}
      <span className="hidden text-gray-500">Waiting for confirmation</span>
      {/* payment done and seller preparing */}
      <span className="hidden text-gray-500">
        Seller is preparing your order
      </span>
      {/* payment done and waiting for courier */}
      <span className="hidden text-gray-500">Waiting for courier</span>
      {/* payment done and failed Delivery */}
      <span className="hidden text-gray-500">Failed Delivery</span>
      {/* payment done and received */}
      <span className="hidden text-gray-500">Items received</span>
      {/* Have an issue and resolved */}
      <span className="hidden text-gray-500">Resolved</span>
      {/* payment failed */}
      <span className="hidden text-gray-500">Payment Failed</span>
      {/* Cancelled by admin */}
      <span className="hidden text-gray-500">Cancelled by Admin</span>
      {/* Cancelled by customer */}
      <span className="hidden text-gray-500">Cancelled by Customer</span>
      {/* payment done and in delivery */}
      <span className="hidden text-gray-500">Your order is in delivery</span>
    </div>
  );
};

export default StateOrder;
