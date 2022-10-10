import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Main.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import data from './assets/data.json';
import SelectedBeast from './SelectedBeast.js';
// import BeastForm from './BeastForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModel: false,
      selectedBeast: {},
      animalsToDisplay: data,
    };
  }

  // loop to show correct beast
  setShowModal = id => {
    if (id !== false) {
      let filteredBeast = data.filter(v => v._id === id);
      this.setState({selectedBeast: filteredBeast[0]});
      this.setstate({showModel: true});
    } else {
      this.setState({showModel: false});
    }
  };

  render() {
    return(
      <>
        <Header />
        <Main data={data} setShowModel={this.setShowModel}/>
        <Footer />
        <SelectedBeast
          showModel={this.state.showModel}
          setShowModel={this.setShowModel}
          selectedBeast={this.state.selectedBeast}/>
      </>
    );
  }
}

export default App;
