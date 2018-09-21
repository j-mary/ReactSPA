import React from 'react';
import { Link } from 'react-router-dom';

const Album = (props) => {

  const { id, title } = props.album;

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h4><i className="badge badge-dark">Album {id}</i></h4>
        <p>{title}</p>
        <Link to={`albums/${id}/photos`} className="btn btn-light text-danger float-right">View Photos</Link>
      </div>
    </div>
  )

}

export default Album;
