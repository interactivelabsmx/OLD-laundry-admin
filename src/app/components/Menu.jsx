import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Menu = ({ user }) => (
  <div className="sidebar active">
    <div className="sidebar-content">
      <div className="top-head">
        <div className="name">{ user.displayName }</div>
        <div className="email">{ user.email }</div>
      </div>
      <nav className="nav-left">
        <Link to="/main"><i className="fa fa-home"></i><span>Home</span></Link>
        <Link to="/main/specs"><i className="fa fa-puzzle-piece"></i><span>Specs</span></Link>
      </nav>
    </div>
  </div>
);

Menu.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Menu;
