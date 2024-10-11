import React, { useState } from 'react';
import PharmacyHeaderSidebar from '../components/Pharmacy/PharmacyHeaderSidebar';
import { Link } from 'react-router-dom';

function PharmacyDashboardCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Panadol Extra',
      price: 5,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Vitamin C',
      price: 8,
      quantity: 2,
    },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleDelete = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <>
      <PharmacyHeaderSidebar />
      <main className='bg-[#F0F3FB] mt-[60px] z-0 lg:ml-[260px] lg:h-screen'>
        <div className='my-5 mx-3 flex items-center gap-3 text-gray-500'>
          <p className='text-xl md:text-2xl font-semibold'>Medicine Cart</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-5 mx-3 pb-5">
          {/* Cart Items Section */}
          <div className="lg:col-span-2 bg-white p-5 rounded-lg shadow-lg">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-between p-4 border-b space-y-3 sm:space-y-0 sm:space-x-4"
              >
                {/* Product Image */}
                <i className="fa-solid fa-pills text-3xl"></i>

                {/* Product Details */}
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">Rs {item.price.toFixed(2)}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="text-gray-500 bg-gray-200 px-2 py-1 rounded hover:text-gray-900 hover:bg-gray-300 transition"
                  >
                    -
                  </button>
                  <p className="px-3">{item.quantity}</p>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="text-gray-500 bg-gray-200 px-2 py-1 rounded hover:text-gray-900 hover:bg-gray-300 transition"
                  >
                    +
                  </button>
                </div>

                {/* Item Price */}
                <p className="font-semibold">Rs {(item.price * item.quantity).toFixed(2)}</p>

                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            ))}
          </div>


          {/* Summary Section */}
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-4">
              <p>Subtotal</p>
              <p>Rs {calculateTotal()}</p>
            </div>
            <div className="flex justify-between mb-4">
              <p>Shipping</p>
              <p>Rs 0.00</p>
            </div>
            <div className="flex justify-between text-lg font-semibold mb-6">
              <p>Total</p>
              <p>Rs {(parseFloat(calculateTotal()) + 5).toFixed(2)}</p>
            </div>
            <Link to='/pharmacy/pharmacycheckout'>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default PharmacyDashboardCart;