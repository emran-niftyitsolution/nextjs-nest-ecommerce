'use client';

import { useSelector, useDispatch } from "react-redux";
import Layout from "../../../components/layout/Layout";
import Link from "next/link";
import {
    clearCart,
    decreaseQuantity,
    deleteFromCart,
    increaseQuantity,
} from "../../../redux/action/cart";

interface CartItem {
    id: string;
    title: string;
    price: number;
    quantity: number;
    images: Array<{ img: string }>;
}

export default function CheckoutPage() {
    const dispatch = useDispatch();
    const cartItems: CartItem[] = useSelector((state: any) => state.cart);

    const calculatePrice = (): number => {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.price * item.quantity;
        });
        return total;
    };

    const price = calculatePrice();

    return (
        <Layout parent="Home" sub="Shop" subChild="Checkout">
            <section className="mt-50 mb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mb-40">
                            <h1 className="heading-2 mb-10">Checkout</h1>
                            <div className="d-flex justify-content-between">
                                <h6 className="text-body">
                                    Carefully check the information before checkout
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="row mb-50">
                                <div className="col-lg-6 mb-sm-15 mb-lg-0 mb-md-3">
                                    <div className="toggle_info">
                                        <span>
                                            <i className="fi-rs-user mr-10"></i>
                                            <span className="text-muted font-lg">
                                                Already have an account?
                                            </span>{" "}
                                            <Link
                                                href="#loginform"
                                                data-bs-toggle="collapse"
                                                className="collapsed font-lg"
                                            >
                                                Click here to login
                                            </Link>
                                        </span>
                                    </div>
                                    <div
                                        className="panel-collapse collapse login_form"
                                        id="loginform"
                                    >
                                        <div className="panel-body">
                                            <p className="mb-30 font-sm">
                                                If you have shopped with us
                                                before, please enter your
                                                details below. If you are a
                                                new customer, please proceed
                                                to the Billing &amp;
                                                Shipping section.
                                            </p>
                                            <form method="post">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        placeholder="Username Or Email"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        placeholder="Password"
                                                    />
                                                </div>
                                                <div className="login_footer form-group">
                                                    <div className="chek-form">
                                                        <div className="custome-checkbox">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                name="checkbox"
                                                                id="remember"
                                                                value=""
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="remember"
                                                            >
                                                                <span>Remember me</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <a className="text-muted" href="#">
                                                        Lost your password?
                                                    </a>
                                                </div>
                                                <div className="form-group">
                                                    <button
                                                        className="btn btn-md"
                                                        name="login"
                                                        type="button"
                                                    >
                                                        Log in
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="toggle_info">
                                        <span>
                                            <i className="fi-rs-label mr-10"></i>
                                            <span className="text-muted font-lg">
                                                Have a coupon?
                                            </span>{" "}
                                            <a
                                                href="#coupon"
                                                data-bs-toggle="collapse"
                                                className="collapsed font-lg"
                                            >
                                                Click here to enter your code
                                            </a>
                                        </span>
                                    </div>
                                    <div
                                        className="panel-collapse collapse coupon_form"
                                        id="coupon"
                                    >
                                        <div className="panel-body">
                                            <p className="mb-30 font-sm">
                                                If you have a coupon code, please
                                                apply it below.
                                            </p>
                                            <form method="post">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        placeholder="Enter Coupon Code..."
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <button
                                                        className="btn btn-md"
                                                        name="login"
                                                        type="button"
                                                    >
                                                        Apply Coupon
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3 className="mb-30">Billing Details</h3>
                            <form method="post">
                                <div className="row">
                                    <div className="form-group col-lg-6">
                                        <input
                                            required
                                            type="text"
                                            name="fname"
                                            placeholder="First name *"
                                        />
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <input
                                            required
                                            type="text"
                                            name="lname"
                                            placeholder="Last name *"
                                        />
                                    </div>
                                </div>
                                <div className="row shipping_calculator">
                                    <div className="form-group col-lg-12">
                                        <div className="custom_select">
                                            <select className="form-control select-active">
                                                <option value="">Select an option...</option>
                                                <option value="AX">Aland Islands</option>
                                                <option value="US">USA</option>
                                                <option value="GB">United Kingdom</option>
                                                <option value="CA">Canada</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row shipping_calculator">
                                    <div className="form-group col-lg-6">
                                        <input required type="text" name="city" placeholder="City / Town *" />
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <input required type="text" name="zipcode" placeholder="Postcode / ZIP *" />
                                    </div>
                                </div>
                                <div className="row shipping_calculator">
                                    <div className="form-group col-lg-6">
                                        <input required type="text" name="state" placeholder="State / County *" />
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <input required type="text" name="phone" placeholder="Phone *" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-lg-12">
                                        <input required type="text" name="cname" placeholder="Company Name" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-lg-12">
                                        <input required type="text" name="billing_address" placeholder="Address *" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-lg-12">
                                        <input required type="text" name="billing_address2" placeholder="Apartment, suite, unit etc. (optional)" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-lg-12">
                                        <input required type="email" name="email" placeholder="Email address *" />
                                    </div>
                                </div>
                                <div className="form-group mb-30">
                                    <div className="chek-form">
                                        <div className="custome-checkbox">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name="checkbox"
                                                id="createaccount"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="createaccount"
                                            >
                                                <span>Create an account?</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="ship_detail">
                                    <div className="form-group">
                                        <div className="chek-form">
                                            <div className="custome-checkbox">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="checkbox"
                                                    id="differentaddress"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="differentaddress"
                                                >
                                                    <span>Ship to a different address?</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mb-30">
                                    <textarea
                                        rows="5"
                                        placeholder="Order notes (optional)"
                                        name="ordernote"
                                    ></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-5">
                            <div className="border p-md-4 p-30 border-radius cart-totals mb-50">
                                <div className="d-flex align-items-end justify-content-between mb-30">
                                    <div>
                                        <p className="text-muted">Subtotal</p>
                                        <h3 className="text-brand">${price.toFixed(2)}</h3>
                                    </div>
                                    <h6 className="text-muted">Est. for 5 item(s)</h6>
                                </div>
                                <div className="divider-2 mb-30"></div>
                                <div className="table-responsive order_table checkout">
                                    <table className="table no-border">
                                        <tbody>
                                            {cartItems.map((item) => (
                                                <tr key={item.id}>
                                                    <td className="image product-thumbnail">
                                                        <img src={item.images[0].img} alt={item.title} />
                                                    </td>
                                                    <td>
                                                        <h6 className="w-160 mb-5">
                                                            <a className="text-heading">{item.title}</a>
                                                        </h6>
                                                        <div className="product-rate-cover d-inline-block">
                                                            <div className="product-rate d-inline-block float-none">
                                                                <div className="product-rating" style={{ width: "90%" }}></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h6 className="text-muted pl-20 pr-20">x {item.quantity}</h6>
                                                    </td>
                                                    <td>
                                                        <h4 className="text-brand">${(item.price * item.quantity).toFixed(2)}</h4>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="border p-md-4 p-30 border-radius cart-totals">
                                    <div className="table-responsive">
                                        <table className="table no-border">
                                            <tbody>
                                                <tr>
                                                    <td className="cart_total_label">
                                                        <h6 className="text-muted">Subtotal</h6>
                                                    </td>
                                                    <td className="cart_total_amount">
                                                        <h4 className="text-brand text-end">${price.toFixed(2)}</h4>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td scope="col" colSpan={2}>
                                                        <div className="divider-2 mt-10 mb-10"></div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="cart_total_label">
                                                        <h6 className="text-muted">Shipping</h6>
                                                    </td>
                                                    <td className="cart_total_amount">
                                                        <h5 className="text-heading text-end">Free</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="cart_total_label">
                                                        <h6 className="text-muted">Est. for 5 item(s)</h6>
                                                    </td>
                                                    <td className="cart_total_amount">
                                                        <h5 className="text-brand text-end">${price.toFixed(2)}</h5>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <a href="#" className="btn mb-20 w-100">
                                        Proceed To CheckOut
                                        <i className="fi-rs-sign-out ml-15"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

