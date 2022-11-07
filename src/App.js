import {
  BrowserRouter as Router,  
  Routes,  
  Route 
} from "react-router-dom";
import './App.css';
import Minimaliste from './components/Minimaliste';
import Catalog from './components/Catalog';
import Payment from './components/Payment';
import Delivery from './components/Delivery';
import Refund from './components/Refund';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import About from "./components/About";
import Cart from "./components/Cart";
import Sign from "./components/Sign";
import ScrollToTop from "./components/ScrollToTop";


function App () {
  return (    
        <Router>
          <ScrollToTop />
          <div className='page-container'>
            <div className='content-wrapper'>
              <Navigation />
              <Routes>
                  <Route path="/" element={<Minimaliste />}></Route>
                  <Route path="/catalog" element={<Catalog />}></Route>
                  <Route path="/payment" element={<Payment />}></Route>
                  <Route path="/delivery" element={<Delivery />}></Route>
                  <Route path="/refund" element={<Refund />}></Route>
                  <Route path="/about" element={<About />}></Route>
                  <Route path="/cart" element={<Cart />}></Route>
                  <Route path="/sign" element={<Sign />}></Route>
              </Routes>
            </div>
          <Footer />
          </div>
        </Router>
  )
}

export default App;