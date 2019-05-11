import React from 'react'
import Layout from '../components/layout'
import Header from '../components/Header'
import About from '../components/About'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Notice from '../components/Notice'
import Sponsors from '../components/Sponsors'

import openingBanner from '../assets/images/opening-2018.png'

/**
 * Index Page contains:
 * - About APAHM
 * - Opening Ceremony Theme
 * - Opening Ceremony Banner and link to event
 * @param {[type]} transition [description]
 */

const Index = ({ children }) => (
  <Layout>
    <Header />
    <About title='About APAHM' />
    <Section
      id='theme'
      headerTitle='Asian Pacific American Heritage Month'
      subtitle='= April 2018 ='>
      <img src={openingBanner} alt='APAHM Opening Ceremony Banner'/>
      <p>Our 2018 theme is: <b>In(di)visible</b>. The Asian American identity is one that often goes unnoticed or unrecognized, falling into gray areas and between blurred lines. This invisibility stretches across media and politics, as Asians are often homogenized or overlooked. But by taking ownership of Asian-ness, originally just a category of otherness, this identity can be transformed into a source of unity and strength.</p>
      <Notice><h2>THANKS FOR JOINING US</h2></Notice>
    </Section>
    <Section
      id='opening'
      headerTitle='Opening Ceremony'
      subtitle='= March 31st, 2018 ='>
      <h5>7-10:30pm @ Diana Event Oval</h5>
      <br />
      <p>Please join us for our Opening Ceremony, open to the public and members of the entire Columbia community for FREE! You will be treated to a delectable dinner from Gogo Curry and Malaysia Grill, enjoy exciting talented student performances, and hear from our guest speaker: <b><a href='https://www.youtube.com/channel/UCX6Kp2blW0IgpbE2VnjvhNA'>CHRISTINE HA</a></b>, Vietnamese-American chef, the first-ever blind contestant and winner of MasterChef season 3 with Gordon Ramsay.</p>
    </Section>
    <Sponsors
      description=''
    />
    <Footer />
  </Layout>
)

export default Index
