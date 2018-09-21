import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {

  state = {
    showPostInfo: false
  };

  onShowClick = () => {
    this.setState({ showPostInfo: !this.state.showPostInfo });
  };

  render() {
    const { id, title, body } = this.props.post;
    const { showPostInfo } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">
          <p>
            Post {id} {'  '}
            <i
              className="fas fa-sort-down"
              data-toggle="tooltip"
              data-placement="top"
              title="Click to view post"
              style={{ cursor: 'pointer' }}
              onClick={this.onShowClick}
            />
          </p>
        </div>
        {showPostInfo ? (
          <React.Fragment>
            <div className="card card-body">
              <h4><span className="text-danger">Title</span>: {title}</h4>
              <hr />
              <p>{body}</p>
            </div>
            <Link to={`posts/${id}/comments`} className="btn btn-light btn-block text-info">View Comments</Link>
          </React.Fragment>
        ) : null}
      </div>
    )
  }
}

export default Post;
