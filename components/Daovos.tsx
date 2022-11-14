import daovos_icon from '../public/daovos_icon.svg';
import Image from 'next/image';
import twitter from '../public/twitter.svg';
import discord from '../public/discord.svg';
import telegram from '../public/telegram.svg';

const Daovos = (): JSX.Element => {
  return (
    <div className="flex flex-col md:flex-row justify-around w-full h-screen border-b-2 border-black" id="daovos">
      <Image src={daovos_icon} alt="daovos_icon" />
      <div className="-mt-32 lg:mt-0 flex flex-col gap-3 justify-center">
        <h1 className="font-semibold text-8xl">
          DAOVOS
        </h1>
        <h1 className="font-nunito text-3xl">
          Davos, Switzerland, January 2023
        </h1>
        <h1 className="font-nunito text-4xl font-semibold">
          The DAO Forum
        </h1>
        <div className="flex gap-3">
          <a href='https://twitter.com/daovosglobal' target="_blank" rel='noreferrer'>
          <Image src={twitter} alt="twitter" className="hover:cursor-pointer" />
          </a>
          <a>
          <Image src={discord} alt="discord" className="hover:cursor-pointer" />
          </a>
          <a href="https://t.me/+LCxWqCT2H9QxMjA0" target="_blank" rel='noreferrer'>
          <Image src={telegram} alt="telegram" className="hover:cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Daovos;