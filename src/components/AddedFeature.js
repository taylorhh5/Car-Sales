import React from 'react';
import { connect } from 'react-redux';
const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">x</button>
      {props.feature.name}
      
    </li>
    
  );
};


export default connect (null, {})(AddedFeature);