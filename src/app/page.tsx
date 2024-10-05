"use client"
import AreasOfExpertise from "@/components/areas-of-expertise"
import Projects from "@/components/projects"
import { HeroParallax } from "@/components/ui/hero-parallax"
import { Vortex } from "@/components/ui/vortex"
import { products } from "@/mock/product-item"

export default function Home() {
  return (
    <div className="absolute top-0 z-[-2]  w-full bg-white dark:bg-background bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0, 0, 0, 0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]">
      <HeroParallax products={products} />
      <div
        id="areas-of-expertise"
        className="w-[calc(100%-4rem)] mx-auto rounded-md overflow-hidden"
      >
        <Vortex
          backgroundColor="black"
          className="mx-auto w-full max-w-5xl"
        >
          <AreasOfExpertise
            title="Areas Of Expertise"
            description="As a full-stack web developer, I specialize in building dynamic, responsive, and scalable web applications using modern technologies. My areas of expertise include frontend and backend development, ensuring a seamless user experience with performance optimization and clean code architecture. Whether it's crafting interactive user interfaces or developing robust server-side applications, I focus on delivering high-quality digital solutions."
          />
        </Vortex>
      </div>
      <div
        className="w-[calc(100%-4rem)] mx-auto rounded-md overflow-hidden"
        id="projects"
      >
        <Projects />
      </div>
    </div>
  )
}
