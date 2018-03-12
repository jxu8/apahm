import React from 'react'
import { FaChevronCircleDown } from 'react-icons/lib/fa'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class ScrollDown extends React.Component {
    render() {
        return(
            <p className='scrolldown'>
              <Link
                  activeClass='active'
                  href='#about'
                  to='about'
                  spy={true}
                  hashSpy={true}
                  smooth={true}
                  duration={500}>
                <FaChevronCircleDown />
              </Link>
            </p>
        )
    }
}

// const ScrollDown = () => (
//   <p className='scrolldown'>
//     <a className='smoothscroll' href='#about'>
//       <FaChevronCircleDown />
//     </a>
//   </p>
// )

export default ScrollDown
