import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { siteMetadata } from '../../gatsby-config'
import './../assets/scss/main.scss'
import './../assets/scss/index.scss'
import favicon from '../assets/favicon.ico'

const TemplateWrapper = ({ children }) => (
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
        href='https://fonts.googleapis.com/css?family=Open+Sans|Roboto|Source+Sans+Pro|Roboto+Slab'
        rel='stylesheet'
      />
      <title>{siteMetadata.title}</title>
      <link rel='icon' href={favicon} type='image/x-icon' />
    </Helmet>
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
