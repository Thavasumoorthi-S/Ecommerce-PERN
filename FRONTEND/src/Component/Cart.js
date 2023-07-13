import React, { useEffect,useState,useMemo } from "react";
import Userscontext from '../Userscontext';
import { useContext} from "react";
import '../styles/cart.css';
import { useLocation,Link} from "react-router-dom";
import axios from "axios";


const Cart = () => {
    
    // const {cart,setcart}=useContext(Userscontext)
    const [price, setPrice] = useState(0);
    const [cartitem,setcartitem]=useState([])
    const [cartstore,setcartstore]=useState([])

    const location=useLocation();
    const param=new URLSearchParams(location.search);
    const username=param.get('username')
    const useremail=param.get('mail')


    const handlePrice = () => {
        var ans = 0;
        cartitem.forEach(item =>ans += Number(item.price));
        setPrice(ans);
        console.log(ans)
    };
 
 useEffect(()=>{
    handlePrice();
 },[cartitem])
  


useMemo(()=>{
    axios.get(`http://localhost:8000/getitem/${useremail}`).then(items=>{console.log(items.data);setcartitem(items.data)}).catch(err=>{console.log(err)})

 },[cartstore])


 const redirectURLS = `../home?username=${username}&mail=${useremail}`;


 const cartfilter=(id)=>{
 axios.delete(`http://localhost:8000/deleteitem/${useremail}/${id}`).then(item=>{
  console.log(item.data);
  setcartstore(item.data)
}).catch(err=>{
  console.log(err)
})
    
 }


    return (
        <div className="carts">
            <div className="carthead">
                <div className="cartheaditem">
                <h2>WELCOME {username.toUpperCase()} , </h2>
                <h2><Link className="link" to={redirectURLS}>SHOPPING</Link></h2>
                </div>
            </div>

            <div className="cartbody" >

                {
                    cartitem.length>0?(
                        cartitem.map(item=>{
                            return(
                                <div className="cartitem" key={item.id}>
                            <img  src={item.img} alt="image" style={{width:'100px',height:'100px',backgroundColor:"white"}}/>
                            <div >BRAND:{item.brand.toUpperCase()}</div>
                            <div >RAM:{item.size}</div>
                            <div >PRICE:{item.price}</div>
                            <div ><button className="buttonremove" onClick={()=>cartfilter(item.id)}>REMOVE FROM CART</button></div>
                                    
                                </div>
                            )
                        })

                    ):(<div>Cart is Empty</div>)

                }
         <div className="price">TOTAL PRICE OF YOUR CART:{price}</div>
            </div>

        </div>
    )
}

export default Cart
