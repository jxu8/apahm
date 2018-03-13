import React from 'react'
import SocialLinks from './SocialLinks'

class Banner extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className='row banner'>
                <div className='banner-text'>
                    <h1 className='responsive-headline'>{this.props.banner_title}</h1>
                    <h3>{this.props.banner_sub1}
                    </h3>
                    <h3>{this.props.banner_sub2}</h3>
                    <hr />
                    <SocialLinks />
                </div>
            </div>
        )
    }
}

export default Banner