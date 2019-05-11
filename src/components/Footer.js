import React from 'react'
import SocialLinks from './SocialLinks'
import { FaChevronCircleUp } from 'react-icons/lib/fa'
import { animateScroll as scroll } from 'react-scroll'

class Footer extends React.Component {
  scrollToTop () {
    scroll.scrollToTop()
  }

  render () {
    return (
      <footer id='footer'>
        <div className='row'>
          <div className='twelve columns'>
            <SocialLinks />
            <p>
              <a href='mailto:cuapahm@gmail.com'>cuapahm@gmail.com</a>
            </p>
            <ul className='copyright'>
              <li>&copy; CU APAHM 2019 | <a href='https://github.com/ivychen/apahm'>Source Code</a></li>
            </ul>
          </div>

          <div id='go-top'>
            <a onClick={this.scrollToTop} title='Back to Top'>
              <FaChevronCircleUp />
            </a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
