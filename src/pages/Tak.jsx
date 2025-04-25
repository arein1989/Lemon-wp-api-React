// Tak.jsx
import React from 'react';
import TakFor from '../assets/TAK FOR DIN BESØG.png';
import { useNavigate } from 'react-router-dom';

export default function Tak() {
    const navigate = useNavigate();

    return (
        <div className="hero is-fullheight" 
             style={{ 
                 backgroundImage: `url(${TakFor})`, 
                 backgroundSize: 'cover', 
                 backgroundPosition: 'center',
                 display: 'flex',
                 flexDirection: 'column',
                 justifyContent: 'end',
                 alignItems: 'center'
             }}>
            <button 
                onClick={() => navigate('/')}
                className="button is-large is-primary my-5"
                style={{ backgroundColor: '#1E2B18', color: '#F0F0F0' }}
            >
                Back to Home
            </button>
        </div>
    );
}