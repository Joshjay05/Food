import React, { useState } from 'react'
import "./payment.css"
import Payment from './Payment'
import UssdOrderSummary from './UssdOrderSummary'
const PaymentPage = () => {
    const [payment, setpayment]= useState(true)
    const [ussd, setUssd] = useState(false)
  return (
    <div className='payment-section'>

      <span className='back-button'>  Back</span>
     
     {payment && <Payment/>}
     
{ussd && <UssdOrderSummary showUssd={setUssd}/>}
    </div>
  )
}

export default PaymentPage