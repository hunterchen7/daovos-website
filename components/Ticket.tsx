import { useEffect, useState } from 'react';
import {
  useAddress,
  useDisconnect,
  useMetamask,
  useContract,
  useNetwork,
  useNetworkMismatch,
  ConnectWallet,
  Web3Button
} from '@thirdweb-dev/react';
import { ChainId } from '@thirdweb-dev/sdk';

import Image from 'next/image';
import TicketPurchase from './TicketPurchase';

const blankSpace = ' ';

const Ticket = (props: any): JSX.Element => {
  const address = useAddress();
  const [status, setStatus] = useState(blankSpace);
  const [ticketOpen, setTicketOpen] = useState(false);
  const [ticketPurchaseOpen, setTicketPurchaseOpen] = useState(false);
  const {
    nftIndex,
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

  useEffect(() => {
    if (isMismatch) {
      setStatus('Wrong network connected, please switch to the correct network.');
      switchNetwork?.(ChainId.Mainnet);
    } else {
      setStatus(blankSpace);
    }
  }, [address, isMismatch, switchNetwork]);

  async function claim(nftPrice: any) {
    console.log(JSON.stringify(nftPrice));
    if (!address) {
      //connectWithMetamask();
      setStatus('Please connect your wallet before minting.');
      return;
    }

    if (isMismatch) {
      switchNetwork?.(ChainId.Mainnet);
      return;
    }

    try {
      //console.log(nftPrice);
      if (nftPrice == '100') {
        //alert('Minting $100 NFT');
        const tx = await contract?.claim(0,1);
        console.log('transaction:', tx);
      } else if (nftPrice == '1,000') {
        const tx = await contract?.claim(1,1);
      } else if (nftPrice == '5,000') {
        const tx = await contract?.claim(2,1);
      } else {
        alert('NFT for this category is not available yet');
      }
    } catch (error: any) {
      //console.log(error?.message);
      console.error(error?.message);
    }
  }

  return (
    <div>
      <div
        onClick={() => setTicketOpen(true)}
        className="flex justify-center self-center text-center hover:cursor-pointer"
      >
        <div className="w-[90px] h-[130px] md:w-[120px] md:h-[160px] bg-yellowGreen peer/price hover:bg-[#D7FE63] ease-in-out duration-100  text-2xl font-semibold flex flex-col justify-center text-center border border-black">
          $ {price}
        </div>
        <div className="w-[120px] md:w-[150px] flex flex-col justify-center">
          <div className="my-2 h-[110px] md:h-[144px] border-y border-black flex flex-col justify-center text-xl md:text-2xl font-semibold">
            {title}
          </div>
        </div>
        <div className="w-[100px] h-[130px] md:h-[160px] md:w-[100px] bg-yellowGreen peer-hover/price:bg-[#D7FE63] hover:bg-[#D7FE63] ease-in-out duration-100 flex flex-col justify-center border border-black">
          <svg
            width="87"
            height="39"
            viewBox="0 0 87 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto scale-[0.7]"
          >
            <path
              d="M26.0348 38.4C40.8188 29.472 71.9228 20.448 86.8988 19.392V19.008C71.6348 17.952 40.2428 8.832 26.0348 0.191998L25.4588 0.959999C27.2828 6.816 31.7948 14.208 35.6348 18.24L0.11475 15.936V22.464L35.6348 20.352C31.8908 24.288 27.4748 31.488 25.4588 37.632L26.0348 38.4Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      {ticketOpen && (
        <div className="peer fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white font-nunito p-4 sm:p-10 rounded-3xl border border-2 z-[101] ease-in-out duration-100 w-[95vw] md:w-[50%] overflow-auto max-h-[80%]">
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
                    Price: <span className="font-bold">{price}</span> USDC
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
              <div className='flex flex-col justify-center gap-2'>
                <div className='text-sm text-center'>{status}</div>
                {/*<button
                  onClick={() => claim(price)}
                  className={`bg-yellowGreen border-2 border-black text-black hover:bg-[#D7FE63] ease-in-out duration-150 font-bold py-2 px-4 rounded-full  ${
                    title == 'Partner' || title == 'Founding Organisation'
                      ? 'hidden'
                      : ''
                  } w-3/4 self-center`}
                >
                  Purchase Ticket
                </button>*/}
                <Web3Button
                  accentColor='#E2FE8B'
                  contractAddress = '0xdC6c0515fA6f4E6Dab39560E21fb40EF5b348494'
                  action={(contract: { claim: (arg0: any, arg1: any) => any; }) => contract.claim(nftIndex, 1)}
                >
                  Purchase Ticket
                </Web3Button>
              </div>
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
      {ticketPurchaseOpen && (
        <TicketPurchase setTicketPurchaseOpen={setTicketPurchaseOpen} claim={claim} price={price} />
      )}
      {/* backdrop for ticket window */}
    </div>
  );
};

export default Ticket;
