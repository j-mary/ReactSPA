import React, { Component } from 'react';
import axios from 'axios';

import User from './User';

class Users extends Component {
  state = {
    users: []
  };

  async componentDidMount() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    this.setState({
      users: res.data
    })
  };

  render() {
    const { users } = this.state;

    return (
      <div className="container">
        {users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

export default Users;
