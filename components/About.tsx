'use client'

import { Icon } from "@iconify/react"
import { motion } from "framer-motion"
import Image from "next/image"
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, staggerItem } from "../utils/animations"
import { skills, skillCategories, getSkillsByCategory } from "../data/skills"
import { workExperience, education, leadership, achievements } from "../data/experience"
import SkillBadge from "./SkillBadge"
import { BLOCKCHAIN_ASSOCIATION_LINK } from "../data/constants"

function About() {
  return (
    <div className="flex min-h-screen flex-col w-11/12 md:w-9/12 justify-center items-center py-20 ">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold mb-16 mt-10 md:mt-2 text-center"
      >
        About <span className="text-gray-600 dark:text-gray-400">me</span> - Developer.{" "}
        <span className="text-gray-600 dark:text-gray-400">Builder.</span> Innovator.
      </motion.div>

      {/* About Content */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-12 mb-16">
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full md:w-1/3 flex justify-center"
        >
          <div className="relative w-64 h-80 md:w-72 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-lg blur-2xl"></div>
            <Image
              src="https://res.cloudinary.com/dlzsibwl6/image/upload/v1668021997/ChanceDira3_cwdxum.png"
              alt="Chance Desire IRADUKUNDA"
              fill
              className="rounded-lg object-cover relative z-10"
              sizes="(max-width: 768px) 256px, 288px"
            />
          </div>
        </motion.div>

        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-primary dark:text-primary-light md:w-2/3 text-base md:text-lg leading-relaxed"
        >
         <p className="text-gray-700 dark:text-gray-300 font-light mb-4">
  With over <span className="font-semibold">7+ years</span> of experience, Top Rated
  on Upwork, I specialize in building production-ready SaaS applications that scale
  reliably, perform efficiently, and remain easy to maintain as products grow.
</p>

<p className="text-gray-700 dark:text-gray-300 font-light mb-4">
  I work closely with founders and product teams to turn ideas into reliable,
  real-world systems. My focus is on clean architecture, performance, and long-term
  maintainability—not just shipping features, but building solutions that support
  sustainable growth. I also integrate AI-powered features where they add real
  business value, helping automate workflows and improve user experience.
</p>

<p className="text-gray-700 dark:text-gray-300 font-light mb-4">
  When speed matters, I move quickly from concept to prototype using AI-assisted
  development workflows, then refine and harden those solutions into stable,
  production-quality systems. This approach allows teams to iterate fast early on
  without sacrificing code quality or future flexibility.
</p>

<p className="text-gray-700 dark:text-gray-300 font-light mb-4">
  I’ve delivered <span className="font-semibold">20+ full-stack applications</span>{" "}
  across SaaS, Healthcare, EdTech, FinTech, Web3, and AI, and collaborated with
  organizations such as{" "}
  <span className="font-semibold">
    Andela, DabbleLab, FreeBeings
  </span>{" "}
  and globally distributed startups. Clients consistently highlight my reliability,
  clean code, clear communication, and ability to deliver on time.
</p>

<p className="text-gray-700 dark:text-gray-300 font-light">
  I’m a strong fit if you’re building or scaling a SaaS, AI, or startup product, need
  a dependable developer for long-term collaboration, and care about clean
  architecture, scalability, and realistic timelines. If you value a developer who
  understands both product goals and technical execution, I’d be happy to discuss
  your project.
</p>

          
        </motion.div>
      </div>

      {/* Work Experience Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full mb-16"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary dark:via-primary-light to-transparent"></div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-3">
            <Icon icon="mdi:briefcase" className="text-primary dark:text-primary-light" width="32" height="32" />
            Work Experience
          </h3>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-primary dark:via-primary-light to-transparent"></div>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary dark:from-primary-light via-primary/50 dark:via-primary-light/50 to-primary dark:to-primary-light hidden md:block"></div>
          
          <div className="space-y-8">
            {workExperience.map((item, index) => (
              <motion.div
                key={item.id}
                variants={staggerItem}
                className="relative flex gap-6"
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex flex-shrink-0 items-start pt-2">
                  <div className="w-4 h-4 rounded-full bg-primary dark:bg-primary-light border-4 border-white dark:border-gray-900 z-10"></div>
                </div>
                
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex-1 p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary-light hover:shadow-xl transition-all duration-200"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-primary dark:text-primary-light font-semibold text-lg">
                        {item.organization}
                      </p>
                      {item.location && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 flex items-center gap-1">
                          <Icon icon="mdi:map-marker" width="16" height="16" />
                          {item.location}
                        </p>
                      )}
                    </div>
                    <div className="px-3 py-1 bg-primary/10 dark:bg-primary-light/10 rounded-full text-sm font-medium text-primary dark:text-primary-light">
                      {item.period}
                    </div>
                  </div>
                  
                  {item.achievements && item.achievements.length > 0 && (
                    <ul className="space-y-2 mt-4">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                          <Icon
                            icon="mdi:check-circle"
                            className="text-primary dark:text-primary-light flex-shrink-0 mt-0.5"
                            width="20"
                            height="20"
                          />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full mb-16"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary dark:via-primary-light to-transparent"></div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-3">
            <Icon icon="mdi:school" className="text-primary dark:text-primary-light" width="32" height="32" />
            Education
          </h3>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-primary dark:via-primary-light to-transparent"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              variants={staggerItem}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-6 bg-gradient-to-br from-primary/5 dark:from-primary/10 to-primary-light/5 dark:to-primary-light/10 rounded-lg border border-primary/20 dark:border-primary-light/20 hover:border-primary dark:hover:border-primary-light hover:shadow-xl transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/20 dark:bg-primary-light/20 flex items-center justify-center flex-shrink-0">
                  <Icon
                    icon={item.icon || "mdi:school"}
                    className="text-primary dark:text-primary-light"
                    width="28"
                    height="28"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-primary dark:text-primary-light font-semibold mb-2">
                    {item.organization}
                  </p>
                  {item.location && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 flex items-center gap-1">
                      <Icon icon="mdi:map-marker" width="14" height="14" />
                      {item.location}
                    </p>
                  )}
                  <div className="inline-block px-3 py-1 bg-primary dark:bg-primary-light text-white dark:text-gray-900 rounded-full text-sm font-medium">
                    {item.period}
                  </div>
                  {item.description && (
                    <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Leadership Section */}
      {leadership.length > 0 && (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary dark:via-primary-light to-transparent"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-3">
              <Icon icon="mdi:account-group" className="text-primary dark:text-primary-light" width="32" height="32" />
              Leadership
            </h3>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-primary dark:via-primary-light to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadership.map((item, index) => (
              <motion.div
                key={item.id}
                variants={staggerItem}
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-6 bg-gradient-to-br from-primary/5 dark:from-primary/10 to-primary-light/5 dark:to-primary-light/10 rounded-lg border border-primary/20 dark:border-primary-light/20 hover:border-primary dark:hover:border-primary-light hover:shadow-xl transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 dark:bg-primary-light/20 flex items-center justify-center flex-shrink-0">
                    <Icon
                      icon={item.icon || "mdi:account-group"}
                      className="text-primary dark:text-primary-light"
                      width="28"
                      height="28"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-primary dark:text-primary-light font-semibold mb-2">
                      {item.organization}
                    </p>
                    {item.location && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 flex items-center gap-1">
                        <Icon icon="mdi:map-marker" width="14" height="14" />
                        {item.location}
                      </p>
                    )}
                    <div className="inline-block px-3 py-1 bg-primary dark:bg-primary-light text-white dark:text-gray-900 rounded-full text-sm font-medium">
                      {item.period}
                    </div>
                    {item.description && (
                      <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Achievements */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full mb-16"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
          Key Achievements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 bg-gradient-to-br from-primary/10 to-primary-light/10 dark:from-primary/20 dark:to-primary-light/20 rounded-lg border border-primary/20 dark:border-primary-light/20 text-center"
            >
              <Icon
                icon={achievement.icon}
                className="text-primary dark:text-primary-light mx-auto mb-3"
                width="40"
                height="40"
              />
              <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                {achievement.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Skills by Category */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
          Skills & Technologies
        </h3>
        {skillCategories.map((category, categoryIndex) => {
          const categorySkills = getSkillsByCategory(category)
          return (
            <motion.div
              key={category}
              variants={staggerItem}
              className="mb-8"
            >
              <h4 className="text-xl font-semibold text-primary dark:text-primary-light mb-4 flex items-center gap-2">
                <Icon icon="mdi:code-tags" width="24" height="24" />
                {category}
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {categorySkills.map((skill, skillIndex) => (
                  <SkillBadge
                    key={skill.name}
                    skill={skill}
                    index={categoryIndex * 10 + skillIndex}
                  />
                ))}
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default About
