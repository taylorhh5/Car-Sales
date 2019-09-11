import React from 'react';
import { connect } from 'react-redux';


const Header = ({name, image, price}) => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={image} alt={name} />
      </figure>
      <h2>{name}</h2>
      <p>Amount: ${price}</p>
    </>
  );
};


const mapStateToProps = state => {
  console.log('mSTP state:', state);
  return {
    image: state.car.image,
   name: state.car.name,
   price: state.car.price
  };
};

export default connect (mapStateToProps, {})(Header);