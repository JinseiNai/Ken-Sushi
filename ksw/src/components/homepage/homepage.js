import React from 'react';
import './homepage.css';

function Homepage() {
    return (
        <div className="container">
            <div className="address-block">
                <p className="address">11375 El Camino Real</p>
                <p className="address">San Diego, CA 92130</p>
            </div>

            <div className="telephone-block">
                <p className="telephone">(858) 793 - 1200</p>
            </div>

            <div>
                {/* <h5 className="hours-title">HOURS:</h5> */}
                <div className="info">
                    <div className="block">
                        <div className="left">
                           <p className="hours">Mon - Fri</p> 
                        </div>
                        <div className="right">
                            <p className="hours">11:30 AM - 2:00 PM</p>
                        </div>
                        <div className="left">
                            {/* holder */}
                        </div>
                        <div className="right">
                            <p className="hours">5:30 PM - 10:00 PM</p>
                        </div>
                    </div>

                    <div className="block">
                        <div className="left">
                            <p className="hours">Sat</p>
                        </div>
                        <div className="right">
                            <p className="hours">5:30 PM - 10:00 PM</p>
                        </div>
                    </div>

                    <div className="block">
                        <div className="left">
                            <p className="hours">Sun</p>
                        </div>
                        <div className="right">
                            <p className="hours">Closed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;