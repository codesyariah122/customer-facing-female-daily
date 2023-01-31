import EmptyImages from '../../assets/images/ico-empty-search.svg';
import Image from 'next/image';

const EmptyOrder = () => {
  return (
    <div className="my-8 place-content-center py-32 text-center">
      <div className="flex justify-center pb-8">
        <Image
          src={EmptyImages}
          width={185}
          height={185}
          className=""
          alt="empty images"
        />
      </div>
      <span className="align-center font-semibold">
        You have no order yet.
        <br />
        But it's never too late to have one!
      </span>
    </div>
  );
};

export default EmptyOrder;
