import React, { Component } from 'react'
import BeerList from './BeerList'
import { /*ListGroupItem, Collapse, ListGroup, */Container, Button } from 'reactstrap'
import SearchBeers from './SearchBeers';
import MyBeerList from './MyBeerList'
import AddBeer from './AddBeer'

class Homepage extends Component{
    constructor(props){
        super(props);
        this.state = {
            allBeers : [],
            myBeers : [],
            displayMyBeers: true,
            title : "View All Beers"
        }
    }
    
    componentDidMount(){
        this.fetchBeerList();
        this.fetchMyBeers();
    }

    fetchBeerList = () => {
        fetch("http://localhost:3000/api/log/getall", {  //get all beers
            method:'GET',
            headers: new Headers({
                'Content-Type':'application/json',
                'Authorization': this.props.sessionToken
            })
        })
        .then((res) => res.json())
        .then((logData) => {
            return this.setState({ allBeers: logData})
        })
    }

    fetchMyBeers = () => {
        fetch("http://localhost:3000/api/beerhad/getallmybeers", {  //get all my beers
            method:'GET',
            headers: new Headers({
                'Content-Type':'application/json',
                'Authorization': this.props.sessionToken
            })
        })
        .then((res) => res.json())
        .then((logData) => {
            return this.setState({ myBeers: logData})
        })
    }
    handleDisplay = () => {
        if (this.state.displayMyBeers === false){
            console.log(this.state.allBeers)
            return(
                <Container>
                 {Object.keys(this.state.allBeers).map((index, key) => 
                <BeerList key={key} beer={this.state.allBeers[index]} fetchBeerList={this.fetchBeerList} fetchMyBeers={this.fetchMyBeers}/>)}
            </Container>
            )
        }else{
            return(
                <Container>
                 {Object.keys(this.state.myBeers).map((index, key) => 
                <MyBeerList key={key} beer={this.state.myBeers[index]} fetchBeerList={this.fetchBeerList} fetchMyBeers={this.fetchMyBeers}/>)}
            </Container>
            )
        }
    }
    // addThisBeer = () => {
        
    // }
    setButton = () => {
        if (this.state.title === "View my beers"){
            return ("View all beers")
        }else{
            return ("View my beers")
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({displayMyBeers: !this.state.displayMyBeers})
            if(this.state.displayMyBeers){
                this.setState({title:"View My Beers"})
            }else{
                this.setState({title:"View All Beers"})
            }
        
    }
    render(){
        

        return(
            <div style={wrapper}>
                <SearchBeers />
                <div>
                    <AddBeer fetchBeerList={this.fetchBeerList}/> 
                </div>
                <Button style={buttonStyle} onClick={this.handleSubmit}>{this.state.title}</Button>
                <div style={divStyle}>
                {this.handleDisplay()}
                </div>
                
            </div>
        )
    }
}

export default Homepage;

const inputFormStyle = {
    margin: 'auto',
    width: '25%',
    height: '12.5em',
    border: '.1em solid black',
    backgroundColor: 'black',
    borderRadius: '1em',
    marginTop: '5%',
    minWidth:'300px'
  }
  const inputFieldStyle = {
    margin: '1em',
    padding: '.25em',
    marginLeft: '2em',
    borderRadius: '.5em',
    width: '83%',
    
  }
  const headerStyle = {
    margin: '.5em',
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'gray',
    borderRadius: '.5em',
  }
  const buttonStyle = {
    margin: '1.7em',
    borderRadius: '.5em',
    width: '6em',
    
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
    backgroundColor:'black',
    borderRadius:'.5em',
    width:'280px',
    margin:'auto',
    padding:'1em',
    
}