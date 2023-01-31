import { useState } from 'react';
import ModalRegister from '../Login/ModalRegister';

const AccountHeader = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const closeModal = () => {
    setOpenModal(false);
  };

  const openModalFunc = () => {
    setOpenModal(true);
  };

  return (
    <div>
      <div className="login-menu flex">
        <div className="border-pink-primary text-pink-primary w-9.25 flex cursor-pointer justify-center rounded border py-3 font-semibold tracking-wide">
          <span>Log In</span>
        </div>
        <div
          className="bg-pink-primary w-9.25 ml-7 flex cursor-pointer justify-center rounded py-3 font-semibold tracking-wide text-white"
          onClick={openModalFunc}
        >
          <span>Register</span>
        </div>
        <ModalRegister isActive={openModal} closeModal={closeModal} />
      </div>
      {/* <div className="">
        <div className="flex cursor-pointer items-center">
          <img
            className="h-[35px] w-[35px] rounded-full border border-white object-cover shadow-lg"
            src="/images/FD_Studiologo.png"
          />
          <span className="mx-3 font-medium">John Doe</span>
          <i className="ico-arrow-down-grey"></i>
        </div>
      </div> */}
    </div>
  );
};

export default AccountHeader;
