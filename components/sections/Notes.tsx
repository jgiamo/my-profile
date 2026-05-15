"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Calendar, Tag } from "lucide-react"
import type { Note } from "@/lib/notes"

interface NotesProps {
  notes: Note[]
}

export function Notes({ notes }: NotesProps) {
  return (
    <section id="notes" className="py-24 px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-mono text-sm text-indigo-500 mb-2 tracking-wider uppercase">
              学习笔记
            </p>
            <h2 className="text-3xl font-bold">最新笔记</h2>
          </div>
          <Link
            href="/notes"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-indigo-500 transition-colors font-mono"
          >
            查看全部 <ArrowRight size={14} />
          </Link>
        </div>

        {notes.length === 0 ? (
          <p className="text-muted-foreground text-sm">暂无笔记，敬请期待...</p>
        ) : (
          <div className="space-y-4">
            {notes.map((note, i) => (
              <motion.div
                key={note.slug}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
              >
                <NoteCard note={note} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function NoteCard({ note }: { note: Note }) {
  return (
    <Link href={`/notes/${note.slug}`}>
      <div className="group gradient-border rounded-xl p-5 hover:shadow-md transition-all duration-200">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-base group-hover:text-indigo-500 transition-colors truncate">
              {note.title}
            </h3>
            {note.description && (
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                {note.description}
              </p>
            )}
            <div className="flex items-center flex-wrap gap-3 mt-3">
              {note.date && (
                <span className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
                  <Calendar size={12} />
                  {note.date}
                </span>
              )}
              {note.tags.length > 0 && (
                <div className="flex items-center gap-1 flex-wrap">
                  <Tag size={12} className="text-muted-foreground" />
                  {note.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-muted-foreground hover:text-indigo-500 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
          <ArrowRight
            size={16}
            className="text-muted-foreground group-hover:text-indigo-500 group-hover:translate-x-1 transition-all shrink-0 mt-1"
          />
        </div>
      </div>
    </Link>
  )
}
