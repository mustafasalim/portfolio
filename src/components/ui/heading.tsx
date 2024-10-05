import React from "react"

interface HeadingProps {
  text: string
  description?: string
}

const Heading = (props: HeadingProps) => {
  const { text, description } = props
  return (
    <div>
      <h2 className="text-3xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="ml-3">{text}</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="ml-3"> {text}</span>
          </div>
        </div>
      </h2>
      <div className="text-xs lg:text-md  dark:text-zinc-300 text-black flex items-center justify-end text-center mt-8">
        {description}
      </div>
    </div>
  )
}

export default Heading
