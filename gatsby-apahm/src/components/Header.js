import React from 'react'

import Navigation from './Navigation'
import Banner from './Banner'
import ScrollDown from './ScrollDown'

const Header = () => (
  <header id='home'>
    <Navigation />
    <Banner
        banner_title="CU APAHM"
        banner_sub1="Columbia University"
        banner_sub2="Asian Pacific American Heritage Month"
        />
    <ScrollDown />
  </header>
)

export default Header
