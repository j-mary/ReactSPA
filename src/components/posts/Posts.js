import React, { Component } from 'react';
import axios from 'axios';

import Post from './Post';

class Posts extends Component {

  state = {
    posts: []
  }

  async componentDidMount() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    this.setState({
      posts: res.data
    })
  };

  render() {
    const { posts } = this.state;

    return (
      <React.Fragment>
        <div className="display-4 mb-3">
          <span className="text-danger">Posts</span> List
        </div>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </React.Fragment>
    )
  }
}

export default Posts;
