import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import Routes from "./routes/Routes";
import {Provider} from "react-redux";
import {store} from "../bll/store";

const App = () => {

  return (
      <HashRouter>
        <Provider store={store}>
          <div className="App">
            <Routes/>
          </div>
        </Provider>
      </HashRouter>
  );

};

export default App;
