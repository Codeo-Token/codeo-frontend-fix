import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Changepassword(){
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
                        <li className="breadcrumb-item active">Change Password</li>
                      </ol>{/*end breadcrumb*/}
                    </div>{/*end /div*/}
                    <h4 className="page-title">Change Password</h4>
                  </div>{/*end page-title-box*/}
                </div>{/*end col*/}
              </div>{/*end row*/}
              {/* end page title end breadcrumb */}
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-lg-12" style={{margin: 0, padding: '8px'}}>
                      <div className="card">
                        <div className="card-body col-lg-8 mx-auto">
                          <h3 className="mb-4" align="center">Change Password</h3>
                          <form method="post" className="card-box">
                            <div className="form-group row">
                              <div className="col-md-12">
                                <div className="input-group">
                                  <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-lock" /></span>
                                  </div>
                                  <input type="password" id="example-input1-group1" name="old_password" className="form-control" placeholder="Old Password" />
                                </div>
                              </div>
                            </div>
                            <div className="form-group row">
                              <div className="col-md-12">
                                <div className="input-group">
                                  <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-lock" /></span>
                                  </div>
                                  <input type="password" id="example-input2-group2" name="password" className="form-control" placeholder="Password" />
                                </div>
                              </div>
                            </div>
                            <div className="form-group row">
                              <div className="col-md-12">
                                <div className="input-group">
                                  <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-lock" /></span>
                                  </div>
                                  <input type="password" id="example-input3-group3" name="confirm_password" className="form-control" placeholder="Confirm Password" />
                                </div>
                              </div>
                            </div>
                            <div className="form-group row">
                              <div className="col-md-12">
                                <button className="btn btn-primary btn-sm px-4 mt-3 float-right mb-0">Save Changes</button>
                              </div>
                            </div>
                          </form>
                        </div>                                            
                      </div>
                    </div> {/*end col*/}                                          
                  </div>{/*end row*/}                            
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
                            
export default Changepassword;