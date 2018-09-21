import React, { Component } from 'react';
import axios from 'axios';

class Photos extends Component {
  state = {
    photos: []
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
    this.setState({
      photos: res.data
    })
  }

  render() {
    const { photos } = this.state;

    return (
      <div className="container">
        <div className="row">
          {photos.map(photo => {
            const { id, title, url, thumbnailUrl } = photo;

            return (
              <div className="col-md-4" key={id}>
                <div className="thumbnail">
                  <a href={url}>
                    <img src={thumbnailUrl} className="img-thumbnail" alt="Lights" style={{ width: '100%' }}></img>
                    <div className="caption">
                      <p>{title}</p>
                    </div>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Photos;
