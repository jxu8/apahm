import React from 'react'
import { FaPlus } from 'react-icons/lib/fa'

/**
 * Similar to Member class
 * @type {String}
 *
 * Props:
 *  href = link
 *  title = link title
 *  alt = img alt tag
 *  imgsrc = img source
 *  name = team member name
 *  class = member school and year (eg. SEAS 2019)
 *  position = member position (if multiple, list by most recent)
 */
class ImgCard extends React.Component {
  render () {
    return (
      <div className='columns portfolio-item'>
        <div className='item-wrap'>
          <a href={this.props.href} title={this.props.title} target='_blank' rel='noopener noreferrer'>
            <img alt={this.props.alt} src={this.props.imgsrc} />
            <div className='overlay'>
              <div className='portfolio-item-meta'>
                <h5>{ this.props.name }</h5>
              </div>
            </div>
            <div className='link-icon'>
              <FaPlus />
            </div>
          </a>
        </div>
      </div>
    )
  }
}

export default ImgCard
