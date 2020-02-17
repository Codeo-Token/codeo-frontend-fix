import React from 'react'
import Header from './Header'
import Footer from './Footer'

function MyWallet(){
    return (
        <div>
            <Header />
            <div className="page-wrapper">
                {/* Page Content*/}
                <div className="page-content">
                    <div className="container-fluid">
                        {/* Page-Title */}
                        <div className="row">
                            <div className="col-lg-7 mt-4">
                                <div className="card card-new-op">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h3>Wallet Transfer</h3>
                                                <form className="form-horizontal">
                                                    <div className="form-group mb-0">
                                                        <div className="box-result-cod col-md-12 mt-3">
                                                            <div className="row">
                                                                <div className="col-md-5 barcodeQR mt-2 mb-2">
                                                                    <img src="./assets/images/QRbarcode.png" width="100%" />
                                                                </div>
                                                                <div className="col-md-7 mt-1">
                                                                    <h5>Address</h5>
                                                                    <h4 className="mb-2">0x3456789765485728754586 <button className="btn btn-success btn-xs btn-silver-cus">Generate</button> <button className="btn btn-primary btn-xs btn-silver-cus">Copy</button></h4>
                                                                    <h5>Balance</h5>
                                                                    <h3 className="mb-2">0000 CODEO</h3>
                                                                    <h5>Asset Estimation</h5>
                                                                    <h3 className="mb-2">$0000</h3>
                                                                    <button className="btn btn-warning full-right btn-orange-dark">Topup</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*end form-group*/}
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    {/*end card-body*/}
                                </div>
                                {/*end card*/}
                            </div>
                            {/*end col*/}
                            <div className="col-lg-5 mt-4">
                                <div className="card card-new-op">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12">
                                                <h3>Transfer Balance</h3>
                                                <form className="form-horizontal">
                                                    <div className="form-group mb-0">
                                                        <label className="full-left">Receiver</label>
                                                        <div className="input-group mt-3">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text bg-light" id="basic-addon1">Address</span>
                                                            </div>
                                                            <input type="text" className="form-control" placeholder="0-X" aria-label="Address" aria-describedby="basic-addon1" />
                                                        </div>
                                                        <br />
                                                        <label className="full-left">Amount</label>
                                                        <div className="input-group mt-3">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text bg-light" id="basic-addon1">Codeo</span>
                                                            </div>
                                                            <input type="text" className="form-control" placeholder="CODEO" aria-label="CODEO" aria-describedby="basic-addon1" />
                                                            <div className="input-group-append">
                                                                <span className="input-group-text bg-light" id="basic-addon2">0.30% Fee</span>
                                                            </div>
                                                        </div>
                                                        <div className="box-result-cod mt-3">
                                                            <span>The Receive Will Get 9.8 CODEO</span>
                                                        </div>
                                                        <div className="mt-3 ml-auto" align="right">
                                                            <a href="#" className="btn btn-success btn-sm btn-green-cus">SEND NOW</a>
                                                        </div>
                                                    </div>
                                                    {/*end form-group*/}
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    {/*end card-body*/}
                                </div>
                                {/*end card*/}
                            </div>
                            {/*end col*/}
                        </div>{/* End row */}
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="header-title mt-0 mb-3">Transaction History</h4>
                                        <div className="table-responsive dash-social">
                                            <table id="datatable" className="table table-bordered">
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th>No</th>
                                                        <th>Date</th>
                                                        <th>Time</th>
                                                        <th>Transaction ID</th>
                                                        <th>Type</th>
                                                        <th>Value</th>
                                                    </tr>
                                                    {/*end tr*/}
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>14 Jan 2019</td>
                                                        <td>12:05PM</td>
                                                        <td>0001245368452136</td>
                                                        <td><span className="badge badge-soft-danger">Sent</span></td>
                                                        <td>$521.36</td>
                                                    </tr>
                                                    {/*end tr*/}
                                                    <tr>
                                                        <td>02</td>
                                                        <td>13 Jan 2019</td>
                                                        <td>10:15AM</td>
                                                        <td>0012369584712458</td>
                                                        <td><span className="badge badge-soft-success">Received</span></td>
                                                        <td>$990.00</td>
                                                    </tr>
                                                    {/*end tr*/}
                                                    <tr>
                                                        <td>03</td>
                                                        <td>11 Jan 2019</td>
                                                        <td>09:14PM</td>
                                                        <td>0012457896321548</td>
                                                        <td><span className="badge badge-soft-danger">Sent</span></td>
                                                        <td>$321.21</td>
                                                    </tr>
                                                    {/*end tr*/}
                                                    <tr>
                                                        <td>04</td>
                                                        <td>08 Jan 2019</td>
                                                        <td>12:05PM</td>
                                                        <td>0126582125487896</td>
                                                        <td><span className="badge badge-soft-success">Received</span></td>
                                                        <td>$321.21</td>
                                                    </tr>
                                                    {/*end tr*/}
                                                    <tr>
                                                        <td>05</td>
                                                        <td>06 Jan 2019</td>
                                                        <td>11:30AM</td>
                                                        <td>0125896312345878</td>
                                                        <td><span className="badge badge-soft-danger">Sent</span></td>
                                                        <td>$458.80</td>
                                                    </tr>
                                                    {/*end tr*/}
                                                    <tr>
                                                        <td>06</td>
                                                        <td>05 Jan 2019</td>
                                                        <td>05:50PM</td>
                                                        <td>0001245863254874</td>
                                                        <td><span className="badge badge-soft-success">Received</span></td>
                                                        <td>125.50</td>
                                                    </tr>
                                                    {/*end tr*/}
                                                    <tr>
                                                        <td>07</td>
                                                        <td>04 Jan 2019</td>
                                                        <td>08:10PM</td>
                                                        <td>0000021253698745</td>
                                                        <td><span className="badge badge-soft-danger">Sent</span></td>
                                                        <td>$365.21</td>
                                                    </tr>
                                                    {/*end tr*/}
                                                    <tr>
                                                        <td>08</td>
                                                        <td>03 Jan 2019</td>
                                                        <td>01:30PM</td>
                                                        <td>0000212125487963</td>
                                                        <td><span className="badge badge-soft-success">Received</span></td>
                                                        <td>$843.21</td>
                                                    </tr>
                                                    {/*end tr*/}
                                                    <tr>
                                                        <td>09</td>
                                                        <td>03 Jan 2019</td>
                                                        <td>12:05PM</td>
                                                        <td>0124563985478456</td>
                                                        <td><span className="badge badge-soft-danger">Sent</span></td>
                                                        <td>$335.15</td>
                                                    </tr>
                                                    {/*end tr*/}
                                                    <tr>
                                                        <td>10</td>
                                                        <td>02 Jan 2019</td>
                                                        <td>03:15PM</td>
                                                        <td>0125896325483658</td>
                                                        <td><span className="badge badge-soft-success">Received</span></td>
                                                        <td>$554.50</td>
                                                    </tr>
                                                    {/*end tr*/}
                                                    <tr>
                                                        <td>11</td>
                                                        <td>01 Jan 2019</td>
                                                        <td>10:05AM</td>
                                                        <td>0013256548745123</td>
                                                        <td><span className="badge badge-soft-danger">Sent</span></td>
                                                        <td>$225.25</td>
                                                    </tr>
                                                    {/*end tr*/}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    {/*end card-body*/}
                                </div>
                                {/*end card*/}
                            </div>
                            {/*end col*/}
                        </div>
                        {/*end row*/}
                    </div>{/* container */}
                </div>
                {/* end page content */}
            </div>
            <Footer />
        </div>
    );
}

export default MyWallet;