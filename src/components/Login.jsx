import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Col , Row } from "react-bootstrap";
import loginlogo from "../assets/1.png"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login(){
    const navigate = useNavigate();
    const [email,setEmail] = useState();
    function handleSubmit(){
        localStorage.setItem('username',email)
        navigate('/main')
    }
    return(
        <div className="logindiv">
            <Row>
                <Col>
                    <img style={{height: 540 ,marginLeft: 170}} src={loginlogo}/>
                    <h1 style={{marginLeft:170 ,fontWeight: 'bold' }}><i>BOOK TICKETS | EARN POINTS</i></h1>
                </Col>
                <Col>
                    <Card style={{ width: '25rem', padding:'1rem', marginTop:'7rem',marginLeft:'10rem' ,height:'28rem'}}>
                        <Card.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Control type="email"  onChange={(e)=>setEmail(e.target.value)} value={email}  placeholder="Enter email" style={{padding:'1rem',marginTop:'1.5rem'}}/>
                                <Form.Text className="text-muted">
                                     We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                 <Form.Control type="password" placeholder="Password" style={{padding:'1rem', marginTop:'1.5rem'}} />
                            </Form.Group>
                                  <Button variant="primary" onClick={handleSubmit}  type="submit" style={{padding:'0.6rem' , width:'100%' , marginTop:'1.5rem', backgroundColor:' #f54236', border: 'none'}}>Login</Button>
                        </Form>
                        </Card.Body>
                            <p style={{marginLeft:'6rem' , fontWeight:'bold',marginTop:'1rem'}}>New to Book My Show</p>
                            <p style={{marginLeft:'6.5rem' , fontWeight:'bold'}}>Click here to <span style={{color:'blue' , cursor: 'pointer'}} onClick={()=> navigate('/signup')}>Signup</span></p>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}