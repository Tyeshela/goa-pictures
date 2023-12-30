import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Blackmagic Cinema 6K FF Leica ', price: 70, BHPrice: 2595, Cost: 3195.85, GEL: 8618.00, image: 'https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/blackmagic_design_cinema_camera_6k_1694702444_1787634.jpg' },
  { id: 2, name: 'Blackmagic Pocket 6K Pro EF', price: 60, BHPrice: 2535, Cost: 3118.05, GEL: 8418.74, image: 'https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/blackmagic_design_cinecampochdef6kp_pocket_cinema_camera_6k_1613658059_1625642.jpg' },
  { id: 3, name: 'Canon 5D Mark IV DSLR EF', price: 30, BHPrice: 2699, Cost: 3319.77, GEL: 8963.38, image: 'https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/canon_eos_5d_mark_iv_1561852319_1274705.jpg' },
  { id: 4, name: 'LAOWA 24mm T8 2x Probe (PL)', price: 100, BHPrice: 2849, Cost: 3504.27, GEL: 9352.90, image: 'https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/venus_optics_ve2480pl_dv_laowa_pro2be_24mm_t8_1692805554_1782113.jpg' },
  { id: 5, name: 'Canon 24mm f/1.4L II USM', price: 30, BHPrice: 1549, Cost: 1905.27, GEL: 5144.23, image: 'https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/Canon_2750B002_EF_24mm_f_1_4L_II_1516108976_590449.jpg' },
  { id: 6, name: 'Tamron 150-600mm f/5-6.3 G2 VC USD (EF)', price: 30, BHPrice: 1399, Cost: 1720.77, GEL: 4646.08, image: 'https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/tamron_sp_150_600mm_f_5_6_3_di_1472709064_1277358.jpg' },
  { id: 7, name: 'Canon 70-200mm f/2.8L IS II USM (EF)', price: 25, BHPrice: 1098, Cost: 1350.54, GEL: 3646.46, image: 'https://m.media-amazon.com/images/I/71xh1CcUT9L._AC_SX466_.jpg' },
  { id: 8, name: 'Dulens 31mm T2.4 APO Mini (PL)', price: 30, BHPrice: 899, Cost: 1105.77, GEL: 2985.58, image: 'https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/dulens_du_apo_31_apo_mini_prime_31mm_1684337735_1767018.jpg' },
  { id: 9, name: 'Lensbaby Velvet 56mm f/1.6 SE (EF, Silver)', price: 25, BHPrice: 649, Cost: 798.27, GEL: 2155.33, image: 'https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/lensbaby_lbv56ledc_velvet_56_se_for_1666631706_1730944.jpg' },
  { id: 10, name: 'Rokinon 8mm f/3.5 Fisheye (EF)', price: 10, BHPrice: 200, Cost: 246.00, GEL: 664.20, image: 'https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/Rokinon_FE8M_C_8mm_Ultra_Wide_Angle_1649244065_769428.jpg' },
  { id: 11, name: 'Nanlite Forza 500B II LED Monolight', price: 60, BHPrice: 1500, Cost: 1844.99, GEL: 4981.47, image: 'https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/nanlite_forza500bii_forza_500b_ii_led_1673336808_1736660.jpg' },
  { id: 12, name: 'Nanlite Projection 36° (Bowens Mount)', price: 30, BHPrice: 599, Cost: 736.77, GEL: 1989.28, image: 'https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/nanlite_pjbm36_projection_attachment_for_bowens_1695723016_1679010.jpg' },
  { id: 13, name: 'Nanlite MixPad II 27c RGBWW LED Panel', price: 15, BHPrice: 191, Cost: 234.92, GEL: 634.28, image: 'https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/nanlite_mixpadii27c_nanlite_mixpad_ii_27c_1620754534_1639530.jpg' },
  { id: 14, name: 'Nanlite LitoLite 5C RGBWW Mini LED Kit', price: 5, BHPrice: 70, Cost: 86.10, GEL: 232.47, image: 'https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/nanlite_litolite_5c_rgbww_mini_1612952512_1622466.jpg' },
  { id: 15, name: 'Nanlite LumiPad 25 Bi-Color LED Panel', price: 10, BHPrice: 119.15, Cost: 146.55, GEL: 395.69, image: 'https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/nanlite_11_2002_lumipad_25_high_output_1557247816_1476401.jpg' },
  { id: 16, name: 'Nanlite MixPad II 11C RGBWW LED Panel', price: 10, BHPrice: 100, Cost: 123.00, GEL: 332.10, image: 'https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/nanlite_mixpadii11c_nanlite_mixpad_ii_11c_1620754534_1639529.jpg' },
  { id: 17, name: 'Impact 3x C-Stand & 40" Arm Kit + 82 Boom', price: 20, BHPrice: 600, Cost: 738.00, GEL: 1992.60, image: 'https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/impact_3x_c_stand_with_turtle_1611158752_1618393.jpg' },
];

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-xl">
        <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
        <img src={product.image} alt={product.name} className="mx-auto mb-4 rounded-lg h-64 object-cover object-center" />
        <p className="text-gray-600 text-xl mb-4">Daily rent: ${product.price.toFixed(2)}</p>
        <p className="text-gray-600 text-xl mb-4">What is the price on BH?: ${product.BHPrice.toFixed(2)}</p>
        <p className="text-gray-600 text-xl mb-4">What did it cost: ${product.Cost.toFixed(2)}</p>
        <p className="text-gray-600 text-xl mb-4">How much is it in GEL: {product.GEL.toFixed(2)}₾</p>
        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const App = () => {
  const [cart, setCart] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product, quantity = 1) => {
    const productExists = cart.find((item) => item.id === product.id);
    if (productExists) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...productExists, quantity: productExists.quantity + quantity } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(
        cart.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  const emptyCart = () => {
    setCart([]);
  };

  const nextProducts = () => {
    setActiveIndex((prevIndex) => {
      const nextIndex = prevIndex + 3;
      if (nextIndex >= products.length) {
        return 0;
      } else {
        return nextIndex;
      }
    });
  };

  const prevProducts = () => {
    setActiveIndex((prevIndex) => {
      let newIndex = prevIndex - 3;
      if (newIndex < 0) {
        newIndex = products.length - (products.length % 3 === 0 ? 3 : products.length % 3);
      }
      return newIndex;
    });
  };

  const openModalWithProduct = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className='App mx-auto p-8'>
      <h1 className='text-4xl font-bold mb-8 text-center'>GOA Pictures 🎥</h1>
      <div className='relative overflow-hidden mb-8' style={{ height: '480px' }}>
        <div className='whitespace-nowrap transition-transform duration-300 transform translate-x-0' style={{ transform: `translateX(-${activeIndex * 33.3333}%)` }}>
          {products.map((product) => (
            <div key={product.id} className='inline-block w-1/3 px-4'>
              <div className='bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-2xl transition-shadow'>
                <img src={product.image} alt={product.name} className='mx-auto justify-center mb-4 rounded-lg h-64 object-cover object-center cursor-pointer' onClick={() => openModalWithProduct(product)} />
                <h2 className='text-2xl font-semibold mb-2'>{product.name}</h2>
                <p className='text-gray-600 text-xl mb-4'>${product.price.toFixed(2)}</p>
                <button
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 ease-in-out'
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          className='absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 px-6 rounded-full transition-colors duration-300 ease-in-out'
          onClick={prevProducts}
        >
          &#8249; Prev
        </button>
        <button
          className='absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 px-6 rounded-full transition-colors duration-300 ease-in-out'
          onClick={nextProducts}
        >
          Next &#8250;
        </button>
      </div>
      <div className='cart bg-white p-6 rounded-lg shadow-lg'>
        <h2 className='text-3xl font-bold mb-4'>Your Cart</h2>
        {cart.length === 0 ? (
          <p className='text-gray-500 text-xl'>Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.id} className='flex justify-between items-center my-4'>
                <span className='text-xl'>{item.name} x {item.quantity}</span>
                <div>
                  <button className='bg-gray-200 text-gray-800 mx-2 px-4 py-2 rounded-full' onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <button className='bg-gray-200 text-gray-800 mx-2 px-4 py-2 rounded-full' onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  <button className='bg-red-500 text-white mx-2 px-4 py-2 rounded-full' onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
            <div className='flex justify-between items-center mt-6'>
              <span className='text-2xl font-bold'>Total:</span>
              <span className='text-2xl'>${calculateTotal().toFixed(2)}</span>
            </div>
            <button className='bg-red-500 hover:bg-red-600 text-white px-6 py-3 mt-6 rounded-full transition-colors duration-300 ease-in-out float-right' onClick={emptyCart}>Empty Cart</button>
          </div>
        )}
      </div>
      {isModalOpen && <ProductModal product={selectedProduct} onClose={closeModal} />}
    </div>
  );
};

export default App;
