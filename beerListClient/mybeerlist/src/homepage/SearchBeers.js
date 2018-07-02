import React, {Component} from 'react';
// import BeerList from './BeerList'
import {Container, Button, Row} from 'reactstrap'
import BeerResults from './BeerResults'

class SearchBeers extends Component {
    constructor(props){
        super(props);
        this.state = {
            beers: [],
            searchTerm:""
        }
    }

    filterItems = (search) =>{
            
            (this.props.allBeers).map((filt)=>{
            let beerValuesArray = Object.values(filt)

             beerValuesArray.filter((filtered)=>{
                 if(typeof filtered==='string' && (filtered.toLowerCase())===(search.toLowerCase())){
                let newBeer = this.state.beers.concat(filt)
                console.log("filt: ",filt)
                this.setState({
                    beers:newBeer
                })
                console.log("beers: ",this.state.beers)
                }
            })
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const allBeers = this.props.allBeers;
        this.setState({
        [e.target.name]:e.target.value
        })
        this.filterItems(this.state.searchTerm)
    }

    handleChange = (event) => {
        event.preventDefault();
        
            // (this.props.allBeers).map((beerObj)=>{
            //     console.log("mapped:",beerObj)
            //     let filteredBeerVal = Object.values(beerObj).filter((beerVal) =>{ 
            //     beerVal.typeof==='string'&&beerVal.toLowerCase().indexOf(event.target.value) !== -1
            //     console.log(filteredBeerVal)
            //     })
            //     if (filteredBeerVal){
            //         let beersArray = this.state.beers.push(beerObj)
            //         this.setState({beers:beersArray})
            //     }
            // })
            //         let beerValuesArray = Object.values(filt)
        // this.filterItems(event.target.value)
        this.setState({
            [event.target.name]: event.target.value,
        });
         
    }
    addThisBeer = () => {
        //add a beer to my list
    }

    render(){
        return(
            <div style={divStyle}>
                <Row>
                    <form style={inputFormStyle}onSubmit={this.handleSubmit} id="form" name="searchTerm">
                        <input style={inputFieldStyle} id="searchTerm" name="searchTerm"type="text" placeholder="Search a beer" required onKeyUp={this.handleChange}/>
                        <Button style={buttonStyle} type="submit" name="searchTerm">Submit</Button>
                    </form>
                </Row>
                <Container>
                    <BeerResults beers = {this.state.beers} addThisBeer = {this.addThisBeer}/>
                </Container>
            </div>
        )
    }
}

export default SearchBeers

const inputFormStyle = {
    margin: 'auto',
    width: '15em',
    height: '2em',
    backgroundColor: 'transparent',
    position: 'relative',
    top: '50%',
    transform: 'perspective(1px) translateY(25%)',
    minWidth:'300px',
  }
  const inputFieldStyle = {
    margin: 'auto',
    padding: '.25em',
    marginLeft: '1em',
    borderRadius: '.5em',
    width: '12em',
    height:'1.25em',
  }
  const headerStyle = {
    margin: '.5em',
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'gray',
    borderRadius: '.5em',
  }
  const buttonStyle = {
    borderRadius: '.5em',
    width: '5em',
    display: 'block',
    marginTop:'.5em',
    marginBotton:'.5em',
    float:'right',
    marginRight:'1em'
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
  const divStyle={
      margin:'1em'
  }