import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Menu = ({ user }) => {
  return (
    <div className="sidebar active">
      <div className="sidebar-content">
        <div className="top-head">
          <div className="name">{ user.displayName }</div>
          <div className="email">{ user.email }</div>
        </div>
        <nav className="nav-left">
          <a href="#home"><i className="fa fa-home"></i><span>Overview</span></a>
          <a href="#alarm"><i className="fa fa-bell"></i><span>Alarm</span></a>
          <a href="#compose"><i className="fa fa-pencil"></i><span>Compose</span></a>
          <a href="#chats"><i className="fa fa-comments"></i><span>Chats</span></a>
          <a href="#profile"><i className="fa fa-user"></i><span>Profile</span></a>
          <a href="#settings"><i className="fa fa-cog"></i><span>Settings</span></a>
          <a href="#credits"><i className="fa fa-list"></i><span>Credits</span></a>
        </nav>
      </div>
    </div>
  );
};

Menu.propTypes = {
  user: PropTypes.object.isRequired
};

export default Menu;
