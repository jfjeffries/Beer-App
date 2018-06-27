import React, { Component } from 'react'
import BeerList from './BeerList'

class Homepage extends Component{
    constructor(props){
        super(props);
        this.state = {
            allBeers : [],
            myBeers : [],
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
            console.log(logData)
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

    // displayBeerList(){
    //     this.state.allBeers.foreach(i =>{
    //     return(<li>Beers</li>
            
    //     )
    //     })
    // }
    render(){
        return(
            <div>
                <ul>
                   <BeerList allBeers={this.state.allBeers} />
                </ul>
              {/* <BeerList allBeers={this.state.myBeers} /> */}
            </div>
        )
    }
}

export default Homepage;