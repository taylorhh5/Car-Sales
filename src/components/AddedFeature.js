import React from 'react';
import { connect } from 'react-redux';
import { removeFeatureAC} from '../actions/index.js'
const AddedFeature = props => {

  // const removeFeature = e => {
  //   e.preventDefault();
  //   props.removeFeatureAC()
    
  //     }


  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={()=> props.removeFeatureAC (props.feature)}>x</button>
      {props.feature.name}
      
    </li>
    
  );
};


export default connect (null, {removeFeatureAC})(AddedFeature);