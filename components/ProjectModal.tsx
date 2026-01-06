'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { Project } from '../data/projects'
import { scaleIn } from '../utils/animations'

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 overflow-y-auto"
          >
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl max-w-4xl mx-auto p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">
                      {project.title}
                    </h2>
                    <span className="px-3 py-1 text-sm font-semibold bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light rounded-full">
                      {project.category}
                    </span>
                  </div>
                  {project.client && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Client: {project.client}
                      {project.location && ` • ${project.location}`}
                    </p>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <Icon icon="mdi:close" className="text-gray-600 dark:text-gray-400" width="24" height="24" />
                </button>
              </div>

              <div className="relative w-full h-64 md:h-96 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Description
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {project.longDescription || project.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary dark:bg-primary-light text-white dark:text-gray-900 rounded-lg hover:bg-primary-light dark:hover:bg-primary transition-colors font-semibold"
                    >
                      <Icon icon="mdi:open-in-new" width="20" height="20" />
                      View Live Site
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border-2 border-primary dark:border-primary-light text-primary dark:text-primary-light rounded-lg hover:bg-primary/10 dark:hover:bg-primary-light/10 transition-colors font-semibold"
                    >
                      <Icon icon="mdi:github" width="20" height="20" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

