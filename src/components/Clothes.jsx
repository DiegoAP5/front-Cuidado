import React from 'react';
import ClothesList from './ClothesList';

const clothes = [
  {
    id: 1,
    name: 'Camisa',
    description: 'Camisa de algodón con botones',
    price: 25.99,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Pantalón',
    description: 'Pantalón de mezclilla para hombre',
    price: 39.99,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    name: 'Vestido',
    description: 'Vestido de verano con estampado floral',
    price: 49.99,
    image: 'https://via.placeholder.com/150'
  }
];

const Clothes = () => {
  return (
    <div className="container">
      <ClothesList clothes={clothes} />
    </div>
  );
};

export default Clothes;
