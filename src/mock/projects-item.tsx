"use client"
import Image from "next/image"
import Link from "next/link"

interface DummyContentProps {
  imageUrl: string
}

const DummyContent = (props: DummyContentProps) => {
  const { imageUrl } = props
  return (
    <Image
      src={imageUrl}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  )
}

export const tabs = [
  {
    title: "Discord",
    value: "discord",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <Link href="https://github.com/mustafasalim/discord-app">
          <DummyContent imageUrl="/discordApp.png" />
        </Link>
      </div>
    ),
  },
  {
    title: "Valorant",
    value: "valorant",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <Link href="https://github.com/mustafasalim/valorant-blog">
          <DummyContent imageUrl="/valorantApp.png" />
        </Link>
      </div>
    ),
  },
  {
    title: "Games",
    value: "games",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <Link href="https://github.com/mustafasalim/games-project">
          <DummyContent imageUrl="/gamesApp.png" />
        </Link>
      </div>
    ),
  },
  {
    title: "Resumee",
    value: "resume",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <Link href="https://github.com/mustafasalim/resumee-project">
          <DummyContent imageUrl="/resumeeApp.png" />
        </Link>
      </div>
    ),
  },
  {
    title: "Github",
    value: "github",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <Link href="https://github.com/mustafasalim/github-app">
          <DummyContent imageUrl="/githubApp.png" />
        </Link>
      </div>
    ),
  },
  {
    title: "Coffe",
    value: "coffe",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <Link href="https://github.com/mustafasalim/coffe-app">
          <DummyContent imageUrl="/coffeApp.png" />
        </Link>
      </div>
    ),
  },
  {
    title: "Ufel",
    value: "ufel",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <Link href="https://github.com/mustafasalim/ufeldesign">
          <DummyContent imageUrl="/ufelApp.png" />
        </Link>
      </div>
    ),
  },
  {
    title: "Weather",
    value: "weather",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <Link href="https://github.com/mustafasalim/weather-app">
          <DummyContent imageUrl="/weatherApp.png" />
        </Link>
      </div>
    ),
  },
  {
    title: "X",
    value: "x",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <Link href="https://github.com/mustafasalim/twitter-clone-x-react">
          <DummyContent imageUrl="/xApp.png" />
        </Link>
      </div>
    ),
  },
  {
    title: "Select",
    value: "select",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <Link href="https://github.com/mustafasalim/multi-select">
          <DummyContent imageUrl="/selectApp.png" />
        </Link>
      </div>
    ),
  },
]
