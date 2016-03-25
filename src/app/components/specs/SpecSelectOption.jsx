import React, { PropTypes } from 'react';

const SpecSelectOption = ({ spec }) => (
  <div className="item" data-value={ spec.idSpecs } >
    <div>{ spec.name }</div>
  </div>
);

SpecSelectOption.propTypes = {
  spec: PropTypes.object,
};

export default SpecSelectOption;
