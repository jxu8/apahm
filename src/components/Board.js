import React from 'react'

class Board extends React.Component {
  render () {
    return (
      <section className='board'>
        <div className='row'>
          <div className='twelve columns collapsed'>
            <h2>{this.props.teamname}</h2>
            <p>{this.props.description}</p>

            <div
              id='portfolio-wrapper'
              className='bgrid-quarters s-bgrid-thirds ms-bgrid-halves cf'
            >{this.props.children}</div>
          </div>
        </div>
      </section>
    )
  }
}

export default Board
