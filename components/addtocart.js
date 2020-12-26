import React from 'react';
import Footer from './Footer';
import ButtonAppBar from './Header/Header';
import { Link } from "react-router-dom";


export default function addcart() {
    return (
        <>
            <ButtonAppBar />
            <div className="cart">
                <div className="cart-list">
                <ul className="cart-list-container">
                    <li>
                    <h3>
                        Shopping Cart
                    </h3>
                    <div>
                        <h4>
                            Price
                        </h4>
                    </div>
                    </li>
                    <li>
                        <div className="cart-image">
                            <img src="" alt="product" />
                        </div>
                        <div className="cart-name">
                            <div>
                                {/* <Link to={"/product/" + item.product}> */}
                                MacBook Props
                                {/* </Link> */}
                            </div>
                            <div>
                                Qty:
                                <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <button type="button" className="button-delete" >
                                    Delete
                                </button>
                            </div>
                        </div>
                        <div className="cart-price">
                        $1200
                        </div>
                    </li>
                    <li>
                        <div className="cart-image">
                            <img src="" alt="product" />
                        </div>
                        <div className="cart-name">
                            <div>
                                {/* <Link to={"/product/" + item.product}> */}
                                MacBook Air
                                {/* </Link> */}
                            </div>
                            <div>
                                Qty:
                                <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <button type="button" className="button-delete" >
                                    Delete
                                </button>
                            </div>
                        </div>
                        <div className="cart-price">
                        $1500
                        </div>
                    </li>
                    <li>
                        <div className="cart-image">
                            <img src="" alt="product" />
                        </div>
                        <div className="cart-name">
                            <div>
                                {/* <Link to={"/product/" + item.product}> */}
                                HP Laptop
                                {/* </Link> */}
                            </div>
                            <div>
                                Qty:
                                <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <button type="button" className="button-delete" >
                                    Delete
                                </button>
                            </div>
                        </div>
                        <div className="cart-price">
                        $800
                        </div>
                    </li>
                </ul>

                </div>
                <div className="cart-action">
                <h3>
                    Subtotal (3 items)
                    :
                    $ 3500
                </h3>
                <button className="button primary full-width">
                    Proceed to Checkout
                </button>

                </div>

            </div>
            <Footer />
        </>
    )
}