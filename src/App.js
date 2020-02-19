import React, { Component } from 'react';
import MyWallet from './components/MyWallet'
import Exchange from './components/Exchange'
import Login from './components/Login'
import Register from './components/Register'
import Recover from './components/Recover'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';
import store from './store';
import { Provider } from 'react-redux';
import Profile from './components/Profile';
import Editprofile from './components/Editprofile';
import Changepassword from './components/Changepassword';
import PrivateRoute from './PrivateRoute';

if(localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));

    const currentTime = Date.now() / 1000;
    if(decoded.exp < currentTime) {
        store.dispatch(logoutUser());
        window.location.href = '/register'
    }
}

function App(){
    return(
        <Provider store = { store }>
            <Router>
                <div className="App">
                <PrivateRoute path='/' exact={true} component={MyWallet} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/recover" component={Recover} />
                    <PrivateRoute path='/exchange' component={Exchange} />
                    <PrivateRoute path='/profile' component={Profile} />
                    <PrivateRoute path='/editprofile' component={Editprofile} />
                    <PrivateRoute path='/changepassword' component={Changepassword} />
                </div>
            </Router>
        </Provider>
    )
}

export default App 