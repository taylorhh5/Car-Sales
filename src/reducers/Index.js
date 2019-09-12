import { ADD_FEATURE} from '../actions/index.js'
import { REMOVE_FEATURE} from '../actions/index.js'
export const initialState = {

    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    store: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]

}


export const carReducer = (state = initialState, action) => {
  console.log (action);
    switch (action.type) {
      
      case ADD_FEATURE:
      console.log('Is the action getting here????');
      return {
        ...state, 
        car: {
          price: state.car.price,
        features: [...state.car.features, action.payload]
        }
        
        //if feature clicked, need to add feature to car
      };
  
      case REMOVE_FEATURE:
      console.log('Is the action getting here????');
      return {
        ...state, 
      
        }
        
        //if feature clicked, need to add feature to car
      
      
  
  
      default:
        return state;
    }
  };