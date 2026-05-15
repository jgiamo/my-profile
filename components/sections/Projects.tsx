"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  name: string
  description: string
  tags: string[]
  github?: string
  demo?: string
  featured?: boolean
}

// TODO: 添加你的项目数据，每个项目格式如下：
// {
//   name: "项目名称",
//   description: "项目描述：解决了什么问题，你的角色，以及成果。",
//   tags: ["技术栈1", "技术栈2"],
//   github: "https://github.com/yourusername/repo",   // 可选
//   demo: "https://your-project.com",                 // 可选
//   featured: true,
// },
const projects: Project[] = []

export function Projects() {
  if (projects.length === 0) return null

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-sm text-indigo-500 mb-2 tracking-wider uppercase">项目</p>
        <h2 className="text-3xl font-bold mb-12">作品集</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group h-full gradient-border rounded-xl p-5 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-semibold text-base group-hover:text-indigo-500 transition-colors">
          {project.name}
        </h3>
        <div className="flex items-center gap-2 ml-2 shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Live demo"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs rounded-md bg-muted text-muted-foreground font-mono border border-border"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
