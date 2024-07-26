// import React from 'react';
// import './App.css';


// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }

// const product: Product = {
//   id: 1,
//   name: 'Smartphone',
//   price: 499.99,
// };

// const App: React.FC = () => {
//   const handleCancel = () => {
//     alert('Order cancelled!');
//   };

//   return (
//     <div className="App">
//       <div className="header">
//         <h1>E-commerce Website</h1>
//       </div>
//       <div className="content">
//         <h2>{product.name}</h2>
//         <p>Price: ${product.price}</p>
//         <button onClick={handleCancel}>Cancel</button>
//       </div>
//       <div className="footer">
//         <p>&copy; 2024 E-commerce Website</p>
//         <ul>
//           <li><a href="#">Home</a></li>
//           <li><a href="#">Products</a></li>
//           <li><a href="#">Contact Us</a></li>
//           <li><a href="#">About Us</a></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default App;


// App.tsx
// import React from 'react';
// import './App.css';
// import Header from './Header';

// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }

// const product: Product = {
//   id: 1,
//   name: 'Smartphone',
//   price: 499.99,
// };

// const App: React.FC = () => {
//   const handleCancel = () => {
//     alert('Order cancelled!');
//   };

//   return (
//     <div className="App">
//       <Header />
//       <div className="content">
//         <h2>{product.name}</h2>
//         <p>Price: ${product.price}</p>
//         <button onClick={handleCancel}>Cancel</button>
//       </div>
//       <div className="footer">
//         <p>&copy; 2024 E-commerce Website</p>
//       </div>
//     </div>
//   );
// };

// export default App;


// App.tsx
// import React from 'react';
// import './App.css';
// import Header from './Components/Header/Header';


// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }

// const product: Product = {
//   id: 1,
//   name: 'Smartphone',
//   price: 499.99,
// };

// const App: React.FC = () => {
//   const handleCancel = () => {
//     alert('Order cancelled!');
//   };

//   return (
//     <div className="App">
//       <Header />
//       <div className="content">
//         <div className="product-box">
//           <img src="/smartphone.jpg" alt="Smartphone" />
//           <h2>{product.name}</h2>
//           <p>Price: ${product.price}</p>
//           <button onClick={handleCancel}>Cancel</button>
//         </div>
//       </div>
//       <div className="footer">
//         <p>&copy; 2024 E-commerce Website</p>
//       </div>
//     </div>
//   );
// };

// export default App;


// App.tsx
import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

interface Product {
  id: number;
  name: string;
  price: number;

}

const product: Product = {
  id: 1,
  name: 'Smartphone',
  price: 499.99,
};

const App: React.FC = () => {
  const handleCancel = () => {
    alert('Order cancelled!');
  };

  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="product-box">
          <img src="/smartphone.jpg" alt="Smartphone" />
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
