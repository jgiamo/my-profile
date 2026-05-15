"use client"

import { motion } from "framer-motion"
import { Github, Mail, ArrowUpRight } from "lucide-react"
import { siteConfig } from "@/config/site"

const links = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: siteConfig.socials.github?.replace("https://", ""),
    href: siteConfig.socials.github,
    icon: Github,
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-sm text-indigo-500 mb-2 tracking-wider uppercase">联系</p>
        <h2 className="text-3xl font-bold mb-4">保持联系</h2>
        <p className="text-muted-foreground mb-12 max-w-xl">
          无论是合作机会、技术交流，还是只是想聊聊，都欢迎通过以下方式找到我。
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {links
            .filter((l) => l.href)
            .map((link, i) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href?.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="group gradient-border rounded-xl p-5 flex items-center gap-4 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500 transition-colors">
                    <Icon
                      size={18}
                      className="text-indigo-500 group-hover:text-white transition-colors"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground font-mono mb-0.5">{link.label}</p>
                    <p className="text-sm font-medium truncate group-hover:text-indigo-500 transition-colors">
                      {link.value}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-muted-foreground group-hover:text-indigo-500 transition-colors shrink-0"
                  />
                </motion.a>
              )
            })}
        </div>
      </div>
    </section>
  )
}
