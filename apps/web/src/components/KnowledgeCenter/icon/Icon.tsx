import Image from 'next/image';
import PlayStore from './svg/playstore.svg';
import AppStore from './svg/appstore.svg';
import Facebook from './svg/fb.svg';
import Twitter from './svg/twitter.svg';
import Instagram from './svg/instagram.svg';
import YouTube from './svg/youtube.svg';
import ChevronRight from './svg/chevron-right.svg';

const renderIcon = (icon: any, width: number, height: number) => {
  switch (icon) {
    case 'playstore':
      return (
        <Image
          src={PlayStore}
          alt="icon-playstore"
          width={width ? width : 70}
          height={height ? height : 0}
        />
      );

    case 'appstore':
      return (
        <Image
          src={AppStore}
          alt="icon-appstore"
          width={width ? width : 70}
          height={height ? height : 0}
        />
      );

    case 'facebook':
      return (
        <Image
          src={Facebook}
          alt="icon-facebook"
          width={width ? width : 25}
          height={height ? height : 25}
        />
      );

    case 'instagram':
      return (
        <Image
          src={Instagram}
          alt="icon-instagram"
          width={width ? width : 25}
          height={height ? height : 25}
        />
      );

    case 'twitter':
      return (
        <Image
          src={Twitter}
          alt="icon-twitter"
          width={width ? width : 25}
          height={height ? height : 25}
        />
      );

    case 'youtube':
      return (
        <Image
          src={YouTube}
          alt="icon-youtube"
          width={width ? width : 25}
          height={height ? height : 25}
        />
      );

    case 'chevron-right':
      return (
        <Image
          src={ChevronRight}
          alt="chevron-right"
          width={width ? width : 20}
          height={height ? height : 20}
        />
      );

    default:
      return (
        <Image
          src={icon}
          alt="icon-knowledge-center"
          width={50}
          height={50}
          style={{ width: 'auto', height: 'auto' }}
        />
      );
  }
};

const Icon = (props: any) => {
  const iconUrl = props.url;
  return (
    <>
      {props.name
        ? renderIcon(props.name, props.width, props.height)
        : renderIcon(iconUrl, props.width, props.height)}
    </>
  );
};

export default Icon;
