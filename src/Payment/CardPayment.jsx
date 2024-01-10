import { useState } from "react"


const CardPayment = () => {
    const [cardNumber, setCardNumber] = useState('');
  const [cardType, setCardType] = useState('');

  const detectCardType = (number) => {
    const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const mastercardRegex = /^5[1-5][0-9]{14}$/;
    const verveRegex = /^506(0|1)[0-9]{12}$/;

    if (visaRegex.test(number)) {
      setCardType('Visa');
    } else if (mastercardRegex.test(number)) {
      setCardType('Mastercard');
    } else if (verveRegex.test(number)) {
      setCardType('Verve');
    } else {
      setCardType('');
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setCardNumber(value);
    detectCardType(value);
  };

  return (
    <section>
      <span className='back-button'>  Back</span>

      <article>
        <p>Process your order Payment</p>
        <span>Kindly pay with your card and payment confirmation may take up to 2 minutes</span>

        <div>
            <b>Wallet</b>
            <ul>
                <li>

                <img src='' alt=''/>
                <span>Ending in 2834</span>
                </li>
                  <li>

                <img src='' alt=''/>
                <span>Ending in 2834</span>
                </li>
                  <li>

                <img src='' alt=''/>
                <span>Ending in 2834</span>
                </li>

            </ul>

            <p>New card  <hr></hr></p>

<div>
      <label htmlFor="cardNumber">Card Number:</label>
      <input
        type="text"
        id="cardNumber"
        value={cardNumber}
        onChange={handleChange}
      />

      {cardType && (
        <p>
          Card Type: <strong>{cardType}</strong>
        </p>
      )}
    </div>
        </div>
      </article>

    </section>
  )
}

export default CardPayment