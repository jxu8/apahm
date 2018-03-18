import React from 'react'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import apahmlogo from '../assets/images/apahm-logo.png'
import {FaBars, FaClose} from 'react-icons/lib/fa'

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isTop: true,
      show: false,
      buttonName: 'mobile-btn'
    }

    this.toggleButton = this.toggleButton.bind(this)
    this.hide = this.hide.bind(this)
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 80
      if (isTop !== this.state.isTop) {
        this.setState({
          isTop: isTop,
          show: this.state.show,
          buttonName: this.state.buttonName
        })
      }
    })
  }

  // Button toggling
  // https://stackoverflow.com/questions/46203851/close-react-button-dropdown-menu-on-clicking-or-hovering-outside-of-menu-area
  toggleButton() {
    console.log(this.state)
    if (this.state.show) {
      this.setState({
        isTop: this.state.isTop,
        buttonName: 'mobile-btn',
        show: false
      })
    } else {
      this.setState({
        isTop: this.state.isTop,
        buttonName: 'mobile-btn closeButton',
        show: true
      })
    }
  }

  hide(e) {
    if (e && e.relatedTarget) {
      e.relatedTarget.click()
    }
    console.log('hide')

    this.setState({
      isTop: this.state.isTop,
      buttonName: 'mobile-btn',
      show: false
    })
  }

  static defaultProps = {
    notFill: true
  }

  render() {
    return(
      <nav
        id="nav-wrap"
        className={(this.state.isTop && this.props.notFill) ? '' : 'isDown'}
        >
        <div className="nav-section nav-logo current">
          {/*<Link
            activeClass="active"
            href="#home"
            to="home"
            spy={true}
            hashSpy={true}
            smooth={true}
            duration={500}>
            <img src={apahmlogo}></img>
            </Link>*/}
            <a
              href="/"
              COLUMBIA | APAHM
            </a>
          </div>
          <Link
            className={this.state.buttonName}
            onClick={this.toggleButton}
            onBlur={this.hide}
            href="#nav-wrap"
            to="nav-wrap">{this.state.show ? 'Close' : 'Menu'}</Link>
          <ul id="nav"
            className={this.state.show ? 'nav show' : 'nav'}>
            <li>
              <Link
                activeClass="active"
                href="/"
                to="home"
                spy={true}
                hashSpy={true}
                smooth={true}
                duration={500}>
                Main
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                href="board"
                to="board"
                spy={true}
                hashSpy={false}
                smooth={true}
                duration={500}>
                Board
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                href="archives"
                to="archives"
                spy={true}
                hashSpy={true}
                smooth={true}
                duration={500}>
                Archives
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                href="contact"
                to="contact"
                spy={true}
                hashSpy={true}
                smooth={true}
                duration={500}>
                Contact
              </Link>
            </li>
          </ul>

        </nav>
      )
    }
  }

  export default Navigation
