import React from "react";
import BookYourSpot from "./BookYourSpot";
import Image from "next/image";

const Agenda = (): JSX.Element => {
  const Textbox = (props: any): JSX.Element => {
    const { number, text } = props;
    return (
      <div className="flex">
        {
          number % 2 === 0 && <div className="w-[80px] lg:w-[140px]" />
        }
        <div className="w-[80px] lg:w-[140px] h-[100px] lg:h-[185px] border-2 border-black text-center flex flex-col justify-center text-3xl md:text-6xl font-extrabold">
          {number}
        </div>
        <div className="border-r-2 border-y-2 border-black text-center rounded-r-full flex flex-col justify-center text-xl lg:text-3xl font-bold px-4 md:px-20 lg:px-36 bg-white">
          {text}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 h-screen" id="agenda">
      <div className="hidden lg:flex border-t-2 border-black pb-4"/>
      <div className="bg-[url('../public/AGENDA.svg')] text-center lg:py-8 mb-3 scale-75 -mx-96" />
      <div className="hidden lg:flex border-t-2 border-black"/>
      <div className="text-6xl lg:text-8xl font-bold text-center bg-[#E2FF8A] mt-12 py-12">
        AGENDA
      </div>
      <ul className="list-none text-3xl font-nunito gap-4 my-8 w-1/2 mx-auto">
        <li>
          <b>1:05 - 1:10 PM</b> Welcome
        </li>
        <li>
          <b>1:10 - 1:30 PM</b> Web3's climate impact, can it help us get to net zero?
          <ul className="list-disc text-2xl mx-12">
            <li>Toucan Protocol</li>
            <li>Foresight Institute</li>
            <li>Hyphen Earth</li>
            <li>Moderated by Tien</li>
          </ul>
        </li>
        <li>
          <b>1:35 - 1:45 PM</b> (TBD) Spotlight 1
        </li>
        <li>        
          <b>1:50 - 2:10 PM</b> From theory to practice: governance learnings for the next wave of DAOs
          <ul className="list-disc text-2xl mx-12">
            <li>Maker DAO</li>
            <li>Palmera DAO</li>
            <li>Bankless</li>
            <li>Moderated by Victoria/Fabio</li>
          </ul>
        </li>
        <li>
          <b>2:15 - 2:25 PM</b> (TBD) Spotlight 2
        </li>
        <li>
          <b>2:30 - 3:00 PM</b>
          <ul className="list-disc text-2xl mx-12">
            <li>Learning Circle: Investing in DAOs</li>
            <li>Fishbowl discussion with input from Tokentus, FTW DAO, Smape Capital, and others</li>
          </ul>
        </li>
        <li>
          <b>3:00 - 4:00 PM</b> Networking
        </li>
      </ul>
    </div>
  )
};

export default Agenda;