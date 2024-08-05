import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row , Col, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
const MOVIE_IMG = 'https://image.tmdb.org/t/p/w500'
const timeings = ['10:00 AM','2:00 PM','6:00 PM','8:00 PM']

export default function Movie(){
    const navigate = useNavigate();
    const location = useLocation();
    const {title , overview , poster_path} = location.state;
    const [latLng , setLatLng] = useState({});
    const [theaters , setTheaters] = useState([]);
    useEffect(()=>{
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLatLng({
                    lat : position.coords.latitude,
                    lng : position.coords.longitude
                })
              });
          } 
    },[]);
        useEffect(()=>{
            if(Object.keys(latLng).length > 0){
                const geoApi =`https://api.geoapify.com/v2/places?categories=entertainment.cinema&filter=circle:78.44202,17.3707564,5000&bias=proximity:78.44202,17.3707564&limit=20&apiKey=c41091bc7e2247f68f02c1dd975bd02f`;
                axios.get(geoApi).then((res)=>{
                    const featuresArr = res.data.features;
                    const names = [];
                    featuresArr.map((feature)=> names.push(feature.properties.name))
                    setTheaters(names)
                    
                })
            }
        },[latLng])
    return(
        <div>
            <Row>
                <Col>
                    <div>
                        <img src={MOVIE_IMG+poster_path} height={400} style={{marginLeft:'7rem', marginTop:'2rem', borderRadius:'1rem'}}/>
                        <h4 style={{marginLeft:'7rem',marginTop:'1rem',fontFamily:'cursive',fontWeight:'bold'}}>{title}</h4>
                        <p style={{marginLeft:'3rem', marginTop:'1rem'}}>{overview}</p>
                    </div>
                </Col>
                <Col style={{marginLeft:'10rem'}}>
                    {
                        theaters.map((theater , index)=>{
                            return(
                                <div key={index}>
                                    <h4>{theater}</h4>
                                    <div style={{marginBottom:'1rem'}}>
                                        {
                                            timeings.map((time)=>{
                                                return(
                                                    <Button onClick={()=>navigate('/seating', {state :{title:title}})} key={time} style={{marginRight:'1rem',width:'8rem', marginBottom:'1rem'}}>{time}</Button>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </Col>
            </Row>
        </div>
    )
}