import React from 'react'
import phone  from "../images/phone.png";

function MainContent() {
  return (
    <div>
        <div className = 'main-container-wrapper flex-col p-20 items-center flex h-screen'>
            <div className = 'briefing-container items-center flex'>
                <div className = 'briefing-text-wrapper text-4xl text-white ml-9'>
                    <div className = 'briefing-text w-10/12'>
                        <div>
                            <h1 className = 'leading'>
                                We provide easy solution to exchange your
                                <span className = 'font-semibold'> Bitcoin/Giftcard for money</span>
                            </h1>
                        </div>
                        <div>
                            <a className = 'text-sm lg'>
                                Coinbase is a platform for trading your bitcoin and giftcard
                                at the best rate
                            </a>
                        </div>
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
                    className="shape-fill">
                    </path>
                </svg>
            </div>
            <div className="custom-shape-divider-bottom-1695056794">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 119" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="custom-shape-divider-bottom-1698540385">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 118" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
    </div>
  )
}

export default MainContent
