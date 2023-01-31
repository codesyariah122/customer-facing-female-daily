const State = (props: {
  status: string | undefined;
  caption?: string | undefined;
}) => {
  const status = (status: string): string => {
    switch (status) {
      case 'NEED_PAYMENT':
        return 'text-harvest-gold bg-cosmic-latte';
      case 'CANCELLED':
        return 'text-pink-primary bg-isabelline';
      case 'DELIVERY':
        return 'text-[#52C41A] bg-honeydew';
      case 'PROCESS':
        return 'bg-gray-light text-[#1A1E23]';
      case 'COMPLETE':
        return 'text-teal-primary bg-[#E8F3F3]';
      default:
        return '';
    }
  };
  return (
    <span
      className={`mx-2 ${status(
        props.status ? props.status : ''
      )} h-fit rounded-lg  px-2 py-1 text-xs font-semibold`}
    >
      {props.caption}
    </span>
  );
};

export default State;
