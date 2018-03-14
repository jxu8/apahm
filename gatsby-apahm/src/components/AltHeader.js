import React from 'react'

import Navigation from './Navigation'
import Banner from './Banner'
import ScrollDown from './ScrollDown'

const AltHeader = () => (
  <header
      id={this.props.page + '-header'}
      style={this.background}>
    <Navigation />
    <Banner
        banner_title={this.props.pageTitle}
        banner_sub1={this.props.pageSub1}
        banner_sub2={this.props.pageSub2}
        />
  </header>
)

export default AltHeader
