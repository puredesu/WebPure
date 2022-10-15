import React from 'react'
import logo from './img/logo.png'

export default function NavBar() {
  return (
    <nav className="font-robotomono font-normal drop-shadow relative px-4 py-4 bg-gray-50 lg:px-32">
    <div className="flex items-center justify-between">
        <div className="flex items-center justify-between gap-x-8">
            <button><img className="logo transition ease-in-out duration-200 hover:scale-110" src={logo} alt="WebPure"/></button>
            <div className="hidden justify-between gap-x-3 lg:flex">
                <a className="transition ease-in-out duration-100 rounded-xl py-2 px-4 hover:bg-gray-200 hover:text-indigo-500" href="#">About</a>
                <a className="transition ease-in-out duration-100 rounded-xl py-2 px-4 hover:bg-gray-200 hover:text-indigo-500" href="#">Projects</a>
                <a className="transition ease-in-out duration-100 rounded-xl py-2 px-4 hover:bg-gray-200 hover:text-indigo-500" href="#">Contact</a>
            </div>
        </div>
        <div className="hidden items-center justify-between gap-x-3 md:flex">
            <a className="transition ease-in-out duration-100 rounded-xl py-2 px-4 hover:bg-gray-200 hover:text-indigo-500" href="#">Login</a>
            <a className="transition ease-in-out duration-100 rounded-xl py-2 px-4 bg-indigo-500 text-white hover:bg-gray-200 hover:text-indigo-500" href="#">Register</a>
        </div>
    </div>
  </nav>
  /*     <div class="grid place-content-center place-items-center h-screen">
    <button onClick={start}><img class="logo transition ease-in-out duration-200 hover:scale-110" src={logo} alt="WebPure"/></button>
    <p class="font-robotomono font-thin text-xs">Click to Start!</p>
    </div> */
  )
}
