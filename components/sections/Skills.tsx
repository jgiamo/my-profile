"use client"

import { motion } from "framer-motion"

interface SkillGroup {
  label: string
  items: string[]
}

const techSkillGroups: SkillGroup[] = [
  {
    label: "架构 & 系统设计",
    items: ["分布式架构", "高并发系统", "系统设计", "性能调优"],
  },
  {
    label: "编程语言",
    items: ["Java", "JVM 调优", "并发编程", "Python"],
  },
  {
    label: "框架 & 生态",
    items: ["Spring Boot", "Spring Cloud", "MyBatis"],
  },
  {
    label: "中间件 & 数据",
    items: ["Redis", "MySQL", "Kafka", "Elasticsearch"],
  },
  {
    label: "AI 工程",
    items: ["LLM 应用开发", "RAG", "Prompt 工程", "AI 辅助编程"],
  },
  {
    label: "工程基础",
    items: ["算法 & 数据结构", "设计模式", "编码规范"],
  },
]

const productSkills = [
  "产品设计",
  "用户研究",
  "需求分析",
  "数据分析",
  "竞品分析",
  "原型设计",
  "项目管理",
  "敏捷开发",
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-sm text-indigo-500 mb-2 tracking-wider uppercase">技能</p>
        <h2 className="text-3xl font-bold mb-12">专业技能</h2>

        <div className="space-y-10">
          {/* Tech skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="font-semibold mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block" />
              技术能力
            </h3>
            <div className="space-y-4">
              {techSkillGroups.map((group, i) => (
                <div key={group.label} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                  <span className="text-xs font-mono text-muted-foreground w-32 shrink-0 pt-0.5">
                    {group.label}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <SkillTag key={item} variant="indigo">{item}</SkillTag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-border" />

          {/* Product skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="font-semibold mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet-500 inline-block" />
              产品能力
            </h3>
            <div className="flex flex-wrap gap-2">
              {productSkills.map((skill) => (
                <SkillTag key={skill} variant="violet">{skill}</SkillTag>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function SkillTag({
  children,
  variant = "indigo",
}: {
  children: React.ReactNode
  variant?: "indigo" | "violet"
}) {
  return (
    <span
      className={`px-3 py-1 text-sm rounded-lg border font-mono transition-colors cursor-default
        ${variant === "violet"
          ? "bg-violet-500/5 border-violet-500/20 text-violet-600 dark:text-violet-400 hover:bg-violet-500/10"
          : "bg-indigo-500/5 border-indigo-500/20 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/10"
        }`}
    >
      {children}
    </span>
  )
}
