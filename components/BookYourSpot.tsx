import React from "react";
import { Link } from "react-scroll";

const BookYourSpot = (): JSX.Element => {
  return (
    <Link to={'tickets'} smooth={true} spy={true} duration={750} className="bg-[url('../public/book_spot_dark.svg')] hover:bg-[url('../public/book_spot_light.svg')] ease-in-out duration-100 cursor-pointer w-[223px] h-[64px] select-none">
      <div className="tracking-wider w-[215px] h-[53px] ml-1 mt-1.5 mb-1.5 text-center flex flex-col justify-center bg-black hover:bg-white border-2 border-black text-white hover:text-black text-lg font-semibold rounded-full ease-in-out duration-100 font-nunito">Mint Ticket</div>
    </Link>
  );
};

export default BookYourSpot;