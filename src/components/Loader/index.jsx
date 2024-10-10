import React from 'react';
import './loader.css';

function Loader({ fullscreen = true }) {
    return (
        <div className={`loader-container ${fullscreen ? 'fullscreen' : ''}`}>
            <div className="spinner"></div>
            <span className='loader-text'>Loading...</span>
        </div>
    );
}

export default Loader;
