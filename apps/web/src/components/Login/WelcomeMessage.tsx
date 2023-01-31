import React from 'react';
import ModalOtp from './ModalOtp';
const WelcomeMessage = () => {
  const [modalStatus, setModalStatus] = React.useState<boolean>(false);
  return (
    <>
      <ModalOtp isActive={modalStatus} onClose={(e) => setModalStatus(e)} />
      <div className="register-layout bg-flash-white">
        <div className="right-content">
          <div className="flex  w-[550px] flex-col  overflow-hidden rounded-lg bg-white">
            <div className="wellcome-message-bg"></div>
            <div className="flex flex-col items-center justify-center space-y-4 px-[55px] pt-10 pb-6 text-center">
              <h1 className="text-2xl font-bold">Akun Sukses Tersambung!</h1>
              <p className="text-sm">
                Akun Female Daily-mu sukses terdaftar dan tersambung dengan akun
                MPC. Sekarang kamu dapat menikmati berbagai keuntungan di
                layanan CT Corp dengan akun ini.
              </p>
              <div className="mt-6 w-[251px]">
                <button
                  onClick={() => setModalStatus(true)}
                  className="main-button mt-4"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeMessage;
