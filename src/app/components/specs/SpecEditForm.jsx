import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';

const EditAddressForm = ({ fields, handleSubmit, cancelHandler, submitting }) => (
  <form onSubmit={ handleSubmit }>
    <div className="ui one column grid">
      <div className="column">
          <div className="ui fluid input">
            <label htmlFor="name"></label>
            <input type="text" placeholder="Address" { ...fields.name } />
          </div>
      </div>
      <div className="column">
          <div className="ui fluid input">
            <label htmlFor="description"></label>
            <input type="text" placeholder="Apt #" { ...fields.description } />
          </div>
      </div>
      <div className="column Ta(e)">
        <button className="ui icon button" type="button"
          onClick={ cancelHandler } disabled={ submitting }
        >
          <i className="fa fa-times"></i>
          <span className="Mstart(10px)">Cancel</span>
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
  cancelHandler: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'editAddressForm',
  fields: ['name', 'description'],
})(EditAddressForm);

 // ,
 // state => ({ // mapStateToProps
 //   initialValues: state.account.data // will pull state into form's initialValues
 // }),
 // {load: loadAccount}      // mapDispatchToProps (will bind action creator to dispatch)
