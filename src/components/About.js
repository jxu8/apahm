import React from 'react'
import profilePic from './../assets/images/apahm-logo.png'

class About extends React.Component {
  render () {
    return (
      <section id='about'>
        <div className='row'>
          <div className='three s-one columns'>
            <img className='profile-pic' src={profilePic} alt='' />
          </div>
          <div className='nine columns main-col'>
            <h2>{this.props.title}</h2>
            <p>
              <b>CU APAHM (Asian Pacific American Heritage Month)</b> commits itself to organizing a wide range of programs for the month of April, Columbia University's Asian Pacific American Heritage Month, in order to bring broader awareness of the Asian American/APIA community and its rich history to the Columbia campus. Every year, APAHM celebrates Columbia's APIA Heritage Month during April by focusing on programming that celebrates the culture, investigates the issues, and showcases the talents of Asian Pacific Islander Americans within and beyond our community.
            </p>
            <p>
                Every year, our event chairs utilize their unique backgrounds and talents to fill the month of April with activities that celebrate and validate the broad spectrum of Asian identities and cultures in America. Past events have included collaborations with CU Professors, an Asian/Pacific American related Zine publication, a Post-9/11 Panel, and a talk with Survivor winner Yul Kwon!
            </p>
            <p>
                We are inclusive of all racial, cultural, ethnic, gender, and sexual identities. Our members come from diverse backgrounds, and we unite to celebrate our mission.
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default About
