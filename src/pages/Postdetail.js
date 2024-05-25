

import React from 'react';
// import PostAuthor from '../component/PostAuthor';
// import { Link } from 'react-router-dom';
import image1 from '../images/image1.jpeg';

const Postdetail = () => {
  return (
    <section className='post-detail'>
      <div className='container post-detail_container'>
        <div className='box'>
        {/* <div className='post-detail_header'>
          {/* <PostAuthor/> */}
          {/* <div className='post-detail_buttons'>
             <Link to={/posts/werwer/edit} className="btn sm primary">Edit</Link>
             <Link to={/posts/werwer/delete}></Link> 
          </div> 
        </div> */}<h1 style={{marginLeft:'30rem'}}>Singapore</h1>
       
        <div className='detail'>
        <div><img style={{height:'150px',width:'150px'}}src={image1} alt=""/>
        <h3>by Priya </h3>
        <p>just now</p>

        </div>

        <p className='parag'style={{margintop:'0'}} >
          Welcome to the Lion City! Singapore is a bustling metropolis known for its harmonious blend of futuristic architecture, rich cultural heritage, and delectable cuisine. Explore iconic landmarks like Marina Bay Sands, Gardens by the Bay, and Sentosa Island, or immerse yourself in the vibrant neighborhoods of Chinatown, Little India, and Kampong Glam. With its efficient public transportation system and immaculate cleanliness, Singapore offers a seamless travel experience for visitors. </p>
      </div></div></div>
    </section>
  )
}

export default Postdetail;