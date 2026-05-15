import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import rehypePrettyCode from "rehype-pretty-code"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import { getAllNotes, getNoteBySlug } from "@/lib/notes"

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const notes = getAllNotes()
  return notes.map((note) => ({ slug: note.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const note = getNoteBySlug(params.slug)
  if (!note) return {}
  return {
    title: note.title,
    description: note.description,
  }
}

export default function NotePage({ params }: Props) {
  const note = getNoteBySlug(params.slug)
  if (!note) notFound()

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Back */}
        <Link
          href="/notes"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 font-mono"
        >
          <ArrowLeft size={14} />
          所有笔记
        </Link>

        {/* Meta */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{note.title}</h1>
          <div className="flex items-center flex-wrap gap-4 text-sm text-muted-foreground">
            {note.date && (
              <span className="flex items-center gap-1.5 font-mono">
                <Calendar size={13} />
                {note.date}
              </span>
            )}
            {note.tags.length > 0 && (
              <div className="flex items-center gap-1.5 flex-wrap">
                <Tag size={13} />
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
          {note.description && (
            <p className="mt-4 text-muted-foreground leading-relaxed border-l-4 border-indigo-500 pl-4">
              {note.description}
            </p>
          )}
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-10" />

        {/* Content */}
        <article className="prose">
          <MDXRemote
            source={note.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  [
                    rehypePrettyCode,
                    {
                      theme: { dark: "github-dark", light: "github-light" },
                      keepBackground: false,
                    },
                  ] as any,
                ],
              },
            }}
          />
        </article>
      </div>
    </div>
  )
}
