import {Link} from "react-scroll";
import React from "react";
import BookYourSpot from "./BookYourSpot";

const Header = (): JSX.Element => {
  const HeaderButton = (props: any): JSX.Element => {
    const {to, text} = props;
    return (
      <Link to={to as string} spy={true} smooth={true} duration={500}
            className="flex justify-center text-xl font-semibold text-dark-caption px-6 items-center ease-in-out duration-200 hover:text-dark-label hover:cursor-pointer">
          {text}
      </Link>
    );
  };

  return (
    <header className="flex flex-row self-center items-center justify-between py-2 md:gap-4 sticky top-0 bg-white border-b-2 border-black w-[96.5vw]">
      <h1 className="font-extrabold text-4xl lg:text-5xl">DAOVOS</h1>
      <div className="hidden lg:flex flex-row self-center justify-center font-nunito">
        <HeaderButton to="daovos" text="DAOVOS"/>
        <HeaderButton to="our-plan" text="Our Plan"/>
        <HeaderButton to="agenda" text="Agenda"/>
        <HeaderButton to="philosopy" text="Philosophy"/>
        <HeaderButton to="tickets" text="Tickets"/>
        <HeaderButton to="team" text="Team"/>        
      </div>
      <div className="hidden lg:flex">
        <BookYourSpot />
      </div>
    </header>
  );
};

export default Header;