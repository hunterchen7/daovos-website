import { useState } from 'react';

const Ticket = (props: any): JSX.Element => {
  const [ticketOpen, setTicketOpen] = useState(false);
  const { claim, title, price, description } = props;
  return (
    <div
      
    >
      <div
        onClick={() => setTicketOpen(true)}
        className="flex justify-center self-center text-center hover:cursor-pointer"
      >
        <div className="w-[90px] h-[130px] md:w-[120px] md:h-[180px] bg-[#E2FF8A] text-2xl md:text-3xl lg:text-4xl font-semibold flex flex-col justify-center text-center border border-black">
          {price}
        </div>
        <div className="w-[120px] md:w-[150px] flex flex-col justify-center">
          <div className="my-3 h-[110px] md:h-[160px] border-y border-black flex flex-col justify-center text-xl md:text-2xl font-semibold">
            {title}
          </div>
        </div>
        <div className="w-[100px] h-[130px] md:h-[180px] md:w-[100px] bg-[#E2FF8A] flex flex-col justify-center border-black border">
          <svg
            width="87"
            height="39"
            viewBox="0 0 87 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            <path
              d="M26.0348 38.4C40.8188 29.472 71.9228 20.448 86.8988 19.392V19.008C71.6348 17.952 40.2428 8.832 26.0348 0.191998L25.4588 0.959999C27.2828 6.816 31.7948 14.208 35.6348 18.24L0.11475 15.936V22.464L35.6348 20.352C31.8908 24.288 27.4748 31.488 25.4588 37.632L26.0348 38.4Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      {ticketOpen && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white font-nunito p-10 rounded-3xl border border-2 z-[101] ease-in-out duration-100">
          <h1 className="text-3xl leading-loose">{title}</h1>
          <button
            onClick={() => claim(price)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full margin-bottom:15px">
            Purchase Ticket
          </button>
          <div>{description}</div>
        </div>
      )}
      <div
        className={`fixed top-0 left-0 w-full h-full backdrop-blur-sm ${
          !ticketOpen ? 'hidden' : ''
        } z-[100] duration-100 ease-in-out`}
        onClick={() => setTicketOpen(false)}
      ></div>{' '}
      {/* backdrop for ticket window */}
    </div>
  );
};

export default Ticket;
