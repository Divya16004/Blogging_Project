import React from 'react'
import Posts from '../component/Posts';
import main from '../images/main.jpeg';
const HOME = () => {
  return (
    <div>
    <img src={main} alt="main"/>
    <Posts />
    
    </div>
  )
}

export default HOME;