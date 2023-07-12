import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './modules/Home';
import Footer from '../src/components/Footer';
import {Routes,Route} from 'react-router-dom';
import Product from './modules/Product';
import Products from './modules/Products';
import CategoryProducts from './modules/CategortProducts';
import Cart from './modules/Cart';

function App() {

  return (
    <div >
      <Header/>
      <Routes>
        <Route path = "/" element = {<Home/>}></Route>   
        <Route path = "/products/:id" element = {<Product/>}></Route>
        <Route path = "/products" element = {<Products/>}></Route>
        <Route path = "/categories/:name" element = {<CategoryProducts/>}></Route>
        <Route path = "Cart" element = {<Cart/>}></Route>
        <Route path = "*" element = {<div>404</div>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
