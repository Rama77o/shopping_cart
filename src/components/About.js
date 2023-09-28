import React from 'react'
import "./About.css"
import cart1 from "./images/cart1.png"
import cart2 from "./images/cart2.jpg"
import cart3 from "./images/cart3.png"
import cart4 from "./images/cart4.jpg"
import { BsFacebook, BsYoutube, BsInstagram } from 'react-icons/bs';
import { MdEmail, MdOutlinePhoneInTalk } from "react-icons/md"

const About = () => {
  return (
    <div className='content'>
      <h1>REVIEWS</h1>
      <div className='about'>
        <div>
          <img src={cart1} alt="cart" />
          <h3>iueyfiiwouj</h3>
        </div>
        <div>
          <img src={cart2} alt="cart" />
          <h3>iueyfiiwouj</h3>
        </div>
        <div>
          <img src={cart3} alt="cart" />
          <h3>iueyfiiwouj</h3>
        </div>
        <div>
          <img src={cart4} alt="cart" />
          <h3>iueyfiiwouj</h3>
        </div>
      </div>
      <div className='footer'>
        <div direction='horizontal' className='icons'>
          <BsFacebook className='icon' />
          <BsInstagram className='icon' />
          <BsYoutube className='icon' />
          <MdEmail className='icon' />
          <MdOutlinePhoneInTalk className='icon' />
        </div>
        <div className='gmail'>
          @ shopping cart
        </div>
      </div>
    </div>
  )
}

export default About