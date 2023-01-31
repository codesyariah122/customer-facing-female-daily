import Image from 'next/image';
import Logo from '@assets/images/femaledaily-logo.png';

const HeaderEmpty = () => {
  return (
    <header className="border-gray-30 sticky top-0 z-10 border-b bg-white py-6 px-2 shadow-md">
      <div className="container mx-auto xl:max-w-screen-xl">
        <Image
          src={Logo}
          width={177}
          height={55}
          alt="Logo"
          className="h-[55px] w-[177px]"
          priority={true}
        />
      </div>
    </header>
  );
};

export default HeaderEmpty;
