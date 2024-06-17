import React from 'react'
import { skills } from './skills'
import "../css/skills.css"


function Skills() {
  return (
    <div id='big-box'>
{skills.map(({id,tech,imgurl})=>{
    return <div id='box' key={id}>
          <img id='img' src={imgurl} alt="" />
          <p id='desc'>{tech}</p>
    </div>
})}
    </div>
  )
}

export default Skills