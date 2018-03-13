import React from 'react'
import { FaPlus, FaTag } from 'react-icons/lib/fa'
import Member from '../components/Member'
import * as Eboard from '../components/_eboard'

class Board extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
  <section id='board'>
    <div className='row'>
      <div className='twelve columns collapsed'>
        <h1>{this.props.teamname}</h1>

        <div
          id='portfolio-wrapper'
          className='bgrid-quarters s-bgrid-thirds cf'
        >
          <Member
              href=''
              title=''
              alt='Ada Tam'
              imgsrc={Eboard.Ada}
              name='Ada Tam'
              class='Barnard 2018'
              position='Co-President'
          />
        </div>
      </div>
    </div>
  </section>
)
}
}

export default Board
