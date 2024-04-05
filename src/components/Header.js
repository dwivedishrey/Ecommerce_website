import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = () => {
const {carts}=useSelector((state)=>state.allCart);
console.log(carts)
  return (
   <>
     <Navbar style={{height:"60px", background:"black",color:"white"}}>
        <Container>
          <div style={{display:"flex"}}>
        <NavLink to="/" className="text-decoration-none text-light ">
        <i  style={{fontSize:"2rem"}} class="fa-solid fa-utensils"></i>
        </NavLink>
        <NavLink to="/" className="text-decoration-none text-light align-left">

        <h3 className='text-light' style={{marginLeft:"0.5rem"}} >SavorySpot</h3>
     
          </NavLink>
          </div>
          <div>
       
      </div>
        
          <NavLink to="/cart" className="text-decoration-none text-light mx-2">
          <div id='ex4'>
            <span className='p1 fa-stack fa-2x has-badge' data-count={carts.length}>
            <i class="fa-solid fa-cart-shopping"></i>
            </span>
          </div>
          </NavLink>
          
        </Container>
      </Navbar>
   </>
  )
}

export default Header
