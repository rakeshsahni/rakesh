import React from 'react'
import './Social.css';
import {socialData} from './socialData';

function Social() {
    return (
        <div id='social' className='social' >
            {
                socialData.map( (dt,indx) => {
                    return <div key={indx} className='social-box' >
                        <a href={dt.socialUrl} rel="noopener noreferrer" target="_blank">
                            <img src={dt.img} alt={dt.title} className='adjust-img' />
                        </a>
                        <h1>{dt.title}</h1>
                    </div>
                })
            }
        </div>
    )
}

export default Social
