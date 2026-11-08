import React from 'react'

function Navbar() {
  return (
    <nav className="w-full h-[75px] bg-red-950 text-yellow-100 flex justify-between items-center px-8 shadow-lg">

      {/* Logo */}
      <div className="text-2xl font-bold text-yellow-400">
        🪔 Deepavali
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-10 text-lg font-semibold">

        <a href="#" className="hover:text-yellow-400 transition duration-300">
          Home
        </a>

        {/*<a href="#" className="hover:text-yellow-400 transition duration-300">
          About
        </a>*/}

        <a href="#" className="hover:text-yellow-400 transition duration-300">
          Celebrations
        </a>

        <a href="#" className="hover:text-yellow-400 transition duration-300">
          Wishes
        </a>

      </div>

      {/* Button */}
      <button className="bg-yellow-400 text-red-950 px-5 py-2 rounded-full font-bold hover:bg-yellow-300 transition duration-300">
        Celebrate ✨
      </button>

    </nav>
  )
}

export default Navbar