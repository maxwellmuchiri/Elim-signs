import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar' // Adjust the path if needed
import Footer from './components/Footer'; // Adjust the path if needed
import Card from './components/Card';
import Cart from './components/Cart';
import LandingPage from './components/LandingPage';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/card" component={Card} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
export default App;