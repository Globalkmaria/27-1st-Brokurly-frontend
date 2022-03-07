import React, { useEffect, useState } from 'react';
import OrderDetail from './OrderDetail/OrderDetail';
import './Order.scss';
import API from '../../config';
import Modal from '../../components/Modal/Modal';
import ModalInner from '../../components/ModalInner/ModalInner';

function Order() {
  const [orders, setOrders] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [isCanceledModalOpen, setIsCanceledModalOpen] = useState(false);
  const token = sessionStorage.getItem('token');

  const closeCancelModal = () => setIsCanceledModalOpen(false);
  const openCancelModal = () => setIsCanceledModalOpen(true);

  useEffect(() => {
    fetch(API.orders, {
      headers: {
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(res => {
        setOrders(res.result);
      })
      .catch(e => {
        // eslint-disable-next-line no-console
        console.error(e);
      })
      .finally(() => {
        setLoaded(true);
      });
  }, [token]);

  const changeOrderState = order_id => {
    setOrders(
      orders.map(order =>
        order.order_id === order_id
          ? { ...order, order_status: '주문취소' }
          : order
      )
    );
  };

  return (
    <div className="orderWrapper">
      <div className="orderInner">
        <h2 className="orderPageTitle">주문 내역</h2>
        <div className="orders">
          {!loaded && <h2 className="loading">로딩중...</h2>}

          {loaded && !orders.length ? (
            <h2 className="loading">주문 내역이 없습니다</h2>
          ) : (
            orders.map(order => (
              <OrderDetail
                order={order}
                key={order.order_id}
                changeOrderState={changeOrderState}
                openCancelModal={openCancelModal}
              />
            ))
          )}
        </div>
      </div>
      {isCanceledModalOpen && (
        <Modal closeModal={closeCancelModal}>
          <ModalInner
            closeModal={closeCancelModal}
            text="주문이 취소되었습니다"
          />
        </Modal>
      )}
    </div>
  );
}

export default Order;
