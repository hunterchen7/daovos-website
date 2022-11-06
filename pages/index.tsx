import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import Daovos from '../components/Daovos';
import Daovos2 from '../components/Daovos2';
import Agenda from '../components/Agenda';
import Tickets from '../components/Tickets';
import Team from '../components/Team';
import Philosophy from '../components/Philosophy';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DAOVOS™</title>
        <meta name="description" content="DAOVOS web page" />
        <link rel="icon" href="/daovos_icon.svg" />
      </Head>
      <Header/>
      <Daovos />
      <div className="flex justify-center text-5xl font-bold py-6">
        OUR SUPPORTERS | DAO SUISSE | ARAMID |
      </div>
      <Daovos2 />
      <Agenda />
      <Tickets />
      <Team />
      <Philosophy />
    </div>
  )
}
