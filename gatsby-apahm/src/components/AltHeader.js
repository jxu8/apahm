import React from 'react'

import Navigation from './Navigation'
import Banner from './Banner'
import ScrollDown from './ScrollDown'

class AltHeader extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <header
                id={this.props.page + '-header'}
                style={{
                    'background-image': this.props.background
                }}>
                <Navigation />
                <Banner
                    banner_title={this.props.pageTitle}
                    banner_sub1={this.props.pageSub1}
                    banner_sub2={this.props.pageSub2}
                    hasSocial={false}
                    >{this.props.children}</Banner>
            </header>

        )
    }
}

export default AltHeader
