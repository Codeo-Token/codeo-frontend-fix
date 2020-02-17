import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom'

function Profile(){
    return (
        <div>
            <Header />

            <div className="page-wrapper">
                {/* Page Content*/}
                <div className="page-content">
                    <div className="container-fluid">
                        {/* Page-Title */}
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="page-title-box">
                                    <div className="float-right">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="javascript:void(0);">Dashboard</a></li>
                                            <li className="breadcrumb-item"><a href="javascript:void(0);">User</a></li>
                                            <li className="breadcrumb-item active">Profile</li>
                                        </ol>{/*end breadcrumb*/}
                                    </div>{/*end /div*/}
                                    <h4 className="page-title">Profile</h4>
                                </div>{/*end page-title-box*/}
                            </div>{/*end col*/}
                        </div>{/*end row*/} {/* end page title end breadcrumb */}
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body met-pro-bg">
                                        <div className="met-profile">
                                            <div className="row">
                                                <div className="col-lg-6 align-self-center mb-3 mb-lg-0">
                                                    <div className="met-profile-main">
                                                        <div className="met-profile-main-pic">
                                                            <img src="./assets/images/picture1.jpg" alt="" className="rounded-circle" width="128px" />
                                                            <span className="fro-profile_main-pic-change">
                                                                                <i className="fas fa-camera" />
                                                                            </span>
                                                        </div>
                                                        <div className="met-profile_user-detail">
                                                            <h5 className="met-user-name" style={{float: 'left'}}>Ivan Juliant </h5><span className="badge badge-success" style={{marginTop: '15px', marginLeft: '10px'}}><i className="fa fa-check" /> Verified</span>
                                                            <br />
                                                            <br />
                                                            <p className="mb-0 met-user-name-post" style={{float: 'left'}}>
                                                                <label style={{float: 'left', width: '60px'}} className="mb-0">Email</label> : ivanjuliant30@gmail.com</p>
                                                            <br />
                                                            <p className="mb-0 met-user-name-post" style={{float: 'left'}}>
                                                                <label style={{float: 'left', width: '60px'}} className="mb-0">Country</label> : Indonesia</p>
                                                        </div>
                                                    </div>
                                                </div>{/*end col*/}
                                                <div className="col-lg-6">
                                                    <div className="mt-5" style={{float: 'right'}}>
                                                        <Link className="btn btn-warning" to="/editprofile">
                                                            <i className="fa fa-edit" /> Edit Data
                                                        </Link>
                                                        <Link className="btn btn-success ml-2" to="/changepassword">
                                                            <i className="fa fa-edit" /> Change Password
                                                        </Link>
                                                    </div>
                                                </div>{/*end col*/}
                                            </div>{/*end row*/}
                                        </div>{/*end f_profile*/}
                                    </div>{/*end card-body*/}
                                    <div className="card-body">
                                        <ul className="nav nav-pills mb-0" id="pills-tab" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="summary_detail_tab" data-toggle="pill" href="#summary_detail">Summary</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="general_detail_tab" data-toggle="pill" href="#general_detail">KYC Document</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="financial_detail_tab" data-toggle="pill" href="#financial_detail">Financial &amp; Bank</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="fa_detail_tab" data-toggle="pill" href="#fa_detail">2 FA</a>
                                            </li>
                                        </ul>
                                    </div>{/*end card-body*/}
                                </div>{/*end card*/}
                            </div>{/*end col*/}
                        </div>{/*end row*/}
                        <div className="row">
                            <div className="col-12">
                                <div className="tab-content detail-list" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="summary_detail">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h4 className="header-title mt-0 mb-3">Log History</h4>
                                                        <div className="slimscroll education-activity">
                                                            <div className="activity">
                                                                <i className="mdi mdi-school icon-success" />
                                                                <div className="time-item">
                                                                    <div className="item-info">
                                                                        <div className="d-flex justify-content-between align-items-center">
                                                                            <h6 className="m-0">University</h6>
                                                                            <span className="text-muted">Oct-2009 to Oct-2011</span>
                                                                        </div>
                                                                        <p className="text-muted mt-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                                                                            <a href="#" className="text-info">[more info]</a>
                                                                        </p>
                                                                        <div>
                                                                            <span className="badge badge-soft-secondary">Design</span>
                                                                            <span className="badge badge-soft-secondary">HTML</span>
                                                                            <span className="badge badge-soft-secondary">Css</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <i className="mdi mdi-medal icon-pink" />
                                                                <div className="time-item">
                                                                    <div className="item-info">
                                                                        <div className="d-flex justify-content-between align-items-center">
                                                                            <h6 className="m-0">Bachelor of Arts</h6>
                                                                            <span className="text-muted">Oct-2006 to Oct-209</span>
                                                                        </div>
                                                                        <p className="text-muted mt-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                                                                            <a href="#" className="text-info">[more info]</a>
                                                                        </p>
                                                                        <div>
                                                                            <span className="badge badge-soft-secondary">Python</span>
                                                                            <span className="badge badge-soft-secondary">Django</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <i className="mdi mdi-book-open-page-variant icon-purple" />
                                                                <div className="time-item">
                                                                    <div className="item-info">
                                                                        <div className="d-flex justify-content-between align-items-center">
                                                                            <h6 className="m-0">Secondary</h6>
                                                                            <span className="text-muted">Oct-2003 to Oct-2006</span>
                                                                        </div>
                                                                        <p className="text-muted mt-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                                                                            <a href="#" className="text-info">[more info]</a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <i className="mdi mdi-lead-pencil icon-warning" />
                                                                <div className="time-item">
                                                                    <div className="item-info">
                                                                        <div className="d-flex justify-content-between align-items-center">
                                                                            <h6 className="m-0">Primary</h6>
                                                                            <span className="text-muted">Oct-1996 to Oct-2003</span>
                                                                        </div>
                                                                        <p className="text-muted mt-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                                                                            <a href="#" className="text-info">[more info]</a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>{/*end activity*/}
                                                        </div>{/*end education-activity*/}
                                                    </div> {/*end card-body*/}
                                                </div>{/*end card*/}
                                            </div>{/*end col*/}
                                            <div className="col-lg-8">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h4 className="header-title mt-0 mb-3">Summary</h4>
                                                        <div className="row mb-5">
                                                            <div className="col-md-6">
                                                                <h5 align="center">Bank Account</h5>
                                                                <div style={{border: '1px dashed #FFF', padding: '10px'}}>
                                                                    <dl className="row mb-0">
                                                                        <dt className="col-md-5">Bank Name</dt>
                                                                        <dd className="col-md-7">: BCA (Bank Central Asia).</dd>
                                                                        <dt className="col-md-5">Swift Code</dt>
                                                                        <dd className="col-md-7">: CENAIDJA</dd>
                                                                        <dt className="col-md-5">Account Name</dt>
                                                                        <dd className="col-md-7">: Ivan Juliant</dd>
                                                                        <dt className="col-md-5">Account Number</dt>
                                                                        <dd className="col-md-7">: 7300247657</dd>
                                                                        <dt className="col-md-5">Country</dt>
                                                                        <dd className="col-md-7 mb-0">: Indonesia</dd>
                                                                    </dl>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h5 align="center">Credit Card</h5>
                                                                <p align="center" className="mb-0 mt-5">
                                                                    <button type="button" className="btn btn-xl btn-primary btn-round waves-effect waves-light"><i className="mdi mdi-credit-card-plus mr-2" />Add Credit Card</button>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="row mb-4">
                                                            <div className="col-md-6">
                                                                <h5 align="center">Crypto / Digital Asset</h5>
                                                                <p align="center" className="mb-0">
                                                                    <button type="button" className="btn btn-xl btn-success btn-round waves-effect waves-light"><i className="mdi mdi-credit-card-plus mr-2" />Add Crypto / Digital Asset</button>
                                                                </p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h5 align="center">2 FA</h5>
                                                                <p align="center" className="mb-0">
                                                                    <button type="button" className="btn btn-xl btn-danger btn-round waves-effect waves-light"><i className="mdi mdi-lock-plus mr-2" />Create 2 FA</button>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>{/*end card-body*/}
                                                </div>{/*end card*/}
                                            </div>{/*end col*/}
                                        </div>{/*end row*/}
                                    </div>{/*end education detail*/}
                                    <div className="tab-pane fade" id="general_detail">
                                        <div className="row">
                                            <div className="col-lg-12" style={{margin: 0, padding: '8px'}}>
                                                <div className="card">
                                                    <div className="card-body col-lg-8 mx-auto">
                                                        <h3 className="mb-4" align="center">KYC Document</h3>
                                                        <form method="post" className="card-box">
                                                            <div className="form-group row">
                                                                <div className="col-md-6">
                                                                    <div className="input-group">
                                                                        <div className="input-group-prepend">
                                                                            <span className="input-group-text"><i className="far fa-user" /></span>
                                                                        </div>
                                                                        <input type="text" id="example-input1-group1" name="id_ic_number" className="form-control" placeholder="ID/IC Number" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <select className="form-control">
                                                                        <option value>Document Type</option>
                                                                        <option value={1}>ID/IC</option>
                                                                        <option value={2}>Driver License</option>
                                                                        <option value={3}>Passport</option>
                                                                        <option value={4}>Other</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-md-6">
                                                                    <select className="form-control">
                                                                        <option value>Country Issued</option>
                                                                        <option value={1}>WNI</option>
                                                                        <option value={2}>WNA</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="custom-file">
                                                                        <input type="file" className="custom-file-input" id="customFile" />
                                                                        <label className="custom-file-label" htmlFor="customFile">Upload Document</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-md-4">
                                                                    <input type="text" placeholder="HOME ADDRESS" className="form-control" />
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <input type="text" placeholder="CITY" className="form-control" />
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <input type="text" placeholder="ZIP" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-md-6">
                                                                    <div className="input-group">
                                                                        <div className="input-group-prepend">
                                                                            <span className="input-group-text"><i className="fa fa-phone" /></span>
                                                                        </div>
                                                                        <input type="text" id="example-input2-group2" name="phone_1" className="form-control" placeholder="Phone Number 1" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="input-group">
                                                                        <div className="input-group-prepend">
                                                                            <span className="input-group-text"><i className="fa fa-phone" /></span>
                                                                        </div>
                                                                        <input type="text" id="example-input3-group3" name="phone_2" className="form-control" placeholder="Phone Number 2 (Optional)" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-md-12">
                                                                    <button className="btn btn-primary btn-sm px-4 mt-3 float-right mb-0">Submit KYC</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div> {/*end col*/}
                                        </div>{/*end row*/}
                                    </div>{/*end general detail*/}
                                    <div className="tab-pane fade" id="financial_detail">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h4 className="header-title mt-0 mb-3">Financial &amp; Bank</h4>
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <div className="accordion" id="accordionExample">
                                                                    <div className="card border mb-0 shadow-none">
                                                                        <div className="card-header p-0" id="headingOne">
                                                                            <h5 style={{margin: '15px'}}>
                                                                                        <label style={{color: '#FFF', width: '100%'}} className="mb-0">
                                                                                        <input type="radio" id="r11" name="occupation" defaultValue={1} required className="btn btn-link text-dark collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" /> Bank Account <img src="../assets/images/bank/bca.png" width="30px" /> <img src="../assets/images/bank/mandiri.png" width="30px" />
                                                                                        </label>
                                                                                    </h5>
                                                                        </div>
                                                                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                                            <div className="card-body col-lg-6 mx-auto">
                                                                                <p className="mb-0 text-muted">
                                                                                </p>
                                                                                <h3 align="center">Bank Account</h3>
                                                                                <form method="post" className="card-box">
                                                                                    <div className="form-group row">
                                                                                        <div className="col-md-4">
                                                                                            <div className="input-group">
                                                                                                <div className="input-group-prepend">
                                                                                                    <span className="input-group-text"><i className="far fa-credit-card" /></span>
                                                                                                </div>
                                                                                                <input type="text" id="example-input1-group1" name="bank_name" className="form-control" placeholder="Bank Name" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-md-4">
                                                                                            <select className="form-control">
                                                                                                <option value>Country</option>
                                                                                                <option value={1}>Indonesia</option>
                                                                                                <option value={2}>Singapore</option>
                                                                                                <option value={3}>Malaysia</option>
                                                                                                <option value={4}>Thailand</option>
                                                                                            </select>
                                                                                        </div>
                                                                                        <div className="col-md-4">
                                                                                            <input type="text" placeholder="Swift Code" className="form-control" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="form-group row">
                                                                                        <div className="col-md-6">
                                                                                            <div className="input-group">
                                                                                                <div className="input-group-prepend">
                                                                                                    <span className="input-group-text"><i className="far fa-user" /></span>
                                                                                                </div>
                                                                                                <input type="text" id="example-input2-group2" name="account_holder_name" className="form-control" placeholder="Account Holder Name" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-md-6">
                                                                                            <input type="text" placeholder="Account Number" className="form-control" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="form-group row">
                                                                                        <div className="col-md-12">
                                                                                            <button className="btn btn-primary btn-sm px-4 mt-3 float-right mb-0">Save Changes</button>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                                <p />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card mb-0 border shadow-none">
                                                                        <div className="card-header p-0" id="headingTwo">
                                                                            <h5 style={{margin: '15px'}}>
                                                                                        <label style={{color: '#FFF', width: '100%'}} className="mb-0">
                                                                                        <input type="radio" id="r11" name="occupation" defaultValue={1} required className="btn btn-link text-dark collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseOne" /> Credit Card <img src="../assets/images/bank/mastercard.png" width="30px" /> <img src="../assets/images/bank/visa.png" width="30px" />
                                                                                        </label>
                                                                                    </h5>
                                                                        </div>
                                                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                                            <div className="card-body col-lg-6 mx-auto">
                                                                                <p className="mb-0 text-muted">
                                                                                </p>
                                                                                <h3 align="center">Credit Card</h3>
                                                                                <form method="post" className="card-box bill-form">
                                                                                    <div className="card-wrapper mb-4" />
                                                                                    <div className="form-group row">
                                                                                        <div className="col-md-6">
                                                                                            <div className="input-group">
                                                                                                <div className="input-group-prepend">
                                                                                                    <span className="input-group-text"><i className="far fa-user" /></span>
                                                                                                </div>
                                                                                                <input type="text" id="example-input1-group1" name="name" className="form-control" placeholder="Name" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-md-6">
                                                                                            <div className="input-group">
                                                                                                <div className="input-group-prepend">
                                                                                                    <span className="input-group-text"><i className="far fa-user" /></span>
                                                                                                </div>
                                                                                                <input type="text" id="example-input2-group2" name="surname" className="form-control" placeholder="Surname" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="form-group row">
                                                                                        <div className="col-md-12">
                                                                                            <div className="input-group">
                                                                                                <input type="email" id="example-input3-group3" name="credit_card" className="form-control" placeholder="Credit Card Number" />
                                                                                                <div className="input-group-append">
                                                                                                    <span className="input-group-text"><i className="fab fa-cc-visa" /></span>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="form-group row">
                                                                                        <div className="col-md-6">
                                                                                            <input type="text" placeholder="Exp Date" className="form-control" />
                                                                                        </div>
                                                                                        <div className="col-md-6">
                                                                                            <input type="number" placeholder="CVC" className="form-control" name="cvc" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="form-group row">
                                                                                        <div className="col-md-12">
                                                                                            <button className="btn btn-primary btn-sm px-4 float-right mb-0">Save Changes</button>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                                <p />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card mb-0 border shadow-none">
                                                                        <div className="card-header p-0" id="headingThree">
                                                                            <h5 style={{margin: '15px'}}>
                                                                                        <label style={{color: '#FFF', width: '100%'}} className="mb-0">
                                                                                        <input type="radio" id="r11" name="occupation" defaultValue={1} required className="btn btn-link text-dark collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseOne" /> Crypto / Digital Asset  <img src="../assets/images/bank/bitcoin.png" width="20px" />  <img src="../assets/images/bank/paypal.png" width="20px" />  <img src="../assets/images/bank/ethereum.png" width="20px" />
                                                                                        </label>
                                                                                    </h5>
                                                                        </div>
                                                                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                                            <div className="card-body col-lg-6 mx-auto">
                                                                                <p className="mb-0 text-muted">
                                                                                </p>
                                                                                <h3 align="center">Crypto / Digital Asset</h3>
                                                                                <form method="post" className="card-box">
                                                                                    <div className="form-group row">
                                                                                        <div className="col-md-12">
                                                                                            <div className="input-group">
                                                                                                <div className="input-group-prepend">
                                                                                                    <span className="input-group-text"><i className="far fa-user" /></span>
                                                                                                </div>
                                                                                                <input type="text" id="example-input4-group4" name="bitcoin" className="form-control" placeholder="Paypal Email" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="form-group row">
                                                                                        <div className="col-md-12">
                                                                                            <div className="input-group">
                                                                                                <div className="input-group-prepend">
                                                                                                    <span className="input-group-text"><i className="far fa-user" /></span>
                                                                                                </div>
                                                                                                <input type="text" id="example-input4-group4" name="bitcoin" className="form-control" placeholder="Address Bitcoin" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="form-group row">
                                                                                        <div className="col-md-12">
                                                                                            <div className="input-group">
                                                                                                <div className="input-group-prepend">
                                                                                                    <span className="input-group-text"><i className="far fa-user" /></span>
                                                                                                </div>
                                                                                                <input type="text" id="example-input4-group4" name="bitcoin" className="form-control" placeholder="Address Ethereum" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="form-group row">
                                                                                        <div className="col-md-12">
                                                                                            <button className="btn btn-primary btn-sm px-4 mt-3 float-right mb-0">Save Changes</button>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                                <p />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>{/*end card-body*/}
                                                        </div>
                                                    </div>{/*end card-body*/}
                                                </div>{/*end card*/}
                                            </div>{/*end col*/}
                                        </div>{/*end row*/}
                                    </div>{/*end education detail*/}
                                    <div className="tab-pane fade" id="fa_detail">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <ul className="col container-filter categories-filter mb-0" id="filter">
                                                                <li><a className="categories active" data-filter="*">STEP 1</a></li>
                                                                <li><a className="categories" data-filter=".branding">STEP 2</a></li>
                                                                <li><a className="categories" data-filter=".design">STEP 3</a></li>
                                                                <li><a className="categories" data-filter=".photo">FINISH</a></li>
                                                            </ul>
                                                        </div>{/* End portfolio */}
                                                    </div>{/*end card-body*/}
                                                </div>{/*end card*/}
                                                <div className="card">
                                                    <div className="card-body">
                                                    </div>{/*end card-body*/}
                                                </div>{/*end card*/}
                                            </div>{/*end col*/}
                                        </div>{/*end row*/}
                                    </div>{/*end fa detail */}
                                </div>{/*end tab-content*/}
                            </div>{/*end col*/}
                        </div>{/*end row*/}
                    </div>{/* container */}
                </div>
                {/* end page content */}
                <Footer/>
            </div>
            {/* end page-wrapper */}
        </div>
    );
}

export default Profile;
