import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';

class Header extends Component {
    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const authOne = (
            <li className="dropdown notification-list">
                <a className="nav-link dropdown-toggle arrow-none waves-light waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                    <i className="dripicons-bell noti-icon" />
                    <span className="badge badge-danger badge-pill noti-icon-badge">2</span>
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-lg">
                    {/* item*/}
                    <h6 className="dropdown-item-text">
                    Notifications (18)
                </h6>
                    <div className="slimscroll notification-list">
                        {/* item*/}
                        <a href="javascript:void(0);" className="dropdown-item notify-item active">
                            <div className="notify-icon bg-success"><i className="mdi mdi-cart-outline" /></div>
                            <p className="notify-details">Your order is placed<small className="text-muted">Dummy text of the printing and typesetting industry.</small></p>
                        </a>
                        {/* item*/}
                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                            <div className="notify-icon bg-warning"><i className="mdi mdi-message" /></div>
                            <p className="notify-details">New Message received<small className="text-muted">You have 87 unread messages</small></p>
                        </a>
                        {/* item*/}
                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                            <div className="notify-icon bg-info"><i className="mdi mdi-glass-cocktail" /></div>
                            <p className="notify-details">Your item is shipped<small className="text-muted">It is a long established fact that a reader will</small></p>
                        </a>
                        {/* item*/}
                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                            <div className="notify-icon bg-primary"><i className="mdi mdi-cart-outline" /></div>
                            <p className="notify-details">Your order is placed<small className="text-muted">Dummy text of the printing and typesetting industry.</small></p>
                        </a>
                        {/* item*/}
                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                        guestNotificationLinks               <p className="notify-details">New Message received<small className="text-muted">You have 87 unread messages</small></p>
                        </a>
                    </div>
                    {/* All*/}
                    <a href="javascript:void(0);" className="dropdown-item text-center text-primary">
                View all <i className="fi-arrow-right" />
                </a>
                </div>
            </li>
        )

        const guestOne = (
            <span></span>
        )

        const authTwo = (
            <li className="dropdown">
                <a className="nav-link dropdown-toggle waves-effect waves-light nav-user pr-0" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                    <img src="./assets/images/users/user-4.jpg" alt="profile-user" className="rounded-circle" />
                    <span className="ml-1 nav-user-name hidden-sm">{user.name} <i className="mdi mdi-chevron-down" /> </span>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                    <Link className="dropdown-item" to="/profile"><i className="dripicons-user text-muted mr-2" /> Profile</Link>
                    <a className="dropdown-item" href="#"><i className="dripicons-wallet text-muted mr-2" /> My Wallet</a>
                    <a className="dropdown-item" href="#"><i className="dripicons-gear text-muted mr-2" /> Settings</a>
                    {/*<a class="dropdown-item" href="#"><i class="dripicons-lock text-muted mr-2"></i> Lock screen</a>*/}
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#" onClick={this.onLogout.bind(this)}><i className="dripicons-exit text-muted mr-2" /> Logout</a>
                </div>
            </li>
        )

        const guestTwo = (
            <li className="dropdown">
                <a className="nav-link dropdown-toggle waves-effect waves-light nav-user pr-0" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                    <img src="./assets/images/users/user-4.jpg" alt="profile-user" className="rounded-circle" />
                    <span className="ml-1 nav-user-name hidden-sm">Guest <i className="mdi mdi-chevron-down" /> </span>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                    <Link to="/login" className="dropdown-item"><i className="dripicons-user text-muted mr-2" /> Login</Link>
                    <Link to="/" className="dropdown-item"><i className="dripicons-lock text-muted mr-2" /> Register</Link>
                </div>
            </li>
        )

        return (
            <div>
                {/* Top Bar Start */}
                <div className="topbar">
                    {/* Navbar */}
                    <nav className="topbar-main">
                        {/* LOGO */}
                        <div className="topbar-left">
                            <Link to="/MyWallet" className="logo">
                                <span>
                                    <img src="./assets/images/codeoku.png" alt="logo-small" className="logo-sm" />
                                </span>
                                    <span>
                                    <img src="./assets/images/codeo.png" alt="logo-large" className="logo-lg" />
                                </span>
                            </Link>
                        </div>
                        {/*topbar-left*/} {/*end logo*/}
                        <ul className="list-unstyled topbar-nav float-right mb-0">
                            <li className="hidden-sm">
                            <div className="crypto-balance">
                                <div className="btc-balance mr-4">
                                    <h5 className="m-0">CODEO/BTC</h5>
                                    <h6 align="center" style={{margin: 0, marginTop: '3px'}}>0.10 BTC</h6>
                                </div>
                                <div className="btc-balance mr-4">
                                    <h5 className="m-0">CODEO/ETH</h5>
                                    <h6 align="center" style={{margin: 0, marginTop: '3px'}}>0.03 ETH</h6>
                                </div>
                                <div className="btc-balance mr-4">
                                    <h5 className="m-0">CODEO/USD</h5>
                                    <h6 align="center" style={{margin: 0, marginTop: '3px'}}>$0.3</h6>
                                </div>
                            </div>
                            </li>
                            <li className="hidden-sm">
                                <a className="nav-link dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="javascript: void(0);" role="button" aria-haspopup="false" aria-expanded="false">
                                English <img src="./assets/images/flags/us_flag.jpg" className="ml-2" height={16} alt="" /> <i className="mdi mdi-chevron-down" /> 
                            </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="javascript: void(0);"><span> German </span><img src="./assets/images/flags/germany_flag.jpg" alt="" className="ml-2 float-right" height={14} /></a>
                                    <a className="dropdown-item" href="javascript: void(0);"><span> Italian </span><img src="./assets/images/flags/italy_flag.jpg" alt="" className="ml-2 float-right" height={14} /></a>
                                    <a className="dropdown-item" href="javascript: void(0);"><span> French </span><img src="./assets/images/flags/french_flag.jpg" alt="" className="ml-2 float-right" height={14} /></a>
                                    <a className="dropdown-item" href="javascript: void(0);"><span> Spanish </span><img src="./assets/images/flags/spain_flag.jpg" alt="" className="ml-2 float-right" height={14} /></a>
                                    <a className="dropdown-item" href="javascript: void(0);"><span> Russian </span><img src="./assets/images/flags/russia_flag.jpg" alt="" className="ml-2 float-right" height={14} /></a>
                                </div>
                            </li>
                            {/*end li*/}

                            {isAuthenticated ? authOne : guestOne}

                            {isAuthenticated ? authTwo : guestTwo}

                            <li className="menu-item">
                                {/* Mobile menu toggle*/}
                                <a className="navbar-toggle nav-link" id="mobileToggle">
                                    <div className="lines">
                                        <span />
                                        <span />
                                        <span />
                                    </div>
                                </a>
                                {/* End mobile menu toggle*/}
                            </li>
                            {/*end menu item*/}
                        </ul>
                        {/*end topbar-nav*/}
                        <ul className="list-unstyled topbar-nav mb-0">
                        </ul>
                        {/*end topbar-nav*/}
                    </nav>
                    {/* end navbar*/} {/* MENU Start */}
                    <div className="navbar-custom-menu">
                        <div className="container-fluid">
                            <div id="navigation">
                                {/* Navigation Menu*/}
                                <ul className="navigation-menu">
                                    <li className="has-submenu">
                                        <Link to="/">
                                            <i className="dripicons-view-thumb" /><span> Dashboard </span>
                                        </Link>
                                    </li>
                                    <li className="has-submenu">
                                        <Link to="/exchange">
                                            <svg className="nav-svg" version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve">
                                                <g>
                                                    <ellipse className="svg-primary" transform="matrix(0.9998 -1.842767e-02 1.842767e-02 0.9998 -7.7858 3.0205)" cx={160} cy={424} rx={24} ry={24} />
                                                    <ellipse className="svg-primary" transform="matrix(2.381651e-02 -0.9997 0.9997 2.381651e-02 -48.5107 798.282)" cx="384.5" cy={424} rx={24} ry={24} />
                                                    <path d="M463.8,132.2c-0.7-2.4-2.8-4-5.2-4.2L132.9,96.5c-2.8-0.3-6.2-2.1-7.5-4.7c-3.8-7.1-6.2-11.1-12.2-18.6
                                                                c-7.7-9.4-22.2-9.1-48.8-9.3c-9-0.1-16.3,5.2-16.3,14.1c0,8.7,6.9,14.1,15.6,14.1c8.7,0,21.3,0.5,26,1.9c4.7,1.4,8.5,9.1,9.9,15.8
                                                                c0,0.1,0,0.2,0.1,0.3c0.2,1.2,2,10.2,2,10.3l40,211.6c2.4,14.5,7.3,26.5,14.5,35.7c8.4,10.8,19.5,16.2,32.9,16.2h236.6
                                                                c7.6,0,14.1-5.8,14.4-13.4c0.4-8-6-14.6-14-14.6H189h-0.1c-2,0-4.9,0-8.3-2.8c-3.5-3-8.3-9.9-11.5-26l-4.3-23.7
                                                                c0-0.3,0.1-0.5,0.4-0.6l277.7-47c2.6-0.4,4.6-2.5,4.9-5.2l16-115.8C464,134,464,133.1,463.8,132.2z" />
                                                </g>
                                            </svg>
                                            <span> Exchange </span>
                                        </Link>
                                    </li>
                                    {/*end has-submenu*/}
                                    <li className="has-submenu">
                                        <a href="#">
                                            <svg className="nav-svg" version="1.1" id="Layer_5" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve">
                                                <g>
                                                    <path className="svg-primary" d="M376,192h-24v-46.7c0-52.7-42-96.5-94.7-97.3c-53.4-0.7-97.3,42.8-97.3,96v48h-24c-22,0-40,18-40,40v192c0,22,18,40,40,40
                                                                h240c22,0,40-18,40-40V232C416,210,398,192,376,192z M270,316.8v68.8c0,7.5-5.8,14-13.3,14.4c-8,0.4-14.7-6-14.7-14v-69.2
                                                                c-11.5-5.6-19.1-17.8-17.9-31.7c1.4-15.5,14.1-27.9,29.6-29c18.7-1.3,34.3,13.5,34.3,31.9C288,300.7,280.7,311.6,270,316.8z
                                                                    M324,192H188v-48c0-18.1,7.1-35.1,20-48s29.9-20,48-20s35.1,7.1,48,20s20,29.9,20,48V192z" />
                                                </g>
                                            </svg>
                                            <span> Settings </span>
                                        </a>
                                        <ul className="submenu">
                                            <li>
<<<<<<< HEAD
                                                <Link to="/login"><i className="dripicons-enter" />Log In</Link>
                                            </li>
                                            <li>
                                                <Link to="/"><i className="dripicons-pencil" />Register</Link>
                                            </li>
                                            <li>
=======
>>>>>>> 8fb1c3ab820e29a0454a98950880fe56c41e2ce7
                                                <Link to="/recover"><i className="dripicons-clockwise" />Recover Password</Link>
                                            </li>
                                            {/*
                                            <li><a href="authentication/auth-lock-screen.html"><i class="dripicons-lock"></i>Lock Screen</a></li>
                                            <li><a href="authentication/auth-404.html"><i class="dripicons-warning"></i>Error 404</a></li>
                                            <li><a href="authentication/auth-500.html"><i class="dripicons-wrong"></i>Error 500</a></li>*/}
                                        </ul>
                                    </li>
                                    {/*end has-submenu*/}
                                    {/*
                                    <li className="has-submenu">
                                        <a href="#" data-toggle="modal" data-target="#exampleModal">
                                            <span className="fa fa-database" />
                                            <span> Popup </span>
                                        </a>
                                    </li>*/}
                                    {/*end has-submenu*/}
                                </ul>
                                {/* End navigation menu */}
                            </div>
                            {/* end navigation */}
                        </div>
                        {/* end container-fluid */}
                    </div>
                    {/* end navbar-custom */}
                </div>
                {/* Top Bar End */}
            </div>
        );
    }
}

Header.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Header));