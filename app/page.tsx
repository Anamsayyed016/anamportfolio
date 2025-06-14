import type { Metadata } from "next"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Projects from "@/components/sections/projects"
import Services from "@/components/sections/services"
import Testimonials from "@/components/sections/testimonials"
import Contact from "@/components/sections/contact"

export const metadata: Metadata = {
  title: "Anam Sayyed - Full-Stack Python Developer",
  description:
    "Professional Full-Stack Python Developer specializing in Django, Flask, React.js, and modern web development. Based in Bhopal, Madhya Pradesh.",
  keywords: "Full-Stack Developer, Python Developer, Django, Flask, React.js, Web Development, Bhopal",
  authors: [{ name: "Anam Sayyed" }],
  openGraph: {
    title: "Anam Sayyed - Full-Stack Python Developer",
    description:
      "Professional Full-Stack Python Developer specializing in Django, Flask, React.js, and modern web development.",
    type: "website",
    locale: "en_US",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  )
}
