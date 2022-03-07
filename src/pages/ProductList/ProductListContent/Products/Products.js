import React from 'react';
import Product from './Product/Product';
import './Products.scss';

function Products({ products, putInfoIntoModal, removePopupState }) {
  return (
    <div className="products">
      {products.map((product, i) => (
        <Product
          product={product}
          putInfoIntoModal={putInfoIntoModal}
          removePopupState={removePopupState}
          key={i}
        />
      ))}
    </div>
  );
}

export default Products;
