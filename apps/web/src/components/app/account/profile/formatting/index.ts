const year = new Date().getFullYear();

export function sizeDays(year: any, month: any) {
  // console.log(typeof year);
  return new Date(year, month, 0).getDate();
}

export const displayingMonths = [
  { val: '01', name: 'January' },
  { val: '02', name: 'February' },
  { val: '03', name: 'March' },
  { val: '04', name: 'April' },
  { val: '05', name: 'May' },
  { val: '06', name: 'June' },
  { val: '07', name: 'July' },
  { val: '08', name: 'August' },
  { val: '09', name: 'September' },
  { val: '10', name: 'October' },
  { val: '11', name: 'November' },
  { val: '12', name: 'December' },
];

export const displayingYears = Array.from(
  { length: year - 1940 },
  (value, index) => 1941 + index
);

export function extractDob(data: string) {
  const splitDate = data.split('-');
  return splitDate;
}

export function displayTops(profiles: any, password: string) {
  return [
    {
      id: 1,
      label: 'fullName',
      type: 'text',
      name: 'name',
      title: 'Full Name',
      value: profiles?.name,
    },
    {
      id: 2,
      label: 'emailAddress',
      type: 'email',
      name: 'email',
      title: 'Email Address',
      value: profiles?.email,
    },
    {
      id: 3,
      label: 'mobileNumber',
      type: 'number',
      name: 'mobile',
      title: 'Mobile Number',
      value: profiles?.mobile,
    },
    {
      id: 4,
      label: 'password',
      type: 'password',
      name: 'password',
      title: 'Password',
      value: profiles?.password ? profiles?.password : password,
    },
  ];
}

export function displayBottoms(profiles: any) {
  return [
    {
      id: 1,
      label: 'status',
      name: 'status',
      title: 'Status',
      value: profiles.marital_kind,
    },
    {
      id: 2,
      label: 'dob',
      name: 'dob',
      title: 'Date Of Birth',
      value: profiles.dob,
    },
    {
      id: 3,
      label: 'gender',
      name: 'gender',
      title: 'Gender',
      value: profiles.gender,
    },
  ];
}
