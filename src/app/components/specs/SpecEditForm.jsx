import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';

const EditAddressForm = ({ fields, handleSubmit, resetForm, submitting }) => (
  <form onSubmit={ handleSubmit }>
    <div className="ui one column grid">
      <div className="column">
          <div className="ui fluid input">
            <label htmlFor="name"></label>
            <input type="text" placeholder="Name" { ...fields.name } />
          </div>
      </div>
      <div className="column">
          <div className="ui fluid input">
            <label htmlFor="description"></label>
            <input type="text" placeholder="Description" { ...fields.description } />
          </div>
      </div>
      <div className="column Ta(e)">
        <button className="ui icon button" type="button"
          onClick={ resetForm } disabled={ submitting }
        >
          <i className="fa fa-times"></i>
          <span className="Mstart(10px)">Reset</span>
        </button>
        <button className="ui icon button" type="submit"
          onClick={ handleSubmit } disabled={ submitting }
        >
          <i className="fa fa-floppy-o"></i>
          <span className="Mstart(10px)">Save</span>
        </button>
      </div>
    </div>
  </form>
);

EditAddressForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'editAddressForm',
  fields: ['name', 'description'],
})(EditAddressForm);
