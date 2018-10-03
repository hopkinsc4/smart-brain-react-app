import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css'
import brain from './brain.svg';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3">
                    <img src={brain} alt="Brain Logo" style={{paddingTop: '5px', height: '80%', width: '80%'}}/>
                </div>
            </Tilt>
        </div>
    )
}


export default Logo;