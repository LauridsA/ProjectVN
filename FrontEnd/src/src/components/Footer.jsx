import React from 'react'
import {ROUTE_ABOUTUS, VISIBILITY_ABOUTUS} from '../components/Constants.jsx'
import {NavItem, Nav, Grid, Row, Col, Panel } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {

    render() {
        return(
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={6} md={4}><code>{''}</code></Col>
                        <Col xs={6} md={4}><code>{
                            this.aboutus.bind(this)()
                            } </code></Col>
                        <Col xsHidden md={4}><code>{''} </code></Col>
                    </Row>
                </Grid>
            </div>
        )
    }

    aboutus () {
        return (
        <LinkContainer to={ROUTE_ABOUTUS}>
            <Panel>
                <div style={styles}>
                    About Us
                </div>
            </Panel>    
        </LinkContainer>
    )}
}

const styles = {
    fontStyle: 'italic',
    textAlign: 'center'
};