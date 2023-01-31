import React, { useState, useEffect, useCallback } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import clsx from 'clsx';
import closeIcon from '@assets/images/ico-close-circle.svg';
import { v4 as uuidv4 } from 'uuid';
import {
  displayingMonths,
  displayingYears,
  extractDob,
} from '@components/app/account/profile';

type typeMonth = {
  val: number;
  name: string;
};

const statusData = [
  { id: 1, name: 'IN_RELATIONSHIP' },
  { id: 2, name: 'SINGLE' },
  { id: 3, name: 'MARRIED' },
];

const genderData = [
  { id: 1, name: 'MALE' },
  { id: 2, name: 'FEMALE' },
  { id: 3, name: 'OTHERS' },
];

const DialogEdit = (props: any) => {
  const [selected, setSelected] = useState<boolean>(false);
  const [selectedYear, setSelectedYear] = useState<boolean>(false);
  const [selectedMonth, setSelectedMonth] = useState<boolean>(false);
  const [selectedDay, setSelectedDay] = useState<boolean>(false);

  const [day, setDay] = useState<string>('');
  const [currentMonth, setCurrentMonth] = useState<any>(null);
  const [currentYear, setCurrentYear] = useState<any>(null);
  const [birthDate, setBirthDate] = useState<string>('');
  const [changeYear, setChangeYear] = useState<any>(null);
  const [changeMonth, setChangeMonth] = useState<any>(null);
  const [changeDay, setChangeDay] = useState<any>(null);
  const [daySize, setDaySize] = useState<any>(0);

  const births =
    props.editValue === 'dob'
      ? extractDob(props.profiles?.dob ? props.profiles?.dob : null)
      : '';
  const years = props.editValue === 'dob' ? displayingYears : [];
  const months = props.editValue === 'dob' ? displayingMonths : [];

  const handleClosePopup = (e: any) => {
    if (e._reactName === 'onClick') {
      props.setIsOpen(false);
      setSelected(false);
    }
  };

  const setupOptionDay = useCallback(() => {
    if (currentMonth) {
      const yearParam = parseInt(currentYear);
      const monthParam = parseInt(currentMonth);

      const sizes = new Date(yearParam, monthParam, 0).getDate();
      // console.log(sizes);
      setDaySize(sizes);
    }
  }, [currentMonth, currentYear]);

  const changeSizesDay = (year: any, month: any) => {
    const monthParam = parseInt(month);
    const yearParam = parseInt(year);
    const sizes = new Date(yearParam, monthParam, 0).getDate();
    setDaySize(sizes);
  };

  useEffect(() => {
    setCurrentYear(births[0]);
    setCurrentMonth(births[1]);
    setDay(births[2]);
    if (!selectedYear && !selectedMonth && !selectedDay) {
      setupOptionDay();
    }
  });

  const handleChangeData = (e: any) => {
    if (e.target.value) {
      setSelected(true);
      props.setChangeData(e.target.value);
    }
  };

  const changeOptionYear = (e: any) => {
    if (e.target.value) {
      setSelectedYear(true);
      setChangeYear(e.target.value);
      const monthParam = selectedYear
        ? parseInt(changeYear)
        : parseInt(currentYear);
      const yearParam = parseInt(e.target.value);
      changeSizesDay(yearParam, monthParam);
    }
  };

  const changeOptionMonth = (e: any) => {
    setSelectedMonth(true);
    if (e.target.value) {
      setChangeMonth(e.target.value);
      const yearParam = selectedYear
        ? parseInt(changeYear)
        : parseInt(currentYear);
      const monthParam = parseInt(e.target.value);
      changeSizesDay(yearParam, monthParam);
    }
  };

  const changeOptionDay = (e: any) => {
    if (e.target.value) {
      setSelectedDay(true);
      setChangeDay(e.target.value);
    }
  };

  function setBirthOfDay() {
    props.setShowSave(true);
    const yearParam = !selectedYear ? currentYear : changeYear;
    const monthParam = !selectedMonth ? currentMonth : changeMonth;
    const dayParam = !selectedDay ? day : changeDay;
    const birthDay = `${yearParam}-${monthParam}-${dayParam}`;
    setBirthDate(birthDay.toString());
    props.setChangeData(birthDay);
  }

  return (
    <>
      <Transition
        appear
        show={props.isOpen}
        as={React.Fragment}
        onClose={handleClosePopup}
      >
        <Dialog
          open={props.isOpen}
          className={clsx(
            'fixed inset-0 z-10 flex items-center justify-center overflow-y-auto',
            {
              'bg-transparent': props.isOpen === true,
            }
          )}
          onClose={() => null}
        >
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto" aria-hidden="true">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="animation-bounce w-[800px] max-w-md transform overflow-hidden rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all">
                  <div
                    className="relative cursor-pointer"
                    onClick={handleClosePopup}
                  >
                    <div className="absolute top-0 right-0">
                      <Image
                        src={closeIcon}
                        width={30}
                        height={30}
                        alt="close-icon"
                      />
                    </div>
                  </div>
                  <div className="mt-12 flex place-content-center justify-center">
                    <div className="items-center">
                      <Dialog.Title
                        as="h3"
                        className="text-semibold text-2xl font-medium capitalize text-gray-900"
                      >
                        Change{' '}
                        {props.editValue !== 'dob'
                          ? props.editValue
                          : 'of birthday'}
                      </Dialog.Title>
                    </div>
                  </div>

                  {props.editValue === 'status' ? (
                    <div className="grid grid-cols-1 justify-center">
                      <div className="col-span-full">
                        <div className="mt-12 flex place-content-center items-center justify-center">
                          <div className="h-10 w-full shrink-0 rounded-md">
                            <select
                              className="h-10 w-full border-2 border-gray-400"
                              name={props.editValue}
                              onChange={handleChangeData}
                              value={
                                !selected
                                  ? props.profiles.marital_kind
                                  : props.changeData
                              }
                            >
                              {statusData.map((status: any) => (
                                <option
                                  key={uuidv4()}
                                  className="h-8 capitalize"
                                  value={status.name}
                                >
                                  {status.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="mt-12 mb-12 flex place-content-center justify-center space-x-4">
                          <div className="flex-1">
                            <button
                              className="h-12 w-48 rounded-md border-2 border-gray-300 bg-white drop-shadow-sm"
                              onClick={handleClosePopup}
                            >
                              Cancel
                            </button>
                          </div>
                          <div className="flex-1">
                            <button
                              className="h-12 w-48 rounded-md border-2 border-gray-300 bg-gray-300 drop-shadow-sm"
                              onClick={() => props.handleSaveData('status')}
                            >
                              save
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : props.editValue === 'gender' ? (
                    <div className="grid grid-cols-1 justify-center">
                      <div className="col-span-full">
                        <div className="mt-12 flex place-content-center items-center justify-center">
                          <div className="h-10 w-full shrink-0 rounded-md">
                            <select
                              className="h-10 w-full border-2 border-gray-400"
                              name={props.editValue}
                              onChange={handleChangeData}
                              value={
                                !selected
                                  ? props.profiles.gender
                                  : props.changeData
                              }
                            >
                              {genderData.map((gender: any) => (
                                <option
                                  key={uuidv4()}
                                  className="h-8 capitalize"
                                  value={gender.name}
                                >
                                  {props.isLoadingProfile ? (
                                    <span>Loading .... </span>
                                  ) : (
                                    gender.name
                                  )}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="mt-12 mb-12 flex place-content-center justify-center space-x-4">
                          <div className="flex-1">
                            <button
                              className="h-12 w-48 rounded-md border-2 border-gray-300 bg-white drop-shadow-sm"
                              onClick={handleClosePopup}
                            >
                              Cancel
                            </button>
                          </div>
                          <div className="flex-1">
                            <button
                              className="h-12 w-48 rounded-md border-2 border-gray-300 bg-gray-300 drop-shadow-sm"
                              onClick={() => props.handleSaveData('gender')}
                            >
                              save
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : props.editValue === 'dob' ? (
                    <div className="grid grid-cols-1 justify-center">
                      <div className="col-span-full">
                        <div className="mt-12 mb-16 flex place-content-center items-center justify-center space-x-4">
                          <div className="h-10 rounded-md">
                            <label htmlFor="day" className="text-md font-bold">
                              Day
                            </label>
                            <select
                              className="h-10 w-full border-2 border-gray-400"
                              name="day"
                              id="day"
                              onChange={changeOptionDay}
                              value={
                                !selectedDay ? parseInt(day) : changeDay
                              }
                            >
                              {[...Array(daySize + 1)]
                                .map((_: any, idx: number) => (
                                  <option
                                    key={uuidv4()}
                                    className="h-8 capitalize"
                                    value={idx}
                                  >
                                    {idx}
                                  </option>
                                ))
                                .slice(1)}
                            </select>
                          </div>

                          <div className="h-10 rounded-md">
                            <label
                              htmlFor="month"
                              className="text-md font-bold"
                            >
                              Month
                            </label>
                            <select
                              className="h-10 w-full border-2 border-gray-400"
                              name="month"
                              id="month"
                              onChange={changeOptionMonth}
                              value={
                                !selectedMonth ? currentMonth : changeMonth
                              }
                            >
                              {months.map((month: any) => (
                                <option
                                  key={uuidv4()}
                                  className="h-8 capitalize"
                                  value={month.val}
                                >
                                  {month.name}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div className="h-10 rounded-md">
                            <label htmlFor="year" className="text-md font-bold">
                              Year
                            </label>
                            <select
                              className="h-10 w-full border-2 border-gray-400"
                              name="year"
                              id="year"
                              onChange={changeOptionYear}
                              value={!selectedYear ? currentYear : changeYear}
                            >
                              <option value="">-Pilih-</option>
                              {years.map((year: any) => (
                                <option
                                  key={uuidv4()}
                                  className="h-8 capitalize"
                                  value={year}
                                >
                                  {year}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="mt-12 mb-12 flex place-content-center justify-center space-x-4">
                          <div className="flex-1">
                            <button
                              className="h-12 w-48 rounded-md border-2 border-gray-300 bg-white drop-shadow-sm"
                              onClick={handleClosePopup}
                            >
                              Cancel
                            </button>
                          </div>
                          {props.showSave ? (
                            <div className="flex-1">
                              <button
                                className="h-12 w-48 rounded-md border-2 border-gray-300 bg-gray-300 drop-shadow-sm"
                                onClick={() => props.handleSaveData('dob')}
                              >
                                save
                              </button>
                            </div>
                          ) : (
                            <div className="flex-1">
                              <button
                                className="h-12 w-48 rounded-md border-2 border-gray-100 bg-red-600 font-semibold text-white drop-shadow-sm hover:bg-white hover:text-gray-600"
                                onClick={() => setBirthOfDay()}
                              >
                                Set Birthday
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <h1>Not Found</h1>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default DialogEdit;
