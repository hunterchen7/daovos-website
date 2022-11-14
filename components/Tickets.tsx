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
            description="Support DAOVOS by becoming a DAO member. Lobbyists receive a NFT proof of their support for DAOVOS and access to any DAOVOS metaverse events. "
          />
          <Ticket
            claim={claim}
            title="Founding Member"
            price="1,300 USDC"
            totalAvailable="100"
            description="Individuals receive a single ticket to Davos 2023 and a founding member NFT."
          />
          <Ticket
            claim={claim}
            title="Founding Angel"
            price="5,000 USDC"
            totalAvailable="25"
            description="For visionary individuals and DAOs, sharing our belief that what DAOVOS DAO is building has an important role to play in bringing DAOs and decentralised culture to the forefront of human development.
             Angels receive 3 tickets for the Event in Davos 2023 and a founding angel NFT."
          />
          <Ticket
            claim={claim}
            title="Founding Organisation"
            price="25,000 USDC"
            totalAvailable="12"
            description="You’re in the business of Web3 and are excited to have your company represented on the world stage at DAOVOS. Place your brand front and centre for DAOs, DAOminiaries, changemakers and leaders.
             Sponsor organisations believe in our mission and values, and want to be part of the DAOVOS family. You’ll be able to send DAOVOS delegates and we’ll feature your logo just below our partners in our marketing,
              media and PR. Please reach out to us at hello@daovos.global to discuss your interest in becoming a founding organisation. Founding organisations receive 5 tickets for the event in Davos 2023"
          />
          <Ticket
            claim={claim}
            title="Partner"
            price="80,000 USDC"
            totalAvailable="2"
            description="We’re excited to offer two spaces as full partners on DAOVOS’ inaugural event in 2023. Our partners will have premium full size logo placement, your own dedicated area in our event space, and prominent
             placement in media and PR around the DAOVOS event. Please reach out to us at hello@daovos.global to discuss your interest in becoming a partner organisation. Partners receive 8 tickets for the event in Davos 2023"
          />
        </div>
      </div>
    </div>
  );
};

export default Tickets;
