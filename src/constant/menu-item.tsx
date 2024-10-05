import {
  IconBrandGithub,
  IconExchange,
  IconHome,
  IconTerminal2,
  IconBrandLinkedin,
} from "@tabler/icons-react"
export const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Projects",
    icon: (
      <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#projects",
  },

  {
    title: "Areas Of Expertise",
    icon: (
      <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#areas-of-expertise",
  },

  {
    title: "Linkedin",
    icon: (
      <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "www.linkedin.com/in/mustafa-salim-562145205",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/mustafasalim",
  },
]
