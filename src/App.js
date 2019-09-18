import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import { store } from "./redux/store";

import Home from "./pages/Home/index";
import Results from "./pages/Results";

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/results" component={Results} />
      </div>
    </Router>
  </Provider>
);

export default App;
