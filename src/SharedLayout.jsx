import React from 'react'
import {Outlet} from "react-router-dom"
import Sidebar from './Sidebar/Sidebar'
import Navbar from './Navbar/Navbar'
// import Home from './Home/Home'
// import Navbar from './Navbar/Navbar'

const SharedLayout = () => {
  return (
    <main className='container'>

         <section className='aside'>   

<Sidebar/>

         </section>

{/* <Home/> */}


<section className='home'>  
<Navbar/>
        <Outlet/>
</section>

    </main>


  )
}

export default SharedLayout