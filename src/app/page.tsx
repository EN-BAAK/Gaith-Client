"use client"

import React from 'react';
import Header from './Header';
import Hero from './(landing)/Hero';
import About from './(landing)/About';
import Products from './(landing)/Products';
import Branches from './(landing)/Branches';
import Contact from './(landing)/Contact';
import Footer from './Footer';

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Header />

      <main>
        <Hero />
        <About />
        <Products />
        <Branches />
        <Contact />
      </main>

      <Footer/>
    </React.Fragment>
  );
}

export default Home;