import React from 'react'
import { FaPlus, FaTag } from 'react-icons/lib/fa'

/**
 * Member class for representing people
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

class Member extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className='columns portfolio-item'>
              <div className='item-wrap'>
                <a href={ this.props.href } title={ this.props.title }>
                  <img alt={ this.props.alt } src={ this.props.imgsrc }/>
                  <div className='overlay'>
                    <div className='portfolio-item-meta'>
                      <h5>{ this.props.name }</h5>
                      <p>{ this.props.class }</p>
                      <p>{ this.props.position }</p>
                    </div>
                  </div>
                  <div className='link-icon'>
                    <FaPlus />
                  </div>
                </a>
                <h5>{ this.props.name }</h5>
                <h6>{ this.props.class }</h6>
                <h6>{ this.props.position }</h6>
                <h6 className='event'>{ this.props.event }</h6>
              </div>
            </div>
        )
    }
}

export default Member
