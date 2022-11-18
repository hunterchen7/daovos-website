import React from "react";
import Image from "next/image";

const TicketPurchase = (props: any): JSX.Element => {
  const { setTicketPurchaseOpen, title, image, price } = props;
  return (
    <div>
      <div className="peer fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white font-nunito p-4 sm:p-10 rounded-3xl border border-2 z-[103] ease-in-out duration-100 w-[95vw] md:w-[50%] overflow-auto max-h-[80%]">
        <div className="flex flex-col sm:flex-row justify-between gap-2 mb-3 sm:m-0">
          <h1 className="text-3xl sm:leading-loose">{title}</h1>
        </div>
        <div className="flex flex-col sm:flex-row my-3 gap-3">
          <div className="flex flex-col justify-between gap-3 md:w-1/2 text-lg">
            <button
              onClick={() => setTicketPurchaseOpen(true)}
              className={`bg-yellowGreen border-2 border-black text-black hover:bg-[#D7FE63] ease-in-out duration-150 font-bold py-2 px-4 rounded-full margin-bottom:15px ${
                title == 'Partner' || title == 'Founding Organisation'
                  ? 'hidden'
                  : ''
              } w-3/4 self-center`}
            >
              Purchase Ticket
            </button>
          </div>
          <div className="md:w-1/2">
            <Image
              src={image}
              alt={title}
              objectFit={'cover'}
              layout={'responsive'}
            />
          </div>
        </div>
      </div>
      <div
        className='fixed top-0 left-0 w-full bg-slate-800/25 h-full backdrop-blur-[2px] bg- hover:backdrop-blur-[5px] peer-hover:backdrop-blur-[5px] z-[102] duration-300 ease-in-out'
        onClick={() => setTicketPurchaseOpen(false)}
      ></div>
    </div>
  );
}

export default TicketPurchase;