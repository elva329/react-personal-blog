import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './common/header';
import store from './store/index';
class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <Header />
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
