import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const MOVIE_IMG = 'https://image.tmdb.org/t/p/w500'

export default function Main(){
    const [movies , setMovies] = useState([]);
    const navigate = useNavigate()
    useEffect(() =>{
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=588e73aa89caa1adca906ef27976e6cf').then((resp)=>{
            setMovies(resp.data.results);
       })
    },[])

    function handleSubmit(movie){
        navigate('/movie/'+movie.id,{state:movie})
    }

    return(
        <div style={{display: 'flex', flexWrap:'wrap',marginTop:'2rem',marginLeft:'2rem'}}>
            {
                movies.map((movie)=>{
                    return(
                        <Card key={movie.id} onClick={()=>handleSubmit(movie)} style={{width:'20rem',height:520 , margin:'1rem' , overflow:'hidden', padding:'1rem'}}>
                            <Card.Img src={MOVIE_IMG+movie.poster_path} style={{width:'18rem' , height:450}}></Card.Img>
                            <Card.Title style={{marginTop:'1rem'}}>{movie.title}</Card.Title>
                        </Card>
                    )
                })
            }
        </div>
    )
}