"use client";

import calc from "@/public/icon-calculator.svg";
import kar from "@/public/icon-karma.svg";
import sup from "@/public/icon-supervisor.svg";
import team from "@/public/icon-team-builder.svg";
import Card from "./components/Card";
{
  /*

- Cyan: 
- Red: hsl(0, 78%, 62%)
- Orange: hsl(34, 97%, 64%)
- Blue: hsl(212, 86%, 64%)

*/
}
export default function Home() {
  return (
    <div className="flex flex-col p-4 ">
      <div className="mb-6 justify-center">
        <h1 className="text-gray-400 text-2xl md:text-3xl text-center">
          {"Reliable, efficient delivery"}
        </h1>
        <h1 className="text-gray-500 text-2xl md:text-4xl font-semibold text-center">
          Powered by Technology
        </h1>
        <p className="text-gray-500 text-center text-base md:text-lg">
          Our Artificial intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>

      <div className="md:grid md:grid-cols-3 md:grid-rows-2 md:gap-4 ">
        <div className="md:grid md:place-items-center md:row-span-2">
          <Card
            title="Supervison"
            text="Monitors activity to identify project roadblocks"
            icon={sup}
            color="hsl(180,62%,55%)"
          ></Card>
        </div>

        <div className="md:grid  md:col-start-2 md:row-start-2">
          <Card
            title="Team Builder"
            text="Scans our talent network to create the optimal team for your project"
            icon={team}
            color="hsl(0,78%,62%)"
          ></Card>
        </div>

        <div className="">
          <Card
            title="Karmaa"
            text="Regularly evalauates our talent to ensure quanlity"
            icon={kar}
            color="hsl(34,97%,64%)"
          ></Card>
        </div>

        <div className="md:grid md:place-items-center md:row-span-2 ">
          <Card
            title="Calculator"
            text="Uses data from past projects to provide better delivery estimates"
            icon={calc}
            color="hsl(212, 86%, 64%)"
          ></Card>
        </div>
      </div>
    </div>
  );
}
