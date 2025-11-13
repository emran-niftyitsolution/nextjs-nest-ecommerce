'use client';

import { useState } from "react";
import Layout from "../../components/layout/Layout";
import Link from "next/link";

export default function AccountPage() {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <Layout parent="Home" sub="Pages" subChild="My Account">
            <div className="page-content pt-150 pb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 m-auto">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="dashboard-menu">
                                        <ul className="nav flex-column" role="tablist">
                                            <li className="nav-item">
                                                <a
                                                    className={`nav-link ${activeIndex === 1 ? "active" : ""}`}
                                                    onClick={() => handleOnClick(1)}
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    <i className="fi-rs-settings-sliders mr-10"></i>Dashboard
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className={`nav-link ${activeIndex === 2 ? "active" : ""}`}
                                                    onClick={() => handleOnClick(2)}
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    <i className="fi-rs-shopping-bag mr-10"></i>Orders
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className={`nav-link ${activeIndex === 3 ? "active" : ""}`}
                                                    onClick={() => handleOnClick(3)}
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    <i className="fi-rs-shopping-cart-check mr-10"></i>Track Your Order
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className={`nav-link ${activeIndex === 4 ? "active" : ""}`}
                                                    onClick={() => handleOnClick(4)}
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    <i className="fi-rs-marker mr-10"></i>My Address
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className={`nav-link ${activeIndex === 5 ? "active" : ""}`}
                                                    onClick={() => handleOnClick(5)}
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    <i className="fi-rs-user mr-10"></i>Account Details
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/shop-wishlist" className="nav-link">
                                                    <i className="fi-rs-heart mr-10"></i>Wishlist
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    onClick={() => handleOnClick(7)}
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    <i className="fi-rs-sign-out mr-10"></i>Logout
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="tab-content account dashboard-content pl-50">
                                        {activeIndex === 1 && (
                                            <div className="tab-pane fade active show" id="dashboard">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h3 className="mb-0">Hello {}</h3>
                                                    </div>
                                                    <div className="card-body">
                                                        <p>
                                                            From your account dashboard. you can easily check &amp; view
                                                            your <Link href="#">recent orders</Link>, manage your{" "}
                                                            <Link href="#">shipping and billing addresses</Link> and{" "}
                                                            <Link href="#">edit your password and account details.</Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {activeIndex === 2 && (
                                            <div className="tab-pane fade active show" id="orders">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h3 className="mb-0">Your Orders</h3>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="table-responsive">
                                                            <table className="table">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Order</th>
                                                                        <th>Date</th>
                                                                        <th>Status</th>
                                                                        <th>Total</th>
                                                                        <th>Actions</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>#1357</td>
                                                                        <td>March 45, 2020</td>
                                                                        <td>Processing</td>
                                                                        <td>$125.00 for 2 item</td>
                                                                        <td>
                                                                            <Link href="#" className="btn-small d-block">
                                                                                View
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {activeIndex === 3 && (
                                            <div className="tab-pane fade active show" id="track-orders">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h3 className="mb-0">Orders tracking</h3>
                                                    </div>
                                                    <div className="card-body contact-from-area">
                                                        <p>To track your order please enter your OrderID in the box below and press "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                                                        <div className="row">
                                                            <div className="col-lg-8">
                                                                <form className="contact-form-style mt-30 mb-50" action="#" method="post">
                                                                    <div className="input-style mb-20">
                                                                        <label>Order ID</label>
                                                                        <input name="order-id" placeholder="Found in your order confirmation email" type="text" />
                                                                    </div>
                                                                    <div className="input-style mb-20">
                                                                        <label>Billing email</label>
                                                                        <input name="billing-email" placeholder="Email you used during checkout" type="email" />
                                                                    </div>
                                                                    <button className="submit submit-auto-width" type="submit">Track</button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {activeIndex === 4 && (
                                            <div className="tab-pane fade active show" id="address">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="card mb-3 mb-lg-0">
                                                            <div className="card-header">
                                                                <h3 className="mb-0">Billing Address</h3>
                                                            </div>
                                                            <div className="card-body">
                                                                <address>
                                                                    3522 Interstate<br />
                                                                    75 Business Spur,<br />
                                                                    Sault Ste. <br />Marie, MI 49783
                                                                </address>
                                                                <Link href="#" className="btn-small">Edit</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <h3 className="mb-0">Shipping Address</h3>
                                                            </div>
                                                            <div className="card-body">
                                                                <address>
                                                                    4299 Express Lane<br />
                                                                    Sarasota, <br />FL 34249 USA <br />Phone: 1.941.227.4444
                                                                </address>
                                                                <Link href="#" className="btn-small">Edit</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {activeIndex === 5 && (
                                            <div className="tab-pane fade active show" id="account-detail">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h3>Account Details</h3>
                                                    </div>
                                                    <div className="card-body">
                                                        <p>Already have an account? <Link href="/login">Log in instead!</Link></p>
                                                        <form method="post" name="enq">
                                                            <div className="row">
                                                                <div className="form-group col-md-12">
                                                                    <label>Display Name <span className="required">*</span></label>
                                                                    <input required className="form-control" name="name" type="text" />
                                                                </div>
                                                                <div className="form-group col-md-12">
                                                                    <label>Email Address <span className="required">*</span></label>
                                                                    <input required className="form-control" name="email" type="email" />
                                                                </div>
                                                                <div className="form-group col-md-12">
                                                                    <label>Current Password <span className="required">*</span></label>
                                                                    <input required className="form-control" name="password" type="password" />
                                                                </div>
                                                                <div className="form-group col-md-12">
                                                                    <label>New Password <span className="required">*</span></label>
                                                                    <input required className="form-control" name="npassword" type="password" />
                                                                </div>
                                                                <div className="form-group col-md-12">
                                                                    <label>Confirm New Password <span className="required">*</span></label>
                                                                    <input required className="form-control" name="cpassword" type="password" />
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <button type="submit" className="btn btn-fill-out submit" name="submit" value="Submit">Save Change</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

