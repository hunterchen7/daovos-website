import Image from 'next/image';
import React, { useState } from 'react';
import {
  useAddress,
  useDisconnect,
  useMetamask,
  useContract,
  useNetwork,
  useNetworkMismatch,
  ConnectWallet,
} from '@thirdweb-dev/react';
import Ticket from './Ticket';

import {
  ChainId,
  ClaimConditionInputArray,
  SignatureDrop,
  SignedPayload721WithQuantitySignature,
} from '@thirdweb-dev/sdk';

const Tickets = (): JSX.Element => {
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

  async function claim(nftPrice: any) {
    console.log(JSON.stringify(nftPrice));
    if (!address) {
      connectWithMetamask();
      return;
    }

    if (isMismatch) {
      switchNetwork?.(ChainId.Goerli);
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
    <div className="w-[97vw] -mt-12 lg:-mt-48 pb-8 mb-8 md:pb-16 md:mb-16 border-b-2 border-black z-0">
      <div className="flex justify-end z-0" id="tickets">
        <Image src="/ticket.svg" alt="TICKETS" width={1200} height={300} />
      </div>
      <div className="flex flex-col justify-around gap-8 items-center">
        <div className="text-2xl font-semibold mt-8 md:mt-0">
          Click on any ticket to learn more
        </div>
        <div></div>
        <div className="grid grid-cols-1 grid-flow-row items-center md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-14">
          <Ticket title="DAO Lobbyist" price="100 USDC" totalAvailable="5000"
          description="You think what those crazy kids in Davos are doing is important and you want to be part of it. You
           can’t take part in person but that doesn’t mean you’re not going to be part of the action. Lobbyists receive non-fungible
            proof of their support for DAOVOS at genesis, and access to any DAOVOS metaverse events in 2023."/>
          <Ticket title="Founding Member" price="1,300 USDC" totalAvailable="100"
          description="You believe what those crazy kids in Davos are doing is important and you want to be part of it. Individuals
           receive a single ticket to Davos 2023, and non-fungible evidence that they are amongst the founding members of DAOVOS DAO." />
          <Ticket title="Founding Angel" price="5,000 USDC" totalAvailable="25"
          description="You’re ‘just’ one person or a small DAO with a vision, but you believe that what DAOVOS DAO is building 
          has an important role to play in bringing DAOs and decentralised culture to the forefront of human development. 
          You want to support the cause beyond the price of an individual ticket. Your name will go on the ‘Wall of Fame’ 
          of founding angels of DAOVOS DAO." />
          <Ticket title="Founding Organisation" price="25,000 USDC" totalAvailable="12"
          description="placeholder text" />
          <Ticket title="Partner" price="80,000 USDC" totalAvailable="2"
          description="We’re excited to offer two spaces as full partners on DAOVOS
           inaugural event in 2023. Our partners will have premium full size logo placement,
            your own dedicated area in our event space, and prominent placement in media and PR around the DAOVOS event." />
        </div>
      </div>
    </div>
  );
};

export default Tickets;
