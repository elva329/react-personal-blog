import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import store from './store/index';
import Home from './pages/home';
import Detail from './pages/detail';
class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <div>
            <Header />
            <BrowserRouter>
              <div>
                <Route path="/" exact component={Home}></Route>
                <Route path="/detail" exact component={Detail}></Route>
              </div>
            </BrowserRouter>
          </div>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
