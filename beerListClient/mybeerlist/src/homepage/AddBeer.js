import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label, Input } from 'reactstrap';

class AddBeer extends Component {
    constructor(props){
        super(props)
        this.state={
            beername:"",
            brewery:"",
            brewedin:"",
            styleof:"",
            abv:null,
            modal:false,
        }
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal})
    }

    handleKeyUp = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
        fetch("http://localhost:3000/api/log/create", {
            method: 'POST',
            body: JSON.stringify({masterbeerlist:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
                })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.fetchBeerList()
            this.toggle()
        })
    }

    render(){
        return(
            <div>
                Don't see the beer you're looking for? Add it here!
                <Button style={buttonStyle} onClick={this.toggle}>Add Beer</Button>
                <Modal style={modalStyle} isOpen={this.state.modal}>
                    <hr/>
                    <ModalHeader>
                    <Button style={closeButton} onClick={this.toggle}>X</Button>
                        <h2>Please enter as much as you can.</h2>

                    </ModalHeader>
                    <hr/>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <Label for="beername">Name of beer:</Label>
                            <Input style={inputFieldStyle} type="text" name="beername" onKeyUp={this.handleKeyUp}/>
                            <Label for="brewery">Brewery:</Label>
                            <Input style={inputFieldStyle} type="text" name="brewery" onKeyUp={this.handleKeyUp}/>
                            <Label for="brewedin:">Location of:</Label>
                            <Input style={inputFieldStyle} type="text" name="brewedin" onKeyUp={this.handleKeyUp}/>
                            <Label for="styleof">Style</Label>
                            <Input style={inputFieldStyle} type="text" name="styleof" onKeyUp={this.handleKeyUp}/>
                            <Label for="abv">ABV:</Label>
                            <Input style={inputFieldStyle} type="text" name="abv" onKeyUp={this.handleKeyUp}/>
                            <Button style={buttonStyle} type="submit">Submit</Button>
                            
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default AddBeer


const buttonStyle = {
    margin: 'auto',
    borderRadius: '.5em',
    width: '10em',
    display: 'block',
    marginTop:'.5em',
    marginBotton:'.5em',
    marginBotton:'.5em',
  }
const addButtonStyle = {
    margin: '.5em',
    borderRadius: '.5em',
    width: '8em',
    display: 'block',
    marginTop:'.5em',
    marginBotton:'5em',
    float:'right',
  }
const modalStyle = {
    minWidth:'280px',
    width:'280px',
    // maxHeight:'500px',
    backgroundColor:'black',
    color:'white',
    margin:'auto',
    padding:'1em',
    marginTop:'5em',
    focusOutline:'none',
    borderRadius:'.5em',
}
const pStyle = {
    fontWeight:'heavy',
}
const hStyle = {
    fontWeight:'heavy',
    margin:'auto',
    width:'10em',
    
}
const closeButton = {
    float:'right',
    width:'2em',
    marginBotton:'2em',
}

const inputFieldStyle = {
    float:'right',
    padding: '.25em',
    marginLeft: '1em',
    borderRadius: '.5em',
    width: '8em',
    height:'1.1em',
    marginTop:'1em'
  }
const headerStyle = {
    display:'inline',

}