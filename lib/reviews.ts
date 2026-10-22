export const STEALTH_AGENTS_REVIEW_SOURCE_URL = 'https://stealthagents.com';

export type ApprovedReview = {
  name: string;
  quote: string;
  role?: string;
};

export const approvedReviews: readonly ApprovedReview[] = [
  {
    name: 'Chad Sublet',
    quote: 'Lindsay has been incredible. She handles the tactical work, which has freed me up to focus on bigger-picture initiatives.',
  },
  {
    name: 'Erika Giron',
    quote: 'We went from 300 hours a month to over 2,500 hours with Stealth Agents.',
  },
  {
    name: 'Alex Behrens',
    quote: 'They have made a real difference in our day-to-day operations and truly feel like part of our internal team.',
  },
  {
    name: 'Aisha Wonderfull',
    quote: 'Gained time for sales and closed 3 clients within two days. Exceptional service.',
  },
  {
    name: 'Owen Hone',
    quote: 'Outstanding service. Less than 24-hour VA placement. Fast, high-quality. I have hired multiple times.',
  },
  {
    name: 'Sarah Jacoby',
    quote: 'Great communication, efficient and proactive assistant, visible business growth.',
  },
  {
    name: 'Martine Cadet',
    quote: 'The team learned my brand and goals and transformed my business. My dream team.',
  },
  {
    name: 'Rich Cochran',
    quote: 'We especially appreciate how diligent and pleasant Evy is. True pros.',
  },
  {
    name: 'George Assi',
    quote: 'Agents tackled diverse tasks seamlessly and manager Charm consistently provides excellent talent matches.',
  },
  {
    name: 'Lee Maasen',
    quote: 'Stealth Agents provided me with a fantastic virtual assistant who has been an absolute asset.',
  },
];
