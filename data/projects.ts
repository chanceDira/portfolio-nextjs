export type ProjectCategory = 'Blockchain' | 'AI' | 'SaaS' | 'Mobile' | 'Web'

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  category: ProjectCategory
  image: string
  liveUrl?: string
  githubUrl?: string
  technologies: string[]
  featured?: boolean
  client?: string
  location?: string
}

export const projects: Project[] = [
  {
    id: 'wittyai',
    title: 'WittyAI',
    description: 'Healthcare-focused AI chatbot platform',
    longDescription:
      'WittyAI is an AI-powered healthcare chatbot designed to assist patients through conversational interfaces, providing guidance and information in a reliable and accessible way.',
    category: 'AI',
    image: '/wittyai_chatbot.png',
    liveUrl: 'https://wittyai.org/',
    technologies: ['Next.js', 'React', 'OpenAI', 'TypeScript'],
    featured: true,
  },
  {
    id: 'dialogcast',
    title: 'DialogCast',
    description: 'Your ultimate Discord companion that transforms discussions into digestible podcasts',
    longDescription: 'DialogCast allows users to convert their daily Discord (and soon Telegram) conversations into bite-sized, easy-to-digest podcast episodes. It keeps communities informed and connected without having to sift through endless messages.',
    category: 'SaaS',
    image: '/dialogcast.png', // replace with actual image path
    liveUrl: 'https://dialogcast.com/',
    technologies: ['React', 'Next.js', 'TypeScript', 'SaaS', 'Podcast Automation'],
    client: 'DialogCast',
    featured: true,
  },
  {
    id: 'wittyai',
    title: 'AI SaaS platform',
    description: 'Healthcare AI SaaS platform',
    longDescription:
      'WittyAI is an AI-powered healthcare SaaS platform designed to assist patients through conversational interfaces, providing guidance and information in a reliable and accessible way.',
    category: 'SaaS',
    image: '/wittyai.png',
    liveUrl: 'https://about.wittyai.org/',
    technologies: ['Next.js', 'React', 'OpenAI', 'TypeScript'],
    featured: true,
  },
  {
    id: 'micro-masterclass',
    title: 'Micro Masterclass',
    description: 'Online masterclass and learning platform',
    longDescription:
      'A digital learning platform delivering structured masterclasses with subscription-based access and content management.',
    category: 'SaaS',
    image: '/masterclass.png',
    liveUrl: 'https://micromasterclass.everaccountable.com/',
    technologies: ['React', 'Next.js', 'Stripe', 'SaaS'],
  },
  {
    id: 'tvet-digitalization',
    title: 'TVET Digitalization',
    description: 'National TVET digital transformation platform',
    longDescription:
      'A government-backed platform supporting the digital transformation of TVET institutions, improving access, management, and reporting.',
    category: 'Web',
    image: '/tvet.png',
    liveUrl: 'https://tvetdigitalization.rtb.gov.rw/',
    technologies: ['React', 'Next.js', 'Government Systems'],
    client: 'RTB',
    location: 'Rwanda',
    featured: true,
  },
  {
    id: 'truefeedback',
    title: 'TrueFeedback',
    description: 'Blockchain-powered data analysis and feedback ecosystem',
    longDescription: 'TrueFeedback is a blockchain and data-driven ecosystem providing advanced feedback and analytics solutions for investors, users, and companies. The platform combines a robust Data Analysis Platform with the TFB BlackStar mobile app, enabling transparent insights, trust-driven interactions, and data-backed decision-making powered by blockchain technology.',
    category: 'Blockchain',
    image: '/truefeedback.png',
    liveUrl: 'https://truefeedback.io/',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Blockchain',
      'Web3.js',
      'REST APIs',
      'Data Analytics',
    ],
    client: 'TrueFeedback',
    location: 'Turkey',
  },

  {
    id: 'yt-genius',
    title: 'YT Genius',
    description: 'AI-powered dashboard for EdTech programs',
    longDescription:
      'YT Genius is an AI-powered dashboard built for Yellow Tail Tech to support student learning and simplify teaching workflows. The platform provides intelligent learning insights, structured content management, and performance dashboards that help students learn more effectively while enabling instructors to teach, track progress, and manage learning outcomes with ease.',
    category: 'AI',
    image: '/ytgenius.png',
    liveUrl: 'https://ytgenius.qa.yellowtail.tech/',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'AI/LLMs',
      'Dashboard UI',
      'API Integration',
    ],
    client: 'Yellow Tail Tech',
    location: 'US',
    featured: true
  },
  {
    id: 'nft-marketplace',
    title: 'NFT Marketplace',
    description: 'A decentralized NFT marketplace built on blockchain technology',
    longDescription: 'A full-featured NFT marketplace allowing users to mint, buy, sell, and trade NFTs. Built with smart contracts for secure transactions and a modern React frontend for seamless user experience.',
    category: 'Blockchain',
    image: 'https://res.cloudinary.com/dlzsibwl6/image/upload/v1718222763/2024-06-12_22-04_oxinrp.png',
    liveUrl: 'https://marketplace-five-mu.vercel.app/',
    technologies: ['React', 'Next.js', 'Solidity', 'Web3.js', 'Ethers.js', 'Hardhat'],
    featured: true,
  },
  {
    id: 'der-sprachen-hub',
    title: 'Der Sprachen Hub',
    description: 'Language learning and education platform',
    longDescription:
      'An education platform focused on language learning, course management, and user engagement through a modern web experience.',
    category: 'SaaS',
    image: '/dersprachenhub.png',
    liveUrl: 'https://der-sprachen-hub.com/',
    technologies: ['React', 'Next.js', 'Node.js'],
  },

  {
    id: 'vaultic-trust',
    title: 'Vaultic Trust',
    description: 'Real-World Asset (RWA) tokenization platform',
    longDescription:
      'Vaultic Trust is a blockchain-based platform focused on tokenizing real-world assets, bridging traditional finance with decentralized infrastructure.',
    category: 'Blockchain',
    image: '/vaultictrust.png',
    liveUrl: 'https://vaultictrust.com/',
    technologies: ['Next.js', 'React', 'Solidity', 'Web3', 'Blockchain'],
    featured: true,
  },
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot',
    description: 'An intelligent AI-powered chatbot application',
    longDescription: 'An advanced AI chatbot leveraging natural language processing to provide intelligent conversations. Features real-time responses, context awareness, and seamless integration capabilities.',
    category: 'AI',
    image: '/bot.png',
    liveUrl: 'https://dabblelab-bot.vercel.app/',
    technologies: ['React', 'Next.js', 'AI/ML', 'TypeScript', 'API Integration'],
    featured: true,
  },
  {
    id: 'lottery-dapp',
    title: 'Lottery DApp',
    description: 'Decentralized lottery application on the blockchain',
    longDescription: 'A transparent and secure lottery application built on Ethereum blockchain. Features smart contract-based random selection, automatic prize distribution, and provably fair outcomes.',
    category: 'Blockchain',
    image: 'https://res.cloudinary.com/dlzsibwl6/image/upload/v1718222902/2024-06-12_22-08_sufvrm.png',
    liveUrl: 'https://chancedira.github.io/ether-lottery/',
    githubUrl: 'https://github.com/chanceDira/ether-lottery',
    technologies: ['React', 'Solidity', 'Web3.js', 'Ethers.js', 'Truffle'],
  },
  
  {
    id: 'enhancifai',
    title: 'EnhancifAI',
    description: 'AI-powered SaaS platform for CSV and Excel data processing using prompts',
    longDescription:
      'EnhancifAI allows users to upload CSV or Excel files, define transformations using natural language prompts, and receive processed output documents. Built as a scalable SaaS with AI-driven workflows and dashboards.',
    category: 'AI',
    image: '/enhancifai.png',
    liveUrl: 'https://enhancifai.com/',
    technologies: ['Next.js', 'React', 'TypeScript', 'AI/LLMs', 'Node.js'],
  },
  {
    id: 'freebeings',
    title: 'FreeBeings',
    description: 'Blockchain-powered platform for digital ownership',
    longDescription:
      'A Web3 platform integrating blockchain technology with modern web applications to enable digital ownership and decentralized experiences.',
    category: 'Blockchain',
    image: '/freebeings.png',
    liveUrl: 'https://freebeings.io/',
    technologies: ['React', 'Blockchain', 'Solidity', 'Web3'],
  },

  // new projects
  
  
  
  
  {
    id: 'codible-group',
    title: 'Codible Group',
    description: 'Technology consultancy and product development company website',
    longDescription:
      'Corporate website for Codible Group, showcasing services, products, and innovation-driven solutions across software, AI, and blockchain.',
    category: 'Web',
    image: '/codible.png',
    liveUrl: 'https://www.codiblegroup.com/',
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
  },
  
  
  
  
  
  {
    id: 'small-steps-everyday',
    title: 'Small Steps Everyday',
    description: 'Personal growth and habit-building platform',
    longDescription:
      'A web platform focused on personal development, habit tracking, and daily progress through a clean, user-friendly interface.',
    category: 'Web',
    image: '/smallsteps.png',
    liveUrl: 'https://www.smallstepseveryday.com/',
    technologies: ['React', 'Next.js', 'UI/UX'],
  },

  {
    id: 'eth-exchanger',
    title: 'Eth Exchanger',
    description: 'Ethereum token exchange platform',
    longDescription: 'A decentralized exchange platform for swapping Ethereum tokens. Features real-time price updates, low slippage, and secure smart contract interactions.',
    category: 'Blockchain',
    image: 'https://res.cloudinary.com/dlzsibwl6/image/upload/v1718223220/2024-06-12_22-12_pgl07d.png',
    liveUrl: 'https://chancedira.github.io/EthSwap-Blockchain/',
    githubUrl: 'https://github.com/chanceDira/EthSwap-Blockchain',
    technologies: ['React', 'Solidity', 'Web3.js', 'Ethers.js', 'Hardhat'],
  },

  {
    id: 'e-registration',
    title: 'E-registration System',
    description: 'Online registration and management system',
    longDescription: 'A comprehensive SaaS platform for managing student registrations, enrollments, and administrative tasks. Built for educational institutions with features for students, administrators, and staff.',
    category: 'SaaS',
    image: 'https://res.cloudinary.com/dlzsibwl6/image/upload/v1674579921/2023-01-24_19-04_yy1j81.png',
    liveUrl: 'https://www.akagera-rhein-academy.com/',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'REST API', 'Stripe'],
    client: 'Akagera Rhein Academy',
    location: 'Rwanda',
  },
  
  {
    id: 'ck-business',
    title: 'CK Business Platform',
    description: 'Business management and landing page platform',
    longDescription: 'A complete business platform featuring landing pages, customer management, and business tools. Designed for modern businesses looking to establish their online presence.',
    category: 'SaaS',
    image: 'https://res.cloudinary.com/dlzsibwl6/image/upload/v1674584507/2023-01-24_20-21_bfoxi5.png',
    liveUrl: 'https://ckbusinessltd.com/landing',
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    client: 'CK Business Ltd',
    location: 'Kenya',
  },
  
]

export const getProjectsByCategory = (category: ProjectCategory | 'All'): Project[] => {
  if (category === 'All') return projects
  return projects.filter(project => project.category === category)
}

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured)
}

