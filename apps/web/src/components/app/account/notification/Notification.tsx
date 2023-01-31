'use client';
import {
  Menu as MenuAccount,
  Notificationlist,
} from '@components/app/account/notification';
import { Menu, Dialog, Transition } from '@headlessui/react';
import { useNotification } from '@hooks/useNotification';
import { useNotificationStatus } from '@hooks/useNotificationStatus';
import { useNotificationStatusMutate } from '@hooks/useNotificationStatus/Mutate';
import { useNotificationReadMutate } from '@hooks/useNotification/MutateRead';
import { Fragment, useState } from 'react';
import { FDLoading } from '@components/app/commons';
import { useRouter } from 'next/navigation';
import { useNotificationReadAllMutate } from '@hooks/useNotification/MutateReadAll';

// TODO: edit email is not provide
// TODO: sekelton
// FIXME: props use any
// FIXME: route to notif detail

const NotificationPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEmail, setIsOpenEmail] = useState(false);
  const [isLoadingPage, setIsLoadingPage] = useState(false);
  const [statusNotif, setStatusNotif] = useState<string>('push');
  const router = useRouter();

  // close modal setting push notif
  const closeModal = () => {
    setIsOpen(false);
  };
  // ---

  // openmodal setting push notif
  const openModal = () => {
    setIsOpen(true);
    setStatusNotif('push');
  };
  // ---

  // close modal setting push notif email
  const closeModalEmail = () => {
    setIsOpenEmail(false);
  };
  // ---

  // open modal setting push notif email
  const openModalEmail = () => {
    setIsOpenEmail(true);
    setStatusNotif('email');
  };
  // ---

  // for query data notification
  const [paramsNotif, setParamsNotif] = useState<string>('UPDATE');
  const { data, isLoading, refetch: refetchNotif } = useNotification('ALL');
  const {
    data: dataUpdates,
    isLoading: isLoadingUpdates,
    refetch: refetchUpdates,
  } = useNotification(paramsNotif);
  // ---

  // for get data push notification status on setting
  const { data: dataNotifStatus, refetch: refetchNotificationStatus } =
    useNotificationStatus(statusNotif);
  // ---

  // for mutate/update data push notif status on setting
  const { mutate, isLoading: isLoadingNotificationStatusMutate } =
    useNotificationStatusMutate();
  // ---

  // for mutate/update read notif
  const { mutate: mutateRead } = useNotificationReadMutate();
  // ---

  // fn for run update set notif status on setting
  const setNotifStatus = (kind: string, type: string, value: boolean) => {
    const params = {
      kind: kind,
      type: type,
      value: value,
    };

    mutate(params, {
      onSuccess: () => {
        setStatusNotif(type);
        refetchNotificationStatus();
      },
    });
  };
  // ---

  // fn for update read notif
  const setRead = (
    value: string,
    read: boolean | undefined,
    link: string | undefined
  ) => {
    setIsLoadingPage(true);
    !read &&
      mutateRead(value, {
        onSuccess: () => {
          refetchNotif();
        },
      });
    link !== undefined ? router.push(link) : setIsLoadingPage(false);
  };
  // ---

  // for mutate/update read all notif
  const { mutate: mutateReadAll } = useNotificationReadAllMutate();
  // ---

  // fn for mark all as read
  const markAllAsRead = (value: string, unread: number) => {
    unread > 0 && setIsLoadingPage(true);
    unread > 0 &&
      mutateReadAll(value, {
        onSuccess: () => {
          refetchNotif();
          refetchUpdates();
          setIsLoadingPage(false);
        },
      });
  };
  // ---

  return (
    <div className="container mx-auto mt-8 xl:max-w-screen-xl">
      <div className="flex space-x-8">
        <MenuAccount />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h1 className="text-22 font-semibold">NOTIFICATIONS</h1>
            <Menu as="div" className="relative">
              <Menu.Button as="div" className="cursor-pointer">
                <i className="ico-settings"></i>
              </Menu.Button>
              <Menu.Items
                as="section"
                className="border-gray-10 absolute top-full right-0 z-10 flex w-[183px] flex-col gap-y-5 rounded border bg-white px-5 py-4 shadow-md focus:outline-none"
              >
                <Menu.Item
                  as="div"
                  className="text-black-olive cursor-pointer text-sm tracking-wider"
                  onClick={openModal}
                >
                  Push Notification
                </Menu.Item>
                <Menu.Item
                  as="div"
                  className="text-black-olive cursor-pointer text-sm tracking-wider"
                  onClick={openModalEmail}
                >
                  Email
                </Menu.Item>
              </Menu.Items>
            </Menu>
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded bg-white p-10 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                          as="h3"
                          className="relative flex justify-center"
                        >
                          <div className="text-lg font-semibold">
                            PUSH NOTIFICATION
                          </div>
                          <div
                            className="absolute -right-5 -top-5 cursor-pointer"
                            onClick={closeModal}
                          >
                            <i className="ico-close-circle"></i>
                          </div>
                        </Dialog.Title>

                        <div className="mt-16 flex flex-col gap-y-4 px-16">
                          <div className="border-ghost-white border-b-4 pb-6 last:border-b-0 last:pb-0">
                            <strong className="text-sm font-medium tracking-wider">
                              Female Daily Updates
                            </strong>
                            <div className="mt-4 flex flex-col gap-y-4 pl-5">
                              <label
                                htmlFor="promo_and_event"
                                className="border-ghost-white relative flex cursor-pointer items-center justify-between border-b pb-2 last:border-b-0"
                              >
                                <span className="text-sm tracking-wider">
                                  Promos & Events
                                </span>
                                <div className="relative">
                                  <input
                                    type="checkbox"
                                    id="promo_and_event"
                                    className="peer sr-only"
                                    onChange={() =>
                                      setNotifStatus(
                                        'promo_and_event',
                                        'push',
                                        !dataNotifStatus?.details
                                          ?.setoko_updates?.promo_and_event
                                      )
                                    }
                                    defaultChecked={
                                      dataNotifStatus?.details?.setoko_updates
                                        ?.promo_and_event
                                    }
                                  />
                                  <div
                                    className="
                                  peer-checked:bg-teal-primary
                                  peer
                                  h-[22px]
                                  w-[38px]
                                  rounded-full
                                  bg-gray-200
                                  after:absolute
                                  after:top-[3px]
                                  after:left-[2px]
                                  after:h-[16px]
                                  after:w-[16px]
                                  after:rounded-full
                                  after:border
                                  after:border-gray-300
                                  after:bg-white
                                  after:shadow
                                  after:transition-all
                                  after:content-['']
                                  peer-checked:after:translate-x-full
                                  peer-checked:after:border-white"
                                  />
                                </div>
                              </label>
                              <label
                                htmlFor="information"
                                className="border-ghost-white relative flex cursor-pointer items-center justify-between border-b pb-2 last:border-b-0"
                              >
                                <span className="text-sm tracking-wider">
                                  Information
                                </span>
                                <div className="relative">
                                  <input
                                    type="checkbox"
                                    id="information"
                                    className="peer sr-only"
                                    onChange={() =>
                                      setNotifStatus(
                                        'information',
                                        'push',
                                        !dataNotifStatus?.details
                                          ?.setoko_updates?.information
                                      )
                                    }
                                    defaultChecked={
                                      dataNotifStatus?.details?.setoko_updates
                                        ?.information
                                    }
                                  />
                                  <div
                                    className="
                                  peer-checked:bg-teal-primary
                                  peer
                                  h-[22px]
                                  w-[38px]
                                  rounded-full
                                  bg-gray-200
                                  after:absolute
                                  after:top-[3px]
                                  after:left-[2px]
                                  after:h-[16px]
                                  after:w-[16px]
                                  after:rounded-full
                                  after:border
                                  after:border-gray-300
                                  after:bg-white
                                  after:shadow
                                  after:transition-all
                                  after:content-['']
                                  peer-checked:after:translate-x-full
                                  peer-checked:after:border-white"
                                  />
                                </div>
                              </label>
                            </div>
                          </div>
                          <div className="border-ghost-white border-b-4 pb-6 last:border-b-0 last:pb-0">
                            <strong className="text-sm font-medium tracking-wider">
                              Order
                            </strong>
                            <div className="mt-4 flex flex-col gap-y-4 pl-5">
                              <label
                                htmlFor="order_status"
                                className="border-ghost-white relative flex cursor-pointer items-center justify-between border-b pb-2 last:border-b-0"
                              >
                                <span className="text-sm tracking-wider">
                                  Order Status
                                </span>
                                <div className="relative">
                                  <input
                                    type="checkbox"
                                    id="order_status"
                                    className="peer sr-only"
                                    onChange={() =>
                                      setNotifStatus(
                                        'order_status',
                                        'push',
                                        !dataNotifStatus?.details?.order
                                          ?.order_status
                                      )
                                    }
                                    defaultChecked={
                                      dataNotifStatus?.details?.order
                                        ?.order_status
                                    }
                                  />
                                  <div
                                    className="
                                  peer-checked:bg-teal-primary
                                  peer
                                  h-[22px]
                                  w-[38px]
                                  rounded-full
                                  bg-gray-200
                                  after:absolute
                                  after:top-[3px]
                                  after:left-[2px]
                                  after:h-[16px]
                                  after:w-[16px]
                                  after:rounded-full
                                  after:border
                                  after:border-gray-300
                                  after:bg-white
                                  after:shadow
                                  after:transition-all
                                  after:content-['']
                                  peer-checked:after:translate-x-full
                                  peer-checked:after:border-white"
                                  />
                                </div>
                              </label>
                            </div>
                          </div>
                          <div className="border-ghost-white border-b-4 pb-6 last:border-b-0 last:pb-0">
                            <strong className="text-sm font-medium tracking-wider">
                              Digital Care Chat
                            </strong>
                            <div className="mt-4 flex flex-col gap-y-4 pl-5">
                              <label
                                htmlFor="chat_response"
                                className="border-ghost-white relative flex cursor-pointer items-center justify-between border-b pb-2 last:border-b-0"
                              >
                                <span className="text-sm tracking-wider">
                                  Chat Response
                                </span>
                                <div className="relative">
                                  <input
                                    type="checkbox"
                                    id="chat_response"
                                    className="peer sr-only"
                                    onChange={() =>
                                      setNotifStatus(
                                        'chat_response',
                                        'push',
                                        !dataNotifStatus?.details
                                          ?.digital_care_chat?.chat_response
                                      )
                                    }
                                    defaultChecked={
                                      dataNotifStatus?.details
                                        ?.digital_care_chat?.chat_response
                                    }
                                  />
                                  <div
                                    className="
                                  peer-checked:bg-teal-primary
                                  peer
                                  h-[22px]
                                  w-[38px]
                                  rounded-full
                                  bg-gray-200
                                  after:absolute
                                  after:top-[3px]
                                  after:left-[2px]
                                  after:h-[16px]
                                  after:w-[16px]
                                  after:rounded-full
                                  after:border
                                  after:border-gray-300
                                  after:bg-white
                                  after:shadow
                                  after:transition-all
                                  after:content-['']
                                  peer-checked:after:translate-x-full
                                  peer-checked:after:border-white"
                                  />
                                </div>
                              </label>
                              <label
                                htmlFor="return_and_refund"
                                className="border-ghost-white relative flex cursor-pointer items-center justify-between border-b pb-2 last:border-b-0"
                              >
                                <span className="text-sm tracking-wider">
                                  Return & Refund
                                </span>
                                <div className="relative">
                                  <input
                                    type="checkbox"
                                    id="return_and_refund"
                                    className="peer sr-only"
                                    onChange={() =>
                                      setNotifStatus(
                                        'return_and_refund',
                                        'push',
                                        !dataNotifStatus?.details
                                          ?.digital_care_chat?.return_and_refund
                                      )
                                    }
                                    defaultChecked={
                                      dataNotifStatus?.details
                                        ?.digital_care_chat?.return_and_refund
                                    }
                                  />
                                  <div
                                    className="
                                  peer-checked:bg-teal-primary
                                  peer
                                  h-[22px]
                                  w-[38px]
                                  rounded-full
                                  bg-gray-200
                                  after:absolute
                                  after:top-[3px]
                                  after:left-[2px]
                                  after:h-[16px]
                                  after:w-[16px]
                                  after:rounded-full
                                  after:border
                                  after:border-gray-300
                                  after:bg-white
                                  after:shadow
                                  after:transition-all
                                  after:content-['']
                                  peer-checked:after:translate-x-full
                                  peer-checked:after:border-white"
                                  />
                                </div>
                              </label>
                              <label
                                htmlFor="my_ticket"
                                className="border-ghost-white relative flex cursor-pointer items-center justify-between border-b pb-2 last:border-b-0"
                              >
                                <span className="text-sm tracking-wider">
                                  My Ticket
                                </span>
                                <div className="relative">
                                  <input
                                    type="checkbox"
                                    id="my_ticket"
                                    className="peer sr-only"
                                    onChange={() =>
                                      setNotifStatus(
                                        'my_ticket',
                                        'push',
                                        !dataNotifStatus?.details
                                          ?.digital_care_chat?.my_ticket
                                      )
                                    }
                                    defaultChecked={
                                      dataNotifStatus?.details
                                        ?.digital_care_chat?.my_ticket
                                    }
                                  />
                                  <div
                                    className="
                                  peer-checked:bg-teal-primary
                                  peer
                                  h-[22px]
                                  w-[38px]
                                  rounded-full
                                  bg-gray-200
                                  after:absolute
                                  after:top-[3px]
                                  after:left-[2px]
                                  after:h-[16px]
                                  after:w-[16px]
                                  after:rounded-full
                                  after:border
                                  after:border-gray-300
                                  after:bg-white
                                  after:shadow
                                  after:transition-all
                                  after:content-['']
                                  peer-checked:after:translate-x-full
                                  peer-checked:after:border-white"
                                  />
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
            <Transition appear show={isOpenEmail} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-10"
                onClose={closeModalEmail}
              >
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded bg-white p-10 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                          as="h3"
                          className="relative flex justify-center"
                        >
                          <div className="text-lg font-semibold">EMAIL</div>
                          <div
                            className="absolute -right-5 -top-5 cursor-pointer"
                            onClick={closeModalEmail}
                          >
                            <i className="ico-close-circle"></i>
                          </div>
                        </Dialog.Title>
                        <div className="mt-8 flex flex-col gap-y-4 px-16">
                          <div className="bg-bubbles flex items-center justify-between rounded p-3">
                            <div className="flex flex-col">
                              <div className="text-black-light text-xs font-medium tracking-wider">
                                Send my email notifications to
                              </div>
                              <div className="mt-1 text-xs font-medium tracking-wider">
                                {dataNotifStatus?.details?.email}
                              </div>
                            </div>
                            <div className="text-pink-primary cursor-pointer text-xs font-medium">
                              Edit
                            </div>
                          </div>
                          <div className="border-ghost-white border-b-4 pb-6 last:border-b-0 last:pb-0">
                            <strong className="text-sm font-medium tracking-wider">
                              Transactions
                            </strong>
                            <div className="mt-4 flex flex-col gap-y-4 pl-5">
                              <label
                                htmlFor="need_payment"
                                className="border-ghost-white relative flex cursor-pointer items-center justify-between border-b pb-2 last:border-b-0"
                              >
                                <span className="text-sm tracking-wider">
                                  Need Payment
                                </span>
                                <div className="relative">
                                  <input
                                    type="checkbox"
                                    id="need_payment"
                                    className="peer sr-only"
                                    onChange={() =>
                                      setNotifStatus(
                                        'need_payment',
                                        'email',
                                        !dataNotifStatus?.details?.transactions
                                          ?.need_payment
                                      )
                                    }
                                    defaultChecked={
                                      dataNotifStatus?.details?.transactions
                                        ?.need_payment
                                    }
                                  />
                                  <div
                                    className="
                                  peer-checked:bg-teal-primary
                                  peer
                                  h-[22px]
                                  w-[38px]
                                  rounded-full
                                  bg-gray-200
                                  after:absolute
                                  after:top-[3px]
                                  after:left-[2px]
                                  after:h-[16px]
                                  after:w-[16px]
                                  after:rounded-full
                                  after:border
                                  after:border-gray-300
                                  after:bg-white
                                  after:shadow
                                  after:transition-all
                                  after:content-['']
                                  peer-checked:after:translate-x-full
                                  peer-checked:after:border-white"
                                  />
                                </div>
                              </label>
                              <label
                                htmlFor="in_process"
                                className="border-ghost-white relative flex cursor-pointer items-center justify-between border-b pb-2 last:border-b-0"
                              >
                                <span className="text-sm tracking-wider">
                                  In Process
                                </span>
                                <div className="relative">
                                  <input
                                    type="checkbox"
                                    id="in_process"
                                    className="peer sr-only"
                                    onChange={() =>
                                      setNotifStatus(
                                        'in_process',
                                        'email',
                                        !dataNotifStatus?.details?.transactions
                                          ?.in_process
                                      )
                                    }
                                    defaultChecked={
                                      dataNotifStatus?.details?.transactions
                                        ?.in_process
                                    }
                                  />
                                  <div
                                    className="
                                  peer-checked:bg-teal-primary
                                  peer
                                  h-[22px]
                                  w-[38px]
                                  rounded-full
                                  bg-gray-200
                                  after:absolute
                                  after:top-[3px]
                                  after:left-[2px]
                                  after:h-[16px]
                                  after:w-[16px]
                                  after:rounded-full
                                  after:border
                                  after:border-gray-300
                                  after:bg-white
                                  after:shadow
                                  after:transition-all
                                  after:content-['']
                                  peer-checked:after:translate-x-full
                                  peer-checked:after:border-white"
                                  />
                                </div>
                              </label>
                              <label
                                htmlFor="in_delivery"
                                className="border-ghost-white relative flex cursor-pointer items-center justify-between border-b pb-2 last:border-b-0"
                              >
                                <span className="text-sm tracking-wider">
                                  In Delivery
                                </span>
                                <div className="relative">
                                  <input
                                    type="checkbox"
                                    id="in_delivery"
                                    className="peer sr-only"
                                    onChange={() =>
                                      setNotifStatus(
                                        'in_delivery',
                                        'email',
                                        !dataNotifStatus?.details?.transactions
                                          ?.in_delivery
                                      )
                                    }
                                    defaultChecked={
                                      dataNotifStatus?.details?.transactions
                                        ?.in_delivery
                                    }
                                  />
                                  <div
                                    className="
                                  peer-checked:bg-teal-primary
                                  peer
                                  h-[22px]
                                  w-[38px]
                                  rounded-full
                                  bg-gray-200
                                  after:absolute
                                  after:top-[3px]
                                  after:left-[2px]
                                  after:h-[16px]
                                  after:w-[16px]
                                  after:rounded-full
                                  after:border
                                  after:border-gray-300
                                  after:bg-white
                                  after:shadow
                                  after:transition-all
                                  after:content-['']
                                  peer-checked:after:translate-x-full
                                  peer-checked:after:border-white"
                                  />
                                </div>
                              </label>
                              <label
                                htmlFor="order_delivered"
                                className="border-ghost-white relative flex cursor-pointer items-center justify-between border-b pb-2 last:border-b-0"
                              >
                                <span className="text-sm tracking-wider">
                                  Order Delivered
                                </span>
                                <div className="relative">
                                  <input
                                    type="checkbox"
                                    id="order_delivered"
                                    className="peer sr-only"
                                    onChange={() =>
                                      setNotifStatus(
                                        'order_delivered',
                                        'email',
                                        !dataNotifStatus?.details?.transactions
                                          ?.order_delivered
                                      )
                                    }
                                    defaultChecked={
                                      dataNotifStatus?.details?.transactions
                                        ?.order_delivered
                                    }
                                  />
                                  <div
                                    className="
                                  peer-checked:bg-teal-primary
                                  peer
                                  h-[22px]
                                  w-[38px]
                                  rounded-full
                                  bg-gray-200
                                  after:absolute
                                  after:top-[3px]
                                  after:left-[2px]
                                  after:h-[16px]
                                  after:w-[16px]
                                  after:rounded-full
                                  after:border
                                  after:border-gray-300
                                  after:bg-white
                                  after:shadow
                                  after:transition-all
                                  after:content-['']
                                  peer-checked:after:translate-x-full
                                  peer-checked:after:border-white"
                                  />
                                </div>
                              </label>
                              <label
                                htmlFor="order_completed"
                                className="border-ghost-white relative flex cursor-pointer items-center justify-between border-b pb-2 last:border-b-0"
                              >
                                <span className="text-sm tracking-wider">
                                  Order Completed
                                </span>
                                <div className="relative">
                                  <input
                                    type="checkbox"
                                    id="order_completed"
                                    className="peer sr-only"
                                    onChange={() =>
                                      setNotifStatus(
                                        'order_completed',
                                        'email',
                                        !dataNotifStatus?.details?.transactions
                                          ?.order_completed
                                      )
                                    }
                                    defaultChecked={
                                      dataNotifStatus?.details?.transactions
                                        ?.order_completed
                                    }
                                  />
                                  <div
                                    className="
                                  peer-checked:bg-teal-primary
                                  peer
                                  h-[22px]
                                  w-[38px]
                                  rounded-full
                                  bg-gray-200
                                  after:absolute
                                  after:top-[3px]
                                  after:left-[2px]
                                  after:h-[16px]
                                  after:w-[16px]
                                  after:rounded-full
                                  after:border
                                  after:border-gray-300
                                  after:bg-white
                                  after:shadow
                                  after:transition-all
                                  after:content-['']
                                  peer-checked:after:translate-x-full
                                  peer-checked:after:border-white"
                                  />
                                </div>
                              </label>
                            </div>
                          </div>
                          <div className="border-ghost-white border-b-4 pb-6 last:border-b-0 last:pb-0">
                            <strong className="text-sm font-medium tracking-wider">
                              Promo
                            </strong>
                            <div className="mt-4 flex flex-col gap-y-4 pl-5">
                              <label
                                htmlFor="setoko_newsletter"
                                className="border-ghost-white relative flex cursor-pointer items-center justify-between border-b pb-2 last:border-b-0"
                              >
                                <div className="pr-4">
                                  <div className="text-sm tracking-wider">
                                    Female Daily Newsletter
                                  </div>
                                  <div className="text-black-light text-xs">
                                    Stay up to date on the latest promotions and
                                    offers from Female Daily.
                                  </div>
                                </div>
                                <div className="relative">
                                  <input
                                    type="checkbox"
                                    id="setoko_newsletter"
                                    className="peer sr-only"
                                    onChange={() =>
                                      setNotifStatus(
                                        'setoko_newsletter',
                                        'email',
                                        !dataNotifStatus?.details?.promo
                                          ?.setoko_newsletter
                                      )
                                    }
                                    defaultChecked={
                                      dataNotifStatus?.details?.promo
                                        ?.setoko_newsletter
                                    }
                                  />
                                  <div
                                    className="
                                  peer-checked:bg-teal-primary
                                  peer
                                  h-[22px]
                                  w-[38px]
                                  rounded-full
                                  bg-gray-200
                                  after:absolute
                                  after:top-[3px]
                                  after:left-[2px]
                                  after:h-[16px]
                                  after:w-[16px]
                                  after:rounded-full
                                  after:border
                                  after:border-gray-300
                                  after:bg-white
                                  after:shadow
                                  after:transition-all
                                  after:content-['']
                                  peer-checked:after:translate-x-full
                                  peer-checked:after:border-white"
                                  />
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </div>
          <Notificationlist
            data={data}
            dataUpdates={dataUpdates}
            isLoading={isLoading}
            setReadFn={setRead}
            setReadAllFn={markAllAsRead}
            setParamsNotif={setParamsNotif}
            paramsNotif={paramsNotif}
          />
        </div>
      </div>
      {(isLoadingNotificationStatusMutate || isLoading || isLoadingPage) && (
        <FDLoading />
      )}
    </div>
  );
};

export default NotificationPage;
