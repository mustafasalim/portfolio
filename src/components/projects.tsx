import React from "react"
import Heading from "./ui/heading"
import { Tabs } from "./ui/tabs"
import { tabs } from "@/mock/projects-item"

const Projects = () => {
  return (
    <div className="max-w-5xl mx-auto w-full  items-start justify-start">
      <Heading
        description="A collection of web applications and projects I've developed, showcasing my skills in both frontend and backend technologies. From interactive user interfaces to scalable server-side solutions, each project highlights my expertise in technologies like JavaScript, React, Next.js, Node.js, Express.js, TypeScript, and Tailwind CSS. These projects demonstrate my ability to build efficient, high-performance web applications."
        text="Projects"
      />
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mb-40">
        <Tabs
          containerClassName="mt-10 "
          tabs={tabs}
        />
      </div>
    </div>
  )
}

export default Projects
