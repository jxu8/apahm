import React from 'react'
import Navigation from './Navigation'
import Banner from './Banner'

class AltHeader extends React.Component {
  render () {
    return (
      <header
        id={this.props.page + '-header'}
        style={{
          backgroundImage: this.props.background
        }}>
        <Navigation />
        <Banner
          banner_title={this.props.pageTitle}
          banner_sub1={this.props.pageSub1}
          banner_sub2={this.props.pageSub2}
          hasSocial={false}
        >{this.props.children}</Banner>
      </header>

    )
  }
}

export default AltHeader
