import React from 'react';
import { connect } from 'react-redux';
import { addFeatureAC } from '../actions/index.js'

const AdditionalFeature = props => {
 
  const addFeature = e => {
e.preventDefault();
props.addFeatureAC()

  }


  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={addFeature}>Add this</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


export default connect (null, {addFeatureAC})(AdditionalFeature);
