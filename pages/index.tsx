import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Daovos from '../components/Daovos';
import Daovos2 from '../components/Daovos2';
import Event from '../components/Event';
import Agenda from '../components/Agenda';
import Tickets from '../components/Tickets';
import Team from '../components/Team';
import Philosophy from '../components/Philosophy';
import Supporters from '../components/Supporters';
import Mission from '../components/Mission';

export default function Home() {
  return (
    <div className='mx-3 overflow-clip'>
      <Head>
        <title>DAOVOZ™</title>
        <meta name="description" content="DAOVOZ web page" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Header />
      <Daovos />
      <Supporters />
      <Daovos2 />
      <Event />
      <Agenda />
      <Mission />
      {/*<Tickets />*/}
      <Team />
      <Philosophy />
    </div>
  );
}
