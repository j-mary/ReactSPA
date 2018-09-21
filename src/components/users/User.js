import React from 'react';
import './user.css';

const User = (props) => {
  const { name, username, email, address, phone, website, company } = props.user;
  return (
    <div className="mb-2 d-flex justify-content-center">
      <div className="col-xs-12 col-sm-9">
        <h4 className="blue">{name}</h4>

        <div className="profile-user-info">
          <div className="profile-info-row">
            <div className="profile-info-name"> Username </div>

            <div className="profile-info-value">
              <span>{username}</span>
            </div>
          </div>

          <div className="profile-info-row">
            <div className="profile-info-name"> Location </div>

            <div className="profile-info-value">
              <i className="fa fa-map-marker light-orange bigger-110"></i> &nbsp;
              <span>{address.street}</span>
              <span>{address.city}</span>
            </div>
          </div>

          <div className="profile-info-row">
            <div className="profile-info-name"> Email </div>

            <div className="profile-info-value">
              <i className="fa fa-envelope light-orange bigger-110"></i> &nbsp;
              <span>{email}</span>
            </div>
          </div>

          <div className="profile-info-row">
            <div className="profile-info-name"> Phone </div>

            <div className="profile-info-value">
              <i className="fa fa-phone light-orange bigger-110"></i> &nbsp;
              <span>{phone}</span>
            </div>
          </div>

          <div className="profile-info-row">
            <div className="profile-info-name"> Company </div>

            <div className="profile-info-value">
              <i className="fa fa-building light-orange bigger-110"></i> &nbsp;
              <span>{company.name}</span>
            </div>
          </div>
        </div>

        <div className="hr hr-8 dotted"></div>

        <div className="profile-user-info">
          <div className="profile-info-row">
            <div className="profile-info-name"> Website </div>
            <div className="profile-info-value">
              <i className="fa fa-at light-orange bigger-110"></i> &nbsp;
              <a href={website} target="_blank">{website}</a>
            </div>
          </div>

          <div className="profile-info-row">
            <div className="profile-info-name">
            </div>
            <div className="profile-info-value">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User;
