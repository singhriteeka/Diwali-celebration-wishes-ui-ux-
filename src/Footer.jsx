import React from 'react'

function Footer() {
  return (
    <footer className="w-full bg-red-950 text-yellow-100 px-8 py-8">

      <div className="flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-yellow-400">
            🪔 Diwali Celebrations
          </h2>
          <p className="text-sm mt-2 text-yellow-100">
            Spreading light, love and happiness.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex gap-6 text-sm font-semibold">
          <a href="#" className="hover:text-yellow-400 transition">Home</a>
          <a href="#" className="hover:text-yellow-400 transition">About</a>
          <a href="#" className="hover:text-yellow-400 transition">Celebration</a>
        </div>

      </div>

      <hr className="border-yellow-700 my-6" />

      {/* Copyright */}
      <div className="text-center text-sm text-yellow-300">
        <p>🪔 May your life shine as bright as the Diwali lights!</p>
        <p className="mt-3">
          © 2026 Diwali Celebrations. All Rights Reserved.
        </p>
        <p className="mt-2">
          Made with ❤️ and festive vibes.
        </p>
      </div>

    </footer>
  )
}

export default Footer