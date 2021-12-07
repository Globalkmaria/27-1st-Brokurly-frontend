import React, { useEffect, useState } from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import { AiFillCheckCircle, AiOutlineCheckCircle } from 'react-icons/ai';

import './Item.scss';
import { Link } from 'react-router-dom';

function Item({ item, changeItemQuantity, deleteItem, changeItemCheck }) {
  const { id, image, name, quantity, price, notChecked, itemPackage } = item;
  const [inputValue, setInputValue] = useState(1);

  useEffect(() => setInputValue(quantity), [quantity]);

  const addQuantity = () => {
    if (quantity >= 99) {
      alert('최대 주문 수량은 100개 입니다.');
    }

    changeItemQuantity(id, Number(quantity) + 1, itemPackage);
  };

  const removeQuantity = () => {
    if (quantity <= 1) {
      alert('최소 주문 수량은 1개 입니다.');
      return;
    }

    changeItemQuantity(id, Number(quantity) - 1, itemPackage);
  };

  const changeQuantityByInput = e => {
    const value = e.target.value;
    if (isNaN(value)) return;

    if (value === '0') {
      alert('최소 주문 수량은 1개 입니다.');
      changeItemQuantity(id, 1, itemPackage);
      setInputValue(1);
      return;
    }

    if (value > 100) {
      alert('최대 주문 수량은 100개 입니다.');
      return;
    }

    changeItemQuantity(id, value, itemPackage);
    setInputValue(value);
  };

  const checkMinmumQuantity = e => {
    if (!e.target.value) {
      alert('최소 주문 수량은 1개 입니다.');
      changeItemQuantity(id, 1, itemPackage);
      setInputValue(1);
    }
  };

  return (
    <div className="item">
      <div className="left">
        <button
          className={`checkBtn ${
            !notChecked ? 'checkBtn-green' : 'checkBtn-gray'
          }`}
          onClick={() => changeItemCheck(id, itemPackage)}
        >
          {!notChecked ? <AiFillCheckCircle /> : <AiOutlineCheckCircle />}
        </button>
        <Link to={`/products/${id}`} className="linkToProduct">
          <img className="itemImg" src={`/images/${image}`} alt={name} />
          <span className="name">{name}</span>
        </Link>
      </div>
      <div className="right">
        <div className="changeAmountContainer">
          <button className="changeBtn" onClick={removeQuantity}>
            -
          </button>
          <input
            type="text"
            value={inputValue}
            onChange={changeQuantityByInput}
            onBlur={checkMinmumQuantity}
          />
          <button className="changeBtn" onClick={addQuantity}>
            +
          </button>
        </div>
        <div className="totalPrice">
          {Number(price * quantity).toLocaleString()}원
        </div>
        <button
          className="deleteBtn"
          onClick={() => deleteItem(id, itemPackage)}
        >
          <TiDeleteOutline />
        </button>
      </div>
    </div>
  );
}

export default Item;