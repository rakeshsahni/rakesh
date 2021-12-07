import React from 'react'
import './Projects.css';
import {projectData} from './projectData';

function Projects() {
    return (
        <div className='project' id='projects' >
            {
                projectData.map( (dt,indx) => {
                    return <div key={indx} className='card' >
                        <div className='card-content'>
                            <h1>{dt.title}</h1>
                            <p>{dt.content}</p>
                        <a href={dt.github} target="_blank" rel="noopener noreferrer" className='source-code'>Source Code</a>

                        </div>
                        <div className='card-img'>
                        <a href={dt.seeLive} rel="noopener noreferrer" target="_blank" >
                            <img src={dt.img} alt={dt.title} className='project-img' />
                        </a>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Projects
