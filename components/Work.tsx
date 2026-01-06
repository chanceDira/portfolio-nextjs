'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { projects, getProjectsByCategory, ProjectCategory } from '../data/projects'
import { SOCIAL_LINKS } from '../data/constants'
import { fadeInUp, staggerContainer } from '../utils/animations'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { Project } from '../data/projects'

const categories: (ProjectCategory | 'All')[] = ['All', 'AI', 'SaaS' , 'Blockchain', 'Web']
const PROJECTS_PER_PAGE = 6

function Work() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'All'>('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const filteredProjects = getProjectsByCategory(selectedCategory)
  
  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory])

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE)
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE
  const endIndex = startIndex + PROJECTS_PER_PAGE
  const currentProjects = filteredProjects.slice(startIndex, endIndex)

  const goToPage = (page: number) => {
    setCurrentPage(page)
    // window.scrollTo({ top: 100, behavior: 'smooth' })
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1)
    }
  }

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1)
    }
  }

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <div className='w-full flex min-h-screen flex-col justify-center items-center py-20 px-4 md:px-8'>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='text-3xl md:text-5xl font-bold mb-8 text-center'
      >
        My recent <span className='text-primary dark:text-primary-light'>Work</span>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='flex flex-wrap justify-center gap-3 mb-12'
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-primary dark:bg-primary-light text-white dark:text-gray-900 shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary-light'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        key={currentPage}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mb-12'
      >
        {currentProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onOpenModal={handleOpenModal}
          />
        ))}
      </motion.div>

      {/* Pagination */}
      {totalPages > 1 && (
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className='flex flex-col items-center gap-4 mb-12'
        >
          {/* Page Info */}
          <div className='text-sm text-gray-600 dark:text-gray-400'>
            Showing {startIndex + 1}-{Math.min(endIndex, filteredProjects.length)} of {filteredProjects.length} projects
          </div>

          {/* Pagination Controls */}
          <div className='flex items-center gap-2'>
            {/* Previous Button */}
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`p-2 rounded-lg border transition-all ${
                currentPage === 1
                  ? 'border-gray-300 dark:border-gray-700 text-gray-400 dark:text-gray-600 cursor-not-allowed opacity-50'
                  : 'border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary-light hover:bg-primary/10 dark:hover:bg-primary-light/10 text-gray-700 dark:text-gray-300 cursor-pointer'
              }`}
              aria-label="Previous page"
            >
              <Icon icon="mdi:chevron-left" width="20" height="20" />
            </button>

            {/* Page Numbers */}
            <div className='flex items-center gap-1'>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                // Show first page, last page, current page, and pages around current
                const showPage =
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 1 && page <= currentPage + 1)

                if (!showPage) {
                  // Show ellipsis
                  if (page === currentPage - 2 || page === currentPage + 2) {
                    return (
                      <span key={page} className='px-2 text-gray-500 dark:text-gray-400'>
                        ...
                      </span>
                    )
                  }
                  return null
                }

                return (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`min-w-[40px] px-3 py-2 rounded-lg font-medium transition-all ${
                      currentPage === page
                        ? 'bg-primary dark:bg-primary-light text-white dark:text-gray-900 shadow-lg'
                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary-light hover:bg-primary/10 dark:hover:bg-primary-light/10'
                    }`}
                    aria-label={`Go to page ${page}`}
                  >
                    {page}
                  </button>
                )
              })}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-lg border transition-all ${
                currentPage === totalPages
                  ? 'border-gray-300 dark:border-gray-700 text-gray-400 dark:text-gray-600 cursor-not-allowed opacity-50'
                  : 'border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary-light hover:bg-primary/10 dark:hover:bg-primary-light/10 text-gray-700 dark:text-gray-300 cursor-pointer'
              }`}
              aria-label="Next page"
            >
              <Icon icon="mdi:chevron-right" width="20" height="20" />
            </button>
          </div>
        </motion.div>
      )}

      {/* Links */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='flex flex-col md:flex-row items-center gap-6 text-center'
      >
        <a
          href={SOCIAL_LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className='flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-primary hover:text-white dark:hover:bg-primary-light dark:hover:text-gray-900 transition-colors font-semibold'
        >
          <Icon icon="mdi:github" width="20" height="20" />
          View more on GitHub
        </a>
      </motion.div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  )
}

export default Work