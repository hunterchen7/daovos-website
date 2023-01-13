import React from "react";

const Agenda = (): JSX.Element => {
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
    <div className="mt-8" id="agenda">
      <div className="hidden lg:flex border-t-2 border-black pb-4"/>
      <div className="bg-[url('../public/AGENDA.svg')] text-center lg:py-8 mb-3 scale-75 -mx-96" />
      <div className="hidden lg:flex border-t-2 border-black"/>
      <div className="text-6xl lg:text-8xl font-bold text-center bg-[#E2FF8A] mt-12 py-12">
        AGENDA
      </div>
      <ul className="list-none text-2xl font-nunito my-8 w-1/2 mx-auto space-y-4 border border-black rounded-2xl bg-[#E2FF8A]">
        <li className="px-5 pb-2 pt-5">
          1:00 - 1:15 pm <br/><b>Open doors</b> <br/>
        </li>
        <li className="bg-white px-5 py-2">
          1:15 - 1:30 pm <br/><b>Welcome Address and Introductions</b>
        </li>
        <li className="px-5 py-2">
          1:30 - 2:00 pm <br/><b>Web3&apos;s climate impact: can it help us get to net zero?</b>
          <p>Speakers from</p>
          <ul className="list-disc text-2xl mx-12">
            <li className="font-semibold">Foresight Institute</li>
            <li className="font-semibold">Crypto Commons Association</li>
            <li className="font-semibold">Hyphen Earth</li>
            <p className="font-semibold">Moderated by Tien Ma (Redhill)</p>
          </ul>
        </li>
        <li className="bg-white px-5 py-2">        
          2:05 - 2:35 pm <br/><b>From theory to practice: governance learnings for the next wave of DAOs</b>
          <p>Speakers from</p>
          <ul className="list-disc text-2xl mx-12">
            <li className="font-semibold">Maker DAO</li>
            <li className="font-semibold">Palmera</li>
            <li className="font-semibold">Bankless DAO</li>
            <li className="font-semibold">Anne-Grace Kleczewski</li>
            <p>Moderated by Victoria (FTW DAO)</p>
          </ul>
        </li>
        <li className="px-5 py-2">
          2:30 - 3:00 pm <br/><b>Learning Circle: Investing in DAOs</b>
          <p>Speakers from</p>
          <ul className="list-disc text-2xl mx-12">
            <li className="font-semibold">Tokentus</li>
            <li className="font-semibold">1kx</li>
            <li className="font-semibold">Smape Capital</li>
            <li className="font-semibold">Fabio Moura</li>
            <p>Moderated by Mona (Tokentus)</p>
          </ul>
        </li>
        <li className="bg-white px-5 py-2">
          3:10 pm <b>DAO Suisse Introduction</b> <br/>
        </li>
        <li className="px-5 py-2">
          3:20 pm <b>DAOVOZ Community Invitation</b> <br/>
        </li>
        <li className="bg-white px-5 py-2">
          3:30 - 3:50 pm <br/><b>Legal Q&A for those with questions on DAOs</b>
          <p>Speakers</p>
          <ul className="list-disc text-2xl mx-12">
            <li className="font-semibold">Fabio Moura</li>
            <li className="font-semibold">Anne-Grace Kleczewski</li>
          </ul>
        </li>
        <li className="px-5 pt-2 pb-5">
          3:40 - 4:30 pm <br/><b>Networking Lounge and drinks</b>
        </li>
      </ul>
    </div>
  )
};

export default Agenda;