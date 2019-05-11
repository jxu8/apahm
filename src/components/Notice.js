import React from 'react'

class Notice extends React.Component {
  render () {
    return (
      <div className='notice'>{this.props.children}</div>
    )
  }
}

export default Notice
