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

export default function CartPage() {
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
        <Layout parent="Home" sub="Shop" subChild="Cart">
            <section className="mt-50 mb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mb-40">
                            <h1 className="heading-2 mb-10">Your Cart</h1>
                            <div className="d-flex justify-content-between">
                                <h6 className="text-body">
                                    Carefully check the information before checkout
                                </h6>
                                <h6 className="text-body">
                                    <a href="#" className="text-muted">
                                        <i className="fi-rs-trash mr-5"></i>
                                        Clear Cart
                                    </a>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="table-responsive shopping-summery">
                                {cartItems.length <= 0 && "No Products"}
                                <table className={cartItems.length > 0 ? "table table-wishlist" : "d-none"}>
                                    <thead>
                                        <tr className="main-heading">
                                            <th className="custome-checkbox start pl-30" colSpan={2}>
                                                Product
                                            </th>
                                            <th scope="col">Unit Price</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Subtotal</th>
                                            <th scope="col" className="end">
                                                Remove
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((item, i) => (
                                            <tr key={i}>
                                                <td className="image product-thumbnail">
                                                    <img src={item.images[0].img} alt={item.title} />
                                                </td>

                                                <td className="product-des product-name">
                                                    <h6 className="product-name">
                                                        <Link href={`/products/${item.id}`}>{item.title}</Link>
                                                    </h6>
                                                    <div className="product-rate-cover">
                                                        <div className="product-rate d-inline-block">
                                                            <div
                                                                className="product-rating"
                                                                style={{
                                                                    width: "90%"
                                                                }}
                                                            ></div>
                                                        </div>
                                                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                    </div>
                                                </td>
                                                <td className="price" data-title="Price">
                                                    <h4 className="text-brand">${item.price}</h4>
                                                </td>
                                                <td className="text-center detail-info" data-title="Stock">
                                                    <div className="detail-extralink mr-15">
                                                        <div className="detail-qty border radius ">
                                                            <a
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    dispatch(decreaseQuantity(item.id) as any);
                                                                }}
                                                                className="qty-down"
                                                                style={{ cursor: 'pointer' }}
                                                            >
                                                                <i className="fi-rs-angle-small-down"></i>
                                                            </a>
                                                            <span className="qty-val">{item.quantity}</span>
                                                            <a
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    dispatch(increaseQuantity(item.id) as any);
                                                                }}
                                                                className="qty-up"
                                                                style={{ cursor: 'pointer' }}
                                                            >
                                                                <i className="fi-rs-angle-small-up"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-right" data-title="Cart">
                                                    <h4 className="text-body">${item.quantity * item.price}</h4>
                                                </td>
                                                <td className="action" data-title="Remove">
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            dispatch(deleteFromCart(item.id) as any);
                                                        }}
                                                        className="text-muted"
                                                        style={{ cursor: 'pointer' }}
                                                    >
                                                        <i className="fi-rs-trash"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                        <tr>
                                            <td colSpan={6} className="text-end">
                                                {cartItems.length > 0 && (
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            dispatch(clearCart() as any);
                                                        }}
                                                        className="text-muted"
                                                        style={{ cursor: 'pointer' }}
                                                    >
                                                        <i className="fi-rs-cross-small"></i>
                                                        Clear Cart
                                                    </a>
                                                )}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="cart-action text-end">
                                <Link href="/products" className="btn">
                                    <i className="fi-rs-shopping-bag mr-10"></i>
                                    Continue Shopping
                                </Link>
                            </div>
                            <div className="divider center_icon mt-50 mb-50">
                                <i className="fi-rs-fingerprint"></i>
                            </div>
                            <div className="row mb-50">
                                <div className="col-lg-6 col-md-12">
                                    <div className="heading_s1 mb-3">
                                        <h4>Calculate Shipping</h4>
                                    </div>
                                    <p className="mt-15 mb-30">
                                        Flat rate:
                                        <span className="font-xl text-brand fw-900">5%</span>
                                    </p>
                                    <form className="field_form shipping_calculator">
                                        <div className="form-row">
                                            <div className="form-group col-lg-12">
                                                <div className="custom_select">
                                                    <select className="form-control select-active">
                                                        <option value="">Choose a option...</option>
                                                        <option value="US">USA (US)</option>
                                                        <option value="GB">United Kingdom (UK)</option>
                                                        <option value="CA">Canada</option>
                                                        {/* Add more countries as needed */}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row row">
                                            <div className="form-group col-lg-6">
                                                <input required placeholder="State / Country" name="state" type="text" />
                                            </div>
                                            <div className="form-group col-lg-6">
                                                <input required placeholder="PostCode / ZIP" name="zip" type="text" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-lg-12">
                                                <button type="button" className="btn btn-sm">
                                                    <i className="fi-rs-shuffle mr-10"></i>
                                                    Update
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="mb-30 mt-50">
                                        <div className="heading_s1 mb-3">
                                            <h4>Apply Coupon</h4>
                                        </div>
                                        <div className="total-amount">
                                            <div className="left">
                                                <div className="coupon">
                                                    <form action="#" target="_blank">
                                                        <div className="form-row row justify-content-center">
                                                            <div className="form-group col-lg-6">
                                                                <input className="font-medium" name="Coupon" placeholder="Enter Your Coupon" />
                                                            </div>
                                                            <div className="form-group col-lg-6">
                                                                <button type="button" className="btn btn-sm">
                                                                    <i className="fi-rs-label mr-10"></i>
                                                                    Apply
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="border p-md-4 p-30 border-radius cart-totals">
                                        <div className="heading_s1 mb-3">
                                            <h4>Cart Totals</h4>
                                        </div>
                                        <div className="table-responsive">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td className="cart_total_label">Cart Subtotal</td>
                                                        <td className="cart_total_amount">
                                                            <span className="font-lg fw-900 text-brand">$ {price.toFixed(2)}</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="cart_total_label">Shipping</td>
                                                        <td className="cart_total_amount">
                                                            <i className="ti-gift mr-5"></i>
                                                            Free Shipping
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="cart_total_label">Total</td>
                                                        <td className="cart_total_amount">
                                                            <strong>
                                                                <span className="font-xl fw-900 text-brand">${price.toFixed(2)}</span>
                                                            </strong>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <Link href="/shop/checkout" className="btn">
                                            <i className="fi-rs-box-alt mr-10"></i>
                                            Proceed To CheckOut
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

