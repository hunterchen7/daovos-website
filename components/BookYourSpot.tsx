import React from "react";
import { Link } from "react-scroll";

const BookYourSpot = (): JSX.Element => {
  return (
    <Link to={'tickets'} smooth={true} spy={true} duration={750} className="bg-[url('../public/book_spot_dark.svg')] hover:bg-[url('../public/book_spot_light.svg')] cursor-pointer w-[223px] h-[64px]"/>
  );
};

export default BookYourSpot;