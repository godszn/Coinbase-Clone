import React from 'react'
import welcomeimg from '../images/welcome.jpg'; 

function WelcomeComponent() {
  return (
    <div>
       <div className = 'welcome-wrapper p-9 m-4 '>
        <div className = 'welcome-container flex items-center flex-row-reverse'>
           <div className = 'welcome-text-wrapper flex flex-col w-5/12'>
              <div className = 'welcome-text leading-8'>
                  <h1 className = 'text-2xl mb-4'>
                    Welcome to Coinbase
                  </h1>
                  <p className = 'font-semibold'>
                    We have the best rates. Simply start your exchange right now. Sign
                    up for our Affiliate program and earn commission from each exchange. The 
                    earnings are credited in your account instantly and can be withdrawn right
                    away. Also note some exchange directions are hidden for unregistered user.
                    To ensure to have access to all our exchange directions and benefits kindly
                    sign up and verify your identity.
                  </p>
              </div>
              <div className = 'welcome-button-wrapper mt-4 flex'>
                 <div className = ' flex welcome-button p-4 rounded-3xl font-extrabold text-sm pl-8 pr-8 tracking-wide text-white '>
                   <a>Discover</a>
                 </div>
              </div>
           </div>
           <div className = 'welcome-widget-wrapper mr-24'>
             <div className = 'welcome-wrapper'>
                <img src = {welcomeimg} className = 'welcomeimg'/>
             </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeComponent
