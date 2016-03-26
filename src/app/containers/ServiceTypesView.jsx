import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

class ServiceTypesView extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(values, dispatch) {
  }
  render() {
    return (
      <div>Service Types</div>
    );
  }
}

ServiceTypesView.propTypes = {
  serviceTypes: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  serviceTypes: state.serviceTypes,
});

export default connect((mapStateToProps), {
})(ServiceTypesView);
