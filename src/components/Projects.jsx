import React from 'react'
import { projects } from './projects'
import "../css/projects.css"

function Projects() {
  return (
    <div id='projectsbox'>
       {projects.map(({id,imgurl,tech,desc})=>{
        return <div id='projects' key={id}>
            <img src={imgurl} alt="" />
           <div id='about'>
           <p id='tech'>{tech}</p>
           <p>{desc}</p>
           </div>
        </div>
       })}
    </div>
  )
}

export default Projects