import React from 'react'
import '../App.css'
import logo from '../images/Logo.png';
import phone  from "../images/phone.png";
import welcomeimg from '../images/welcome.jpg'; 
import bitcoin from '../images/bitcoin.png';
import eth from '../images/Eth.png';
import bank from "../images/bank.png";
import trans from '../images/Transfer.png'
import vec from "../images/Vector.png";
import nel from '../images/nel.jpg';
import gtc from '../images/giftcard.png';
import brk from '../images/break.png';
import clients from "../images/clients.png";
import appimg from '../images/appstore-img.png'
import playimg from "../images/playstore-img.png";
import X1 from "../images/X-1.png";
import X2 from "../images/X-2.png";

function MainComponent() {

  const downloadimg = {
    height: '2rem',
    width: 'fit-content',
  }
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
            <div className="custom-shape-divider-top-1691857537">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill2"></path>
              </svg>
            </div>
        <div className = 'expenses-table-wrapper p-4 ml-24 mr-24'>
          <div className = 'expenses-table mt-44 mb-12 flex bg-white w-full flex-col rounded-3xl'>
            <div className = 'expenses-nav-wrapper p-4 w-full h-fit border-b-slate-100 flex'>
              <div className = 'expenses-nav justify-around w-full font-extrabold flex'>
                 <div className = 'expenses-link'>
                      <a>OUR RATES</a>
                 </div>
                 <div className = 'expenses-link'>
                   <a>OUR RESERVES</a>
                 </div>
                 <div className = 'expenses-link'>
                   <a>LATEST EXCHANGES</a>
                 </div>
              </div>
            </div>
            <div className = 'expense-wrapper-container flex'>
                <div className = 'expenses-rate-container w-4/12 flex justify-around flex-col p-6'>
                  <div className = 'crypto-expense-wrapper p-0.5'>
                      <div className = 'btc-wrap items-center flex'>
                          <div className = 'btc-img items-center flex'>
                              <img src = {bitcoin} className = 'bitcoin h-fit'/>
                              <a className = 'ml-4 text-sm font-semibold'>BTC</a>
                          </div>
                          <div className = 'btc-text text-sm flex flex-col font-semibold ml-9'> 
                              <a> We Buy @ ₦350/$ </a>
                              <a>We Sell @ ₦370/$</a>
                          </div>
                      </div>
                  </div>
                  <div className = 'crypto-expense-wrapper p-0.5'>
                      <div className = 'eth-wrap items-center flex'>
                        <div className = 'eth-img items-center flex'> 
                            <img src = {eth} className = 'eth h-fit'/>
                            <a className = 'ml-4 text-sm font-semibold'>ETH</a>
                        </div>
                        <div className = 'eth-text text-sm flex flex-col font-semibold ml-9'> 
                            <a> We Buy @ ₦350/$ </a>
                            <a>We Sell @ ₦370/$</a>
                        </div>
                      </div>
                  </div>
               </div>
               <div className = 'expenses-reserves-container flex flex-col p-4'>
                      <div className = 'bank-expense-wrapper p-6'>
                          <div className = 'bank-wrap items-center flex'>
                              <div className = 'bank-img items-center flex'>
                                  <img src = {bank} className = 'bank h-fit'/>
                                  <a className = 'ml-4 text-sm font-semibold'>Bank Transfer</a>
                              </div>
                              <div className = 'btc-text text-sm flex flex-col font-semibold ml-9'> 
                                  <a> NGN <br/> #3452030300303.24/$</a>
                              </div>
                          </div>
                      </div>
                      <div className = 'bank-expense-wrapper p-6'>
                            <div className = 'btc-wrap items-center flex'>
                                <div className = 'btc-img items-center flex'>
                                    <img src = {bitcoin} className = 'btc h-fit'/>
                                    <a className = 'ml-4 text-sm font-semibold'>Bitcoin</a>
                                </div>
                                <div className = 'eth-text text-sm flex flex-col font-semibold ml-9'> 
                                    <a>399.98 BTC</a>
                                </div>
                            </div>
                      </div>
                      <div className = 'bank-expense-wrapper p-6'>
                          <div className = 'eth-wrap items-center flex'>
                              <div className = 'eth-img items-center flex'>
                                  <img src = {eth} className = 'eth h-fit'/>
                                  <a className = 'ml-4 text-sm font-semibold'>Ethereum</a>
                              </div>
                              <div className = 'eth-text text-sm flex flex-col font-semibold ml-9'> 
                                    <a> 1000.00 ETH</a>
                              </div>
                          </div>
                      </div>
                </div>
                <div className = 'latest-expense-exchange flex w-5/12 p-2 flex-col'>
                   <div className = 'expense-time/btn-wrapper flex w-full flex-col items-center'>
                     <div className = 'time-wrapper p-2 w-fit justify-center items-center ml-20 rounded-md ml-9 flex '>
                       <div className = 'time pl-0.5 pr-0.5 text-xs font-extrabold'>
                          <a>8 hours ago</a>
                       </div>
                     </div>
                     <div className = 'expense-time-text flex items-center p-4 text-sm font-semibold'>
                        <h2>Bitcoin BTC</h2> 
                            <div className = 'flex ml-2 mr-2'>
                              <img src = {trans} className = 'trans' /> 
                            </div>
                             <h2>
                              Bank Transfer NGN
                             </h2>
                     </div>
                   </div>
                   <div className = 'latest-transfer-wrapper justify-center flex mt-8'>
                      <div className = 'transfer-header text-sm font-extrabold flex items-center'>
                        <h1>1.16 BTC </h1>
                          <div className = 'exp-img-wrapper flex flex-col pl-2 pr-2'>
                            <div className = 'flex'><img src = {trans}/></div>
                            <div className = 'flex'><img src = {vec}/></div>
                          </div>
                        <h1>696152299929.23 NGN</h1>
                      </div>
                   </div>
                   <div className = 'latest-card-wrapper flex justify-center p-6'>
                     <div className = 'amazon-text-wrapper text-sm font-extrabold items-center flex'>
                       <h1>Amazon Card</h1>
                       <div className = 'pl-2 pr-2'><img src = {trans} /></div>
                       <h1>Bank Transfer NGN</h1>
                     </div>
                   </div>
                </div>
              </div>
            </div>
        </div>
        <div className="custom-shape-divider-bottom-1691862652">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill2"></path>
          </svg>
        </div>
      </div>
      <div className = 'experience-wrapper p-9 m-4'>
        <div className = 'experience-container items-center p-4 flex'>
          <div className = 'experience-text-wrapper ml-24 flex flex-col w-3/6'>
            <div className = 'experience-text leading-8'>
              <h1 className = 'text-2xl w-3/6 mb-4'>
                Great experience with Coinbase
              </h1>
              <p className = 'font-semibold'>
              CoinBase is an online site and a p2admin platform that allows users to buy,
                sell and/ or exchange digital and fiat assets safely.
                Owned and managed by CoinBase Business Services
                  established and Incoperated in Nigeria.
              </p>  
            </div>
            <div className = 'experience-button-wrapper mt-4 flex'>
              <div className = 'flex experience-button p-4 rounded-3xl font-extrabold text-sm pl-8 pr-8 tracking-wide text-white'>
                <a>Discover</a>
              </div>
            </div>
          </div>
          <div className = 'experince-widget-wrapper ml-16 p-4 mr-24'>
              <div className = 'experience-image'>
                <img src = {nel} className = 'nel' />
              </div>
          </div>
        </div>
      </div>
      <div className = 'blog-wrapper flex flex-col'>
         <div className = 'blog-container'>
         <div className="custom-shape-divider-bottom-1692466551">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
            </svg>
          </div>
         </div>
         <div className = 'blog-wrapper-widget'>
            <div className = 'blog-wrapper-trade'>
               <div className = 'blog-text'>
                 <h1 className = 'text-2xl pb-2 font-semibold pt-4'>Trade from anywhere</h1>
               </div>
               <div className = 'blog-currency-wrapper'>
                  <div className = 'blog-btc-container'>
                    <div className = 'blog-btc mb-4 mt-4 flex flex-col items-center font-semibold p-6'>
                        <div>
                          <img src = {bitcoin}/>
                        </div>
                        <div className = 'mt-4'>
                            <a>Bitcoin</a>
                        </div>   
                      </div>    
                  </div>
                  <div className = 'blog-gc-container'>
                     <div className = 'blog-gc  mb-4 mt-4 flex-col flex items-center font-semibold p-6'>
                        <div className = 'mt-2'>
                            <img src = {gtc}/>
                        </div>
                        <div>
                          <a>Gift cards</a>
                        </div>  
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className = 'blog-crypto-wrapper m-9 mt-20'>
        <div className = 'blog-crypto-container flex flex-col items-center'>
           <div className = 'blog-crypto-text'>
              <h1 className = 'text-2xl pb-2 font-semibold pt-4'>Our blog</h1>
              <a className = 'font-semibold'>Get to know the latest stuff via our blog post.</a>
           </div>
           <div className = 'blog-card-gen-wrapper flex'>
              <div className = 'blog-crypto-cards flex flex-col'>
                  <div className = 'blog-card-tech flex p-4'>
                    <div className = 'tech-wrapper2'>
                        <div className = 'blog-tech-text-wrapper text-xs flex items-center font-semibold'>
                            <h4>19 MARCH, 2023</h4>
                            <div className = 'break ml-2 mr-2'>
                              <img src= {brk} />
                            </div>
                            <h1>TECHNOLOGY</h1>
                        </div>
                        <h1 className = 'text-2xl pb-2 font-semibold color-text pt-4'>
                            HOW TO SELL YOUR ITUNES GIFTCARD WITH US.
                        </h1>
                        <a className = 'font-semibold mt-2'>
                        Lorem ipsum dolor sit amet, magna habemus
                        ius ad, qui minimum voluptaria in. Ad mei modus 
                        quodsi complectitur, postea...
                        </a>
                    </div>
                  </div>
                  <div className = 'blog-crypto-button2 flex mt-2 p-4 rounded-3xl w-fit font-extrabold text-xs pl-8 pr-8 tracking-wide text-white '>
                    <a>READ MORE</a>
                  </div>
              </div>
              <div className = 'blog-crypto-cards2 flex flex-col'>
                  <div className = 'blog-card-tech flex p-4'>
                    <div className = 'tech-wrapper'>
                        <div className = 'blog-tech-text-wrapper text-xs flex items-center font-semibold'>
                            <h4>19 MARCH, 2023</h4>
                            <div className = 'break ml-2 mr-2'>
                              <img src= {brk} />
                            </div>
                            <h1>BUSINESS</h1>
                        </div>
                        <h1 className = 'text-2xl pb-2 font-semibold color-text pt-4'>
                            ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER...
                        </h1>
                        <a className = 'font-semibold mt-2'>
                        Lorem ipsum dolor sit amet, magna habemus
                        ius ad, qui minimum voluptaria in. Ad mei modus 
                        quodsi complectitur, postea...
                        </a>
                    </div>
                  </div>
                  <div className = 'blog-crypto-button flex mt-2 p-4 rounded-3xl w-fit font-extrabold text-xs pl-8 pr-8 tracking-wide text-white '>
                    <a>READ MORE</a>
                  </div>
              </div>
              <div className = 'blog-crypto-cards3 flex flex-col'>
                  <div className = 'blog-card-tech flex p-4'>
                    <div className = 'tech-wrapper2'>
                        <div className = 'blog-tech-text-wrapper text-xs flex items-center font-semibold'>
                            <h4>19 MARCH, 2023</h4>
                            <div className = 'break ml-2 mr-2'>
                              <img src= {brk} />
                            </div>
                            <h1>LIFESTYLE</h1>
                        </div>
                        <h1 className = 'text-2xl pb-2 font-semibold color-text pt-4'>
                            EXCHANGE 5 PRODUCTS & GET 1 FREE PRODUCT.
                        </h1>
                        <a className = 'font-semibold mt-2'>
                        Lorem ipsum dolor sit amet, magna habemus
                        ius ad, qui minimum voluptaria in. Ad mei modus 
                        quodsi complectitur, postea...
                        </a>
                    </div>
                  </div>
                  <div className = 'blog-crypto-button2 flex mt-2 p-4 rounded-3xl w-fit font-extrabold text-xs pl-8 pr-8 tracking-wide text-white '>
                    <a>READ MORE</a>
                  </div>
              </div>
           </div>
        </div>
      </div>
      <div className = 'clients-wrapper'>
        <div className = 'clients-container flex flex-col items-center p-16'>
          <div className="custom-shape-divider-top-1692989402">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 119" preserveAspectRatio="none">
                  <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
              </svg>
          </div>
          <div className = 'client-text-wrapper flex flex-col items-center mt-36 text-center'>
            <div className= 'client-header'>
              <h1 className = 'text-2xl pb-2 font-semibold pt-4'>
                 10,000 Satisfied clients around the world
              </h1>
            </div>
              <div className = 'client-xheader pt-4'>
                <a className = 'text-white'>
                  Yeah! we're proud with numbers. We've helped thousands of clients
                  all around the world with our bespoke service. Hover ontop of them
                  pic to view their testimonies.
                </a>
              </div>
          </div>
          <div className = 'clients-widget-wrapper flex p-8 mb-8'>
              <div className = 'clients-widget'>
                 <img src= {clients} className = ''/>
              </div>
          </div>
          <div className="custom-shape-divider-bottom-1693053948">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
            </svg>
        </div>
        </div>
      </div>
      <div className = 'download-wrapper'>
        <div className = 'download-container flex flex-col items-center'>
           <div className = 'download-header'>
              <h1 className = 'text-2xl pb-2 font-semibold pt-4'>
                Download our app
              </h1>
           </div>
           <div className = 'download-xheader p-8'>
             <a className = 'w-fit text-center'>
               Discover exclusive deals and discounts with our mobile experience 
             </a>
           </div>
           <div className = 'download-widgets flex'>
             <div className = 'appstore bg-black p-2 rounded-md text-white m-2 flex'>
              <div className = 'download-link-iphone text-center flex'>
               <div>
                 <img src= {appimg} style = {downloadimg}/>
               </div>
               <div className = 'ml-2 flex-col flex'>
                  <a href = '' className = 'text-xs font-semibold'>
                      Download on the
                  </a>
                  <a href = '' className = 'text-sm font-semibold'>
                      App Store
                  </a>
               </div>
              </div>           
             </div>
             <div className = 'playstore bg-black p-2 text-white rounded-md m-2 flex'>
               <div className = 'download-link-android flex'>
                 <div>
                   <img src= {playimg} style = {downloadimg} />
                 </div>
                 <div className = 'ml-2 flex flex-col'>
                    <a href = '' className = 'text-xs font-semibold'>
                      Get it on
                    </a>
                    <a href = '' className = 'text-sm font-semibold'>
                      Google play
                    </a> 
                 </div>
               </div>
             </div>
           </div>
        </div>
      </div>
      <div className = 'exchange-wrapper'>
        <div className = 'exchange-container'>
            <div className="custom-shape-divider-top-1693087465">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 119" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
        <div className = 'exchange-widget-wrapper flex w-full items-center justify-center'>
          <div className = 'exchange-widget-container justify-center items-center w-full flex p-16'>
            <div className = 'exchange-widget p-2 flex'>
                <div className = 'x-1 p-2'>
                  <img src= {X1} />
                </div>
                <div className = 'x-2 p-2'>
                  <img src= {X2} />
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className = 'newsletter-wrapper m-4'>
        <div className = 'newsletter-container flex flex-col items-center'>
          <div className = 'newsletter-header'>
             <h1 className = 'text-2xl pb-2 font-semibold pt-4'>
              Subscribe to our newsletter
             </h1>
          </div>
          <div className = 'newsletter-xheader m-8 '>
           <a className = 'text-center'>  Subscribe to our newsletter for daily/weekly update of our product and services.</a>
          </div>
          <div className = 'newsletter-input-section flex p-4'>
            <input type="text" className = 'rounded-3xl p-4' placeholder = 'Email' />
              <div className = 'newsletter-button-wrapper flex'>
                <div className = 'newsletter-btn flex experience-button p-4 rounded-3xl font-extrabold text-sm pl-8 pr-8 tracking-wide text-white '>
                  <a>Discover</a>
                </div>
              </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainComponent
      