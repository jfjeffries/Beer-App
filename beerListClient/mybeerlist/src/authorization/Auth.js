import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Signup from './Signup';
import Login from './Login'
    //1
const Auth = (props) => {
    return (
        <Container style={authContainer}>
            <Row>
                <Col md="6">
                    <div><Signup setToken={props.setToken}/></div>
                </Col>
                <Col md="6" style={loginCol}>
                    <div><Login setToken={props.setToken}/></div>
                </Col>
            </Row>
        </Container>
    )
}
export default Auth;

const authContainer = {
    marginTop: '5em',
    padding: '2em',
    border: '1px solid #e5e5e5',
    borderRadius:'0.4em',
    boxShadow: '2px solid black'
}

const loginCol = {
    borderLeft:'1px solid black',
}