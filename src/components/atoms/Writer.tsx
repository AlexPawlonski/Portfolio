"use client"
import { Typewriter } from "react-simple-typewriter";

interface Props {
  phrases: string[];
}

export default function Writer({ phrases }: Props) {
  return (
    <div className="flex items-center lg:text-3xl text-xl my-10">
      <Typewriter
        words={phrases}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={150}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  );
}
