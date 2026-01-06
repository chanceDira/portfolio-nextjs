export interface Testimonial {
  id: string
  name: string
  role: string
  company?: string
  location?: string
  content: string
  avatar?: string
  rating?: number
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Ram',
    role: 'CEO',
    company: 'WittyAI',
    location: 'US',
    content: `Chance is a great talent, The project ended successfully, having met all expected outcomes.`,
    rating: 5,
  },
  {
    id: 'testimonial-2',
    name: 'Innocent',
    role: 'CEO&Founder',
    company: 'FreeBeings.io',
    location: 'Mauritius',
    content: 'It was wonderful working with Chance. He delivered on time, great product, excellent availability and communication. Highly recommended!',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    name: 'Kerem Noras',
    role: 'Project Manager',
    company: 'TruFeedback',
    location: 'Turkey',
    content: 'Chance\'s blockchain expertise helped us launch our product successfully. His smart contract development and integration skills are top-notch.',
    rating: 5,
  },
  {
    id: 'testimonial-4',
    name: 'Thierry',
    role: 'CTO',
    company: 'Yellow Tail Tech',
    location: 'US',
    content: 'Great work from Chance. He provided helpful suggestions with the design and developed the frontend well. Will work with him again.',
    rating: 5,
  },
  {
    id: 'testimonial-5',
    name: 'Asher',
    role: 'Product Manager',
    company: 'RTB',
    location: 'Rwanda',
    content: 'Chance\'s leadership and technical skills are impressive. He consistently delivers high-quality solutions and mentors the team effectively.',
    rating: 5,
  },
  {
    id: 'testimonial-6',
    name: 'Jonathan',
    role: 'Founder',
    company: 'EnhancifAI',
    location: 'US',
    content: 'The B2B dashboard Chance developed significantly improved our operations. His attention to detail and performance optimization is remarkable.',
    rating: 5,
  },
 
]

