import React from 'react'
import Helmet from 'react-helmet'
import Transition from '../components/Transition' // page transition
import { siteMetadata } from '../../gatsby-config'
import './../assets/scss/main.scss'
import './../assets/scss/index.scss'
import favicon from '../assets/favicon.ico'

const Layout = ({ children, location }) => (
  <div>
    <Helmet>
      <meta name='author' description={siteMetadata.author} />
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
      />
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Open+Sans|Roboto|Source+Sans+Pro|Roboto+Slab|Nunito+Sans'
        rel='stylesheet'
      />
      <title>{siteMetadata.title}</title>
      <link rel='icon' href={favicon} type='image/x-icon' />
    </Helmet>
    <div>
      <Transition location={location}>{children}</Transition>
    </div>
  </div>
)

Layout.defaultProps = {
  location: {}
}

export default Layout
