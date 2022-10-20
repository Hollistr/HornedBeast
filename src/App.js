import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Main.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import data from './assets/data.json';
import SelectedBeast from './SelectedBeast.js';
import BeastForm from './BeastForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModel: false,
      selectedBeast: {},
      beastsToDisplay: data,
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

  selectTheBeast = (beastTitle) => {
    let aBeast = this.state.beastsToDisplay.find(item => item.title === beastTitle);
    this.setState({selectedBeast: aBeast});
    this.setShowModal();
  }

  filterBeasts = (searchCriteria, searchType) => {
    if (searchType === 'horns') {
      if (searchCriteria === 0) {
        this.setState({
          beastsToDisplay: data.filter(v => v.horns === searchCriteria),
        });
      }
    } else if (searchType === 'discription') {
      if (searchCriteria === '') {
        this.setState({
          beastsToDisplay: data,
        });
      } else {
        this.setState({
          beastsToDisplay: data.filter(v =>
            v.discription.toLowerCase().include(searchCriteria.toLowerCase())
          ),
        });
      }
    } else {
      alert('ERROR')
    }
  };

  render() {
    return(
      <>
        <Header />
        <main>
          <BeastForm filterBeasts={this.filterBeasts} />
          <Main 
            beastsToDisplay={this.state.beastsToDisplay}
            selectTheBeast={this.selectTheBeast}
            setShowModal={this.setShowModel}
          />
        </main>
        <Footer />
        <SelectedBeast
          showModel={this.state.showModel}
          setShowModel={this.setShowModel}
          selectedBeast={this.state.selectedBeast}
          />
      </>
    );
  }
}

export default App;
