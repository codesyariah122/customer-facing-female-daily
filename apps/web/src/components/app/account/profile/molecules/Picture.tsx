import React from 'react';
import Image from 'next/image';
import DefaultAvatar from '@assets/images/avatar-default.jpg';

const Picture = (props: any) => {
  return (
    <div className="flex w-3/6 flex-col justify-center text-center">
      <div>
        {props?.showImage ? (
          <Image
            src={props.files}
            width={160}
            height={160}
            className="mx-auto h-40 w-40 rounded-full object-cover"
            alt="image"
          />
        ) : (
          <Image
            src={
              props?.profiles?.picture.url
                ? props?.profiles?.picture.url
                : DefaultAvatar
            }
            width={160}
            height={160}
            className="mx-auto h-40 w-40 rounded-full object-cover"
            alt="image"
          />
        )}
      </div>
      <div className="text-black-light mx-auto mt-5 w-full max-w-[316px] text-sm tracking-wider">
        Your photo must be in JPG, JPEG, or PNG format. Maximum size: 2 MB.
      </div>
      <div className="mt-6 flex flex-col justify-center text-center">
        <div className="bg-pink-primary mx-auto w-[196px] cursor-pointer rounded-sm p-2 font-semibold tracking-wide text-white drop-shadow-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 active:bg-red-500">
          <button onClick={() => props.setOpenChangeImage(true)}>
            Change Photo
          </button>
        </div>
        <div className="text-pink-primary mt-6 text-sm tracking-wider">
          Log Out
        </div>
      </div>
    </div>
  );
};

export default Picture;
