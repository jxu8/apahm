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
import Guayaki from './../assets/images/sponsors/guayaki.png'
import Lambda from './../assets/images/sponsors/lambda.png'
import Barpatea from './../assets/images/sponsors/barpatea.png'
import HKSSS from './../assets/images/sponsors/hksss.jpg'

/**
* Similar to Board
* @type {String}
*/
class Sponsors extends React.Component {
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
                href='http://guayaki.com/'
                title=''
                alt='Guayaki'
                imgsrc={Guayaki}
                name='Guayaki Yerba Mate'
              />
              <ImgCard
                href='https://www.barpatea.com/'
                title=''
                alt='Bar Pa Tea'
                imgsrc={Barpatea}
                name='Bar Pa Tea'
              />
              <ImgCard
                href='https://www.drinkhint.com/'
                title=''
                alt='Hint Water'
                imgsrc={Hint}
                name='Hint Water'
              />
              <ImgCard
                href='https://www.theinfatuation.com/'
                title=''
                alt='The Infatuation'
                imgsrc={TheInfatuation}
                name='The Infatuation'
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
              <ImgCard
                href='https://columbialambdas.org'
                title=''
                alt='Columbia Lambdas'
                imgsrc={Lambda}
                name='Columbia Lambdas'
              />
              <ImgCard
                href='http://www.columbia.edu/cu/hksss/'
                title=''
                alt='Columbia HKSSS'
                imgsrc={HKSSS}
                name='Columbia HKSSS'
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Sponsors
