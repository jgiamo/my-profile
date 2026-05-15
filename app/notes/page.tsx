import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import { getAllNotes } from "@/lib/notes"

export const metadata: Metadata = {
  title: "学习笔记",
  description: "我的学习笔记和思考记录",
}

export default function NotesPage() {
  const notes = getAllNotes()

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 font-mono"
        >
          <ArrowLeft size={14} />
          返回首页
        </Link>

        {/* Header */}
        <div className="mb-10">
          <p className="font-mono text-sm text-indigo-500 mb-2 tracking-wider uppercase">Notes</p>
          <h1 className="text-4xl font-bold mb-3">学习笔记</h1>
          <p className="text-muted-foreground">
            记录学习过程中的思考、总结与感悟，共 {notes.length} 篇。
          </p>
        </div>

        {/* Notes list */}
        {notes.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-4xl mb-4">✍️</p>
            <p>暂无笔记，第一篇正在路上...</p>
          </div>
        ) : (
          <div className="space-y-3">
            {notes.map((note) => (
              <Link key={note.slug} href={`/notes/${note.slug}`}>
                <div className="group gradient-border rounded-xl p-5 hover:shadow-md transition-all duration-200">
                  <h2 className="font-medium text-base group-hover:text-indigo-500 transition-colors mb-1">
                    {note.title}
                  </h2>
                  {note.description && (
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {note.description}
                    </p>
                  )}
                  <div className="flex items-center flex-wrap gap-3">
                    {note.date && (
                      <span className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
                        <Calendar size={11} />
                        {note.date}
                      </span>
                    )}
                    {note.tags.length > 0 && (
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <Tag size={11} className="text-muted-foreground" />
                        {note.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/5 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20 font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
