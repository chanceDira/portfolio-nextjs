export interface Skill {
  name: string
  icon?: string
  category: 'Frontend' | 'Backend' | 'Mobile' | 'Blockchain' | 'AI' | 'Tools'
  proficiency?: 'Expert' | 'Advanced' | 'Intermediate'
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'Frontend', proficiency: 'Expert', icon: 'mdi:react' },
  { name: 'Next.js', category: 'Frontend', proficiency: 'Expert', icon: 'mdi:nextjs' },
  { name: 'TypeScript', category: 'Frontend', proficiency: 'Expert', icon: 'mdi:language-typescript' },
  { name: 'Tailwind CSS', category: 'Frontend', proficiency: 'Expert', icon: 'mdi:tailwind' },
  { name: 'Bootstrap', category: 'Frontend', proficiency: 'Advanced', icon: 'mdi:bootstrap' },
  { name: 'HTML5 & CSS3', category: 'Frontend', proficiency: 'Expert', icon: 'mdi:language-html5' },
  
  // Backend
  { name: 'Node.js', category: 'Backend', proficiency: 'Expert', icon: 'mdi:nodejs' },
  { name: 'NestJS', category: 'Backend', proficiency: 'Advanced', icon: 'mdi:nestjs' },
  { name: 'GraphQL', category: 'Backend', proficiency: 'Advanced', icon: 'mdi:graphql' },
  { name: 'Java/Spring Boot', category: 'Backend', proficiency: 'Advanced', icon: 'mdi:language-java' },
  { name: 'PHP/Laravel', category: 'Backend', proficiency: 'Advanced', icon: 'mdi:laravel' },
  { name: 'PostgreSQL', category: 'Backend', proficiency: 'Expert', icon: 'mdi:database' },
  { name: 'MongoDB', category: 'Backend', proficiency: 'Expert', icon: 'mdi:database' },
  { name: 'MySQL', category: 'Backend', proficiency: 'Expert', icon: 'mdi:database' },
  { name: 'REST APIs', category: 'Backend', proficiency: 'Expert', icon: 'mdi:api' },
  
  // Mobile
  { name: 'React Native', category: 'Mobile', proficiency: 'Advanced', icon: 'mdi:react' },
  
  // Blockchain
  { name: 'Solidity', category: 'Blockchain', proficiency: 'Expert', icon: 'mdi:ethereum' },
  { name: 'Web3.js', category: 'Blockchain', proficiency: 'Expert', icon: 'mdi:web' },
  { name: 'Ethers.js', category: 'Blockchain', proficiency: 'Expert', icon: 'mdi:ethereum' },
  { name: 'Hardhat', category: 'Blockchain', proficiency: 'Expert', icon: 'mdi:hammer' },
  { name: 'Truffle', category: 'Blockchain', proficiency: 'Advanced', icon: 'mdi:ethereum' },
  { name: 'Rust', category: 'Blockchain', proficiency: 'Intermediate', icon: 'mdi:language-rust' },
  
  // AI
  { name: 'AI/ML Integration', category: 'AI', proficiency: 'Advanced', icon: 'mdi:robot' },
  { name: 'OpenAI GPT', category: 'AI', proficiency: 'Advanced', icon: 'mdi:openai' },
  { name: 'LangChain', category: 'AI', proficiency: 'Advanced', icon: 'mdi:robot' },
  { name: 'AI Agents', category: 'AI', proficiency: 'Advanced', icon: 'mdi:robot' },
  { name: 'Bedrock', category: 'AI', proficiency: 'Advanced', icon: 'mdi:aws' },
  { name: 'Gemini', category: 'AI', proficiency: 'Advanced', icon: 'mdi:robot' },

  // Tools
  { name: 'Git/GitHub', category: 'Tools', proficiency: 'Expert', icon: 'mdi:github' },
  { name: 'AWS', category: 'Tools', proficiency: 'Advanced', icon: 'mdi:aws' },
  { name: 'Stripe', category: 'Tools', proficiency: 'Advanced', icon: 'mdi:credit-card' },
  { name: 'Socket.io', category: 'Tools', proficiency: 'Advanced', icon: 'mdi:socket' },
  { name: 'Figma', category: 'Tools', proficiency: 'Advanced', icon: 'mdi:figma' },
  { name: 'Firebase', category: 'Tools', proficiency: 'Advanced', icon: 'mdi:firebase' },
  { name: 'Heroku', category: 'Tools', proficiency: 'Advanced', icon: 'mdi:heroku' },
  { name: 'Netlify', category: 'Tools', proficiency: 'Advanced', icon: 'mdi:netlify' },
]

export const getSkillsByCategory = (category: Skill['category']) => {
  return skills.filter(skill => skill.category === category)
}

export const skillCategories: Skill['category'][] = ['Frontend', 'Backend', 'Mobile', 'Blockchain', 'AI', 'Tools']

