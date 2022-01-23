import React from 'react';
import './App.css';

import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';

class App extends React.Component {
  state = {
    query: '',
    showModal: false,
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  onSubmit = query => {
    this.setState({ query });
  };

  render() {
    const { query, showModal } = this.state;

    return (
      <div className="app-content">
        <SearchBar onSubmit={this.onSubmit} />
        <ImageGallery query={query} />
        {showModal && <Modal>dfgdf</Modal>}
      </div>
    );
  }
}

export default App;
