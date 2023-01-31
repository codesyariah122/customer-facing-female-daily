import Image from 'next/image';
import MenuAccount from '../MyAccount/Menu';
import { useState } from 'react';

const MyProfile = () => {
  const [inputName, setInputName] = useState<string>('');
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <main className="container mx-auto mt-8 xl:max-w-screen-xl">
      <div className="flex">
        <MenuAccount />
        <div className="w-3/4 pl-8">
          <div className="">
            <h1 className="text-22 font-semibold">MY PROFILE</h1>
            <div className="border-gray-light rounded-2xl border py-7 px-5">
              <div className="flex items-start">
                <div className="flex w-3/6 flex-col justify-center text-center">
                  <div>
                    <Image
                      src="https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg"
                      width={160}
                      height={160}
                      className="mx-auto h-40 w-40 rounded-full object-cover"
                      alt="image"
                    />
                  </div>
                  <div className="text-black-light mx-auto mt-5 w-full max-w-[316px] text-sm tracking-wider">
                    Your photo must be in JPG, JPEG, or PNG format. Maximum
                    size: 2 MB.
                  </div>
                  <div className="mt-6 flex flex-col justify-center text-center">
                    <div className="bg-pink-primary mx-auto w-[196px] cursor-pointer rounded-sm p-2 font-semibold tracking-wide text-white">
                      Change Photo
                    </div>
                    <div className="text-pink-primary mt-6 text-sm tracking-wider">
                      Log Out
                    </div>
                  </div>
                </div>
                <div className="w-3/6 space-y-5">
                  <div className="flex flex-col space-y-2.5">
                    <label htmlFor="fullName" className="text-sm">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="border-american-silver h-[50px] w-full rounded border bg-white px-3.5 text-sm focus:outline-none"
                      id="fullName"
                      placeholder="John Doe"
                      onChange={(e) => setInputName(e.target.value)}
                      value={inputName}
                    />
                  </div>
                  <div className="flex flex-col space-y-2.5">
                    <label
                      htmlFor="emailAddress"
                      className="flex items-center justify-between text-sm"
                    >
                      <span>Email Address</span>
                      <span className="text-success-dark items-centers flex text-xs">
                        <i className="ico-circle-verified" />
                        Verified
                      </span>
                    </label>
                    <input
                      type="text"
                      className="border-american-silver h-[50px] w-full rounded border bg-white px-3.5 text-sm focus:outline-none"
                      id="emailAddress"
                      placeholder="john@gmail.com"
                      onChange={(e) => setEmailAddress(e.target.value)}
                      value={emailAddress}
                    />
                  </div>
                  <div className="flex flex-col space-y-2.5">
                    <label
                      htmlFor="mobileNumber"
                      className="flex items-center justify-between text-sm"
                    >
                      <span>Mobile Number</span>
                      <span className="text-success-dark items-centers flex text-xs">
                        <i className="ico-circle-verified" />
                        Verified
                      </span>
                    </label>
                    <input
                      type="text"
                      className="border-american-silver h-[50px] w-full rounded border bg-white px-3.5 text-sm focus:outline-none"
                      id="mobileNumber"
                      placeholder="0812-1243-0983"
                      onChange={(e) => setMobileNumber(e.target.value)}
                      value={mobileNumber}
                    />
                  </div>
                  <div className="flex flex-col space-y-2.5">
                    <label
                      htmlFor="password"
                      className="flex items-center justify-between text-sm"
                    >
                      <span>Password</span>
                      <span className="text-success-dark items-centers flex text-xs">
                        <i className="ico-circle-verified" />
                        Verified
                      </span>
                    </label>
                    <input
                      type="password"
                      className="border-american-silver h-[50px] w-full rounded border bg-white px-3.5 text-sm focus:outline-none"
                      id="password"
                      placeholder="********"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>
                  <div>
                    <div className="bg-info-light mb-6 rounded-2xl py-3.5 px-5">
                      <div className="flex items-center text-xs font-semibold">
                        <i className="ico-mdi-information mr-1" /> Information
                      </div>
                      <div className="text-black-olive mt-1 text-sm">
                        You are signing in with your MPC account. Editing this
                        information means you're editing your MPC account
                        information.
                      </div>
                    </div>
                    <div className="bg-pink-primary mx-auto w-[218px] cursor-pointer rounded p-3 text-center font-semibold tracking-wide text-white">
                      Edit MPC Profile
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2.5">
                    <label
                      htmlFor="status"
                      className="flex items-center justify-between text-sm"
                    >
                      <span>Status</span>
                    </label>
                    <div className="border-american-silver flex h-[50px] w-full items-center justify-between rounded border bg-white px-3.5 text-sm">
                      <span className="text-black-light text-sm">Single</span>
                      <span className="text-pink-primary cursor-pointer text-sm font-semibold">
                        Edit
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2.5">
                    <label
                      htmlFor="status"
                      className="flex items-center justify-between text-sm"
                    >
                      <span>Status</span>
                    </label>
                    <div className="border-american-silver flex h-[50px] w-full items-center justify-between rounded border bg-white px-3.5 text-sm">
                      <span className="text-black-light text-sm">Single</span>
                      <span className="text-pink-primary cursor-pointer text-sm font-semibold">
                        Edit
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2.5">
                    <label
                      htmlFor=""
                      className="flex items-center justify-between text-sm"
                    >
                      <span>Date of Birth</span>
                    </label>
                    <div className="border-american-silver flex h-[50px] w-full items-center justify-between rounded border bg-white px-3.5 text-sm">
                      <span className="text-black-light text-sm">
                        09 October 1992
                      </span>
                      <span className="text-pink-primary cursor-pointer text-sm font-semibold">
                        Edit
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2.5">
                    <label
                      htmlFor=""
                      className="flex items-center justify-between text-sm"
                    >
                      <span>Gender</span>
                    </label>
                    <div className="border-american-silver flex h-[50px] w-full items-center justify-between rounded border bg-white px-3.5 text-sm">
                      <span className="text-black-light text-sm">Male</span>
                      <span className="text-pink-primary cursor-pointer text-sm font-semibold">
                        Edit
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyProfile;
