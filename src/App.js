
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';
import Cart from './components/Cart';
import LandingPage from './components/LandingPage';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import ProductPage from './components/ProductPage';
import products from './components/Product'; // Import the 'products' array from 'product.js'
import AboutUs from './AboutUs'; // Import the 'AboutUs' component
import ContactsUs from './components/ContactUs'; // Import the 'ContactsUs' component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/about-us" component={AboutUs} /> {/* Add AboutUs route */}
          <Route exact path="/contacts" component={ContactsUs} /> {/* Add ContactsUs route */}
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/products">
            {/* Pass the 'products' array as a prop to ProductPage */}
            <ProductPage products={products} />
          </Route>
        </Switch>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;



