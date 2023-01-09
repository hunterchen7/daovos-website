import daovos_icon from '../public/daovos_icon_new.svg';
import Image from 'next/image';
import twitter from '../public/twitter.svg';
import discord from '../public/discord.svg';
import telegram from '../public/telegram.svg';

const Daovos = (): JSX.Element => {
  return (
    <div className="flex flex-col md:flex-row justify-around w-full h-screen border-b-2 border-black gap-3 my-8" id="daovos">
      <Image src={daovos_icon} alt="daovos_icon" className="md:scale-125"/>
      <div className="flex flex-col gap-3 justify-center">
        <h1 className="font-semibold text-8xl">
          DAOVOZ
        </h1>
        <h1 className="font-nunito text-3xl">
          CV Labs Networking Lounge
          <br/>
          Davos, Switzerland
          <br/>
          January 16, 2023 1:00-4:00 PM
        </h1>
        <h1 className="font-nunito text-4xl font-semibold">
          The DAO Forum
        </h1>
        <div className="flex gap-3 mb-6">
          <a href='https://twitter.com/daovosglobal' target="_blank" rel='noreferrer' className='hover:bg-yellowGreen duration-150 ease-in-out rounded-full'>
            <Image src={twitter} alt="twitter" className="hover:cursor-pointer" />
          </a>
          {/**<a className='hover:bg-yellowGreen duration-150 ease-in-out rounded-full'>
          <Image src={discord} alt="discord" className="hover:cursor-pointer" />
          </a>**/}
          <a href="https://t.me/+LCxWqCT2H9QxMjA0" target="_blank" rel='noreferrer' className='hover:bg-yellowGreen duration-150 ease-in-out rounded-full'>
            <Image src={telegram} alt="telegram" className="hover:cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Daovos;