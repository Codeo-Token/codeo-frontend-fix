import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../actions/authentication';
import classnames from 'classnames';
import store from '../store';
import { Provider } from 'react-redux';

class Register extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirm: '',
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
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        }
        this.props.registerUser(user, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/login')
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/login');
        }
    }

    render() {
        const { errors } = this.state;
        return(
            <div className="account-body accountbg">
                <div className="row vh-100 bg-city">
                    <div className="col-md-6 hidden-sm align-self-center">
                        <p align="center">
                            <img src="../assets/images/coins/codeoku.png" width="50%" className="hidden-sm" />
                        </p>
                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12 align-self-center">
                        <div className="auth-page ml-10-per">
                            <div className="card auth-card shadow-lg custom-cardnew" style={{marginBottom: 0}}>
                                <div className="card-body">
                                    <div className="px-3">
                                        <div className="auth-logo-box">
                                            <Link to="/" className="logo logo-admin"><img src="../assets/images/logo_codeo.png" height={55} alt="logo" className="auth-logo" /></Link>
                                        </div>
                                        {/*end auth-logo-box*/}
                                        <div className="text-center auth-logo-text">
                                            <h4 className="mt-0 mb-2 mt-4">Register</h4>
                                        </div>
                                        {/*end auth-logo-text*/}
                                        <form className="form-horizontal auth-form my-4" onSubmit={ this.handleSubmit }>
                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <div className="input-group mb-3">
                                                    <span className="auth-form-icon">
                                                        <i className="dripicons-user" /> 
                                                    </span>
                                                    <input type="text" className={classnames('form-control frm-new', {'is-invalid': errors.name})} id="name" placeholder="Enter name" name="name" onChange={ this.handleInputChange } />
                                                </div>
                                                {errors.name && (<div className="invalid-feedback pesanerror">{errors.name}</div>)}
                                            </div>
                                            {/*end form-group*/}
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <div className="input-group mb-3">
                                                    <span className="auth-form-icon">
                                                        <i className="dripicons-mail" /> 
                                                    </span>
                                                    <input type="text" className={classnames('form-control frm-new', {'is-invalid': errors.name})} id="email" placeholder="Enter email" name="email" onChange={ this.handleInputChange } />
                                                </div>
                                                {errors.email && (<div className="invalid-feedback pesanerror">{errors.email}</div>)}
                                            </div>
                                            {/*end form-group*/}
                                            <div className="form-group">
                                                <label htmlFor="password">Password</label>
                                                <div className="input-group mb-3">
                                                    <span className="auth-form-icon">
                                                        <i className="dripicons-lock" /> 
                                                    </span>
                                                    <input type="password" className={classnames('form-control frm-new', {'is-invalid': errors.name})} id="password" placeholder="Enter password" name="password" onChange={ this.handleInputChange } />
                                                </div>
                                                {errors.password && (<div className="invalid-feedback pesanerror">{errors.password}</div>)}
                                            </div>
                                            {/*end form-group*/}
                                            <div className="form-group">
                                                <label htmlFor="password_confirm">Confirm Password</label>
                                                <div className="input-group mb-3">
                                                    <span className="auth-form-icon">
                                                        <i className="dripicons-lock" /> 
                                                    </span>
                                                    <input type="password" className={classnames('form-control frm-new', {'is-invalid': errors.name})} id="password_confirm" placeholder="Enter password" name="password_confirm" onChange={ this.handleInputChange } />
                                                </div>
                                                {errors.password_confirm && (<div className="invalid-feedback pesanerror">{errors.password_confirm}</div>)}
                                            </div>
                                            {/*end form-group*/}
                                            <div class="m-3 text-center text-muted">
                                                <p class="">Already have an account ? <Link to="/login" class="text-primary ml-2">Log in</Link></p>
                                            </div>
                                            {/*end /div*/}
                                            <div className="form-group mb-0 row">
                                                <div className="col-12 mt-2">
                                                    <button className="btn btn-primary btn-round btn-block waves-effect waves-light" type="submit">Register <i className="fas fa-sign-in-alt ml-1" /></button>
                                                </div>
                                                {/*end col*/}
                                            </div>
                                            {/*end form-group*/}
                                        </form>
                                        {/*end form*/}
                                    </div>
                                    <div className="account-social text-center">
                                        <h6 className="my-4">Or Signup With</h6>
                                        <ul className="list-inline">
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
                                    {/*end account-social*/}
                                    <div className="m-3 text-center text-muted" style={{display: 'none'}}>
                                        <p>
                                            <a href="../authentication/auth-register.html" className="text-primary ml-2" />
                                        </p>
                                    </div>
                                </div>
                                {/*end card-body*/}
                            </div>
                            {/*end card*/}
                        </div>
                        {/*end auth-page*/}
                    </div>
                    {/*end col*/}
                    <div align="center" style={{width: '100%'}}>
                        <span align="center">
                            ©2020 Five Angel Investment Limited - BVI
                        </span>
                    </div>
                </div>
                {/*end row*/}
            </div>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps,{ registerUser })(withRouter(Register))