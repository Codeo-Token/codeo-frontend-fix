import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Exchange(){
    return (
        <div>
            <Header />
            <div className="page-wrapper">
                {/* Page Content*/}
                <div className="page-content">
                    <div className="container-fluid">
                        <h1 align="center" className="comsun">COMING SOON</h1>
                        <div className="coming-soon">
                            {/* Page-Title */}
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="page-title-box">
                                        <div className="float-right">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><a href="javascript:void(0);">Metrica</a></li>
                                                <li className="breadcrumb-item"><a href="javascript:void(0);">Crypto</a></li>
                                                <li className="breadcrumb-item active">Exchange</li>
                                            </ol>{/*end breadcrumb*/}
                                        </div>{/*end /div*/}
                                        <h4 className="page-title">Archidax Exchange</h4>
                                    </div>{/*end page-title-box*/}
                                </div>{/*end col*/}
                            </div>{/*end row*/} {/* end page title end breadcrumb */}
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="header-title mt-0 mb-3">Price Chart</h4>
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="media">
                                                        <img src="assets/images/coins/btc.png" className="mr-3 thumb-sm align-self-center rounded-circle" alt="..." />
                                                        <div className="media-body align-self-center">
                                                            <div className="coin-bal">
                                                                <h5 className="m-0">$7289.45</h5>
                                                                <p className="text-muted mb-0">Bitcoin
                                                                    <span className="text-muted font-12">(BTC)</span>
                                                                    <span className="text-success">2.5% <i className="mdi mdi-arrow-up" /></span>
                                                                </p>
                                                            </div>
                                                        </div>{/*end media body*/}
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <p className="mb-0 p-2 bg-soft-dark rounded"><b>Last: </b>0.25436584</p>
                                                </div>
                                                <div className="col-md-3">
                                                    <p className="mb-0 p-2 bg-soft-success rounded"><b>24High: </b>0.25436584</p>
                                                </div>
                                                <div className="col-md-3">
                                                    <p className="mb-0 p-2 bg-soft-danger rounded"><b>24Low: </b>0.25436584</p>
                                                </div>
                                            </div>
                                            <div id="exchange_candlestick" className="apex-charts" />
                                        </div>{/*end card-body*/}
                                    </div>{/*end card*/}
                                </div>{/*end col*/}
                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="header-title mt-0 mb-3">Total Balence</h4>
                                            <ul className="list-group wallet-bal-crypto">
                                                <li className="list-group-item align-items-center d-flex justify-content-between">
                                                    <div className="media">
                                                        <img src="assets/images/coins/eth.png" className="mr-3 thumb-sm align-self-center rounded-circle" alt="..." />
                                                        <div className="media-body align-self-center">
                                                            <div className="coin-bal">
                                                                <h3 className="m-0">Ethereum</h3>
                                                                <p className="text-muted mb-0">USD</p>
                                                            </div>
                                                        </div>{/*end media body*/}
                                                    </div>
                                                    <div className="coin-bal">
                                                        <h3 className="m-0">$21.32 ETH</h3>
                                                        <p className="text-muted mb-0">$153019.08USD</p>
                                                    </div>
                                                </li>
                                                <li className="list-group-item align-items-center d-flex justify-content-between">
                                                    <div className="media">
                                                        <img src="assets/images/coins/codeoku.png" className="mr-3 thumb-sm align-self-center rounded-circle" alt="..." />
                                                        <div className="media-body align-self-center">
                                                            <div className="coin-bal">
                                                                <h3 className="m-0">Codeo</h3>
                                                                <p className="text-muted mb-0">USD</p>
                                                            </div>
                                                        </div>{/*end media body*/}
                                                    </div>
                                                    <div className="coin-bal">
                                                        <h3 className="m-0">$21.32 XMR</h3>
                                                        <p className="text-muted mb-0">$153019.08USD</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>{/*end card-body*/}
                                    </div>{/*end card*/}
                                </div>{/*end col*/}
                            </div>{/*end row*/}
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="mt-0 header-title">Buy Coins</h4>
                                            <form className="form-horizontal">
                                                <div className="form-group mb-0">
                                                    <div className="input-group mt-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text bg-light" id="basic-addon1">Amount</span>
                                                        </div>
                                                        <input type="text" className="form-control" placeholder={123} aria-label={123} aria-describedby="basic-addon1" />
                                                        <div className="input-group-append">
                                                            <span className="input-group-text bg-light" id="basic-addon2">BTC</span>
                                                        </div>
                                                    </div>
                                                    <div className="input-group mt-3">
                                                        <div className="input-group-prepend">
                                                            <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Price <i className="mdi mdi-chevron-down ml-1" /></button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">Last Trade Price</a>
                                                                <a className="dropdown-item" href="#">Last Buy Price</a>
                                                                <a className="dropdown-item" href="#">Last Sell Price</a>
                                                            </div>
                                                        </div>
                                                        <input type="email" id="example-input2-group3" name="example-input2-group3" className="form-control" placeholder="$ 24,00" />
                                                        <div className="input-group-append">
                                                            <span className="input-group-text bg-light" id="basic-addon4">$ Dollor</span>
                                                        </div>
                                                    </div>
                                                    <div className="input-group mt-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text bg-light" id="basic-addon5">Total</span>
                                                        </div>
                                                        <input type="text" className="form-control" placeholder={123} aria-label={123} aria-describedby="basic-addon1" />
                                                        <div className="input-group-append">
                                                            <span className="input-group-text bg-light" id="basic-addon6">$ Dollor</span>
                                                        </div>
                                                    </div>
                                                    <div className=" mt-3 ml-auto">
                                                        <a href="#" className="btn btn-success btn-sm">Buy Coins</a>
                                                    </div>
                                                </div> {/*end form-group*/}
                                            </form> {/*end form*/}
                                        </div>{/*end card-body*/}
                                    </div>{/*end card*/}
                                </div>{/*end col*/}
                                <div className="col-md-12 col-xl-4">
                                    <div className="card m-b-30">
                                        <div className="card-body">
                                            <h4 className="mt-0 header-title">Sell Coins</h4>
                                            <form className="form-horizontal">
                                                <div className="form-group mb-0">
                                                    <div className="input-group mt-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text bg-light" id="basic-addon7">Amount</span>
                                                        </div>
                                                        <input type="text" className="form-control" placeholder={123} aria-label={123} aria-describedby="basic-addon1" />
                                                        <div className="input-group-append">
                                                            <span className="input-group-text bg-light" id="basic-addon8">BTC</span>
                                                        </div>
                                                    </div>
                                                    <div className="input-group mt-3">
                                                        <div className="input-group-prepend">
                                                            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Price <i className="mdi mdi-chevron-down ml-1" />
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">Last Trade Price</a>
                                                                <a className="dropdown-item" href="#">Last Buy Price</a>
                                                                <a className="dropdown-item" href="#">Last Sell Price</a>
                                                            </div>
                                                        </div>
                                                        <input type="email" id="example-input2-group4" name="example-input2-group4" className="form-control" placeholder="$ 24,00" />
                                                        <div className="input-group-append">
                                                            <span className="input-group-text bg-light" id="basic-addon9">$ Dollor</span>
                                                        </div>
                                                    </div>
                                                    <div className="input-group mt-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text bg-light" id="basic-addon10">Total</span>
                                                        </div>
                                                        <input type="text" className="form-control" placeholder={123} aria-label={123} aria-describedby="basic-addon1" />
                                                        <div className="input-group-append">
                                                            <span className="input-group-text bg-light" id="basic-addon11">$ Dollor</span>
                                                        </div>
                                                    </div>
                                                    <div className="mt-3 ml-auto">
                                                        <a href="#" className="btn btn-danger btn-sm">Sell Coins</a>
                                                    </div>
                                                </div> {/*end form-group*/}
                                            </form> {/*end form*/}
                                        </div>{/*end card-body*/}
                                    </div>{/*end card*/}
                                </div>{/*end col*/}
                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="mt-0 header-title mb-3">Currency Cacculater</h4>
                                            <div className="calculator-block">
                                                <div className="calculator-body">
                                                </div>
                                            </div>
                                        </div>{/*end card-body*/}
                                    </div>{/*end card*/}
                                </div>{/*end col*/}
                            </div> {/* end row */}
                            <div className="row">
                                <div className="col-12">
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
                                                        </tr>{/*end tr*/}
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>01</td>
                                                            <td>14 Jan 2019</td>
                                                            <td>12:05PM</td>
                                                            <td>0001245368452136</td>
                                                            <td><span className="badge badge-soft-danger">Sent</span></td>
                                                            <td>$521.36</td>
                                                        </tr>{/*end tr*/}
                                                        <tr>
                                                            <td>02</td>
                                                            <td>13 Jan 2019</td>
                                                            <td>10:15AM</td>
                                                            <td>0012369584712458</td>
                                                            <td><span className="badge badge-soft-success">Received</span></td>
                                                            <td>$990.00</td>
                                                        </tr>{/*end tr*/}
                                                        <tr>
                                                            <td>03</td>
                                                            <td>11 Jan 2019</td>
                                                            <td>09:14PM</td>
                                                            <td>0012457896321548</td>
                                                            <td><span className="badge badge-soft-danger">Sent</span></td>
                                                            <td>$321.21</td>
                                                        </tr>{/*end tr*/}
                                                        <tr>
                                                            <td>04</td>
                                                            <td>08 Jan 2019</td>
                                                            <td>12:05PM</td>
                                                            <td>0126582125487896</td>
                                                            <td><span className="badge badge-soft-success">Received</span></td>
                                                            <td>$321.21</td>
                                                        </tr>{/*end tr*/}
                                                        <tr>
                                                            <td>05</td>
                                                            <td>06 Jan 2019</td>
                                                            <td>11:30AM</td>
                                                            <td>0125896312345878</td>
                                                            <td><span className="badge badge-soft-danger">Sent</span></td>
                                                            <td>$458.80</td>
                                                        </tr>{/*end tr*/}
                                                        <tr>
                                                            <td>06</td>
                                                            <td>05 Jan 2019</td>
                                                            <td>05:50PM</td>
                                                            <td>0001245863254874</td>
                                                            <td><span className="badge badge-soft-success">Received</span></td>
                                                            <td>125.50</td>
                                                        </tr>{/*end tr*/}
                                                        <tr>
                                                            <td>07</td>
                                                            <td>04 Jan 2019</td>
                                                            <td>08:10PM</td>
                                                            <td>0000021253698745</td>
                                                            <td><span className="badge badge-soft-danger">Sent</span></td>
                                                            <td>$365.21</td>
                                                        </tr>{/*end tr*/}
                                                        <tr>
                                                            <td>08</td>
                                                            <td>03 Jan 2019</td>
                                                            <td>01:30PM</td>
                                                            <td>0000212125487963</td>
                                                            <td><span className="badge badge-soft-success">Received</span></td>
                                                            <td>$843.21</td>
                                                        </tr>{/*end tr*/}
                                                        <tr>
                                                            <td>09</td>
                                                            <td>03 Jan 2019</td>
                                                            <td>12:05PM</td>
                                                            <td>0124563985478456</td>
                                                            <td><span className="badge badge-soft-danger">Sent</span></td>
                                                            <td>$335.15</td>
                                                        </tr>{/*end tr*/}
                                                        <tr>
                                                            <td>10</td>
                                                            <td>02 Jan 2019</td>
                                                            <td>03:15PM</td>
                                                            <td>0125896325483658</td>
                                                            <td><span className="badge badge-soft-success">Received</span></td>
                                                            <td>$554.50</td>
                                                        </tr>{/*end tr*/}
                                                        <tr>
                                                            <td>11</td>
                                                            <td>01 Jan 2019</td>
                                                            <td>10:05AM</td>
                                                            <td>0013256548745123</td>
                                                            <td><span className="badge badge-soft-danger">Sent</span></td>
                                                            <td>$225.25</td>
                                                        </tr>{/*end tr*/}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>{/*end card-body*/}
                                    </div>{/*end card*/}
                                </div>{/*end col*/}
                            </div>{/*end row*/}
                        </div>
                    </div>{/* container */}
                </div>
                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Welcome to dashboard</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p align="center">
                                    <button className="btn btn-primary">Create a wallet</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end page content */}
            </div>
            <Footer />
        </div>
    );
}

export default Exchange;