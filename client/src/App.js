import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { loginUserSuccess, logoutUserSuccess } from './actions/authActions';
import Navbar from './components/layout/Navbar.container';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing.container';
import Register from './components/auth/Register.container';
import Login from './components/auth/Login.container';
import Dashboard from './components/dashboard/Dashboard.container';
import CreateProfile from './components/create-profile/Create-Profile.container';
import EditProfile from './components/edit-profile/Edit-Profile.container';
import AddExperience from './components/add-credentials/AddExperience.container';
import AddEducation from './components/add-credentials/AddEducation.container';
import Profiles from './components/profiles/Profiles.container';
import Profile from './components/profile/Profile.container';
import NotFound from './components/not-found/NotFound';
import store from './store/store';

import './App.css';
import { clearCurrentProfile } from './actions/profileActions';
import PrivateRoute from './components/common/PrivateRoute';

// check from token
if(localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  //Set user and isAuthenticated
  store.dispatch(clearCurrentProfile());
  store.dispatch(loginUserSuccess(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUserSuccess());
    // Clear current profile
    // Redirect to login
    window.location.href ='/login'
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/profile/:handle" component={Profile} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/create-profile" component={CreateProfile} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/edit-profile" component={EditProfile} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/add-experience" component={AddExperience} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/add-education" component={AddEducation} />
              </Switch>
              <Route exact path="/not-found" component={NotFound} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
