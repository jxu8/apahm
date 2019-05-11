import React from 'react'
import { Link as SLink } from 'react-scroll'
import { Link } from 'gatsby'

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

    this.setState({
      isTop: this.state.isTop,
      buttonName: 'mobile-btn',
      show: false
    })
  }

  static defaultProps = {
    notFill: true
  }

  render () {
    return (
      <nav
        id='nav-wrap'
        className={(this.state.isTop && this.props.notFill) ? '' : 'isDown'}
        >
        <div className='nav-section nav-logo current'>
          {/*<Link
            activeClass='active'
            href='#home'
            to='home'
            spy={true}
            hashSpy={true}
            smooth={true}
            duration={500}>
            <img src={apahmlogo}></img>
            </Link>*/}
            <Link
              to='/'
            >
              COLUMBIA | APAHM
            </Link>
          </div>
          <SLink
            className={this.state.buttonName}
            onClick={this.toggleButton}
            onBlur={this.hide}
            to='nav-wrap'>{this.state.show ? 'Close' : 'Menu'}</SLink>
          <ul id='nav'
            className={this.state.show ? 'nav show' : 'nav'}>
            <li>
              <Link
                activeClassName='active'
                exact to='/'>
                Main
              </Link>
            </li>
            <li>
              <Link
                activeClassName='active'
                to='/board'>
                Board
              </Link>
            </li>
            <li>
              <Link
                activeClassName='active'
                to='/archives'>
                Archives
              </Link>
            </li>
            <li>
              <Link
                activeClassName='active'
                to='/contact'>
                Contact
              </Link>
            </li>
          </ul>

        </nav>
      )
    }
  }

  export default Navigation
