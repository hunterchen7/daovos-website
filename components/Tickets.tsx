import Image from 'next/image';
import React from 'react';
import {
  useAddress,
  useDisconnect,
  useMetamask,
  useContract,
  useNetwork,
  useNetworkMismatch,
  ConnectWallet,
} from '@thirdweb-dev/react';

import {
  chainId,
  ClaimConditionInputArray,
  SignatureDrop,
  SignedPayload721WithQuantitySignature,
} from '@thirdweb-dev/sdk';

const Tickets = (): JSX.Element => {
  const Ticket = (props: any): JSX.Element => {
    const { title, price } = props;
    return (
      <div className="flex justify-center self-center text-center hover:cursor-pointer">
        <div className="w-[90px] h-[130px] md:w-[120px] md:h-[180px] bg-[#E2FF8A] text-2xl md:text-3xl lg:text-4xl font-semibold flex flex-col justify-center text-center border border-black">
          $ {price}
        </div>
        <div className="w-[120px] md:w-[150px] flex flex-col justify-center">
          <div
            onClick={() => claim({ price })}
            className="my-3 h-[110px] md:h-[160px] border-y border-black flex flex-col justify-center text-xl md:text-2xl font-semibold"
          >
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
    );
  };

  const address = useAddress();
  const connectWithMetamask = useMetamask();
  //const disconnectWallet = useDisconnect();
  const isMismatch = useNetworkMismatch();
  const [, switchNetwork] = useNetwork();

  //const nftDrop =
  const { contract } = useContract(
    '0x522f40C6F07be79be9bB5cCfE76a56A90f642A88',
    'nft-drop'
  );

  async function claim(nftPrice: Number) {
    console.log(JSON.stringify(nftPrice));
    if (!address) {
      connectWithMetamask();
      return;
    }

    if (isMismatch) {
      switchNetwork?.(chainId.Goerli);
      return;
    }
    try {
      if (nftPrice.price == 100) {
        alert('Minting $100 NFT');
        const tx = await contract?.claimTo(address, 1);
        alert('Successfully minted');
      } else {
        alert('NFT for this category is not available yet');
      }
    } catch (error: any) {
      alert(error?.message);
    }
  }

  return (
    <div className="w-[97vw] -mt-20 lg:-mt-64 pb-8 mb-8 md:pb-16 md:mb-16 border-b-2 border-black">
      <div className="flex justify-end" id="tickets">
        <Image src="/ticket.svg" alt="TICKETS" width={1200} height={300} />
      </div>
      <div className="flex flex-col justify-around gap-8 items-center">
        <div className="text-2xl font-semibold mt-8 md:mt-0">
          Select the ticket that best suits your needs
        </div>
        <div></div>
        <div className="grid grid-cols-1 grid-flow-row items-center md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-14">
          <Ticket title="Early Bird" price="100" />
          <Ticket title="Regular" price="200" />
          <Ticket title="DAO Member" price="300" />
          <Ticket title="VIP" price="400" />
          <Ticket title="Sponsor" price="500" />
        </div>
      </div>
    </div>
  );
};

export default Tickets;
