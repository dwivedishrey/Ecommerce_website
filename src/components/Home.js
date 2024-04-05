import React, { useState } from 'react'
import "./style.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToCart } from '../redux/features/cartSlice';
import cardData from './cardData';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
const Home = () => {
    const [cartData,setcartData]=useState(cardData);
    const dispatch=useDispatch();
    const send=(e)=>{
      dispatch(addToCart(e))
      toast.success("Item added to your cart")
    }
  return (
    <section className='item_section mt-4 container'>
        <h2 className='px-4' style={{fontWeight:400}}>Restaurant in Allahabad open now</h2>
        <div className='row mt-2 d-flex justify-content-around align-items-center'>
            {
                cartData.map((element,index)=>{
                    return(
                        <>
                        <Card style={{width:"22rem", border:"none"}} className='hove mb-4'>
                <Card.Img variant='top' className='cd' src={element.imgdata}/>
                <div className="card_body">
                    <div className="upper_data d-flex justify-content-between align-items-center">
                    <h4 className='mt-2'>{element.dish}</h4>
                    <span>{element.rating} ✬</span>
                    </div>
                    <div className="lower_data d-flex justify-content-between ">
                    <h5>{element.address}</h5>
                    <span>Rs {element.price}</span>
                    </div>
                    <div className='extra'></div>
                    <div className="last_data d-flex justify-content-between align-items-center">
                        <Button style={{width:"150px", background:"#ff3054db",border:"none"}} variant='outline-light' onClick={()=>send(element)}
                        className='mt-2 mb-2'>Add to Cart</Button>
                   
                    </div>
                    
                </div>

            </Card>
                        </>
                    )
                })
            }
            

        </div>
    </section>
  )
}

export default Home
