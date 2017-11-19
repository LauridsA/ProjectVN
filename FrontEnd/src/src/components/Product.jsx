import React from 'react'
import { VIEW_PRODUCT_DETAILS, VIEW_PRODUCT_EDIT, VIEW_PRODUCT_LIST, VIEW_PRODUCT_GRID } from '../components/Constants.jsx'
import logo from '../images/cropped-logo.png';
import { Panel, Image, ListGroupItem, Button } from 'react-bootstrap'
import ReactTooltip from 'react-tooltip'

export default class Product extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: props.id,
            name: props.name,
            price: props.price,
            description: props.description,
            brand: props.brand,
            producer: props.producer,
            imageURL: props.imageURL
        }
    }

    grid() {
        return (
            <div>
                <Panel header={this.state.name} data-tip data-for={this.state.id}>
                    <Image src={logo} responsive />
                    <Button onClick={this.props.addToCart.bind(this, this.state)} style={{
                        marginLeft: 'auto', marginRight: 4 + 'px', display: 'block'
                    }}>Add to Cart</Button>
                </Panel>
                <ReactTooltip id={this.state.id} place="right" type="light" effect="float" delayShow={550} >
                    <span>
                        Name: {this.state.name} <br />
                        Price: {this.state.price} <br />
                        Description: {this.state.description} <br />
                        Brand: {this.state.brand} <br />
                        Producer: {this.state.producer} <br />
                    </span>
                </ReactTooltip>
            </div >
        )
    }

    list() {
        return (
            <div>
                <li className="list-group-item">
                    <ListGroupItem header={this.state.name} style={{ marginTop: 7 + 'px' }}>
                        <Image src={logo} style={{ width: 30 + '%' }} />
                        <Button onClick={this.props.addToCart.bind(this, this.state)}>Add to Cart</Button>
                    </ListGroupItem>
                </li>
            </div >
        )
    }

    details() {
        return (
            <div>
                <Panel footer={this.state.name}>
                    <Image src={logo} responsive />

                    ID: {this.state.id} <br />
                    Name: {this.state.name} <br />
                    Price: {this.state.price} <br />
                    Description: {this.state.description} <br />
                    Brand: {this.state.brand} <br />
                    Producer: {this.state.producer} <br />
                    Image URL: {this.state.imageURL} <br />
                </Panel>
            </div >
        )
    }

    edit() {
        return (
            <div>
                <Panel footer={this.state.name}>
                    <Image src={logo} responsive />

                    ID: <input type="text" /> {this.state.id} <br />
                    Name: <input type="text" />{this.state.name} <br />
                    Price: <input type="text" />{this.state.price} <br />
                    Description: <input type="text" />{this.state.description} <br />
                    Brand: <input type="text" />{this.state.brand} <br />
                    Producer: <input type="text" />{this.state.producer} <br />
                    Image URL: <input type="text" />{this.state.imageURL} <br />
                </Panel>
            </div >
        )
    }

    render() {
        switch (this.props.mode) {
            case VIEW_PRODUCT_GRID:
                return this.grid();

            case VIEW_PRODUCT_LIST:
                return this.list();

            case VIEW_PRODUCT_DETAILS:
                return this.detail();

            case VIEW_PRODUCT_EDIT:
                return this.edit();
        }
        return (<div></div>)
    }
}