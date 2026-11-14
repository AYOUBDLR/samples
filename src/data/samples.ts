import heroBoxImg from '../assets/images/sample_box_hero_1794606279066.jpg';
import skincareKitImg from '../assets/images/sample_skincare_kit_1794606279824.jpg';
import groomingKitImg from '../assets/images/sample_grooming_kit_1794606278361.jpg';
import pantryWellnessImg from '../assets/images/sample_pantry_wellness_1794606279172.jpg';
import luxuryBeautySamplesImg from '../assets/images/luxury_beauty_samples_1794686934688.jpg';
import girlHoldingSampleImg from '../assets/images/girl_holding_sample_1794687102515.jpg';

export const GIRL_HERO_IMAGE = girlHoldingSampleImg;
export const BEAUTY_BOX_BANNER_IMAGE = luxuryBeautySamplesImg;

export type BundleId = 'beauty-box' | 'fragrance' | 'skincare' | 'hair-makeup';

export interface SampleBundle {
  id: BundleId;
  shortLabel: string;
  title: string;
  category: string;
  itemCount: string;
  shippingNote: string;
  description: string;
  items: string[];
  image: string;
  imageAlt: string;
}

export const FEATURED_BOX_ITEMS = [
  {
    brand: 'Miss Dior',
    product: 'Blooming Bouquet Eau de Toilette',
    size: '5 ml mini spray',
  },
  {
    brand: 'Estée Lauder',
    product: 'Advanced Night Repair Serum',
    size: '7 ml dropper',
  },
  {
    brand: 'Clinique',
    product: 'Moisture Surge 100H Auto-Replenishing Hydrator',
    size: '15 ml jar',
  },
  {
    brand: 'Tatcha',
    product: 'The Dewy Skin Cream',
    size: '10 ml mini jar',
  },
  {
    brand: 'NARS',
    product: 'Radiant Creamy Concealer & Lip Duo',
    size: 'Travel size',
  },
  {
    brand: 'Olaplex',
    product: 'No. 7 Bonding Hair Oil',
    size: '7.5 ml bottle',
  },
];

export const SAMPLE_BUNDLES: SampleBundle[] = [
  {
    id: 'beauty-box',
    shortLabel: 'Luxury Beauty Box',
    title: 'Signature Beauty & Fragrance Sample Box',
    category: 'Multi-Brand US Drop',
    itemCount: '6 Deluxe Samples',
    shippingNote: 'Ships free via USPS',
    description:
      'Our most-requested US beauty mailer featuring deluxe fragrance, night repair serum, hydrating gel cream, and bonding hair oil.',
    items: [
      'Miss Dior Blooming Bouquet sample (5 ml)',
      'Estée Lauder Advanced Night Repair (7 ml)',
      'Clinique Moisture Surge & Tatcha Dewy Cream',
      'NARS lip & concealer duo + Olaplex No. 7',
    ],
    image: BEAUTY_BOX_BANNER_IMAGE,
    imageAlt:
      'White gift box with blue ribbon behind deluxe beauty samples from Miss Dior, Estée Lauder, Clinique, Tatcha, NARS, and Olaplex',
  },
  {
    id: 'fragrance',
    shortLabel: 'Fragrance',
    title: 'Floral & Signature Perfume Edit',
    category: 'Fragrance',
    itemCount: '3 Mini Atomizers',
    shippingNote: 'Ships free via USPS',
    description:
      'Test signature floral and warm woody scents at home with glass pocket spray vials before committing to a full bottle.',
    items: [
      'Miss Dior Blooming Bouquet mini spray (5 ml)',
      'Rose & peony daytime eau de toilette vial',
      'Botanical discovery sampler box',
    ],
    image: GIRL_HERO_IMAGE,
    imageAlt:
      'Smiling young woman holding a pink Miss Dior fragrance sample bottle in bright natural light',
  },
  {
    id: 'skincare',
    shortLabel: 'Skincare Serums',
    title: 'Barrier & Night Repair Skincare Trio',
    category: 'Skincare',
    itemCount: '3 Trial Jars & Serums',
    shippingNote: 'Ships free via USPS',
    description:
      'Targeted hydration and overnight renewal formulas sized for a full two-week routine test with zero subscription attached.',
    items: [
      'Estée Lauder Advanced Night Repair serum (7 ml)',
      'Clinique Moisture Surge hydrator (15 ml)',
      'Tatcha Dewy Skin Cream travel jar (10 ml)',
    ],
    image: skincareKitImg,
    imageAlt:
      'Three travel-size skincare bottles including an amber serum dropper, matte cream tube, and gentle facial cleanser',
  },
  {
    id: 'hair-makeup',
    shortLabel: 'Hair & Makeup',
    title: 'Daily Finish, Lip & Hair Repair Kit',
    category: 'Makeup & Haircare',
    itemCount: '4 Travel Essentials',
    shippingNote: 'Ships free via USPS',
    description:
      'High-shine hair bonding oil, radiant concealer, matte lip shade, and gentle daily essentials delivered directly to your mailbox.',
    items: [
      'Olaplex No. 7 Bonding Oil mini (7.5 ml)',
      'NARS Radiant Creamy Concealer travel wand',
      'Velvet satin lip color + daily cleanser sample',
    ],
    image: heroBoxImg,
    imageAlt:
      'Open white sample mailer box tied with a red ribbon containing miniature skincare and beauty trial bottles',
  },
];

export const SECONDARY_SAMPLES = [
  {
    title: 'Daily Grooming Essentials',
    category: 'Personal Care',
    image: groomingKitImg,
    imageAlt:
      'Charcoal facial cleanser tube, cedarwood oil dropper bottle, and brushed aluminum balm tin on stone surface',
    summary: 'Charcoal facial cleanser, cedarwood conditioning oil, and solid balm trial sizes.',
  },
  {
    title: 'Morning Coffee & Wellness',
    category: 'Pantry & Roast',
    image: pantryWellnessImg,
    imageAlt:
      'Single-origin coffee sachets, ceremonial matcha sticks, and oat snack pouches arranged on a sunlit counter',
    summary: 'Single-origin pour-over coffee sachets, matcha sticks, and roasted oat bars.',
  },
];

export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
}

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    number: '01.',
    title: 'Submit a valid US email',
    description:
      'Choose your sample focus and enter an active email address. No long questionnaires, no credit card fields, and no password required.',
  },
  {
    number: '02.',
    title: 'Confirm your delivery link',
    description:
      'Click the one-tap verification link in your inbox to confirm your US mailing address and reserve your sample box from this week’s drop.',
  },
  {
    number: '03.',
    title: 'Delivered to your mailbox',
    description:
      'Participating beauty and lifestyle brands ship your deluxe trial kit via USPS First Class at zero cost and zero automatic renewals.',
  },
];

export interface ProofMetric {
  value: string;
  label: string;
  detail: string;
}

export const PROOF_METRICS: ProofMetric[] = [
  {
    value: '$0.00',
    label: 'Shipping & handling',
    detail: 'Zero card required at any step',
  },
  {
    value: '48 hrs',
    label: 'Email verification window',
    detail: 'Instant inbox link after submit',
  },
  {
    value: '5–7 days',
    label: 'Average US USPS delivery',
    detail: 'Dispatched to all 50 US states',
  },
  {
    value: '1 per home',
    label: 'Drop allocation limit',
    detail: 'Prevents bots so real households claim',
  },
];

export interface MemberTestimonial {
  quote: string;
  name: string;
  location: string;
  kitReceived: string;
}

export const MEMBER_TESTIMONIALS: MemberTestimonial[] = [
  {
    quote:
      'Submitted my email on Tuesday and confirmed my Austin address from the link. The Miss Dior mini and Clinique Moisture Surge jar arrived six days later with zero follow-up charges.',
    name: 'Maya Patel',
    location: 'Austin, TX',
    kitReceived: 'Luxury Beauty Box',
  },
  {
    quote:
      'Finally a sample offer without endless survey loops. One email submit got me the night repair serum dropper and Olaplex No. 7 travel bottle—real deluxe sizes, not foil packets.',
    name: 'Hannah Brooks',
    location: 'Charlotte, NC',
    kitReceived: 'Barrier & Night Repair Trio',
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'really-free',
    question: 'Are the beauty and fragrance samples really free with no credit card?',
    answer:
      'Yes. Partner brands sponsor both the deluxe trial products and USPS postage to put real products directly into US households. We never ask for a credit card, bank details, or shipping fee.',
  },
  {
    id: 'why-email',
    question: 'Why do I need to submit a valid email address?',
    answer:
      'Your valid email is how we send your private address-confirmation link, block automated bot claims, and share USPS tracking updates once your sample box leaves fulfillment.',
  },
  {
    id: 'eligibility',
    question: 'Who is eligible for this US sample drop?',
    answer:
      'Open to legal residents aged 18 or older with a valid residential mailing address in the 50 United States or D.C. Limit one active sample claim per household per drop while supplies last.',
  },
  {
    id: 'no-subscriptions',
    question: 'Will submitting my email enroll me in a subscription?',
    answer:
      'Never. There are no negative-option trials or recurring bills. You can unsubscribe from new drop alerts with one click in any email.',
  },
];
