export interface ExperienceItem {
  id: string
  title: string
  organization: string
  location?: string
  period: string
  description?: string
  achievements?: string[]
  type: 'education' | 'work' | 'leadership' | 'achievement'
  icon?: string
}

export const workExperience: ExperienceItem[] = [
  {
    id: 'dabblelab',
    title: 'FullStack Developer',
    organization: 'DabbleLab',
    location: 'US, Florida (Remote)',
    period: 'NOV 2022 - PRESENT',
    achievements: [
      'Leveraged Generative AI models to enhance user experiences and provide advanced functionalities',
      'Built and maintained a web platform for insurance client using React.js, Node.js/Express, and TypeScript',
    ],
    type: 'work',
    icon: 'mdi:code-tags',
  },
  {
    id: 'witty-ai',
    title: 'React.JS/NextJs/NodeJs Developer',
    organization: 'Witty.AI',
    location: 'US, Remote',
    period: 'SEPT 2023 - Present',
    achievements: [
      'Led the development of a large-scale B2B dashboard using React, Nodejs, TypeScript, OpenAI, MongoDB, Redis, and Redux Toolkit, improving UI load times by 40%',
      'Collaborated with backend teams on REST and GraphQL APIs, implementing advanced caching and error handling patterns',
    ],
    type: 'work',
    icon: 'mdi:code-tags',
  },
  {
    id: 'andela-lead',
    title: 'Lead Developer',
    organization: 'Andela',
    location: 'Rwanda, Kigali',
    period: 'Jun 2021 - FEB 2022',
    achievements: [
      'Led a cross-functional team of developers, setting coding standards, conducting code reviews, and mentoring junior engineers',
      'Coordinated sprint planning, backlog grooming, and stakeholder updates to ensure on-time, high-quality deliverables',
    ],
    type: 'work',
    icon: 'mdi:code-tags',
  },
  {
    id: 'andela-dev',
    title: 'Software Developer',
    organization: 'Andela',
    location: 'Rwanda',
    period: 'SEP 2020 - Jun 2021',
    achievements: [
      'Collaborated closely with QA teams to establish comprehensive test plans, conduct thorough testing, and validate system performance under varying conditions',
      'Applied Scrum/agile methodologies using tech stack like NodeJS, TypeScript, CI/CD, ReactJS, NextJS, and TailwindCSS',
    ],
    type: 'work',
    icon: 'mdi:code-tags',
  },
  {
    id: 'freebeings',
    title: 'Frontend Developer',
    organization: 'FreeBeings',
    location: 'Mauritius, Remote',
    period: 'Feb 2019 - May 2020',
    achievements: [
      'Worked on full-stack development projects, integrating blockchain with front-end and back-end systems',
      'Developed and deployed smart contracts on the Ethereum blockchain using Solidity',
    ],
    type: 'work',
    icon: 'mdi:code-tags',
  },
  {
    id: 'trufeedback',
    title: 'Software Developer',
    organization: 'TruFeedback',
    location: 'Mauritius, Remote',
    period: 'August 2018 - Sept 2019',
    achievements: [
      'Worked on building reusable ReactJs/Nodejs components and data visualization',
      'Developed and deployed backend APIs',
    ],
    type: 'work',
    icon: 'mdi:code-tags',
  },
]

export const education: ExperienceItem[] = [
  {
    id: 'masters',
    title: 'Master\'s in Information Technology',
    organization: 'University Of Kigali',
    location: 'Rwanda',
    period: 'In Progress',
    description: 'Currently pursuing advanced studies in Information Technology',
    type: 'education',
    icon: 'mdi:school',
  },
  {
    id: 'bachelors',
    title: 'Bachelor\'s Degree in Software Engineering',
    organization: 'University of Rwanda - College of Science and Technology',
    location: 'Rwanda',
    period: '2022',
    description: 'Graduated with a Bachelor\'s degree in Software Engineering',
    type: 'education',
    icon: 'mdi:school',
  },
]

export const leadership: ExperienceItem[] = [
  {
    id: 'vaultic-trust',
    title: 'Founder',
    organization: 'Vaultic Trust',
    location: 'Global',
    period: 'Current',
    description:
      'Founder of Vaultic Trust,  Real-World Asset (RWA) Tokenization Layer, bridging traditional assets with blockchain technology.',
    type: 'leadership',
    icon: 'mdi:shield-lock',
  },
  {
    id: 'codible-group',
    title: 'Chief Technology Officer (CTO)',
    organization: 'Codible Group',
    location: 'Rwanda / Global',
    period: 'Current',
    description:
      'Leading engineering strategy and technical execution at Codible Group, overseeing full-stack, AI, and blockchain-driven solutions',
    type: 'leadership',
    icon: 'mdi:code-tags',
  },
  {
    id: 'blockchain-association',
    title: 'Executive Member',
    organization: 'Rwanda Blockchain Association',
    location: 'Rwanda',
    period: 'Current',
    description:
      'Serving as an Executive Member, contributing to blockchain adoption, education, and ecosystem development in Rwanda.',
    type: 'leadership',
    icon: 'mdi:account-group',
  },
]


export const achievements = [
  {
    title: '7+ Years Experience',
    description: 'Extensive experience in full-stack development',
    icon: 'mdi:clock-outline',
  },
  {
    title: '5+ Countries',
    description: 'Projects delivered across US, Mauritius, Rwanda, Kenya, and beyond',
    icon: 'mdi:earth',
  },
  {
    title: '30+ Technologies',
    description: 'Mastered a wide range of modern technologies',
    icon: 'mdi:code-braces',
  },
  {
    title: 'Mentor',
    description:
      'Mentoring and judging in software engineering and emerging technologies',
    icon: 'mdi:school-outline',
  },
]
