import React from 'react'
import { FaCloudDownload } from 'react-icons/lib/fa'

import profilePic from '../assets/images/profilepic.jpg'

class About extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
  <section id='about'>
    <div className='row'>
      <div className='three columns'>
        <img className='profile-pic' src={profilePic} alt='' />
      </div>
      <div className='nine columns main-col'>
        <h2>{this.props.title}</h2>
        <p>
          CU APAHM (Asian Pacific American Heritage Month) commits itself to organizing a wide range of programs for the month of April, Columbia University's Asian Pacific American Heritage Month, in order to bring broader awareness of the Asian American/APIA community and its rich history to the Columbia campus. Every year, APAHM events take place during April, which is APA Heritage Month here at Columbia. During that month, APAHM celebrates the culture, investigates the issues, and showcases the talents of Asian Pacific Islander Americans within and beyond our community. Our programming is focused through events during the month of April, which is when we celebrate APAHM. Every year, our event chairs utilize their unique backgrounds and talents to fill the month of April with activities that celebrate and validate the broad spectrum of Asian identities and cultures in America. Past events have included collaborations with CU Professors, an Asian/Pacific American related Zine publication, a Post-9/11 Panel, and a talk with Survivor winner Yul Kwon! Check out our website for more pictures from past events. We are inclusive of all racial, cultural, ethnic, gender, and sexual identities. Our members come from diverse backgrounds, and we unite to celebrate our mission.
        </p>
        <div className='row'>
          <div className='columns contact-details'>
            <h2>Contact Details</h2>
            <p className='address'>
              <span>Jonathan Doe</span>
              <br />
              <span>
                1600 Amphitheatre Parkway
                <br /> Mountain View, CA 94043 US
              </span>
              <br />
              <span>(123)456-7890</span>
              <br />
              <span>anyone@website.com</span>
            </p>
          </div>
          <div className='columns download'>
            <p>
              <a href='#' className='button'>
                <FaCloudDownload /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)
}
}

export default About
