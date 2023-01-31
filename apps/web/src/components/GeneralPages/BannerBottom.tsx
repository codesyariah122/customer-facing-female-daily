import Link from 'next/link';
import bannerBottom from '../../assets/images/banner/small-banner.svg';

const BannerBottom = () => {
  return (
    <div className="container mx-auto ">
      <div className="w-full py-4">
        <div>
          <Link href="/">
            <img src={bannerBottom.src} alt="" className="mx-auto" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
