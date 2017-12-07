import React from 'react'
import { FormGroup, Col, Form, Checkbox, Button, ControlLabel, FormControl } from 'react-bootstrap'

export default class LoginForm extends React.Component {

    render() {
        return(
            <div style={{minHeight: 500 + 'px'}}>
            <br/> <br/> <br/><br/><br/><br/><br/><br/>
                <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col>
                        <Col sm={10}>
                            <FormControl type="email" placeholder="Email" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={10}>
                            <FormControl type="password" placeholder="Password" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Checkbox>Remember me</Checkbox>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit">
                                Sign in
                            </Button>
                        </Col>
                </FormGroup>
            </Form>
            </div>
        )
    }


}