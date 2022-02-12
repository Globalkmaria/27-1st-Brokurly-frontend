import React from 'react';
import ContentHeader from './ContentHeader/ContentHeader';
import Products from './Products/Products';
import './ProducListContent';

function ProducListContent({
  products,
  changeSort,
  currentSort,
  putInfoIntoModal,
  removePopupState,
}) {
  return (
    <div className="productListContent">
      <ContentHeader
        changeSort={changeSort}
        currentSort={currentSort}
        productTotal={products.length}
      />
      <Products
        products={products}
        putInfoIntoModal={putInfoIntoModal}
        removePopupState={removePopupState}
      />
    </div>
  );
}

export default ProducListContent;
