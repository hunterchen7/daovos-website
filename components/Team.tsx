import React from "react";
import Image from "next/image";
import isla from "../public/team_members/isla.png";

const shimmer = (w: number, h: number) => 
`<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="rgb(226,254,139)" offset="20%" />
      <stop stop-color="rgba(255,255,255)" offset="50%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="rgba(21, 14, 35, 0.4)" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="2s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
typeof window === 'undefined'
  ? Buffer.from(str).toString('base64')
  : window.btoa(str)

const blurData = `data:image/svg+xml;base64,${toBase64(shimmer(700, 700))}`;

const Team = (): JSX.Element => {
  const TeamMember = (props: any): JSX.Element => {
    const { name, title, image, desc } = props;
    return (
      <div className="flex flex-col justify-center bg-white border border-black my-3 md:mx-3 py-2">
        <div className="flex justify-center mx-14 md:mx-24 lg:mx-36 my-6 bg-black rounded-full">
          <Image
              src={image}
              objectFit={'cover'}
              layout={'responsive'}
              placeholder={'blur'}
              blurDataURL={blurData}
              alt={name}
          />
        </div>
        <div className="text-center text-3xl font-bold">
          {name}
        </div>
        <div className="text-center font-nunito text-xl my-2">
          {title}
        </div>
        <div className="text-center font-nunito m-4">
          {desc}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center w-full bg-[#E2FE8B] border border-black mb-12">
      <h1 className="text-4xl lg:text-8xl mx-6 bg-white p-6 lg:p-12 border-x border-b border-black mb-3" id="team">The Team</h1>
      <div className="grid grid-cols-1 grid-flow-row items-center md:grid-cols-2 lg:grid-cols-3 gap-10 mx-6 md:mx-10 lg:mx-16">
        <TeamMember
          name="Isla Munro"
          title="Project Sponsor @ FTW.DAO"
          image={isla}
          desc="Isla is the co-founder of ​FTW.DAO, and a ​passionate believer in ​DAOs to re-shape ​society for the better. ​She speaks regularly on ​DAOs, diversity, venture ​capital and mental ​health"
        />
        <TeamMember
          name="Daniel Dohne"
          title="Project Sponsor @ Aramid"
          image={isla}
          desc="Isla is the co-founder of ​FTW.DAO, and a ​passionate believer in ​DAOs to re-shape ​society for the better. ​She speaks regularly on ​DAOs, diversity, venture ​capital and mental ​health"
        />
        <TeamMember
          name="Esteve Clavera"
          title="Project Lead"
          image={isla}
          desc="Isla is the co-founder of ​FTW.DAO, and a ​passionate believer in ​DAOs to re-shape ​society for the better. ​She speaks regularly on ​DAOs, diversity, venture ​capital and mental ​health"
        />
        <TeamMember
          name="Isla Munro"
          title="Project Sponsor @ FTW.DAO"
          image={isla}
          desc="Isla is the co-founder of ​FTW.DAO, and a ​passionate believer in ​DAOs to re-shape ​society for the better. ​She speaks regularly on ​DAOs, diversity, venture ​capital and mental ​health"
        />
        </div>
      <div className="w-[80vw] lg:w-[95.75vw] text-center bg-white p-6 mt-4 border-black border flex flex-col gap-4 mb-8 md:mb-16">
        <div className="text-4xl font-semibold">
          A question?
        </div>
        <div className="font-nunito">
          Reach out @
        </div>
        <div className="text-xl font-bold underline">
          info@davos.global
        </div>
      </div>
    </div>
  );
};

export default Team;