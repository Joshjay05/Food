import React from 'react'
import logo from "../Image/logo.png"


const Confirmation = () => {
  return (
    <div>
     <section>
      <div className='lg'><img src={logo} alt=''/> <></></div>
      <p>We are waiting to confirm your transfer, this can take few minutes</p>  

      <div>
      <img src='' alt=''/>  
       <img src='' alt=''/> 
        <img src='' alt=''/> 
      </div>
      <button>Please wait.......</button>
      <span>8:29 minutes</span>
     </section>



    </div>
  )
}

export default Confirmation
