import React from 'react'

import Navigation from './Navigation'
import Banner from './Banner'
import ScrollDown from './ScrollDown'

class Header extends React.Component {

  render () {
    return (
      <header id='home'>
        <Navigation />
        <Banner
            banner_title="CU APAHM"
            banner_sub1="Columbia University + Barnard College"
            banner_sub2="Asian Pacific American Heritage Month"
            hasSocial={true}
            />
        <ScrollDown />
      </header>
    )
  }
}

export default Header
