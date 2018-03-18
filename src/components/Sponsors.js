import React from 'react'
import ImgCard from '../components/ImgCard'

// Sponsor logos
// **4:3 ASPECT RATIO
import Bai from './../assets/images/sponsors/bai.jpg'
import TheInfatuation from './../assets/images/sponsors/theinfatuation.png'
import Hint from './../assets/images/sponsors/hint.png'
import Barnard from './../assets/images/sponsors/barnard.jpg'
import Columbia from './../assets/images/sponsors/columbia.png'
import GS from './../assets/images/sponsors/gs.png'
/**
 * Similar to Board
 * @type {String}
 */
class Sponsors extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <section className='board' id='sponsors'>
        <div className='row'>
          <div className='twelve columns collapsed'>
            <h2>Sponsors</h2>
            <p>{this.props.description}</p>
            <div
              id='portfolio-wrapper'
              className='bgrid-quarters s-bgrid-thirds ms-bgrid-halves cf'
            >
            <ImgCard
                href='https://www.drinkbai.com/'
                title=''
                alt='Bai'
                imgsrc={Bai}
                name='Bai'
            />
            <ImgCard
                href='https://www.theinfatuation.com/'
                title=''
                alt='The Infatuation'
                imgsrc={TheInfatuation}
                name='The Infatuation'
            />
            <ImgCard
                href='https://www.drinkhint.com/'
                title=''
                alt='Hint Water'
                imgsrc={Hint}
                name='Hint Water'
            />
            <ImgCard
                href='https://columbia.edu'
                title=''
                alt='Columbia University'
                imgsrc={Columbia}
                name='Columbia University'
            />
            <ImgCard
                href='https://barnard.edu'
                title=''
                alt='Barnard College'
                imgsrc={Barnard}
                name='Barnard College'
            />
            <ImgCard
                href='https://gs.columbia.edu'
                title=''
                alt='GS'
                imgsrc={GS}
                name='Columbia GS'
            />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Sponsors
