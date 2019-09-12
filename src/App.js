import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {carReducer} from './reducers/Index.js'
import { Provider } from 'react-redux';

 // STEP 1 - import createStore, and create a store by passing in a reducer



const App = () => {
  

// STEP 2 - import Provider, wrap the provider component around <App />
// STEP 2a - pass the newly created store into the proivder's store prop
    return (
    
    <div className="boxes">
    
      <div className="box">
        <Header  />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures  />
        <Total  />
      </div>


    </div>
    
  );
};

export default App;
