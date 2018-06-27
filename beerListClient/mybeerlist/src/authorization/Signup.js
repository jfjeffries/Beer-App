import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username:'',
            password:'',
            loginError:''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value,
        })
    }

    handleSubmit = (event) => {
        while(this.state.loginError){
            this.setState({
                loginError:""
            })
        }
        if (this.state.username === ""){
            this.setState({
                loginError:<p>Please enter a Username</p>})
                event.preventDefault();
            return;
        }
        fetch("http://localhost:3000/api/user/", {
            method: 'POST',
            body: JSON.stringify({user:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.setToken(data.sessionToken)
        })
        console.log(this.state)
        event.preventDefault()
    }

    render() {

        return (
            <div>
                <h1>Sign Up</h1>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellat, atque nulla, soluta vero reprehenderit numquam incidunt, rem quaerat quos voluptatum perferendis. Distinctio culpa iste atque blanditiis placeat qui ipsa?</h6>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input id="username" type="text" name="username" placeholder="enter username" onChange={this.handleChange} />
                        <div>{this.state.loginError}</div>
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="su_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default Signup;