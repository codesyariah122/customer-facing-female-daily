import Image from 'next/image';
import FrameBottom from './svg/frame-bottom.svg';
import StorePeople from './svg/store.svg';
import FrameTop from './svg/frame-top.svg';
import ContactUs from './svg/contact-us.svg';
import NoContentImage from '@assets/images/not_found_images.svg';
import Searching from '@assets/images/ico-empty-search-location.svg';

const Vector = (props: any) => {
  return (
    <>
      {props.name === 'frame-bottom' ? (
        <Image
          src={FrameBottom}
          alt={props.name}
          className={props.classes ? props.classes : null}
          width={183}
          height={183}
        />
      ) : props.name === 'store-people' ? (
        <Image
          src={StorePeople}
          alt={props.name}
          className={props.classes ? props.classes : null}
          width={450}
          height={450}
        />
      ) : props.name === 'frame-top' ? (
        <Image
          src={FrameTop}
          alt={props.name}
          className={props.classes ? props.classes : null}
          width={150}
          height={150}
        />
      ) : props.name === 'contact-us' ? (
        <Image
          src={ContactUs}
          width={150}
          height={150}
          alt={props.name}
          className="mx-auto max-w-none md:mt-4 md:w-48"
        />
      ) : props.name === 'no-content' ? (
        <Image src={NoContentImage} width={182} height={182} alt={props.name} />
      ) : props.name === 'searching' ? (
        <Image src={Searching} alt={props.name} width={250} height={250} />
      ) : null}
    </>
  );
};

export default Vector;
