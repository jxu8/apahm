import React from 'react'

import Header from '../components/Header';
import About from '../components/About';
import Resume from '../components/Resume';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const NotFoundPage = () => (
  <div>
    <Navigation />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Footer />
  </div>
)

export default NotFoundPage
