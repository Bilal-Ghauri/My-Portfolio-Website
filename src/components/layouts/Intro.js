import React from 'react'
import Bilal from './bilal.jpg'
const Intro = () => {
    return (
        <div className="intro">
            <div className="pic">
                <div className="img">
                    <img src={Bilal} alt="" />
                </div>
            </div>
            <div className="name">
                <p>HEY THERE!  I AM</p>
                <h1><span>BILAL GHAURI</span> </h1>
                <p>WEB DESIGNER!</p>
                <div className="social-links">
                    <i className="fas fa-user"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-linkedin"></i>
                </div>
                <div className="squares">
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                </div>
            </div>
        </div>
        
    )
}

export default Intro
