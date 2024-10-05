"use client"
import Image from "next/image"

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
    title: "Valorant",
    value: "valorant",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <DummyContent imageUrl="/valorantApp.png" />
      </div>
    ),
  },
  {
    title: "Games",
    value: "games",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <DummyContent imageUrl="/gamesApp.png" />
      </div>
    ),
  },
  {
    title: "Resumee",
    value: "resume",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <DummyContent imageUrl="/resumeeApp.png" />
      </div>
    ),
  },
  {
    title: "Github",
    value: "github",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <DummyContent imageUrl="/githubApp.png" />
      </div>
    ),
  },
  {
    title: "Coffe",
    value: "coffe",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <DummyContent imageUrl="/coffeApp.png" />
      </div>
    ),
  },
  {
    title: "Ufel",
    value: "ufel",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <DummyContent imageUrl="/ufelApp.png" />
      </div>
    ),
  },
  {
    title: "Weather",
    value: "weather",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <DummyContent imageUrl="/weatherApp.png" />
      </div>
    ),
  },
  {
    title: "X",
    value: "x",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <DummyContent imageUrl="/xApp.png" />
      </div>
    ),
  },
  {
    title: "Select",
    value: "select",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <DummyContent imageUrl="/selectApp.png" />
      </div>
    ),
  },
]
