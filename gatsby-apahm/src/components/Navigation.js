import React from 'react'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import apahmlogo from '../assets/images/apahm-logo.png'

class Navigation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isTop: true,
        }
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 80
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
        })
    }


    render() {
        return(
            <nav id="nav-wrap" className={ this.state.isTop ? '' : 'isDown'}>
                <a className="mobile-btn" href="#nav-wrap" />
                <div className="nav-logo current">
                    <Link
                        activeClass="active"
                        href="#home"
                        to="home"
                        spy={true}
                        hashSpy={true}
                        smooth={true}
                        duration={500}>
                        <img src={apahmlogo}></img>
                    </Link>
                    <Link
                        activeClass="active"
                        href="#home"
                        to="home"
                        spy={true}
                        hashSpy={true}
                        smooth={true}
                        duration={500}>
                        CU APAHM
                    </Link>
                </div>
                <ul id="nav" className="nav">
                    <li>
                        <Link
                            activeClass="active"
                            href="#about"
                            to="about"
                            spy={true}
                            hashSpy={true}
                            smooth={true}
                            duration={500}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            href="#resume"
                            to="resume"
                            spy={true}
                            hashSpy={true}
                            smooth={true}
                            duration={500}>
                            Resume
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            href="#portfolio"
                            to="portfolio"
                            spy={true}
                            hashSpy={true}
                            smooth={true}
                            duration={500}>
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            href="#testimonials"
                            to="testimonials"
                            spy={true}
                            hashSpy={true}
                            smooth={true}
                            duration={500}>
                            Testimonials
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            href="#footer"
                            to="footer"
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
