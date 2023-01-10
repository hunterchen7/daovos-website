import React from "react";
import BookYourSpot from "./BookYourSpot";
import Image from "next/image";

const Mission = (): JSX.Element => {
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
    <div className="mt-8" id="mission">
      <div className="text-6xl lg:text-8xl font-bold text-center bg-[#E2FF8A] mt-12 py-12">
        MISSION
      </div>
      {/* <div className="items-center">
        <div className="text-4xl md:text-6xl self-center text-center my-8">
          <span className="font-bold">Catalyzing</span> the Daovoz <span className="font-bold">mission</span> and <span className="font-bold">community</span>
        </div>
        <div className="font-nunito flex flex-col justify-center text-center self-center items-center text-xl md:text-2xl pb-32 lg:pb-80 bg-[url('../public/BALL.svg')] border-b-2 border-black">
          <p>Workshops on the Daovoz DAO mission and governance DAOversity -  Diversity, inclusion, equity and accessibility</p>
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
          {/*<BookYourSpot />
        </div>
      </div> */}
      <div className="flex justify-center m-12 2xl:scale-110">
        <Image src="/2030.svg" alt="OURPLAN" width={700} height={700}/>
      </div>
      <div className="self-center text-xl md:text-3xl lg:text-4xl font-nunito text-center">
        FIVE KEY STREAMS FOR <span className="font-extrabold">Daovoz</span> DISCUSSION
      </div>
      <div className="flex flex-col self-center gap-4 p-10 bg-[url('../public/plan_bg.svg')] bg-cover bg-no-repeat">
        <div className="flex flex-col self-center gap-4">
          <Textbox number={1} text={'Work and Education'} />
          <Textbox number={2} text={'Health, Wellness & Longevity'} />
          <Textbox number={3} text={'Finance & Financial Systems'} />
          <Textbox number={4} text={'Media, Creators & Communities'} />
          <Textbox number={5} text={'Sustainable Living & Ecosystems'} />          
        </div>
        <div className="md:w-1/2 self-center text-xl font-nunito my-12">
          The Daovoz community is deeply committed to the principles of diversity, inclusion, transparency, privacy and decentralisation, and these values will be reflected in our conversations and our actions as a collective.
        </div>       
      </div>
    </div>
    
  )
};

export default Mission;