import React from 'react';
import Link from 'gatsby-link';

// import '../assets/css/main.css';

import Header from '../components/Header';
import About from '../components/About';
import Resume from '../components/Resume';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Board from '../components/Board';

const BoardPage = () => (
  <div>
    <Header />
    <Board
        teamname='Eboard 2017-2018'/>
    <Footer />
  </div>
);

export default BoardPage;
