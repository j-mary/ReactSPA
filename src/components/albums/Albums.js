import React, { Component } from 'react';
import axios from 'axios';

import Album from './Album';

class Albums extends Component {

  state = {
    albums: []
  }

  async componentDidMount() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/albums');
    this.setState({
      albums: res.data
    })
  };

  render() {
    const { albums } = this.state;

    return (
      <React.Fragment>
        <div className="display-4 mb-3">
          <span className="text-danger">Album</span> List
        </div>
        {albums.map(album => (
          <Album key={album.id} album={album} />
        ))}
      </React.Fragment>
    )
  }
}

export default Albums;
