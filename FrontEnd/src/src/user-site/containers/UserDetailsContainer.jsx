import React from 'react'
import UserDetails from '../components/UserDetails.jsx'
import { FormGroup, Col, Form, Checkbox, Button, ControlLabel, FormControl } from 'react-bootstrap'
export default class UserDetailsContainer extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            // nothing ??
        }
    }

    handleLogout(){
        this.props.handleLogout()
    }
    render() {
        return(
            <div>
                {<UserDetails {...this.props.user}
                />}

            <br/> <br/> <br/> <br/> <br/>
            <Form horizontal>
             
                <FormGroup>
                    <Col xs={6} md={2}><code>{''}</code></Col>
                    <Col smOffset={2} sm={4}>
                        <Button 
                        type="button" onClick={this.handleLogout.bind(this)}
                        >
                            Sign Out
                        </Button>
                    </Col>
                    <Col xs={6} md={2}><code>{''}</code></Col>
                </FormGroup>
            </Form>
            </div>
        )
    }


}