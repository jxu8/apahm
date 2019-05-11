import React from 'react'
/**
 * Contact information for APAHM
 * @extends React
 */

class Contact extends React.Component {
  render () {
    return (
      <section id='contact'>
        <div className='row'>
          <div className='twelve columns main-col'>
            <h2>{this.props.title}</h2>
            <p>
              Interested in helping APAHM with events? Have exciting ideas about programming to share with us?
              <br />
              Get in touch with us at: <b><a href='mailto:cuapahm@columbia.edu'>cuapahm@gmail.com</a></b> and check us out on <a href='https://www.facebook.com/ColumbiaAPAHM/'>Facebook</a>!
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
