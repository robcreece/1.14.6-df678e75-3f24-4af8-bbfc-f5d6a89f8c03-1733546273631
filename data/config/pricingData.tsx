import {
  PricingTier,
  PricingTierFrequency,
} from '@/data/config/pricingDataInterface';

export const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    id: 'tier-1',
    href: '/subscribe',
    discountPrice: { '1': '', '2': '' },
    price: { '1': '$0', '2': '$0' },
    description: 'Get all goodies for free, no credit card required.',
    features: [
      'Multi-platform compatibility',
      'Real-time notification system',
      'Advanced user permissions',
    ],
    featured: false,
    highlighted: false,
    cta: 'Sign up',
  },
];

export const pricingFrequencies: PricingTierFrequency[] = [
  {
    id: '1b6a9e36-ae4b-4c3b-9bac-174f305408b6',
    value: '1',
    label: 'Monthly',
    priceSuffix: '/month',
  },
  {
    id: '26340f99-a54e-48c3-9ced-55f43504b312',
    value: '2',
    label: 'Annually',
    priceSuffix: '/year',
  },
];
