"use client"

import { links } from "@/constant/menu-item"
import { FloatingDock } from "../ui/floating-dock"

function NavigationSidebar() {
  return (
    <div className="fixed bottom-0 z-10 w-full flex items-center justify-center m-2">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  )
}

export default NavigationSidebar
