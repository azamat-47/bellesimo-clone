import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'antd';

const Cart: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState<{ id: string; name: string; image: string }[]>([]);

  const loadCartItems = () => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  };

  useEffect(() => {
    loadCartItems();

    const handleStorageChange = () => {
      loadCartItems();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [cartItems]);

  const handleDelete = (id: string) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleBuy = (id: string) => {
    console.log(`Buying item with id: ${id}`);
    // Add your buy logic here
  };

  return (
    <>
      <button onClick={() => setIsModalOpen(true)} className='border rounded-full bg-red-500 text-white px-5 py-2 cursor-pointer'>
         Savatcha | {cartItems.length}
      </button>
      <Modal
        title="Savatcha"
        visible={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {cartItems.map(item => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                border: '1px solid #ddd',
                padding: '0.5rem',
                borderRadius: '5px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} />
                <span>{item.name}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Button type="primary" onClick={() => handleBuy(item.id)}>
                  Buy
                </Button>
                <Button danger onClick={() => handleDelete(item.id)}>
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default Cart;
