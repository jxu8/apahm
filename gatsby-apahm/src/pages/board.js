import React from 'react';
import Link from 'gatsby-link';

import Header from '../components/Header';
import About from '../components/About';
import Resume from '../components/Resume';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
// Import board component
import Board from '../components/Board';
// Import all (eboard + event chairs) members by First(Last), note last name is optional
import * as BoardMembers from '../components/_boardmembers'
import Member from '../components/Member'

const BoardPage = () => (
  <div>
    <Header />
    <Board
        teamname='Eboard 2017-2018'
    >
        <Member
            href=''
            title=''
            alt='Ada Tam'
            imgsrc={BoardMembers.Ada}
            name='Ada Tam'
            class='Barnard 2018'
            position='Co-President'
        />
        <Member
            href=''
            title=''
            alt='Alex Humair'
            imgsrc={BoardMembers.Alex}
            name='Alex Humair'
            class='Barnard 2019'
            position='Secretary/Social Chair'
        />
    </Board>
    <Footer />
  </div>
);

export default BoardPage;
