import React from 'react'
import '../App.css'
import logo from '../images/Logo.png';
import phone  from "../images/phone.png";
import welcomeimg from '../images/welcome.jpg'; 
import {ReactComponent as path} from '../images/Path1.svg';
function MainComponent() {
  return (
    <div>
      <div className = 'navbar-wrapper'>
         <div className = 'navbar flex justify-around m-4'>
            <div className = 'navbrand flex p-4 items-start'>
               <div>
                 <img src = {logo} className = 'logo-img'/>
               </div>
            </div>
            <div className = 'nav-links flex p-4 ml-11'>
              <div className = 'link-wrappers flex font-sans items-center'>
                 <div className = 'links'>
                    <a>
                      Home
                    </a>
                 </div>
                 <div className = 'links'>
                    <a>
                      About Us
                    </a>
                 </div>
                 <div className = 'links'>
                    <a>
                      Blog
                    </a>
                 </div>
                 <div className = 'links'>
                    <a>
                      Contact Us
                    </a>
                 </div>
              </div>
            </div>
            <div className = 'right-nav-wrapper flex ml-5 mr-5'>
               <div className = 'btc-gtc-wrapper flex items-center'>
                 <div className = 'btc-gtc-link p-4 mr-9'>
                   <a>Sell Bitcoin/Giftcard</a>
                 </div>
                 <div className = 'login-wrapper text-white pl-11 pr-11 rounded-3xl p-3 flex'>
                   <div className = 'login-button text-xs tracking-wide font-extrabold'>
                      <a>LOGIN</a>
                   </div>
                 </div>
              </div>
            </div>
         </div>
      </div>
      <div className = 'main-container-wrapper flex-col p-20 items-center flex h-screen'>
         <div className = 'briefing-container items-center flex'>
            <div className = 'briefing-text-wrapper text-4xl text-white ml-9'>
               <div className = 'briefing-text w-10/12'>
                  <h1 className = 'leading'>
                      We provide easy solution to exchange your
                      <span className = 'font-semibold'> Bitcoin/Giftcard for money</span>
                    </h1>
                    <a className = 'text-sm'>
                      Coinbase is a platform for trading your bitcoin and giftcard
                      at the best rate
                    </a>
               </div>
               <div className = 'brief-btn-wrapper mt-4 flex'>
                  <div className = 'brief-btn flex bg-white text-xs p-4 rounded-3xl'>
                     <a className = 'font-extrabold text-xs brief-tx'>
                        GET STARTED
                     </a>
                  </div>
               </div>
            </div>
            <div className = 'briefing-widget-wrapper flex w-10/12 ml-16'>
               <div className = 'briefing-widget'>
                  <img src = {phone} className = 'phone-widget'/>
               </div>
            </div>
         </div>
          <div className="path1">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                 className="shape-fill"></path>
            </svg>
          </div>
      </div>
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
      <div className = 'expenses-wrapper'>
          <div className="path2">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill2"></path>
            </svg>
          </div>
        <div className = 'expenses-table-wrapper'>
          <div className = 'expenses-table'>
           <h1 className = 'text-white font-semibold'>Under Construction😁</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainComponent
