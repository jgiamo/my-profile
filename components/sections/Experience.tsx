"use client"

import { motion } from "framer-motion"

interface Job {
  company: string
  role: string
  period: string
  description: string
  tags: string[]
}

const experience: Job[] = [
  {
    company: "公司名称 A",
    role: "产品经理",
    period: "2023 — 至今",
    description:
      "在这里描述你的工作内容、核心职责和主要成就。例如：负责 XX 产品从 0 到 1 的设计，用户规模达到 XX 万。",
    tags: ["产品设计", "用户研究", "数据分析"],
  },
  {
    company: "公司名称 B",
    role: "高级软件工程师",
    period: "2021 — 2023",
    description:
      "在这里描述你的工作内容。例如：主导核心服务架构重构，性能提升 XX%，负责 XX 模块的设计与开发。",
    tags: ["React", "Node.js", "系统设计"],
  },
  {
    company: "公司名称 C",
    role: "软件工程师",
    period: "2019 — 2021",
    description:
      "在这里描述你的工作内容。例如：参与 XX 产品的前端开发，独立负责 XX 功能模块的设计与实现。",
    tags: ["TypeScript", "Vue", "PostgreSQL"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionLabel>经历</SectionLabel>
        <h2 className="text-3xl font-bold mb-12">工作经历</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500 via-violet-500 to-transparent ml-[7px]" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative pl-10"
              >
                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-indigo-500 bg-background" />

                <div className="gradient-border rounded-xl p-5 hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{job.role}</h3>
                      <p className="text-indigo-500 font-mono text-sm">{job.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-xs rounded-full bg-muted text-muted-foreground border border-border font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-sm text-indigo-500 mb-2 tracking-wider uppercase">
      {children}
    </p>
  )
}
