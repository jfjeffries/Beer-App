import React, {Component} from 'react'
import { Collapse, Button, CardBody, Card} from 'reactstrap'

class Beerpst extends Component {
    constructor(props){
        super(props)
        this.toggle=this.toggle.bind(this)
        this.state={
            collapse:false,
            
        }
    }

    toggle = () => {
        this.setState({ collapse: !this.state.collapse})
    }

    render(){
    return(
        <div>
                
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
               
        </div>)
    }
}

export default Beerpst;