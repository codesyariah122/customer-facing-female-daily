import {
  _ACCOUNT_ORDER_LINK_,
  _ACCOUNT_PROFILE_LINK_,
  _ACCOUNT_ADDRESS_LINK_,
  _ACCOUNT_ISSUES_LINK_,
  _ACCOUNT_PAYMENT_LINK_,
  _ACCOUNT_WISHLIST_LINK_,
  _ACCOUNT_COUPON_LINK_,
} from '@constants/url_page';

export const menuAccount = [
  {
    id: '1',
    label: 'My Order',
    icon: 'ico-menu-order',
    url: _ACCOUNT_ORDER_LINK_,
  },
  {
    id: '2',
    label: 'My Profile',
    icon: 'ico-menu-profile',
    url: _ACCOUNT_PROFILE_LINK_,
  },
  {
    id: '3',
    label: 'My Coupons',
    icon: 'ico-menu-coupon',
    url: _ACCOUNT_COUPON_LINK_,
  },
  {
    id: '4',
    label: 'My Address',
    icon: 'ico-menu-address',
    url: _ACCOUNT_ADDRESS_LINK_,
  },
  {
    id: '5',
    label: 'Debit & Credit Card',
    icon: 'ico-menu-payment',
    url: _ACCOUNT_PAYMENT_LINK_,
  },
  {
    id: '6',
    label: 'My Wishlist',
    icon: 'ico-menu-favorites',
    url: _ACCOUNT_WISHLIST_LINK_,
  },
  {
    id: '7',
    label: 'My Issues',
    icon: 'ico-menu-issues',
    url: _ACCOUNT_ISSUES_LINK_,
  },
];

export default menuAccount;
