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
        <div className="w-[80px] lg:w-[140px] h-[100px] lg:h-[185px] border-2 border-black text-center flex flex-col justify-center text-3xl md:text-6xl lg:text-9xl font-extrabold">
          {number}
        </div>
        <div className="border-r-2 border-y-2 border-black text-center rounded-r-full flex flex-col justify-center text-xl lg:text-4xl font-bold px-4 md:px-20 lg:px-36 bg-white">
          {text}
        </div>
      </div>
    );
  }

  return (
    <div className="w-[95vw] mt-8" id="agenda">
      <div className="text-6xl bg-[url('../public/AGENDA.svg')] text-center lg:py-8 mb-8" />
      <div className="hidden lg:flex border-t-2 border-black"/>
      <div className="text-6xl lg:text-[200px] font-bold text-center bg-[#E2FF8A] mt-12 py-12">
        AGENDA
      </div>
      <div className="items-center">
        <div className="text-5xl self-center text-center my-8">
          Catalyzing the DAOVOS mission and community
        </div>
        <div className="flex flex-col justify-center text-center self-center items-center text-2xl pb-32 lg:pb-80 bg-[url('../public/BALL.svg')] border-b-2 border-black">
          <p>Workshops on the DAOVOS DAO mission and governance DAOversity; Diversity, inclusion, equity and accessibility</p>
          <br/>
          <p>DAO governance, legal structures and taxation</p>
          <br/>
          <p>Onboarding the next billion DAO members</p>
          <br/>
          <p>Network states and the future of Communities</p>
          <br/>
          <p>Identity, transhumanism and ethics</p>
          <br/>
          <p>Regenerative finance</p>
          <br/>
          <BookYourSpot />
        </div>
      </div>
      <div className="flex justify-center m-12">
        <Image src="/2030.svg" alt="OURPLAN" width={700} height={700}/>
      </div>
      <div className="self-center text-4xl font-nunito text-center">
        FIVE KEY STREAMS FOR <span className="font-extrabold">DAOVOS</span> DISCUSSION
      </div>
      <div className="flex flex-col self-center w-[95.7vw] gap-4 p-10 bg-[url('../public/plan_bg.svg')] bg-cover bg-no-repeat">
        <div className="flex flex-col self-center gap-4">
          <Textbox number={1} text={'Work and Education'} />
          <Textbox number={2} text={'Health, Wellness & Longevity'} />
          <Textbox number={3} text={'Finance & Financial Systems'} />
          <Textbox number={4} text={'Media, Creators & Communities'} />
          <Textbox number={5} text={'Sustainable Living & Ecosystems'} />          
        </div>
        <div className="md:w-1/2 self-center text-xl font-nunito my-12">
          The DAOVOS community is deeply committed to the principles of diversity, inclusion, transparency, privacy and decentralisation, and these values will be reflected in our conversations and our actions as a collective. See here for the 2023 draft agenda.
        </div>
        <a
          className="md:w-1/6 flex justify-center self-center z-10 bg-white border border-black p-2 px-3 rounded-full gap-2 select-none ease-in-out duration-100 hover:cursor-pointer hover:bg-black hover:text-white"
          href="https://forms.gle/D5wCcbx6JXZpXGmK7?"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="self-center text-xl font-semibold">Apply to Speak</div>
        </a>        
      </div>

    </div>
    
  )
};

export default Agenda;