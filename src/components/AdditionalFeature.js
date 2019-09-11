import React from 'react';
import { connect } from 'react-redux';
// import { addFeature } from '../actions.js'

const AdditionalFeature = props => {
 
//   const addFeatures = e => {
// e.preventDefault();
// addFeature(feature)

//   }


  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


export default connect (null, {})(AdditionalFeature);
