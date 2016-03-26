/* global $*/

import React, { PropTypes } from 'react';
import SpecSelectOption from './SpecSelectOption';

class SpecSelector extends React.Component {
  componentDidMount() {
    $('.specsDropdown').dropdown();
  }
  componentWillReceiveProps() {
    $('.specsDropdown').dropdown();
  }
  render() {
    const dropDownSpecs = this.props.specs.map((spec, idx) => (
      <SpecSelectOption spec={ spec } key={ idx } />
    ));
    return (
      <div className="D(ib)">
        <div className="ui selection dropdown specsDropdown">
          <input type="hidden" id="idSpecs" name="idSpecs" />
          <div className="default text">Specs</div>
          <i className="dropdown icon"></i>
          <div className="menu">
            { dropDownSpecs }
          </div>
        </div>
      </div>
    );
  }
}

SpecSelector.propTypes = {
  specs: PropTypes.array,
};

export default SpecSelector;
