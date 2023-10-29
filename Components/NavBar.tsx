import React from 'react'
import logo from '../images/Logo.png';
import menu from '../images/menu.png'

function NavBar() {
  return (
    <div>
        <div className = 'navbar-wrapper'>
            <div className = 'navbar flex justify-around m-4'>
                <div className = 'navbrand flex p-4 items-start'>
                    <div className = 'base-wrapper'>
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
                    <div className = 'dropdown-wrapper'>
                        <div className="dropdown-menu">
                          <img src={menu} className = 'menu-icon' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar
