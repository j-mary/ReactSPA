import React, { Component } from 'react';
import axios from 'axios';

class PostDetail extends Component {
  state = {
    comments: []
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    this.setState({
      comments: res.data
    })

  }

  render() {
    const { comments } = this.state;
    const commentsCount = this.state.comments.length;

    return (
      <div className="container">
        <div className="card card-header">
          <button type="button" className="btn btn-info btn-sm">
            Comments <span className="badge badge-light">{commentsCount}</span>
          </button>
          {comments.map(comment => {
            const { id, name, email, body } = comment;
            return (
              <div className="card-body" key={id}>
                <p>
                  <i className="fas fa-user-check badge badge-dark">
                    {'  '} {name}
                  </i>
                  &nbsp; &nbsp;
                  <i className="fas fa-envelope badge badge-dark">
                    {'  '} {email}
                  </i>
                </p>
                <div className="jumbotron">
                  <p>{body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default PostDetail;
