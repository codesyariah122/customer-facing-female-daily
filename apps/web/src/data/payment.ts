export const paymentData = {
  MainPageTitle: 'Select Payment Method',
  datasource: [
    {
      title: 'Allo Payment',
      group_code: 'allo_payment',
      datalist: [
        {
          title: 'Allo Wallet And MPC Point Test',
          type: 'MPG',
          description: 'Test Dewscription',
          method: 'ctcd_megapay_allo_wallet_plus',
          logo: 'https://media-fd-dev.setoko-test.com/images/38d9635b-79f2-4c0a-b792-7bb81edaf172.jpg',
          is_active: true,
        },
      ],
    },
    {
      title: 'Bank Mega',
      group_code: 'bank_mega',
      datalist: [
        {
          title: 'Mega Debit Card',
          type: 'MPG',
          description: 'ok test',
          method: 'ctcd_megapay_debit',
          logo: 'blob:http://localhost:9092/11a157b1-7279-43f6-b884-a4843cf15d86',
          is_active: true,
        },
        {
          title: 'Mega Virtual Account',
          type: 'MPG',
          description: 'as',
          method: 'ctcd_megapay_va',
          logo: 'https://media-fd-dev.setoko-test.com/images/f035aafe-f689-4ccc-8ba5-07729244345b.jpg',
          is_active: true,
        },
        {
          title: 'Mega Credit Card',
          type: 'MPG',
          method: 'ctcd_megapay_cc',
          is_active: true,
        },
      ],
    },
    {
      title: 'Other Payments',
      group_code: 'other_payments',
      datalist: [
        {
          title: 'Debit / Credit Card',
          description: 'Full Payment & Installment Available',
          group_code: 'debit_credit_other_payments',
          datalist: [
            {
              title: 'All Bank Debit Card',
              type: 'MPG',
              description: 'v',
              method: 'ctcd_megapay_allbank_debit',
              logo: 'https://media-fd-dev.setoko-test.com/images/b528a996-90ff-4993-8aca-a86c4ea28edc.jpg',
              is_active: true,
            },
            {
              title: 'All Bank Credit Card',
              type: 'MPG',
              method: 'ctcd_megapay_allbank_cc',
              is_active: true,
            },
          ],
          is_active: true,
        },
        {
          title: 'Virtual Account',
          description: 'Bank transfer using virtual account',
          group_code: 'va_other_payments',
          datalist: [
            {
              title: 'Mega Virtual Account',
              type: 'MPG',
              description: 'as',
              method: 'ctcd_megapay_va',
              logo: 'https://media-fd-dev.setoko-test.com/images/f035aafe-f689-4ccc-8ba5-07729244345b.jpg',
              is_active: true,
            },
            {
              title: 'BNI Virtual Account',
              type: 'MPG',
              method: 'ctcd_megapay_bni_va',
              is_active: true,
            },
            {
              title: 'BRI Virtual Account',
              type: 'MPG',
              method: 'ctcd_megapay_bri_va',
              is_active: true,
            },
            {
              title: 'Mandiri Virtual Account',
              type: 'MPG',
              method: 'ctcd_megapay_mandiri_va',
              is_active: true,
            },
            {
              title: 'Bank BCA Virtual Account',
              type: 'MPG',
              method: 'ctcd_megapay_bca_va',
              is_active: true,
            },
          ],
          is_active: true,
        },
        {
          title: 'Instant Payment',
          description: 'Payment Using QR Code',
          group_code: 'instan_other_payments',
          datalist: [
            {
              title: 'Instant Payment',
              type: 'MPG',
              method: 'ctcd_megapay_qris',
              is_active: true,
            },
          ],
          is_active: true,
        },
      ],
    },
    {
      title: 'Offline Payments',
      group_code: 'offline_payments',
      datalist: [
        {
          title: 'Free Payment',
          type: 'MPG',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          method: 'ctcd_freepay',
          logo: 'https://fd-stg.setoko-test.com/media/logo/paymentmethod/',
          is_active: true,
        },
      ],
    },
  ],
};
