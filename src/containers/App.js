import React, { Component } from 'react';
import './App.css';
import ContactUs from "./Contactus/ContactUs"
import {Router, Route, Link} from "react-router-dom";
import AuxTCGenerator from "./AuxTCGenerator"; 
import Grouper from "./Grouper/Grouper";
import NavBar from './Navbar/Navbar';
import { createMuiTheme ,MuiThemeProvider} from '@material-ui/core/styles';
import Home from './Home/Home';
import About from './About/About';
import history from './history'; //a seprate history file


// pre defined material ui theme
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ff9801',
    },
  },
});


class App extends Component {
  render() {
    return (

      <div className="App">
          <MuiThemeProvider theme={theme}>
                  <Router history={history}>
                      <div>
                      <NavBar /> 
                          <Route exact path="/" component={Home} />
                          <Route path="/contactus" component={ContactUs} />
                          <Route path="/grouper" component={Grouper} />
                          <Route path="/about" component={About} />
                      </div>
                  </Router>
          </MuiThemeProvider>
      </div>


    );
  }
}

export default App;
