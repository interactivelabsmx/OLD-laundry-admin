import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSpecForm, deleteSpec } from '../redux/reducers/specs';
import SpecSelector from '../components/specs/SpecSelector';
import SpecEditForm from '../components/specs/SpecEditForm';

class SpecsView extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  onSubmit(values, dispatch) {
    return createSpecForm(values, dispatch);
  }
  onDelete() {
    const id = document.getElementById('idSpecs').value;
    if (id) {
      this.props.deleteSpec(id);
    }
  }
  render() {
    const specs = this.props.specs;
    return (
      <section>
        <div className="P(14px) Ta(c)">
          <label className="D(b) P(7px)">Current Specs</label>
          <SpecSelector specs={ specs } />
          <div className="D(ib)">
            <button className="ui icon button" type="button" onClick={ this.onDelete }>
              <i className="fa fa-trash"></i>
              <span className="Mstart(10px)">Delete</span>
            </button>
          </div>
        </div>
        <SpecEditForm onSubmit={ this.onSubmit } />
      </section>
    );
  }
}

SpecsView.propTypes = {
  deleteSpec: PropTypes.func.isRequired,
  specs: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  specs: state.specs,
});

export default connect((mapStateToProps), {
  deleteSpec,
})(SpecsView);
