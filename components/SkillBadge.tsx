import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import { Skill } from '../data/skills'

interface SkillBadgeProps {
  skill: Skill
  index: number
}

export default function SkillBadge({ skill, index }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary-light hover:shadow-lg transition-all duration-200"
    >
      {skill.icon && (
        <Icon
          icon={skill.icon}
          className="text-primary dark:text-primary-light"
          width="24"
          height="24"
        />
      )}
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {skill.name}
      </span>
      {skill.proficiency && (
        <span className="text-xs text-gray-500 dark:text-gray-400 ml-auto">
          {skill.proficiency}
        </span>
      )}
    </motion.div>
  )
}

