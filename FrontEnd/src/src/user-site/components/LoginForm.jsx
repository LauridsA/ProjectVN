import React from 'react'
import { FormGroup, Col, Form, Checkbox, Button, ControlLabel, FormControl } from 'react-bootstrap'

export default class LoginForm extends React.Component {

    render() {
        return(
            <Form horizontal style = {formstyle}>
                <FormGroup controlId="formHorizontalEmail">
                    <Col xs={6} md={2}><code>{''}</code></Col>
                    <Col componentClass={ControlLabel} sm={2}>
                        Email
                    </Col>
                    <Col sm={4}>
                        <FormControl type="email" placeholder="Email" />
                    </Col>
                    <Col xs={6} md={2}><code>{''}</code></Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col xs={6} md={2}><code>{''}</code></Col>
                    <Col componentClass={ControlLabel} sm={2}>
                        Password
                    </Col>
                    <Col sm={4}>
                        <FormControl type="password" placeholder="Password" />
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
                        <Button type="submit">
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
    marginTop: 200 + 'px'
};