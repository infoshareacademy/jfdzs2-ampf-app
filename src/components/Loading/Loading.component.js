import React from 'react';
import ReactLoading from 'react-loading';
import './Loading.component.style.css';

const Loading = ({ type, color }) => (
    <div className='loading-component'>
        <h2>Loading...</h2>
        <ReactLoading type='spinningBubbles' color='#29B200' height={250} width={250} className='loading-component-spinner'/>
    </div>
);

export default Loading;