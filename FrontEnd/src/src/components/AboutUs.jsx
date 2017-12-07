import React from 'react'
import laurids from '../images/laurids.png';
import { Grid, Row, Col, Panel, Image } from 'react-bootstrap'

export default class AboutUs extends React.Component {

    render() {
        const imageStyle = {
            width: 90 + '%',
            margin: 'auto',
            display: 'block'
        }
        return (
            <div style={{ position: 'relative', top: 59 + 'px', minHeight: 100 + '%' }}>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={1} md={4}></Col>
                        <Col key='Laurids' md={4} >
                            <Panel header='Laurids' style={{margin: 'auto'}}>
                                <Image src={laurids} style={imageStyle} />
                                <br />
                                <ul>
                                    <li>S3694530</li>
                                    <li>From Esbjerg, Denmark</li>
                                    <li>Studies Computer Science at University College Nordjylland</li>
                                </ul>
                            </Panel>
                        </Col>
                        <Col xs={1} md={4}></Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}