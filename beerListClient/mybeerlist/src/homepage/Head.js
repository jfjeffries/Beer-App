import React, { Component } from 'react'
import {
    Navbar,         //1
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    Button,
    Collapse,
    Row, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import SearchBeers from './SearchBeers'

export default class Navi extends Component {
    constructor (props){
        super(props);
        this.state = {
            email:"",
            collapsed:true,
            modal:false,
        }
    }

    toggleNavbar = () => {
        this.setState({
          collapsed: !this.state.collapsed
        });
        console.log(this.state.collapsed)
      }
    toggle = () => {
        this.setState({
            modal:!this.state.modal
        })
    }

    render(){
        return(
            <div>
                <Navbar style={headerStyle}>
                    <Row>
                        <div style={greetingStyle}>Hello {localStorage.getItem('email')}</div>
                            <Nav navbar>
                                <button style={buttonStyle} onClick={() => this.props.clickLogout()}>Logout</button>  
                            </Nav>
                    </Row>
                </Navbar>
            </div>
        )
    }
}

  const headerStyle = {
    color: 'white',
    // textAlign: 'center',
    backgroundColor: 'black',
    width:'100%',
    background:'stretch',
    margin:'0em',
    padding:'0em',
    border:'0em',
    height:'3em',
    marginRight:'0em',
    lineHeight:'3em',
  }
  const buttonStyle = {
    margin: 'auto',
    borderRadius: '.5em',
    width: '4em',
    display: 'block',
    height:'2em',
    marginTop:'.75em',
    // marginBotton:'.5em',
    float:'right',
    marginRight:'1em',
  }
  const wrapper={
    backgroundColor: 'gray',
    height: '100%',
    width: '100%',
    background: 'stretch',
    textAlign: 'center',
    margin: '0',
    minHeight: '100%',
    position: 'fixed',
    padding: '0',
    border:'0'
  }
  const greetingStyle={
      float:'left',
      fontSize:'150%',
      marginLeft:'2em',
      
  }
  const mainDivStyle={
    zIndex:'500',
    margin:'0',
    width:'100%',
    
}

