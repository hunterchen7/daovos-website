import React from "react";
import BookYourSpot from "./BookYourSpot";
import Image from "next/image";

const Event = (): JSX.Element => {
  const Text = (props: any): JSX.Element => {
    const { title, text } = props;
    return (
      <div className="">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold sm:my-6">{title}</h1>
        <p className="text-2xl md:text-3xl lg:text-4xl font-nunito">{text}</p>
      </div>
    )
  }  

  return (
    <div className="" id="event">
      <div className="text-6xl lg:text-[200px] font-bold text-center bg-[#E2FF8A] mt-12 py-12">
        Event
      </div>
      <div className="">
        <div className="flex flex-col self-center mx-auto">
          <div className="flex bg-[#E2FF8A] ">
            <div className="w-1/12 sm:w-1/5 lg:w-1/4"/>
            <div className="flex w-full bg-white pl-16 py-10 md:pl-20 lg:pl-36 rounded-l-full">
              <Text title={"2 Days"} text={'During the World Economic Forum in Davos'} />
            </div>
            <div className="w-1/12 sm:w-1/5 lg:w-1/3 bg-white"/>
          </div>
          <div className="flex bg-white">
            <div className="w-1/12 sm:w-1/5 lg:w-1/4 bg-[#E2FF8A]"/>
            <div className="flex justify-end w-full bg-[#E2FF8A] py-10 pr-16 md:pr-20 lg:pr-36 rounded-r-full text-end">
              <Text title={"Attendees"} text={'100+ global DAO thinkers, builders and leaders'} />
            </div>
            <div className="w-1/12 sm:w-1/5 lg:w-1/4 bg-white"/>
          </div>
          <div className="flex bg-[#E2FF8A] ">
            <div className="w-1/12 sm:w-1/5 lg:w-1/4 "/>
            <div className="flex w-full bg-white pl-16 py-10 md:pl-20 lg:pl-36 rounded-l-full">
              <Text title={"Diversity, Equity & Inclusion"} text={'Including global leaders, and ensuring representation of important voices in DAOs'} />
            </div>
            <div className="w-1/12 sm:w-1/5 lg:w-1/3 bg-white"/>
          </div>
          <div className="flex bg-white">
            <div className="w-1/12 sm:w-1/5 lg:w-1/4 bg-[#E2FF8A]"/>
            <div className="flex justify-end w-full bg-[#E2FF8A] py-10 pr-16 md:pr-20 lg:pr-36 rounded-r-full text-end">
              <Text title={"50+ DAOminaries"} text={'From across the globe, bringing their voices to a global audience'} />
            </div>
            <div className="w-1/12 sm:w-1/5 lg:w-1/4 bg-white"/>
          </div>
          <div className="flex bg-[#E2FF8A] ">
            <div className="w-1/12 sm:w-1/5 lg:w-1/4 "/>
            <div className="flex w-full bg-white pl-16 py-10 md:pl-20 lg:pl-36 rounded-l-full">
              <Text title={"40+ DAOs"} text={'Leaders from impact-minded DAOs from around the globe'} />
            </div>
            <div className="w-1/12 sm:w-1/5 lg:w-1/3 bg-white"/>
          </div>
          <div className="bg-[#E2FF8A] h-8"/>
        </div>  
      </div>
    </div>
  )
};

export default Event;