import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Main.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import data from './data.json.url';
import SelectedBeast from './SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModel: false,
      selectedBeast: {},
    };
  }

  // loop to show correct beast
  setShowModal = id => {
    if (id !== false) {
      let filteredBeast = data.filter(v => v._id === id);
      this.setState({selectedBeast: filteredBeast[0]});
      this.state({showModel: true});
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
        <
          showModel={this.state.showModel}
          setShowModel={this.setShowModel}
          selectedAnimal={this.state.selectedBeast}
      </>
    );
  }
}


export default App;
