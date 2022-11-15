import { useState } from 'react';
import {
  useAddress,
  useDisconnect,
  useMetamask,
  useContract,
  useNetwork,
  useNetworkMismatch,
  ConnectWallet,
} from '@thirdweb-dev/react';
import { ChainId } from '@thirdweb-dev/sdk';

import Image from 'next/image';

const blankSpace = ' ';

const Ticket = (props: any): JSX.Element => {
  const address = useAddress();
  const [status, setStatus] = useState(blankSpace);
  const [ticketOpen, setTicketOpen] = useState(false);
  const {
    title,
    price,
    description,
    image,
    ticketsReceived,
    votes,
    totalAvailable,
  } = props;

  //const connectWithMetamask = useMetamask();
  //const disconnectWallet = useDisconnect();
  const isMismatch = useNetworkMismatch();
  const [, switchNetwork] = useNetwork();

  //const nftDrop address in GOERLI network
  // const { contract } = useContract(
  //   '0x522f40C6F07be79be9bB5cCfE76a56A90f642A88',
  //   'nft-drop'
  // );

  //Edition drop contract on Mainnet
  const { contract } = useContract(
    '0xdC6c0515fA6f4E6Dab39560E21fb40EF5b348494',
    'edition-drop'
  );

  async function claim(nftPrice: any) {
    console.log(JSON.stringify(nftPrice));
    if (!address) {
      //connectWithMetamask();
      setStatus('Please connect your wallet first.');
      return;
    }

    if (isMismatch) {
      switchNetwork?.(ChainId.Mainnet);
      return;
    }
    try {
      //console.log(nftPrice);
      if (nftPrice == '100 USDC') {
        //alert('Minting $100 NFT');
        const tx = await contract?.claimTo(address,0, 1);
        alert('Successfully minted');
      } else {
        alert('NFT for this category is not available yet');
      }
    } catch (error: any) {
      //console.log(error?.message);
      alert(error?.message);
    }
  }

  return (
    <div>
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
        <div className="peer fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white font-nunito p-4 sm:p-10 rounded-3xl border border-2 z-[101] ease-in-out duration-100 w-[95vw] sm:w-[50%] overflow-y-scroll md:overflow-hidden max-h-[60%]">
          <div className="flex flex-col sm:flex-row justify-between gap-2 mb-3 sm:m-0">
            <h1 className="text-3xl sm:leading-loose">{title}</h1>
            <div className="rounded-full overflow-hidden border-2 border-black flex flex-col justify-center bg-yellowGreen h-14">
              <ConnectWallet accentColor="#E2FE8B" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row my-3 gap-3">
            <div className="flex flex-col justify-between gap-3 md:w-1/2 text-lg">
              <div className="flex flex-col gap-3">
                <div>{description}</div>
                <div className="flex flex-col">
                  <div>
                    Price: <span className="font-bold">{price}</span>
                  </div>
                  <div>
                    <span className="font-bold">{totalAvailable}</span> tickets
                    available
                  </div>
                </div>
                <div className="flex flex-col">
                  You will receive:
                  <div>
                    <span className="font-bold">{ticketsReceived}</span>{' '}
                    ticket(s) for DAOVOS 2023
                  </div>
                  <div>
                    <span className="font-bold">{votes}</span> votes in the
                    DAOVOS DAO Genesis
                  </div>
                  <div>
                    1 <span className="font-bold">{title} NFT</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => claim(price)}
                className={`bg-yellowGreen border-2 border-black text-black hover:bg-lime-400 ease-in-out duration-150 text-white font-bold py-2 px-4 rounded-full margin-bottom:15px ${
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
                placeholder={'blur'}
              />
            </div>
          </div>
        </div>
      )}
      <div
        className={`fixed top-0 left-0 w-full h-full backdrop-blur-[2px] hover:backdrop-blur-[5px] peer-hover:backdrop-blur-[5px] ${
          !ticketOpen ? 'hidden' : ''
        } z-[100] duration-300 ease-in-out`}
        onClick={() => setTicketOpen(false)}
      ></div>{' '}
      {/* backdrop for ticket window */}
    </div>
  );
};

export default Ticket;
