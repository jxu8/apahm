import React from 'react'

import Header from '../components/Header';
import About from '../components/About';
import Resume from '../components/Resume';
import Section from '../components/Section';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const NotFoundPage = () => (
  <div>
    <Navigation
        notFill={false}
         />
    <Section
        sectionClass='404'
        headerTitle='404 NOT FOUND'>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Section>
    <Footer />
  </div>
)

export default NotFoundPage
