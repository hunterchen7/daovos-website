import { Link } from 'react-scroll';
import React, { useState } from 'react';
import BookYourSpot from './BookYourSpot';

const Header = (): JSX.Element => {
  const [menuDropped, setMenuDropped] = useState(false);

  const HeaderButton = (props: any): JSX.Element => {
    const { to, text } = props;
    return (
      <Link
        to={to as string}
        spy={true}
        smooth={true}
        duration={500}
        onClick={() => setMenuDropped(false)}
        className="flex justify-center text-xl font-semibold text-dark-caption px-6 items-center ease-in-out duration-200 hover:text-dark-label hover:cursor-pointer"
      >
        {text}
      </Link>
    );
  };

  return (
    <header className="flex flex-row self-center items-center justify-between py-2 md:gap-4 sticky top-0 bg-white border-b-2 border-black px-3 -mx-3 sm:mx-0 z-20">
      <h1 className="font-extrabold text-4xl lg:text-5xl">DAOVOZ</h1>
      <div
        className={`flex lg:hidden cursor-pointer select-none ease-in-out duration-200 hover:bg-dark-label p-2 place-items-center place-content-center border-menu-dropdown-border border-2 w-14 h-14 rounded-full ${
          menuDropped ? 'bg-[rgba(0,0,0,0.6)]' : ''
        }`}
        onClick={() => setMenuDropped(!menuDropped)}
      >
        <svg
          className=""
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 7H15M2 16H30M30 25H15"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="hidden lg:flex flex-row self-center justify-center font-nunito">
        <HeaderButton to="daovos" text="DAOVOZ" />
        <HeaderButton to="event" text="Event" />
        <HeaderButton to="agenda" text="Agenda" />
        <HeaderButton to="mission" text="Mission" />
        {/*<HeaderButton to="event" text="Event"/>
        <HeaderButton to="tickets" text="Tickets" />*/}
        <HeaderButton to="team" text="Team" />
        <HeaderButton to="philosophy" text="Philosophy" />
      </div>
      <div
        className={`z-2 text-right gap-4 py-4 px-8 absolute top-20 right-2 flex flex-col text-md font-medium bg-background-secondary backdrop-blur-lg border-2 rounded-3xl w-full ${
          menuDropped ? 'lg:hidden' : 'hidden'
        }`}
      >
        <HeaderButton to="daovos" text="DAOVOZ" />
        <HeaderButton to="event" text="Event" />
        <HeaderButton to="agenda" text="Agenda" />
        <HeaderButton to="mission" text="Mission" />
        {/*<HeaderButton to="event" text="Event"/>
        <HeaderButton to="tickets" text="Tickets" />*/}
        <HeaderButton to="team" text="Team" />
        <HeaderButton to="philosophy" text="Philosophy" />
      </div>
      {/*<div className="hidden lg:flex">
        <BookYourSpot />
      </div>*/}
    </header>
  );
};

export default Header;
