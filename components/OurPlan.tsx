import Image from "next/image";

const OurPlan = (): JSX.Element => {
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
    <div className="flex flex-col justify-evenly w-full border-b-2 border-black gap-4" id="our-plan">
      <div className="flex justify-center m-12">
        <Image src="/2030.svg" alt="OURPLAN" width={700} height={700}/>
      </div>
      <div className="self-center text-4xl font-nunito">
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
      </div>
    </div>
  );
};

export default OurPlan;