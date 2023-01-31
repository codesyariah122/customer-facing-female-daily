import React, { useState, useEffect } from 'react';
import {
  Menu,
  DialogEdit,
  DisplayData,
  Picture,
  ChangeImage,
} from '@components/app/account/profile';
import { useAccounts, updateMyProfile, uploadProfilePicture } from '@hooks';
import { Profile } from '@components/app/commons';
import { notify, Toast } from '@components/Global/Toast';

const MyProfile = () => {
  const {
    data: profiles,
    isLoading: isLoadingProfile,
    isFetching: isFetchingProfile,
    isError: isErrorProfile,
  } = useAccounts();

  const [dataProfile, setDataProfile] = useState<any>([]);
  const [newData, setNewData] = useState<any>(null);
  const [files, setFiles] = useState<any>('');
  const [images, setImages] = useState<any>([]);
  const [toLong, setToLong] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(true);
  const [confirmUpload, setConfirmUpload] = useState<boolean>(false);
  const [isOpenSuccess, setIsOpenSuccess] = useState<boolean>(false);
  const [showImage, setShowImage] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [edit, setEdit] = useState<boolean>(false);
  const [changeData, setChangeData] = useState<string>('');
  const [editValue, setEditValue] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openChangeImage, setOpenChangeImage] = useState<boolean>(false);
  const [showSave, setShowSave] = useState<boolean>(false);
  // const { data: updates, isLoading: isLoadingUpdate, isError: isErrorUpdate } = useUpdateMyProfiles(newData);

  const renderLoading = () => {
    return (
      <div
        className={`${
          isLoadingProfile ? 'h-60' : ''
        } mt-20 grid grid-cols-1 content-center justify-center`}
      >
        <div className="col-span-full place-self-center">
          <h3>Please wait ...</h3>
        </div>
        <div className="col-span-full mt-2 place-self-center">
          <div className="mr-4 h-2 w-24 rounded-full bg-gray-400/40" />
        </div>
      </div>
    );
  };

  const handleClick = (val: any) => {
    switch (val) {
      case 'status':
        setEdit(true);
        setEditValue('status');
        setIsOpen(true);
        break;
      case 'dob':
        setEdit(true);
        setEditValue('dob');
        setIsOpen(true);
        break;
      case 'gender':
        setEdit(true);
        setEditValue('gender');
        setIsOpen(true);
        break;
    }
  };

  function updateProfile(val: any, key: string) {
    updateMyProfile(val)
      .then((response: any) => {
        if (response) {
          setDataProfile(response);
          notify({ message: `Edit ${key} success...` });
        }
      })
      .finally(() => {
        setTimeout(() => {
          setIsOpen(false);
        }, 500);
      })
      .catch((err) => console.error(err));
  }

  const handleSaveData = (key: any) => {
    if (edit) {
      if (key === 'status') {
        const data = {
          marital_kind: changeData,
        };
        setNewData(data);
        updateProfile(data, 'Status');
      } else if (key === 'gender') {
        const data = {
          gender: changeData,
        };
        setNewData(data);
        updateProfile(data, 'Gender');
      } else if (key === 'dob') {
        setShowSave(false);
        const data = {
          dob: changeData,
        };
        setNewData(data);
        updateProfile(data, 'Birthday');
      } else {
        console.log('No change here');
      }
    }
  };

  const checkImageSize = (bytes: number) => {
    const byte = Math.floor(bytes / 1024);
    return byte;
  };

  const handleImageUpdload = () => {
    checkImageSize(parseInt(images.size));

    const file = new FormData();
    file.append('file', images);

    uploadProfilePicture(file)
      .then((response: any) => {
        if (response.filename) {
          setShowImage(true);
          setIsOpenSuccess(true);
          setConfirmUpload(false);
          setOpenChangeImage(false);
          notify({ message: 'Upload image success!' });
        } else {
          setIsOpenSuccess(false);
          setConfirmUpload(false);
        }
      })
      .finally(() => {
        setTimeout(() => {
          setIsOpenSuccess(false);
        }, 1500);
      })
      .catch((err) => console.log(err));
  };

  const onFileChange = (e: any) => {
    const validSize = checkImageSize(e.target.files[0].size);

    const allowExtentions = ['image/jpg', 'image/png', 'image/webp'];
    const files = e.target.files[0];
    const valid = allowExtentions.find((ext: any) => ext === files['type']);

    if (valid === undefined || valid === 'undefined') setIsValid(false);

    if (validSize > 200) {
      setToLong(true);
      notify({ message: 'Images change its to large...' });
    } else {
      setShowImage(true);
      setImages(e.target.files[0]);
      setConfirmUpload(true);
      setFiles(URL.createObjectURL(e.target.files[0]));
    }
  };

  const redirectMpc = () => {};

  useEffect(() => {
    profiles && setDataProfile(profiles);
  }, [profiles]);

  return (
    <main className="min-w-screen container mx-auto mt-8 xl:max-w-screen-xl">
      {isLoadingProfile || isErrorProfile || profiles.errors ? (
        <div className="grid h-screen grid-cols-1">
          <div className="min-w-screen col-span-full mb-36 w-full place-self-center">
            {/* Show skeleton if isLoadingProfile */}
            <Profile />
          </div>
        </div>
      ) : (
        <div className="flex">
          {profiles && (
            <>
              <Menu
                profiles={profiles}
                confirmUpload={confirmUpload}
                isOpenSuccess={isOpenSuccess}
                showImage={showImage}
                files={files}
              />
              <div className="w-3/4 pl-8">
                <h1 className="text-22 font-semibold">MY PROFILE</h1>
                <div className="border-gray-light rounded-2xl border py-7 px-5">
                  <div className="flex items-start">
                    <Picture
                      confirmUpload={confirmUpload}
                      isOpenSuccess={isOpenSuccess}
                      profiles={profiles}
                      onFileChange={onFileChange}
                      files={files}
                      handleImageUpload={handleImageUpdload}
                      showImage={showImage}
                      setOpenChangeImage={setOpenChangeImage}
                    />
                    {/* upload image dialog/popup */}
                    <ChangeImage
                      openChangeImage={openChangeImage}
                      setOpenChangeImage={setOpenChangeImage}
                      onFileChange={onFileChange}
                      handleImageUpload={handleImageUpdload}
                      showImage={showImage}
                      setShowImage={setShowImage}
                      files={files}
                    />

                    <div className="w-3/6 space-y-5">
                      {/* display profile  */}
                      <DisplayData
                        position={'top'}
                        profiles={dataProfile}
                        isLoadingProfile={isLoadingProfile}
                        isFetching={isFetchingProfile}
                      />

                      {/* Info mpc profile edit */}
                      <div>
                        <div className="bg-info-light mb-6 rounded-2xl py-3.5 px-5">
                          <div className="flex items-center text-xs font-semibold">
                            <i className="ico-mdi-information mr-1" />{' '}
                            Information
                          </div>
                          <div className="text-black-olive mt-1 text-sm">
                            You are signing in with your MPC account. Editing
                            this information means you're editing your MPC
                            account information.
                          </div>
                        </div>
                        <div
                          className="bg-pink-primary mx-auto w-[218px] cursor-pointer rounded p-3 text-center font-semibold tracking-wide text-white"
                          onClick={() => redirectMpc()}
                        >
                          Edit MPC Profile
                        </div>
                      </div>

                      {/* diplay profile data */}
                      <DisplayData
                        position={'bottom'}
                        profiles={dataProfile}
                        handleClick={handleClick}
                        isLoadingProfile={isLoadingProfile}
                        isFetching={isFetchingProfile}
                      />

                      <DialogEdit
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        editValue={editValue}
                        setEditValue={setEditValue}
                        setChangeData={setChangeData}
                        changeData={changeData}
                        handleSaveData={handleSaveData}
                        isLoadingProfile={isLoadingProfile}
                        isFetching={isFetchingProfile}
                        profiles={dataProfile}
                        showSave={showSave}
                        setShowSave={setShowSave}
                      />

                      {/* <Dialog
                        isOpenSuccess={isOpenSuccess}
                        setIsOpenSuccess={setIsOpen}
                        isValid={isValid}
                      /> */}
                      <Toast />
                      {/* <PrepareSize toLong={toLong} setToLong={setToLong} /> */}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </main>
  );
};

export default MyProfile;
