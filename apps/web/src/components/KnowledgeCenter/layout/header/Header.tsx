import Image from 'next/image';
import Logo from '@assets/images/femaledaily-logo.png';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { isInFemaleDailyAgentApp } from '@utils/helpers';

const Header = (props: any) => {
  const route = useRouter();
  return (
    <>
      {!isInFemaleDailyAgentApp() ? (
        <>
          <div className="container sticky top-0 z-50 block h-10 min-w-full space-x-4 bg-white drop-shadow-lg md:hidden">
            <div className="-mt-2 flex place-content-start justify-start px-3">
              <div>
                <button
                  onClick={() => route.back()}
                  className="p-0 outline-none"
                >
                  <i className="ico-back" />
                </button>
              </div>
              <div className="mt-4 ml-3">
                <Link href="/knowledge-center">
                  <h2 className="text-1xl">Seller Center | Pusat Edukasi</h2>
                </Link>
              </div>
            </div>
          </div>

          <div className="container sticky top-0 z-50 hidden hidden h-16 min-w-full space-x-4 bg-white drop-shadow-lg md:block">
            <div className="flex place-content-center justify-start px-12 py-3">
              <div className="w-36 shrink-0">
                <Link href="/knowledge-center">
                  <Image src={Logo} alt="fd-logo" width={200} height={200} />
                </Link>
              </div>
              <div className="flex-1">
                <div className="flex justify-center px-12">
                  <div className="flex-1">
                    <Link href="/knowledge-center">
                      <h2 className="-ml-6 text-2xl">
                        Seller Center | Pusat Edukasi{' '}
                      </h2>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
export default Header;
