import React from 'react'
import UserDetails from '../components/UserDetails.jsx'

export default class UserDetailsContainer extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            // nothing ??
        }
    }

    render() {
        return(
            <div>
                {<UserDetails {...this.props.user}
                />}
            </div>
        )
    }


}