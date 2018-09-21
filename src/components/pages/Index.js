import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="jumbotron text-center">
      <h1 className="display-3">Welcome to SPA</h1>
      <p className="lead">Click on the navigation to view posts, albums or users</p>
      <Link to="/posts" className="btn btn-info btn-lg">View Posts</Link>
    </div>
  )
}

export default Index;
