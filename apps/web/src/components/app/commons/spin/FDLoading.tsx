import Image from 'next/image';
import FdLoading from '@assets/gif/fd-loader.gif';

function FDLoading() {
  return (
    <div className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black/75">
      <Image
        src={FdLoading}
        width={62}
        height={62}
        alt="FD Loading"
        className="rounded bg-white"
      />
    </div>
  );
}

export default FDLoading;
