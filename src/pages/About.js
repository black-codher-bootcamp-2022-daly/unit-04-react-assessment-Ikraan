import React from 'react';
import { link } from 'react-router-dom';
import Header from '../components/Header';

function About(){
    return(
        <>
            <h1 className='title'>About</h1>
        <div className='aboutBody'>
                <h2 className='aboutTitle'>Welcome to The Music Store 🎼</h2>
                <p> This Application was created by Ikraan Ahmed, student at Blackcodher Full stack Development Bootcamp.<br /> 
                This is a Mediastore App designed to display a list of media that enables users to add to their baskets. <br /> 
                Users can browse the itunes store for media that users are interested in. <br /> 
                Users can use the search bar to find the latest media content by Artist name or track, add to basket and also keep track of costs. <br /> </p>
            </div>
            </>

        
    )
} 

export default About; 