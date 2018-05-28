import React from 'react'
import SocialLinks from './SocialLinks'
import { FaChevronCircleUp } from 'react-icons/lib/fa'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

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
              <li>&copy; CU APAHM 2018</li>
              <li>
                Development: {' '}
                <a href='https://github.com/ivychen/apahm'>Ivy Chen</a>
              </li>
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
