import React from "react";
import Image from "next/image";
import isla from "../public/team_members/isla.jpg";
import estefania from "../public/team_members/estefania.png";
import esteve from "../public/team_members/esteve.jpeg";
import victoria from "../public/team_members/victoria.jpeg";
import daniel from "../public/team_members/daniel.png";
import anon from "../public/team_members/anon-avatar.png";
import una from "../public/team_members/una.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
  faGlobeAmericas
} from '@fortawesome/free-solid-svg-icons';

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
  const Link = (props: any): JSX.Element => {
    const { link, icon } = props;
    return (
      link &&
      <a
        className="flex justify-center"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="h-6 w-6 text-[rgb(100,100,100)] hover:text-[rgb(226,254,139)] cursor-pointer ease-in-out duration-100" icon={icon}/>
      </a>
    );
  }

  const TeamMember = (props: any): JSX.Element => {
    const { name, title, image, desc, title2, twitter, github, linkedin, website } = props;
    return (
      <div className="flex flex-col justify-start bg-white border border-black my-3 md:mx-3 py-2 h-full">
        <div className="flex justify-center self-center mx-14 md:mx-24 lg:mx-36 my-6 bg-black rounded-full max-w-[300px] max-h-[300px]">
          <div className="relative max-w-[300px] max-h-[300px] min-w-[100px] min-h-[100px] rounded-full overflow-hidden z-0">
            <img src={image} alt={name} />
          </div>
        </div>
        <div className="text-center text-3xl font-bold">
          {name}
        </div>
        <div className="flex justify-center m-2 flex-row gap-2 items-center">
          <Link link={twitter} icon={faTwitter} />
          <Link link={github} icon={faGithub} />
          <Link link={linkedin} icon={faLinkedin} />
          <Link link={website} icon={faGlobeAmericas} />
        </div>
        <div className="text-center font-nunito text-xl my-2">
          {title}
        </div>
        <div className="text-center font-nunito text-xl my-2">
          {title2}
        </div>
        <div className="text-center font-nunito m-4 md:mx-8">
          {desc}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center w-full bg-yellowGreen border border-black mb-12">
      <h1 className="text-4xl lg:text-8xl mx-6 bg-white p-6 lg:p-12 border-x border-b border-black mb-3" id="team">The Team</h1>
      <div className="grid grid-cols-1 grid-flow-row items-center md:grid-cols-2 lg:grid-cols-3 gap-10 mx-6 md:mx-10 lg:mx-16 mb-4">
        <TeamMember
          name="Isla Munro"
          title="Organisation Team"
          title2="Founder FTW DAO | Contributor BANKLESS DAO/ EXPANSION DAO"
          image="/team_members/isla.jpg"
          desc="​​Isla is the co-founder of FTW DAO, a social and venture DAO ecosystem with the goal of funding diverse founders globally. She was previously part of a seed 
          stage VC fund investing in CEE & Baltics and has worked in and around finance and impact for the past 10 years. She's passionate about innovating on financial models 
          and systems, and takes an interest in organisation design, mental health, future of work, in particular web3 models for impact. Isla is also an OG at Bankless DAO and Fight Club VC, 
          and on the multi-sig for the Expansion Punks DAO."
          linkedin="https://www.linkedin.com/in/islamunro"
          twitter="https://www.twitter.com/0xisla"
          
        />
        <TeamMember
          name="Estefania Ochoa"
          title="Organisation Team"
          title2="Contributor HER DAO LATAM/ CABIN DAO/ INK DAO"
          image="/team_members/estefania.png"
          desc="Estefania has over 10+ years in community building and event planning. She began her blockchain journey in 2021 while working at bG gallery, and began onboarding artists to NFTs.
          Today she is able to use these skills as she facilitates developer experiences and programs. Estefanía Ochoa is an advocate for education and accessibility in the blockchain ecosystem. 
          She is fueled by her background in supporting underrepresented creators in the traditional markets and empowering them with new opportunities being provided by Blockchain technology. 
          She is currently working for the Reach developer platform, focusing on onboarding the next billion builders. Participating in governance at HER DAO LATAM, and a member of CabinDAO, InkDAO, and PizzaDAO. 
          "
          twitter="https://mobile.twitter.com/nftmami"
        />
        <TeamMember
          name="Daniel Dohne"
          title="Organisation Team"
          title2="Founder ARAMID LABS"
          image="/team_members/daniel.png"
          desc="Daniel has a background in software engineering and has experience in web2 and web3 startups in the DeFi, ReFi and DeSci space as well as big4 companies building 
          regulatory software used at 80% of Swiss private banks, and has been working in the crypto space since 2017. He’s a passionate web3 trader and investor in future oriented 
          technology and a co-founder at Aramid Labs, a collective of builders who have created an interoperability protocol between Algorand, other non-EVM and EVM networks. 
          He’s particularly passionate about ReFi and climate solutions and a founding member of both the Next Generation Village DAO and FTW DAO."
          linkedin="https://www.linkedin.com/in/ddohne"
          twitter="https://mobile.twitter.com/Cryptobrothers2"
        />
        <TeamMember
          name="Dr. Hongyang (Una) Wang"
          title="Organisation Team"
          title2="Founding Member DAO SUISSE"
          image="/team_members/una.jpg"
          desc="Una is a PhD student at ETH Zürich lead on project no1s1, a self-owning house on the blockchain. The idea is derived from concept nature 2.0, crypto commons, etc. 
          The research aims at explore a new way of living where nature and the cyber-physical integrated built environment organized by DAO as CPR. She’s also a founding member of DAO Suisse,
           a non-profit organisation with the mission to promote and lobby for DAOs and DAO-friendly regulation in Switzerland. She personally also cares deeply about concepts such as DAO, UBI, UBC etc."
           linkedin="https://www.linkedin.com/in/hongyang-una-wang-36b56b22/"

        /> 
        <TeamMember
          name="Victoria Citterio-Soelle"
          title="Organisation Team"
          title2="Founding Member FTW DAO"
          image="/team_members/victoria.jpeg"
          desc="Victoria is a policy and operations expert with 10+ years of international experience, working across all levels from the highest office in government to top executives of multinationals to
           social entrepreneurs launching their ventures. Throughout her career, she has been building bridges and alliances between the public and the private sector, the old and new economy, and the analog and 
           digital world. What drives her are the questions of 'what brings people together, what keeps them engaged and how to regulate the spaces where we interact'. Aside from working with teams, traditional organisations, and DAOs, on the questions above, she’s also redefining the role of ownership and legacy in the family business.
          "
          linkedin="https://www.linkedin.com/in/victoriacitteriosoelle/"
        />
        <TeamMember
          name="Esteve Serra Clavera"
          title="Organisation Team"
          title2="Contributor METAFACTORY/ FTWDAO/ NFTBERLIN/ W3ST DAO"
          image="/team_members/esteve.jpeg"
          desc="Advisor to W3st DAO, member of FTW DAO. Esteve is an experienced project manager and was part of the organising team of NFT Berlin. 
          He believes web3 has the potential to improve humankind current challenges massively onboarding non-web3 native and cross-relating physical and digital realities."
          linkedin="https://www.linkedin.com/in/esteveserraclavera/"
          twitter="https://twitter.com/nosoccomtothom"
        />
      </div>
      <div className="w-[80vw] lg:w-[95.75vw] text-center bg-white p-6 mt-4 border-black border flex flex-col gap-4 mb-8 md:mb-16">
        <div className="font-nunito">
          Reach out @
        </div>
        <div className="text-xl font-bold underline">
          hello@daovos.global
        </div>
      </div>
    </div>
  );
};

export default Team;