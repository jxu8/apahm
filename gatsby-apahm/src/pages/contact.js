import React from 'react'
import Link from 'gatsby-link'

import AltHeader from '../components/AltHeader'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

import bgimg from '../assets/images/apahm-2017.jpg'

class ContactPage extends React.Component {
  render () {
    return (
      <div>
        <AltHeader
            page='contact'
            background={'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.13)),url(' + bgimg + ')'}
            pageTitle='Contact Us'
            banner_sub1=''
            banner_sub2=''
        >
        </AltHeader>
        <Contact
          title="Say Hello"/>
        <Footer />
      </div>
    )
  }
}

export default ContactPage
