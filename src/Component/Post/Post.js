import React from 'react';
import {db} from '../../Firebase/Firebase'
 const post =({post}) =>{
    
    const deleteHandler = ()  =>{
     db.ref('Posts').child(post.i).remove()
     window.location.href="/post";
       
    }
    const editChangeHandler =() =>{
        window.location.href="/post/edit/"+post.i;
    }
//console.log(post)
    return (
        <div>
            <h1>{post.title}</h1>
            <p className="author_style">Written by {post.author} on {post.date} {post.time}</p>
            <p>{post.content}</p>
            <div>
                <button className="btn btn-danger" onClick={deleteHandler}>Delete</button>&nbsp;&nbsp;
                <button className="btn btn-primary" onClick={editChangeHandler}>Edit</button>
            </div>
            <hr/>
        </div>
    )
}
export default post;