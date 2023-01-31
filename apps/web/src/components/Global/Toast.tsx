import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

interface INotifProps {
  message: string;
}

const notify = ({ message }: INotifProps) => {
  toast.custom(
    (t) => (
      <div
        className="cursor-pointer rounded-none bg-black py-4 px-10 text-center text-sm font-normal not-italic leading-5 tracking-wide text-white opacity-80"
        onClick={() => toast.dismiss(t.id)}
      >
        {message}
      </div>
    ),
    { id: 'unique-notification', position: 'top-center' }
  );
};

const Toast = () => {
  return <Toaster />;
};

export { notify, Toast };
