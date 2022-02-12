import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Product.scss';

function Product({ product, putInfoIntoModal, removePopupState }) {
  const { name, image, price, introduction, id, popup } = product;
  const cartBtn = useRef();

  if (popup) {
    setTimeout(() => {
      removePopupState(id);
    }, 2000);
  }

  const navigate = useNavigate();

  const gotoProductDetail = e => {
    if (!cartBtn.current.contains(e.target)) {
      navigate(`product/${id}`);
    }
  };

  return (
    <article className="product" onClick={gotoProductDetail}>
      <div className="imgContainer">
        {popup && <span className="popup">장바구니에 추가되었습니다</span>}
        <img src={image} alt={name} />
        <button
          className="cartBtn"
          ref={cartBtn}
          onClick={() => putInfoIntoModal(product)}
        >
          <AiOutlineShoppingCart />
        </button>
      </div>
      <h3 className="name">{name}</h3>
      <span className="price">{Number(price).toLocaleString()}원</span>
      <span className="information">{introduction}</span>
    </article>
  );
}

export default Product;
