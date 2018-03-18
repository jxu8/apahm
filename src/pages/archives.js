import React from 'react'
import Link from 'gatsby-link'
import Section from '../components/Section'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const ArchivePage = () => (
  <div>
    <Navigation
      notFill={false}
      />
    <Section
      sectionClass='404'
      headerTitle=''>
      <h1>Oh no!</h1>
      <p>The page you are looking for does not exist.</p>
      <p>Let's get you back <Link to='/'>home.</Link></p>
    </Section>
    <Footer />
  </div>
)

export default ArchivePage
