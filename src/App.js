import { Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home'
import Service from './components/Pages/Services'
import Product from './components/Pages/Products'
import Login from './components/Pages/Login';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='services' element={<Service />}></Route>
        <Route path='products' element={<Product />}></Route>
        <Route path='login' element={<Login />}></Route>
      </Routes>
    </>
  );
}

// function Layout() {
//   return (
//     <>
//       <Navbar />
//       <div style={{position: 'absolute', top: '100px'}}>
//           <h2>This is Home Page</h2>
//         </div>
//     </>
//   )
// }
export default App;
