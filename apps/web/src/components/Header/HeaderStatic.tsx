import Image from 'next/image';
import Link from 'next/link';
import Logo from '@assets/images/femaledaily-logo.png';
const Header = (): React.ReactElement => {
  return (
    <header className="bg-white drop-shadow-md">
      <div className="container mx-auto xl:max-w-screen-xl">
        <div className="flex w-full justify-between py-4">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              width={177}
              height={50}
              priority={true}
            />
          </Link>
          <div className="ml-9 w-3/5 self-center">
            <ul className="flex w-full place-content-around">
              <li>
                <a>About FD Studio</a>
              </li>
              <li>
                <a>How to Shop</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
