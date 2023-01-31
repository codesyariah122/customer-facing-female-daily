import Image from 'next/image';
import empty from '@assets/images/ico-empty-notif.svg';

const Notfoundnotif = () => {
  return (
    <div className="flex flex-col items-center justify-center py-48">
      <Image
        src={empty}
        alt="empty notification"
        width={210}
        height={210}
        className="mx-auto"
      />
      <div className="mt-8 text-sm font-medium tracking-wider">
        Belum ada notifikasi, tunggu ya!
      </div>
      <div className="mt-4 text-xs tracking-wider">
        Notifikasi akan kami kirimkan untuk kamu disini.
      </div>
    </div>
  );
};

export default Notfoundnotif;
