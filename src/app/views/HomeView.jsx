import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export const HomeView = ({ user }) => (
  <div className="container text-center">
    <div className="ui two columns row  Py(15px)">
      <div className="column">{ user.pointsMissing }</div>
      <div className="column">{ user.pointsCompleted }</div>
    </div>
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
