import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Main.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class App extends React.Component {
  render() {
    return(
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}


export default App;

