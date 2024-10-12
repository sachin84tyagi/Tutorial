import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Cart from './components/Cart';
import Header from './reusable/Header'
import Footer from './reusable/Footer'
import { Routes, Route } from 'react-router-dom';
function App() {
  return (

    <div className='App'>
      <Header></Header>
      <div className="container">
        <div className="row">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/products' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
