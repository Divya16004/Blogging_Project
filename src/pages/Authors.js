import React, { useState } from "react";
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


const authorsData = [
    { id: 1, avatar: Avatar1, name: 'Priya', posts: 3 },
    { id: 2, avatar: Avatar2, name: 'Shreya', posts: 5 },
    { id: 3, avatar: Avatar3, name: 'Nishchay', posts: 0 },
    { id: 4, avatar: Avatar4, name: 'Rahul', posts: 2 },
    { id: 5, avatar: Avatar5, name: 'Simran', posts: 1 },
    { id: 6, avatar: Avatar6, name: 'Aditi', posts: 4 },
    { id: 7, avatar: Avatar7, name: 'Kajal', posts: 1 },
    { id: 8, avatar: Avatar8, name: 'Rohan', posts: 6 },
    { id: 9, avatar: Avatar9, name: 'Amyra', posts: 0 },
];

const Authors = () => {
    const [authors] = useState(authorsData);

    return (
        <section className="authors">
            {authors.length > 0 ? <div className="container authors_container">
                    {
                    authors.map(({ id, avatar, name, posts }) => {
                        return <Link key={id} to={`/posts/users/${id}`} className="author">
                
                            <div className="author_avatar">
                                <img src={avatar} alt={`image of ${name}`} />
                            </div>
                            <div className="author__info">
                                <h4>{name}</h4>
                                <p>{posts}</p>
                            </div>
                        </Link>
})
}
                </div> : <h2 className="center">No users/authors found.</h2>}
            
        </section>
    )
}

export default Authors;