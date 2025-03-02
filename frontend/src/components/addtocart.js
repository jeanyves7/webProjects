import React , {useEffect} from 'react';
import Footer from './Footer';
import ButtonAppBar from './Header/Header';
import {useDispatch,useSelector} from "react-redux";
import {loadCart,updateQty,deleteItem,purchase,setDelete,checkOutCount} from "../actions/actions"


const qty=[1,2,3,4,5,6,7,8,9]
export default function Addcart() {

    const Card= useSelector(state => state.cart.items);
    let price=0;
    let Carts=[]
    if(typeof(Card)==='object'){
        Carts=Card
    }
    Carts.map(item=>{
        price=price+(item.price*item.qty)
    })
   
   const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(loadCart())
    },[])

    //for the change of the qty
    const handleQ=(e)=>{
        let id=e.target.id
        id=parseInt(id)
        let Qty=e.target.value
        Qty=parseInt(Qty)
     const data={
         idi:id,
         qty:Qty
         
     }
      dispatch(updateQty(data))
    }

    //delete button
    const handleD=(e)=>{
        let id=e.target.id
        id=parseInt(id)
        const data={
            idi:id
        }
        dispatch(setDelete())
        dispatch(deleteItem(data))
    }   

    const handleP=(e)=>{
        console.log(Card)
        dispatch(checkOutCount())
        dispatch(purchase(Card))
    }
   
   
    return (
        <>
            <ButtonAppBar />
            <div className="Thankyou">
                <h1>Thank You! Come Again!! :)</h1>
            </div>
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
                    
                    {Carts.map(item=>(
                    <>  
                    <li key={item.idI}>
                        <div className="cart-image">
                            <img src={item.img} alt="product" />
                        </div>
                        <div className="cart-name">
                            <div>
                                {/* <Link to={"/product/" + item.product}> */}
                               {item.name}
                                {/* </Link> */}
                            </div>
                            <div>
                                Qty:
                                <select key={item.idI}  id={item.idI} onChange={handleQ} value={item.qty}>
                                {qty.map(q=>(
                                       <option value={q}>{q}</option>
                                   ))}
                                </select>
                                <button id={item.idI} type="button" className="button-delete" onClick={handleD} >
                                    Delete
                                </button>
                            </div>
                        </div>
                        <div className="cart-price">
                        {item.price*item.qty}
                        </div>
                    </li>
                    </>
                    ))}
                    
                </ul>

                </div>
                <div className="cart-action">
                <h3>
                    Subtotal ({Carts.length} items)
                    :
                    $ {price}
                </h3>
                <button onClick={handleP} className="button primary full-width">
                    Proceed to Checkout
                </button>
                        
                </div>

            </div>
            <Footer />
        </>
    )
}