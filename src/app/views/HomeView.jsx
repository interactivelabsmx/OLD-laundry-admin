import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export const HomeView = () => (
  <div className="Ta(c)">
    <h1>Home</h1>
  </div>
);

HomeView.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect((mapStateToProps), {
})(HomeView);
