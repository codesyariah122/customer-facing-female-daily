export const filtersData = {
  filtersTitle: 'Filter',
  filtersConfig: {
    categoriesFilterTitle: 'Categories',
    useCategoriesFilter: true,
    categoriesFilterData: [
      {
        filterType: 'category',
        filterName: 'Body Spray',
        filterValue: 'body-spray',
        checkboxItemsFilter: [
          {
            filterType: 'category',
            filterName: 'Top Body Spay',
            filterValue: 'top-body-spay',
          },
        ],
      },
      {
        filterType: 'category',
        filterName: 'Premium Parfume',
        filterValue: 'premium-parfume',
      },
      {
        filterType: 'category',
        filterName: 'Ladies Favourites',
        filterValue: 'ladies-favourites',
      },
      {
        filterType: 'category',
        filterName: 'Teen Spirits',
        filterValue: 'teen-spirits',
      },
      {
        filterType: 'category',
        filterName: "Valentine's Gift",
        filterValue: 'valentines-gift',
      },
    ],
    usePricesRangeFilter: true,
    pricesRangeFilterTitle: 'Prices Range',
    useLocationsFilter: true,
    locationsFilterTitle: 'Locations',
    locationsFilterData: [
      {
        filterType: 'location',
        filterName: 'Jabodetabek',
        filterValue: 'jabodetabek',
      },
      {
        filterType: 'location',
        filterName: 'Surabaya',
        filterValue: 'surabaya',
      },
      { filterType: 'location', filterName: 'Malang', filterValue: 'malang' },
      { filterType: 'location', filterName: 'Cirebon', filterValue: 'cirebon' },
    ],
    useShippingsFilter: true,
    shippingsFilterTitle: 'Shipping Methods',
    shippingsFilterData: [
      {
        filterType: 'shipping',
        filterName: 'Grab Same Day',
        filterValue: 'grab-same-day',
      },
      {
        filterType: 'shipping',
        filterName: 'Grab Instant',
        filterValue: 'grab-instant',
      },
      { filterType: 'shipping', filterName: 'JNE REG', filterValue: 'jne-reg' },
      { filterType: 'shipping', filterName: 'JNE YES', filterValue: 'jne-yes' },
    ],
    useOffersFilter: true,
    offersFilterTitle: 'Offers',
    offersFilterData: [
      {
        filterType: 'offer',
        filterName: 'Promo Coupon',
        filterValue: 'promo-coupon',
      },
      { filterType: 'offer', filterName: 'Cashback', filterValue: 'cashback' },
      {
        filterType: 'offer',
        filterName: 'Free Delivery',
        filterValue: 'free-delivery',
      },
    ],
    useRatingsFilter: true,
    ratingsFilterTitle: 'Rating',
    ratingsFilterData: [
      { filterType: 'rating', filterName: '1', filterValue: '1' },
      { filterType: 'rating', filterName: '2', filterValue: '2' },
      { filterType: 'rating', filterName: '3', filterValue: '3' },
      { filterType: 'rating', filterName: '4', filterValue: '4' },
      { filterType: 'rating', filterName: '5', filterValue: '5' },
    ],
    useSoldsByFilter: true,
    soldsByFilterTitle: 'Solds By',
    soldsByFilterData: [
      {
        filterType: 'soldby',
        filterName: 'FD STudio',
        filterValue: 'fd-studio',
      },
      {
        filterType: 'soldby',
        filterName: 'Super Partner',
        filterValue: 'super-partner',
      },
    ],
  },
};
