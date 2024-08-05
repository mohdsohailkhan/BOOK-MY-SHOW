import React, { useEffect, useState } from "react";
import { Button, Col , Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

 export default function Seating(){
    const navigate = useNavigate();
    const location = useLocation();
    const {title} = location.state;
    const [seatMatrix , setSeatMatrix] = useState([]);
    const [selectedSeats , setSelectedSeats] = useState([]);
    const createSeats = ()=>{
        let totalRows = 5;
        let NumberOfSeatsInRow = 8;
        let tempSeats = [];
        let row = 0;
        let ch = 'A';
        while(row < totalRows){
            let col = 1;
            let rowArr = [];
            while(col < NumberOfSeatsInRow){
                rowArr.push(ch+col);
                col++;
            }
            tempSeats.push(rowArr);
            row++;
            ch = String.fromCharCode(ch.charCodeAt(0)+1);
        }
        setSeatMatrix(tempSeats);
    }
    useEffect(()=>{
        createSeats();
    },[])
    const handleSelect =((newSeat)=>{
        setSelectedSeats([...selectedSeats , newSeat])
    })
    return(
        <div>
            <h3 style={{padding:'1rem'}}>{title}</h3>
            <hr/>
            <h6 style={{textAlign:'center' , fontFamily:'cursive', fontWeight:'bold'}}>Screen This Side</h6>
            <div>
                {
                    seatMatrix.map((seatsArr)=>{
                        return(
                            <Row style={{marginLeft:'4rem'}}>
                                {
                                    seatsArr.map((seat)=>{
                                        let isSelected = selectedSeats.indexOf(seat) > -1;
                                        return(
                                            <Col>
                                                <Button onClick={()=>handleSelect(seat)} style={{ border:'none' , backgroundColor: isSelected ? 'green' : 'blue' , marginTop:'1rem' , width:'8rem'}}>{seat}</Button>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        )
                    })
                }
            </div>
            <div style={{textAlign:'center', marginTop:'2rem'}}>
                {
                    selectedSeats.length > 0 ?
                    <div>
                        {
                            selectedSeats.map((seat)=>{
                                return <span style={{marginRight:'0.5rem', fontSize:'1.3rem', fontWeight:'bold'}}>{seat},</span>
                            })
                        }
                        <h5>seats selected</h5>
                        
                        <div>
                            <h4 style={{marginTop:'1rem'}}>Total Rs : {selectedSeats.length * 200}</h4>
                            <Button style={{width:'10rem', marginTop:'1rem'}} onClick={()=>navigate('/success')}>Checkout</Button>
                        </div> 
                    </div> :
                    <div> <h4>No Seats Selected Please Select Seats...</h4></div>
                }
            </div>
                   
        </div>
    )
 }