import React,{useState} from 'react';

import PostItem from './PostItem';
import { DUMMY_POSTS } from '../data';
const Posts = () => {
    const[posts,setPosts]=useState(DUMMY_POSTS)
  return (
    <div>
    <section className="posts">
        {posts.length>0?<div className='container posts__container'>
       {
        posts.map(({id,thumbnail,title,description,authorID})=>
        <PostItem key={id} postID={id} thumbnail={thumbnail} title={title} description={description} authorID={authorID} />)
       }
    </div>:<h2 className='center'>No posts found</h2>
    
    }
    
    </section>
    <hr />
    <hr />
    <hr />
    </div>
   )
}

export default Posts;