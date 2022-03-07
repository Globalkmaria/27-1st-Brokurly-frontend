import React from 'react';
import './ProductListHeader.scss';

function ProductListHeader({ productMenu, currentCategory, changeCategory }) {
  const { menuName, categories } = productMenu;

  return (
    <div className="productListHeader">
      <h2 className="menuName">{menuName}</h2>
      <div className="categories">
        {categories.map((category, i) => (
          <button
            className={`category ${
              currentCategory === i ? 'category-checked' : ''
            }`}
            key={i}
            onClick={() => changeCategory(i, categories[i])}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductListHeader;
