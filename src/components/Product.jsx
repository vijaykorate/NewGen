import React from 'react';

const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 999,
    image: "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x/pro-headset-gallery-1.png?v=1"
  },
  {
    id: 2,
    name: "GIGABYTE B450M",
    price: 5830,
    image: "https://static.gigabyte.com/StaticFile/Image/Global/3432e2f607b5fd3419d9f3484f5c01c3/Product/25763/Png"
  },
  {
    id: 3,
    name: "Portable Power Bank",
    price: 2109,
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/power-bank-8520085-6741022.png?f=webp"
  },
  {
    id: 4,
    name: "DDR4 RAM",
    price: 1029,
    image: "https://kingspec.usa02.wondercdn.com/uploads/image/20230627/1687831681661728.png"
  },
  {
    id: 5,
    name: "Monitor",
    price: 12999,
    image: "https://media.materiel.net/r900/products/MN0005458504_1.jpg"
  },
  {
    id: 6,
    name: "Smartwatch",
    price: 1199,
    image: "https://www.gonoise.com/cdn/shop/products/1.6_44e4e36e-f762-4c89-b950-700aa320a935.png?v=1681610912"
  },
  {
    id: 7,
    name: "4K Ultra HD Action Camera",
    price: 1060,
    image: "https://5.imimg.com/data5/SELLER/Default/2022/3/AF/GR/HA/12731052/4k-action-camera-ultra-hd-water-resistant-sports-wifi-action-camera-with-2-inch-display.png"
  },
  {
    id: 8,
    name: "Tp-link Router",
    price: 5499,
    image: "https://m.media-amazon.com/images/I/71vxzFprP5L._AC_UF1000,1000_QL80_.jpg"
  },
];

const Product= () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <div key={product.id} className="border rounded-lg p-4 shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md"/>
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-700">Rs.{product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product