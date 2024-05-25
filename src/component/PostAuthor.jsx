import React from "react";
import { Link } from 'react-router-dom';
import Avatar1 from '../images/avatar1.jpeg';
import Avatar2 from '../images/avatar2.jpeg';
import Avatar3 from '../images/avatar3.jpeg';
import Avatar4 from '../images/avatar4.jpeg';
import Avatar5 from '../images/avatar5.jpeg';
import Avatar6 from '../images/avatar6.jpeg';
import Avatar7 from '../images/avatar7.jpeg';
import Avatar8 from '../images/avatar8.jpeg';
import Avatar9 from '../images/avatar9.jpeg';

const PostAuthor = ({ authorID }) => {
    const Author = ["Priya", "Shreya", "Nishchay", "Rahul", "Simran","Aditi","Kajal","Rohan","Amyra"];
    const desc = ["just now", "1 hr ago", "5 hr ago", "1 day ago", "2 days ago","4 days ago","10 hr ago","2 days ago","3 days ago"];
    const Avatar = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5,Avatar6,Avatar7,Avatar8,Avatar9];
   
    return (
        <Link to={`/posts/users/${authorID}`} className='post__author'>
            <div className="post__author-avatar">
                <img src={Avatar[authorID-1]} alt=""/>
            </div>
            <div className="post__author-details">
                <h5>{Author[authorID-1]}</h5>
                <p>{desc[authorID-1]}</p>
            </div>
        </Link>
    );
};

export default PostAuthor;
