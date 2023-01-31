interface IState {
  code: string;
}
interface props {
  status: IState;
  caption: string;
}

const SubState = ({ status, caption }: props) => {
  const parentStatus = (a: string): Array<string> => {
    let result: Array<string> = [' ', ' '];
    switch (a) {
      case 'NEED_PAYMENT':
        result = [
          'text-harvest-gold bg-cosmic-latte',
          'ico-information-yellow',
        ];
        break;
      case 'CANCELLED':
        result = ['text-pink-primary bg-isabelline', 'ico-information'];
        break;
      case 'DELIVERY':
        result = ['text-[#52C41A] bg-honeydew', 'ico-information-teal'];
        break;
      case 'PROCESS':
        result = ['bg-gray-light text-[#1A1E23]', 'ico-information-blue'];
        break;
      case 'COMPLETE':
        result = ['text-teal-primary bg-[#E8F3F3]', 'ico-information-green'];
        break;
      default:
        result = ['', ''];
    }

    const class_name = result[0];
    const icon = result[1];
    return [class_name, icon];
  };
  const [class_name, icon] = parentStatus(status?.code);
  return (
    <div
      className={`flex h-fit items-center  space-x-2 rounded p-2 ${class_name}`}
    >
      <i className={icon} />
      <span className="text-xs leading-none">{caption}</span>
    </div>
  );
};

export default SubState;
