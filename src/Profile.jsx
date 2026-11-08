import React from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import { useState } from 'react'

function Profile() {
    const [playVideo, setPlayVideo] = useState(false)
  return (
    <>

      {/* Main Section */}
      <main className="flex flex-col md:flex-row w-full md:h-[calc(100vh-75px)] border-4 border-white">

        {/* Left Section */}
        <div className="w-full md:w-2/5 h-[60vh] md:h-full bg-black border-2 border-white overflow-hidden">

        <iframe
            src="https://assets.pinterest.com/ext/embed.html?id=663295851418022650"
            className="w-full h-full border-0"
            title="Diwali Celebration Video"
            allow="autoplay; fullscreen"
            allowFullScreen
        ></iframe>

        </div>

        {/* Right Section - Diwali Greeting */}
        <div className="w-full md:w-3/5 md:h-full min-h-[550px] bg-yellow-500 flex flex-col items-center justify-center text-center px-6 md:px-10 py-10">

          <p className="text-sm md:text-lg font-semibold tracking-[5px] text-orange-800">
            ✨ FESTIVAL OF LIGHTS ✨
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-red-800 mt-6">
            Happy Diwali
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-orange-900 mt-4">
            शुभ दीपावली 🪔
          </h2>

          <p className="text-base md:text-lg text-gray-900 mt-8 leading-8 max-w-xl">
            May this Diwali bring endless happiness, prosperity,
            peace and success into your life.
            Let the lights of Diyas brighten your world
            and remove all darkness.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-red-800 mt-8">
            Light Up Your Life!
          </h3>

        <button
            onClick={() => setPlayVideo(true)}
            className="mt-8 bg-red-800 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-900 transition duration-300">
            Celebrate Diwali ✨
        </button>
          <p className="mt-10 text-sm text-orange-900">
            🪔 Spread Love • Share Happiness • Celebrate Together 🪔
          </p>

        </div>
      </main>

    </>
  )
}

export { Profile, Navbar, Footer }