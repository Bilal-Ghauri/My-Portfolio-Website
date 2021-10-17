import React from 'react'
import developer from './devloper.jpg'
import designer from './webdesigner.jpg'
import app from './app.jpg'
const Mylearning = () => {
    return (
        <div className="myLearning">
            <h2>My Learning:</h2>
            <div className="learning">
                <div className="section">
                    <div className="img">
                        <img src={designer} alt="" />
                    </div>
                    <div className="des">
                        <h3>Web Designing</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, dolorum.</p>
                    </div>
                </div>
                <div className="section">
                    <div className="img">
                        <img src={developer} alt="" />
                    </div>
                    <div className="des">
                        <h3>Web Development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, dolorum.</p>
                    </div>
                </div>
                <div className="section">
                    <div className="img">
                        <img src={app} alt="" />
                    </div>
                    <div className="des">
                        <h3>App Development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, dolorum.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mylearning
