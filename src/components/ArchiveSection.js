import React from 'react'

/**
* Archive section container
* Sample use cases:
*  - Archive information with brief description of past APAHM themes and guest speakers
* @type {Object}
*/

class ArchiveSection extends React.Component {
  render () {
    return (
      <section
        id={this.props.id}
        className={this.props.sectionClass ? 'section ' + this.props.sectionClass : 'section'}>
        <div className='row'>
          <div className='columns twelve'>
            <h2 className={this.props.sectionClass ? this.props.sectionClass + '-year' : ''}>
              {this.props.year}</h2>
            <h1 className={this.props.sectionClass ? this.props.sectionClass + '-theme' : ''}>
              {this.props.theme}</h1>
            <h4 className={this.props.sectionClass ? this.props.sectionClass + '-subtitle' : 'subtitle'}>
              {this.props.subtitle}</h4>
            <div className={this.props.sectionClass + '-description'}>
              {this.props.description}
            </div>
            <div className={this.props.sectionClass + '-content'}>
              {this.props.children}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ArchiveSection
