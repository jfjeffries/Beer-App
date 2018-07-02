import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class BeerResults extends Component {

    constructor(props){
        super(props)
        this.toggle=this.toggle.bind(this)
        this.state={
            modal:false
        }
    }

    toggle (){
        this.setState({ modal: !this.state.modal})
    }
    
render(){
        
        return (
            
                this.props.beers.map((beer, index) =>
                    <div key={index}>
                            <Button onClick={this.toggle}>{beer.beername}</Button>
                            <Modal isOpen={this.state.modal}>      
                                <ModalHeader >{beer.beername}</ModalHeader>
                                    <ModalBody>
                                        <p>Brewery: {beer.brewery}</p>
                                        <p>Location: {beer.brewedin}</p>
                                        <p>Style: {beer.styleof}</p>
                                        <p>Rating: {beer.avgrating}</p>
                                        <p>ABV: {beer.abv}</p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button onClick={this.toggle}>Close</Button>
                                    </ModalFooter>
                            </Modal>
                        </div>
                    )
                   
                
        );
    }
}
export default BeerResults;