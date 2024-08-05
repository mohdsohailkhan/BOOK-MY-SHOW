import React from "react";
import { Row , Col } from "react-bootstrap";
import popcornImg from '../assets/3.png'
import scanner from '../assets/scanner.jpg'

export default function Success(){
    return(
        <div>
            <Row>
                <Col>
                    <img style={{height:'25rem', marginLeft:'15rem',marginTop:'3.7rem'}} src={popcornImg}/>
                    <h4 style={{marginLeft:'20rem',marginTop:'2rem',color:'green'}}>Ticket Confirmed..</h4>
                    <h5 style={{marginLeft:'20rem',marginTop:'1rem'}}>Enjoy Your Movie!</h5>
                </Col>
                <Col><img style={{height:'30rem' , marginTop:'4rem'}} src={scanner}/></Col>
            </Row>
        </div>
    )
}