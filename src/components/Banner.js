import React from 'react'
import SocialLinks from './SocialLinks'

class Banner extends React.Component {
  render () {
    return (
      <div className='row banner'>
        <div className='banner-text'>
          <h1 className='responsive-headline'>{this.props.banner_title}</h1>
          <h3>{this.props.banner_sub1}
          </h3>
          <h3>{this.props.banner_sub2}</h3>
          <hr />
          {this.props.hasSocial &&
          <SocialLinks />}
        </div>
      </div>
    )
  }
}

export default Banner
