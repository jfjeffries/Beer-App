import React, { Component } from 'react'
import {
    Navbar,         //1
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    Button,
    Collapse
} from 'reactstrap';

export default class Navi extends Component {
    constructor (props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                Header
                <button onClick={() => this.props.clickLogout()}>Logout</button>
            </div>
        )
    }
}