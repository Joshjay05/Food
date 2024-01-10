import React from 'react'
import logo from "../Image/logo.png"
import copy from "../Image/copy.png"
import bank from "../Image/bank.png"
import { Link } from 'react-router-dom'

const UssdOrderSummary = () => {
  return (
    <article className='ussd-details'>
      <span className='back-button'>  Back</span>

  
    <section className='ussd-container'>
      <article className='ussd-section'>
        <div className='lg'><img src={logo} alt=''/></div>
        <p className='action-text'>Make a transfer via USSD or Bank transfer to the account below</p>

        <ul className='bank-details'>
          <li className='acc-desc'>
            <label>Bank Name</label>
            <b>Hope Bank</b>
          </li>
          <li className='extra'>
            <span className='acc-desc'> 
            <label>Account Number    </label>
          <b>2486937021</b>
          </span>
          <img src={copy} className='opy-btn_acc' alt=''/>
          </li>

          <li className='acc-desc'>
            <label>Account Name</label>
            <b>TM30 FoodPay</b>
          </li>
          <li className='extra'>
            <span className='acc-desc'>

            <label>Amount</label>
            <b>#1000.00</b>
            </span>

          <img src={copy} className='copy-btn' alt=''/>
            
          </li>
        </ul>

        <div className='payment-timer'>
        <p>Use this accountfor this transaction alone</p>
        <img src={bank} className='bank' alt=''/>
<p>Expire in <b>30:00</b></p>
        </div>

       <Link to=".././confirmation"> 
        <button className='confirmation-call'> I have sent the money</button></Link>
      </article>
    </section>
      </article>
  )
}

export default UssdOrderSummary
