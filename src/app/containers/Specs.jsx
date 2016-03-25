import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSpec } from '../redux/reducers/specs';
import SpecSelector from '../components/specs/SpectSelector';
import SpecEditForm from '../components/specs/SpecEditForm';

class NewOrderView extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(values, dispatch) {
    return createSpec(values, dispatch);
  }
  render() {
    const specs = this.props.specs;
    const specSelector = (
      <SpecSelector specs={ specs } />
    );
    const specEditForm = (
      <SpecEditForm onSubmit={ this.onSubmit } />
    );
    return (
      <section>
        { specSelector }
        { specEditForm }
      </section>
    );
  }
}

NewOrderView.propTypes = {
  specs: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  specs: state.specs,
});

export default connect((mapStateToProps), {
  createSpec,
})(NewOrderView);
