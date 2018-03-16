import React from 'react'
import Banner from '../components/Banner'
/**
 * All-purpose section container
 * Sample use cases:
 *  - added information box at bottom of page
 *  - page header without banner
 * @type {Object}
 */

class Section extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <section className={'section ' + this.props.sectionClass}>
                <h1 className={this.props.sectionClass + '-title'}>
                {this.props.headerTitle}</h1>
            <div className={this.props.sectionClass + '-content'}>
                {this.props.children}</div>
            </section>
        )
    }
}

export default Section
