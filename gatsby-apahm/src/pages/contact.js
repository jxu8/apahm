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

class ContactPage extends React.Component {
    render() {
        return(
          <div>
              <Header />
              <Footer />
          </div>
        )
    }
}

export default ContactPage
