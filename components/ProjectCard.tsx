'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { Project } from '../data/projects'
import { scaleIn } from '../utils/animations'

interface ProjectCardProps {
  project: Project
  index: number
  onOpenModal: (project: Project) => void
}

export default function ProjectCard({ project, index, onOpenModal }: ProjectCardProps) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary-light bg-white dark:bg-gray-800 cursor-pointer transition-all duration-300"
      onClick={() => onOpenModal(project)}
    >
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-2 right-2">
          <span className="px-2 py-1 text-xs font-semibold bg-primary dark:bg-primary-light text-white dark:text-gray-900 rounded-full">
            {project.category}
          </span>
        </div>
        {project.featured && (
          <div className="absolute top-2 left-2">
            <span className="px-2 py-1 text-xs font-semibold bg-yellow-500 text-white rounded-full flex items-center gap-1">
              <Icon icon="mdi:star" width="12" height="12" />
              Featured
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs text-gray-500 dark:text-gray-400">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-4 text-sm">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-primary dark:text-primary-light hover:underline"
            >
              <Icon icon="mdi:open-in-new" width="16" height="16" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light"
            >
              <Icon icon="mdi:github" width="16" height="16" />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

