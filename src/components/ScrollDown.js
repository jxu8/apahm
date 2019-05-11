import React from 'react'
import { Link } from 'gatsby'
import { FaChevronCircleDown } from 'react-icons/lib/fa'

class ScrollDown extends React.Component {
    render () {
        return (
            <p className='scrolldown'>
              <Link
                  className='hvr-hang'
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
