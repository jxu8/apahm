import React from 'react'
import SocialLinks from './SocialLinks'
import { FaChevronCircleUp } from 'react-icons/lib/fa'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Footer extends React.Component {

    scrollToTop() {
        scroll.scrollToTop()
    }

    render() {
        return(
          <footer id='footer'>
            <div className='row'>
              <div className='twelve columns'>
                <SocialLinks />

                <p>For inquiries, email us at: <a title='cuapahm@gmail.com' href='cuapahm@gmail.com'>cuapahm@gmail.com</a></p>

                <ul className='copyright'>
                  <li>&copy; Copyright CU APAHM 2018</li>
                  <li>
                    Base by{' '}
                    <a title='Styleshout' href='http://www.styleshout.com/'>
                      Styleshout
                    </a>
                  </li>
                  <li>
                    Developed in React by{' '}
                    <a href='http://linkedin.com/in/ivycny'>Ivy Chen</a>
                  </li>
                </ul>
              </div>

              <div id='go-top'>
                <a onClick={this.scrollToTop} title='Back to Top' href='#home'>
                  <FaChevronCircleUp />
                </a>
              </div>
            </div>
          </footer>
        )
    }
}

export default Footer;
