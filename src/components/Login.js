import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authentication';
import classnames from 'classnames';
import {Link} from 'react-router-dom'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.loginUser(user);
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render() {
        const {errors} = this.state;
        return(
            <div className="account-body accountbg">
                {/* Log In page */}
                <div className="row vh-100 bg-city">
                    <div className="col-12 align-self-center">
                        <div className="auth-page">
                            <div className="card auth-card shadow-lg custom-cardnew">
                                <div className="card-body">
                                    <div className="px-3">
                                        <div className="auth-logo-box">
                                            <Link to="/MyWallet" className="logo logo-admin"><img src="./assets/images/logo_codeo.png" height={55} alt="logo" className="auth-logo" /></Link>
                                        </div>{/*end auth-logo-box*/}
                                        <div className="text-center auth-logo-text">
                                            <h4 className="mt-0 mb-3 mt-5">Login</h4>
                                            <p className="text-muted mb-0" />
                                        </div>{/*end auth-logo-text*/}
                                        <form className="form-horizontal auth-form" onSubmit={ this.handleSubmit }>
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <div className="input-group mb-3">
                                                    <span className="auth-form-icon">
                                                                <i className="dripicons-mail" /> 
                                                            </span>
                                                    <input type="text" name="email" className={classnames('form-control frm-new', {'is-invalid': errors.email})} id="email" placeholder="Enter email" onChange={ this.handleInputChange } value={ this.state.email } />
                                                </div>
                                                {errors.email && (<div className="invalid-feedback pesanerror" style={{display:'block !important'}}>{errors.email}</div>)}
                                            </div>{/*end form-group*/}
                                            <div className="form-group">
                                                <label htmlFor="password">Password</label>
                                                <div className="input-group mb-3">
                                                    <span className="auth-form-icon">
                                                                <i className="dripicons-lock" /> 
                                                            </span>
                                                    <input type="password" name="password" className={classnames('form-control frm-new', {'is-invalid': errors.email})} id="password" placeholder="Enter password" onChange={ this.handleInputChange } value={ this.state.password } />
                                                </div>
                                                {errors.password && (<div className="invalid-feedback pesanerror">{errors.password}</div>)}
                                            </div>{/*end form-group*/}
                                            <div className="form-group  mb-0 row mt-4">
                                                <div className="col-sm-12 text-right">
                                                    <Link to="/recover" className="text-muted font-13"><i className="dripicons-lock" /> Forgot password?</Link>
                                                </div>
                                                {/*end col*/}
                                            </div>
                                            {/*end form-group*/}
                                            <div className="form-group mb-0 row mt-3">
                                                <div className="col-12 mt-2" align="center">
                                                    <button className="btn btn-primary btn-round btn-block waves-effect waves-light" type="submit" style={{width: '100%'}}>Login <i className="fas fa-sign-in-alt ml-1" /></button>
                                                </div>{/*end col*/}
                                            </div> {/*end form-group*/} {/*end form*/}
                                        </form>
                                    </div>
                                </div>{/*end /div*/}
                                <div className="account-social text-center">
                                    <h6 className="my-4">Or Login With</h6>
                                    <ul className="list-inline mb-4">
                                        <li className="list-inline-item">
                                            <a href className>
                                                <i className="fab fa-facebook-f facebook" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href className>
                                                <i className="fab fa-twitter twitter" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href className>
                                                <i className="fab fa-google google" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>{/*end card-body*/}
                        </div>{/*end card*/}
                    </div>{/*end auth-page*/}
                    <div align="center" style={{width: '100%'}}>
                        <span align="center">
                            ©2020 Five Angel Investment Limited - BVI
                        </span>
                    </div>
                </div>
                {/*end col*/} 
                {/*end row*/} 
                {/* End Log In page */}
            </div>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export  default connect(mapStateToProps, { loginUser })(Login)