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

function App(){
    return(
        <Provider store = { store }>
            <Router>
                <div className="App">
                    <Route path="/" exact component={MyWallet} />
                    <Route path="/login" component={Login} />
                    <Route path="/Register" component={Register} />
                    <Route path="/recover" component={Recover} />
                    <Route path="/exchange" component={Exchange} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/editprofile" component={Editprofile} />
                    <Route path="/changepassword" component={Changepassword}/>
                </div>
            </Router>
        </Provider>
    )
}

export default App 