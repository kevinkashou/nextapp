import React from 'react';
import Head from 'next/head';
import Nav from '@molecules/nav/nav';
import Cta from '@atoms/cta/cta.atom';
import Icon from '@assets/svgs/icon.svg';
import Img from '@assets/images/logo.jpg';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />

    <img src={Img} />

    <Icon />

    <Cta text="test" href="/test" className="" />
  </div>
);

export default Home;
