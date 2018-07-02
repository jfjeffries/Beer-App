import React, {Component} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class BeerList extends Component {
    constructor(props){
        super(props)
        this.toggle=this.toggle.bind(this)
        this.state={
            modal: false,
            myrating:null
        }
    }

    handleKeyUp = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addThisBeer = () => {
        fetch(`http://localhost:3000/api/beerhad/addbeer`, {
            method: 'POST',
            body: JSON.stringify({ mybeershad:{
                beername:this.props.beer.beername,
                myrating:this.state.myrating,
                hadit:true
            } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            })
        })
        .then((res) => res.json())
        .then((logData) => {
            this.props.fetchMyBeers();
            this.props.fetchBeerList();
            this.toggle();
        })
    }
    toggle (){
        this.setState({ modal: !this.state.modal})
    }
    
    render(){
        const beer = this.props.beer
    return(
            <div>
                <Button style={buttonStyle} onClick={this.toggle}>{beer.beername}</Button>
                <Modal style={modalStyle} isOpen={this.state.modal}>  
                    <hr/>    
                    <ModalHeader style={headerStyle}>
                    <Button style={closeButton} onClick={this.toggle}>X</Button>
                            <h2 style={hStyle}>{beer.beername}</h2>
                            
                        </ModalHeader>
                        <hr/>
                        <ModalBody>
                            <p style={pStyle}>Brewery: {beer.brewery}</p>
                            <p style={pStyle}>Location: {beer.brewedin}</p>
                            <p style={pStyle}>Style: {beer.styleof}</p>
                            <p style={pStyle}>Rating: {beer.avgrating}</p>
                            <p style={pStyle}>ABV: {beer.abv}</p>
                        </ModalBody>
                        <hr />
                        <ModalFooter>
                            <input style={inputFieldStyle} type="text" name="myrating" onKeyUp={this.handleKeyUp} placeholder="rating 1-5"/>
                            <Button style={addButtonStyle} onClick={this.addThisBeer}>Add to my list</Button>
                            
                        </ModalFooter>
                </Modal>
            </div>
        )  
    }
}

export default BeerList;

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
    maxHeight:'500px',
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
    margin: 'auto',
    padding: '.25em',
    marginLeft: '1em',
    borderRadius: '.5em',
    width: '8em',
    height:'1.1em',
  }
const headerStyle = {
    display:'inline',

}



// this.props.allBeers.map((beer,id) => {
//     return (
//     <ListGroupItem key={beer.id}>
        
//             <h4 onClick={this.toggle}>
//                 <strong>{beer.beername}</strong>
//             </h4>
//             <Collapse isOpen={this.state.collapse}>
//                 <li>Brewery: {beer.brewery}</li>
//                 <li>Location: {beer.brewedin}</li>
//                 <li>Style: {beer.styleof}</li>
//                 <li>Rating: {beer.avgrating}</li>
//                 <li>ABV: {beer.abv}</li>
//             </Collapse>
        
//     </ListGroupItem>
// )
// })

/* <div>       
                {
                    this.props.allBeers.map((beer,id) => {
                        return (
                            <li key={beer.id}>
                                <Button onClick={this.toggle}>{beer.beername}</Button>
                                <Collapse isOpen={this.state.collapse}>
                                    <Card>
                                        <CardBody>
                                            <p>Brewery: {beer.brewery}</p>
                                            <p>Location: {beer.brewedin}</p>
                                            <p>Style: {beer.styleof}</p>
                                            <p>Rating: {beer.avgrating}</p>
                                            <p>ABV: {beer.abv}</p>
                                        </CardBody>
                                    </Card>
                                </Collapse>    
                            </li>
                        )
                    })
                }
            </div> */