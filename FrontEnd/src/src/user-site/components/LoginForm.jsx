import React from 'react'
import { FormGroup, Col, Form, Checkbox, Button, ControlLabel, FormControl } from 'react-bootstrap'

export default class LoginForm extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleLogin(e){
        this.props.handleLogin(this.state)
    }

    handleChange(e){
        var change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }

    render() {
        return(
            <Form horizontal style = {formstyle} >
                <FormGroup controlId="formHorizontalEmail">
                    <Col xs={6} md={2}><code>{''}</code></Col>
                    <Col componentClass={ControlLabel} sm={2}>
                        Email
                    </Col>
                    <Col sm={4}>
                        <FormControl 
                            type="text" 
                            value= {this.state.email}
                            placeholder="Email"
                            name="email"
                            onChange={this.handleChange.bind(this)}
                        />
                    </Col>
                    <Col xs={6} md={2}><code>{''}</code></Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col xs={6} md={2}><code>{''}</code></Col>
                    <Col componentClass={ControlLabel} sm={2}>
                        Password
                    </Col>
                    <Col sm={4}>
                        <FormControl 
                        type="text" 
                        value= {this.state.password}
                        placeholder="Password"
                        name="password"
                        onChange={this.handleChange.bind(this)}
                        />
                    </Col>
                    <Col xs={6} md={2}><code>{''}</code></Col>
                </FormGroup>

                <FormGroup>
                    <Col xs={6} md={2}><code>{''}</code></Col>
                    <Col smOffset={2} sm={4}>
                        <Checkbox>Remember me</Checkbox>
                    </Col>
                    <Col xs={6} md={2}><code>{''}</code></Col>
                </FormGroup>

                <FormGroup>
                    <Col xs={6} md={2}><code>{''}</code></Col>
                    <Col smOffset={2} sm={4}>
                        <Button 
                        type="button" onClick={this.handleLogin.bind(this)}
                        >
                            Sign in
                        </Button>
                    </Col>
                    <Col xs={6} md={2}><code>{''}</code></Col>
            </FormGroup>
        </Form>
        )
    }
}

const formstyle = {
    position: 'relative',
    marginTop: 80 + 'px'
};