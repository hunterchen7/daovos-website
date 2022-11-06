import daovos_icon from '../public/daovos_icon.svg';
import Image from 'next/image';
import twitter from '../public/twitter.svg';
import discord from '../public/discord.svg';
import telegram from '../public/telegram.svg';

const Daovos = (): JSX.Element => {
  return (
    <div className="flex justify-around w-full h-screen border-b-2 border-black" id="daovos">
      <Image src={daovos_icon} alt="daovos_icon" />
      <div className="flex flex-col gap-3 justify-center">
        <h1 className="font-semibold text-8xl">
          DAOVOS
        </h1>
        <h1 className="font-nunito text-3xl">
          Davos, Switzerland, January 2023
        </h1>
        <h1 className="font-nunito text-4xl font-semibold">
          The Dao Forum
        </h1>
        <div className="flex gap-3">
          <Image src={twitter} alt="twitter" className="hover:cursor-pointer" />
          <Image src={discord} alt="discord" className="hover:cursor-pointer" />
          <Image src={telegram} alt="telegram" className="hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Daovos;