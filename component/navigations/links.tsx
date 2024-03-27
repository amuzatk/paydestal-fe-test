import {
    ColllectionIcon,
    BankTransferIcon,
    CardProcesingIcon,
    PayoutIcon,
    RemittanceIcon,
    UssdIcon,
} from '../constants';

export const NAVIGATION_LINKS = {
  VENDORS: '/',
  SHOPPERS: '/shoppers',
  DASHBOARD: '/admin',
  AUTH_SIGNIN: '/auth/login',
  AUTH_SIGNUP: '/auth/register',
  ACCOUNT: {
    PROFILE: '/account/profile',
    PASSWORD: '/account/password',
    PREFERENCES: '/account/preferences',
  },
  USERS: {
    LIST: '/users',
    CREATE: '/users/create',
    DETAILS: (username: string) => `/users/${username}`,
  },
};

export const SECURE_SECTION_LINKS = [
    {
      TITLE: 'Pay-in Collections ',
      LINK: '/collections',
      SLUG: 'collections',
      ISVENDOR: false,
      ICON: (isActive: boolean) => <ColllectionIcon isActive={isActive} />,
    // ICON: (isActive: boolean) => <ColllectionIcon />,
    },
    {
      TITLE: 'International Remittance',
      LINK: '/remittance',
      SLUG: 'remittance',
      ISVENDOR: false,
      ICON: (isActive: boolean) => <RemittanceIcon isActive={isActive}/>,
    },
    {
        TITLE: 'Pay-Out Transfers ',
        LINK: '/transfers',
        SLUG: 'transfers',
        ISVENDOR: false,
        ICON: (isActive: boolean) => <PayoutIcon  isActive={isActive}/>,
      },
      {
        TITLE: 'USSD Payments',
        LINK: '/payments',
        SLUG: 'payments',
        ISVENDOR: false,
        ICON: (isActive: boolean) => <UssdIcon  isActive={isActive}/>,
      },
      {
        TITLE: 'Bank Transfer Payments',
        LINK: '/bank-transfer',
        SLUG: 'bank-transfer',
        ISVENDOR: false,
        ICON: (isActive: boolean) => <BankTransferIcon  isActive={isActive}/>,
      },
      {
        TITLE: 'Card Processing',
        LINK: '/processing',
        SLUG: 'processing',
        ISVENDOR: false,
        ICON: (isActive: boolean) => <CardProcesingIcon isActive={isActive}/>,
      },
  ];