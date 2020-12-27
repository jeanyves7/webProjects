import React , {useEffect,useState} from 'react';
import Footer from './Footer';
import ButtonAppBar from './Header/Header';
import { Link } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";


export default function Addcart() {

    const Card= useSelector(state => state.cart.items);

    useEffect(()=>{

    },Card)

    console.log(Card);
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
                    
                    {Card.map(item=>(
                    <li key={item.id}>
                        <div className="cart-image">
                            <img src={item.image} alt="product" />
                        </div>
                        <div className="cart-name">
                            <div>
                                {/* <Link to={"/product/" + item.product}> */}
                               {item.name}
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
                        {item.price}
                        </div>
                    </li>
                    ))}
                    
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