/* global $*/

import React, { PropTypes } from 'react';
import SpecSelectOption from './SpecSelectOption';

class SpecSelector extends React.Component {
  componentDidMount() {
    $('.ui.dropdown').dropdown();
  }
  render() {
    const dropDownSpecs = this.props.specs.map((spec, idx) => (
      <SpecSelectOption spec={ spec } key={ idx } />
    ));
    return (
      <section>
        <div className="ui dropdown">
          <input type="hidden" name="idSpecs" />
          <div className="default text">Specs</div>
          <div className="menu">
            { dropDownSpecs }
          </div>
        </div>
      </section>
    );
  }
}

SpecSelector.propTypes = {
  specs: PropTypes.array,
};

export default SpecSelector;
