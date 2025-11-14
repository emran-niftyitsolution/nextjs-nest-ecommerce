'use client';

import Link from "next/link";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/action/cart";

interface Product {
    id: number | string;
    title: string;
    price: number;
    images: Array<{ img: string }>;
    review?: number;
    ratingScore?: number;
    desc?: string;
    stock?: number;
    weight?: number;
    [key: string]: any;
}

interface CompareTableProps {
    data: Product[];
    features: string[];
    deleteFromCompare: (id: number | string) => void;
    addToCart: (product: Product) => void;
}

const CompareTable: React.FC<CompareTableProps> = ({ data, features, deleteFromCompare, addToCart }) => {
    const handleCart = (product: Product) => {
        addToCart(product);
        toast("Product added to Cart !");
    };
    
    return (
        <table className="table text-center">
            <tbody>
                {features.map((feature, featureIndex) => (
                    <tr key={featureIndex}>
                        <th
                            className="text-muted font-md fw-600"
                            style={{ textTransform: "capitalize" }}
                        >
                            {feature}
                        </th>
                        {data.map((product, productIndex) =>
                            feature == "preview" ? (
                                <td className="row_img" key={productIndex}>
                                    <img src={product.images[0].img} />
                                </td>
                            ) : feature == "name" ? (
                                <td className="product_name" key={productIndex}>
                                    <h5>
                                        <a href="#">{product.title}</a>
                                    </h5>
                                </td>
                            ) : feature == "price" ? (
                                <td className="product_price" key={productIndex}>
                                    <span className="price">${product.price}</span>
                                </td>
                            ) : feature == "rating" ? (
                                <td key={productIndex}>
                                    <div className="rating_wrap">
                                        {product.review && product.review >= 0 && (
                                            <>
                                                <div className="product-rate d-inline-block">
                                                    <div
                                                        className="product-rating"
                                                        style={{
                                                            width: `${product.ratingScore}%`,
                                                        }}
                                                    ></div>
                                                </div>

                                                <span className="rating_num">
                                                    ({product.review})
                                                </span>
                                            </>
                                        )}
                                    </div>
                                </td>
                            ) : feature == "description" ? (
                                <td className="row_text font-xs" key={productIndex}>
                                    <p>{product.desc}</p>
                                </td>                
                            ) : feature == "stock" ? (
                                <td className="row_stock" key={productIndex}>
                                    {product.stock && product.stock >= 0 ? (
                                        <span>In Stock</span>
                                    ) : (
                                        <span className="text-danger font-weight-bold">
                                            Out of stock
                                        </span>
                                    )}
                                </td>
                            ) : feature == "weight" ? (
                                <td className="row_weight" key={productIndex}>
                                    {product.weight} gram
                                </td>
                            ) : feature == "dimensions" ? (
                                <td className="row_dimensions" key={productIndex}>N/A</td>
                            ) : feature == "buy" ? (
                                <td className="row_btn" key={productIndex}>
                                    {product.stock && product.stock >= 0 ? (
                                        <button
                                            className="btn  btn-sm"
                                            onClick={(e) => handleCart(product)}
                                        >
                                            <i className="fi-rs-shopping-bag mr-5"></i>
                                            Add to cart
                                        </button>
                                    ) : (
                                        <Link href="/contact">
                                        <button className="btn  btn-sm btn-secondary">
                                            <i className="fi-rs-headset mr-5"></i>
                                            Contact Us
                                        </button>
                                        </Link>
                                        
                                    )}
                                </td>
                            ) : feature == " " ? (
                                <td className="row_remove" key={productIndex}>
                                    <a
                                        onClick={() =>
                                            deleteFromCompare(product.id)
                                        }
                                    >
                                        <i className="fi-rs-trash mr-5"></i>
                                        <span>Remove</span>
                                    </a>
                                </td>
                            ) : null
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

const mapDispatchToProps = {
    addToCart,
};

export default connect(null, mapDispatchToProps)(CompareTable);

