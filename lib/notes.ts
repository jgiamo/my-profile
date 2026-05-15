import fs from "fs"
import path from "path"
import matter from "gray-matter"

const NOTES_DIR = path.join(process.cwd(), "content/notes")

export interface Note {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
  content: string
}

export function getAllNotes(): Note[] {
  if (!fs.existsSync(NOTES_DIR)) return []

  const files = fs.readdirSync(NOTES_DIR).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))

  const notes = files
    .map((filename) => {
      const filePath = path.join(NOTES_DIR, filename)
      const raw = fs.readFileSync(filePath, "utf-8")
      const { data, content } = matter(raw)

      const slug = filename.replace(/\.(mdx|md)$/, "")

      return {
        slug,
        title: data.title ?? slug,
        date: data.date ? String(data.date) : "",
        description: data.description ?? "",
        tags: data.tags ?? [],
        content,
      }
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1)) // newest first

  return notes
}

export function getNoteBySlug(slug: string): Note | null {
  const extensions = [".mdx", ".md"]
  for (const ext of extensions) {
    const filePath = path.join(NOTES_DIR, `${slug}${ext}`)
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, "utf-8")
      const { data, content } = matter(raw)
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ? String(data.date) : "",
        description: data.description ?? "",
        tags: data.tags ?? [],
        content,
      }
    }
  }
  return null
}
