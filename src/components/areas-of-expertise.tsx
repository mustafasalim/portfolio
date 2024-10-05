"use client"
import React from "react"
import { HoverEffect } from "./ui/card-hover-effect"
import { projects } from "@/mock/areas-of-expertise-item"
import Heading from "./ui/heading"

interface AreasOfExpertiseProps {
  title?: string
  description?: string
}

const AreasOfExpertise = (props: AreasOfExpertiseProps) => {
  const { title, description } = props

  return (
    <div>
      <Heading
        text={title ?? ""}
        description={description}
      />
      <HoverEffect items={projects} />
    </div>
  )
}

export default AreasOfExpertise
