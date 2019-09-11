import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';

const AdditionalFeatures = ({store}) => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {store.length ? (
        <ol type="1">
          {store.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  console.log('mSTP state:', state);
  return {
    
    store:state.store
  
  };
};

export default connect (mapStateToProps, {})(AdditionalFeatures);
