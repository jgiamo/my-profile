import { Hero } from "@/components/sections/Hero"
// import { Experience } from "@/components/sections/Experience" // TODO: 填写工作经历后取消注释
import { Skills } from "@/components/sections/Skills"
import { Projects } from "@/components/sections/Projects"
import { Notes } from "@/components/sections/Notes"
import { Contact } from "@/components/sections/Contact"
import { getAllNotes } from "@/lib/notes"

export default function HomePage() {
  const latestNotes = getAllNotes().slice(0, 4)

  return (
    <>
      <Hero />
      {/* <Experience /> */}
      <Skills />
      <Projects />
      <Notes notes={latestNotes} />
      <Contact />
    </>
  )
}
