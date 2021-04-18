import React, { Component } from 'react';
import './Posts.css';
import { db } from '../../Firebase/Firebase';
import Post from '../Post/Post'


class Posts extends Component {
    state = { posts: [] }

    componentDidMount() {
        db.ref('Posts').get().then(snapshots => {
            const snapshot = snapshots.val();
            let post = [];
            for (let i in snapshot) {
                post.push({i,...snapshot[i]})
            }
            this.setState({posts:post})
        })
    }
    render() {
        let postIndividual = this.state.posts.length>0?this.state.posts.map((itr, index) => {
            return <Post post={itr} key={index} />
        }):""
        return (<div className="container">
            <div className="heading">
                <h1>All Posts</h1>
                <span ><a href="/post/new" className="btn btn-success mt-2">+ New Post</a></span>
            </div>
            <hr />
            {postIndividual}
        </div>)
    }
}

export default Posts

//<div className="text-danger"><h1>No Post is available</h1></div>