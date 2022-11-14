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

import { ChainId } from '@thirdweb-dev/sdk';

import Ticket from './Ticket';

const Tickets = (): JSX.Element => {
  const address = useAddress();
  //const connectWithMetamask = useMetamask();
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
      //connectWithMetamask();
      alert('Please connect your wallet befor conducting any transaction!');
      return;
    }

    if (isMismatch) {
      switchNetwork?.(ChainId.Goerli);
      return;
    }
    try {
      if (nftPrice == '100 USDC') {
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
          <ConnectWallet />
        </div>
        <div></div>
        <div className="grid grid-cols-1 grid-flow-row items-center md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-14">
          <Ticket
            claim={claim}
            title="DAO Lobbyist"
            price="100 USDC"
            totalAvailable="5000"
            description="Support DAOVOS and access any DAOVOS metaverse events. Reach out to us if you would like to take part in the live event, we have reserved spots for lobbyists."
          />
          <Ticket
            claim={claim}
            title="Founding Member"
            price="1,300 USDC"
            totalAvailable="100"
            description="Individuals receive a single ticket to Davos 2023"
          />
          <Ticket
            claim={claim}
            title="Founding Angel"
            price="5,000 USDC"
            totalAvailable="25"
            description="You want to support the cause beyond the price of an individual ticket? Angels receive 3 tickets for the Event in Davos 2023"
          />
          <Ticket
            claim={claim}
            title="Founding Organisation"
            price="25,000 USDC"
            totalAvailable="12"
            description="Please reach out to us at hello@daovos.global to discuss your interest in becoming a founding organisation. Organisations receive 4 tickets for the Event in Davos 2023"
          />
          <Ticket
            claim={claim}
            title="Partner"
            price="80,000 USDC"
            totalAvailable="2"
            description="Please reach out to us at hello@daovos.global to discuss your interest in becoming a partner organisation. Partners receive 8 tickets for the event in Davos 2023"
          />
        </div>
      </div>
    </div>
  );
};

export default Tickets;
