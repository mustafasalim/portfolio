"use client"
import { HeroParallax } from "@/components/ui/hero-parallax"
import { products } from "@/mock/product-item"

export default function Home() {
  return (
    <div className="absolute top-0 z-[-2]  w-full bg-white dark:bg-background bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]">
      <HeroParallax products={products} />
    </div>
  )
}
