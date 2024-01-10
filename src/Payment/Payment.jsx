import React from 'react'
import "./payment.css"
import card from "../Image/cards.png"
import ussd from "../Image/pchoice.png"
// import visa from "../Image/Visa.png"
// import verve from "../Image/Verve.png"
import { Link} from 'react-router-dom'

const Payment = ( { showUssd }  ) => {
  // const {Usssd} =useParams
  // const [ussd, setUssd] = useState()
  return (
    <section className='payment-section'>
      {/* <span className='back-button'>  Back</span> */}

      <section className='order-summary'>

      
<article className='order_summary-head'>
<p>ORDER SUMMARY</p>
<div className='total-order'><p>Total to Pay</p> <span className='order-amount'>#1000.00</span></div>
</article>
          
     <article> 
      <p>CHOOSE A PAYMENT METHOD</p>
     <Link to="../ussd"> 
     <div className='ussd-payment' 
    //  onClick = { () => {
    //   showUssd(true);
    //  }}
     > 
     <p><input type='radio' /> <span>Pay With USSD OR Bank Transfer</span> </p> <img src={ussd} alt=""/></div>
      </Link>

<Link to="../card">

            <div className='card-payment'> <p> <input type='radio' /> <span>Pay With Card</span></p>
             <div className='cards'>
              <img src={card} className='master' alt=""/>
              {/* <img src={visa} className='visa' alt=""/>
              <img src={verve} className='verve'  alt=''/> */}
            </div>
            </div>
              </Link>
      </article> 

      <button className='payment-call'> proceed to pay #1000</button>  
      </section>   
    </section>
  )
}

export default Payment