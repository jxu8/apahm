import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import Section from '../components/Section'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const NotFoundPage = () => (
  <Layout>
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
  </Layout>
)

export default NotFoundPage
