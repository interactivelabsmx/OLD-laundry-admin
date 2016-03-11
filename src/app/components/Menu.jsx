import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Menu = ({ user, opened, openMenu }) => {
  const sideClass = classnames(
    'sidebar', { active: opened }
  );
  return (
    <div className={ sideClass }>
      <div className="sidebar-overlay" onClick={ openMenu }></div>
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
          <a href="#close" onClick={ openMenu }>
            <i className="fa fa-times"></i><span>Close</span>
          </a>
        </nav>
      </div>
    </div>
  );
};

Menu.propTypes = {
  opened: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  openMenu: PropTypes.func.isRequired,
};

export default Menu;
