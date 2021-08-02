import React from 'react';
import postData from  '../data/posts.json'
import {Link} from 'react-router-dom'

console.log(postData)

function Home(){
    return (
    <div className="switch-container">
    <h1>Home</h1>
    {postData.map((post,index) => {
      return ( <Link to={"/post/" + post.slug} style={{color: "blue"}} key={index}>{post.title}</Link>)
    })}
    </div>
    );
}

export default Home;