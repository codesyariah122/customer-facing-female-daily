const subMenu = [
  {
    target: 'delivery',
    data: [
      {
        id: 1,
        title: 'Delivery',
        query: 'delivery-method'
      },
      {
        id: 2,
        title: 'Shipping Address',
        query: 'delivery-method'
      },
      {
        id: 3,
        title: 'Delivery Method',
        query: 'delivery-method'
      },
      {
        id: 4,
        title: 'Notifications',
        query: 'delivery-method'
      },
      {
        id: 5,
        title: 'Delivery Insurance',
        query: 'delivery-method'
      }
    ],
  },
]

const topicQuestions = [
  {
    target: 'delivery-method',
    data: [
      {
        id: 1,
        title: 'How do I choose my delivery options at Setoko? ',
        query: 'do-you-deliver-on-weekend-or-public-holidays'
      },
      {
        id: 2,
        title: 'Will I be able to change my delivery method?',
        query: 'do-you-deliver-on-weekend-or-public-holidays'
      },
      {
        id: 3,
        title: 'What orders can be delivered within the Instant and Same-day?',
        query: 'do-you-deliver-on-weekend-or-public-holidays'
      },
      {
        id: 4,
        title: 'Do you deliver on weekend or public holidays?',
        query: 'do-you-deliver-on-weekend-or-public-holidays'
      }
    ]
  }
]


const contentQuestions = [
  {
    target: 'do-you-deliver-on-weekend-or-public-holidays',
    data: [
      {
        id: 1,
        title: 'Do you deliver on weekend or public holidays?',
        contents: `
          <p class="text-justify leading-loose w-full md:mb-12 mb-12">Unfortunately, no delivery will be made on weekend or public holidays. However, we will always maximize the delivery process to ensure they are shipped right to your door.
          If you are worried that your order might not arrive ahead of schedule, you can choose Same-day delivery option. This service is available for delivery within radius of 20 km from fullilment location, with terms and conditions apply. Learn more about Same-day or Next-day delivery here. </p>
        `
      }
    ]
  }
]
