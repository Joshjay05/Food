import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div>
<footer className='footer'>
<article>
    <ul className='footer-list'>
<p>Places</p>
        <li>Lagos</li>
        <li>Abuja</li>
        <li>Ibadan</li>
        <li>Lekki-Lagos</li>
        <li>Island-Lagos</li>
        <li>Mainland</li>
        <li>Yaba-Lagos</li>
        <li>Victoria Island-Lagos</li>
        <li>Ikoyi-Lagos</li>
    </ul>
</article>
<article>
    <ul className='footer-list'>
        <p>Culinary art</p>
        <li>Nigerian Food</li>
        <li>Pasta</li>
        <li>African Food</li>
        <li>Sandwiches</li>
        <li>Pizza</li>
        <li>BreakFast</li>
        <li>Traditional</li>
    </ul>
</article>
<article>
    <ul className='footer-list'>

    <p>Popular Vdndor</p>
<li>Mama J Bukka</li>
<li>Choice Meal</li>
<li>Kobe Delicious</li>
<li>Gidi Grills</li>
<li>Item 7 meal</li>
<li>Iya Skye Bukka Hut</li>

    </ul>
</article>
<article>
    <ul className='footer-list'>
<p>Collaboration</p>
    <li>Sell on TM30 Food Platform
    </li>
    <li>Order for your Company staffs</li>
    </ul>
</article>
<article>
    <ul className='footer-list'>
<p>Tm30 Food Platform</p>
    <li>About</li>
    <li>Help Page</li>
    <li>Terms and Conditions</li>
    <li>Privacy Policy</li>
    <ul className='footer-list'>
        {/* <ul className='connect'> */}
        <p>Connect with us</p>
        <li>Instagram</li>
        <li>Twitter</li>
        <li>Facebook</li>
        {/* </ul> */}
    </ul>
    </ul>
</article>

</footer>
<section></section>
    </div>
  )
}


export default Footer