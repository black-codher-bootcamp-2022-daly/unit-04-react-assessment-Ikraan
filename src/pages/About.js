import React from 'react';
import { Link } from 'react-router-dom';




const About= (props) => {
    return(
        <>
       <div id="nav">
          <Link to="/"> Home </Link> |
          <Link to="/about"> About </Link> |
          <Link to="/basket" id="basketlink"> Basket: {props.basketCount} item{props.basketCount===1?"":"s"}</Link>
        </div>
        <div> <h1 className='title'>About</h1> </div>
        <hr></hr>
        <div className='aboutBody'>
                <h2 className='aboutTitle'>Welcome to The Music Store <span id='icon'>🎼</span></h2>
                <p> This Application was created by Ikraan Ahmed, student at Blackcodher Full stack Development Bootcamp.<br /> 
                This is a Mediastore App designed to display a list of media that enables users to add to their baskets. <br /> 
                Users can browse the media store for media that users are interested in. <br /> 
                Users can use the search bar to find the latest media content by Artist name or track, add to their basket and also keep track of costs. <br /> </p>
            </div>
            

        </>
    )
} 

export default About; 
