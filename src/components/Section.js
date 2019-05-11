import React from 'react'
/**
* All-purpose section container
* Sample use cases:
*  - added information box at bottom of page
*  - page header without banner
* @type {Object}
*/

class Section extends React.Component {
  render () {
    return (
      <section
        id={this.props.id}
        className={this.props.sectionClass ? 'section ' + this.props.sectionClass : 'section'}>
        <div className='row'>
          <h2 className={this.props.sectionClass ? this.props.sectionClass + '-title' : ''}>
            {this.props.headerTitle}</h2>
          <h3 className={this.props.sectionClass ? this.props.sectionClass + '-subtitle' : ''}>
            {this.props.subtitle}</h3>
          <div className={this.props.sectionClass + '-content columns twelve'}>
            {this.props.children}
          </div>
        </div>
      </section>
    )
  }
}

export default Section
