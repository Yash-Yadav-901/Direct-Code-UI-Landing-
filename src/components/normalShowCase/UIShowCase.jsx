import React from 'react'

function UIShowCase() {
  return (
    <section className="bg-gray-950 text-white py-16 px-6 md:px-12">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Eye-Catching UI Elements
    </h2>
    <p className="text-gray-400 text-lg mb-12">
      Explore beautifully animated buttons, toggles, and loaders crafted by our community. Every component is reusable, remixable, and built for performance.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {/* Example Button Cards */}
      <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition">
        <h3 className="text-xl font-semibold mb-2">🔥 Hover Glow Button</h3>
        <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-lg hover:scale-105 transition-transform">
          Hover Me
        </button>
      </div>

      <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition">
        <h3 className="text-xl font-semibold mb-2">⏳ Loading Button</h3>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-full relative overflow-hidden">
          <span className="absolute left-0 top-0 w-full h-full animate-pulse bg-blue-700 opacity-25"></span>
          Loading...
        </button>
      </div>

      <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition">
        <h3 className="text-xl font-semibold mb-2">🎛️ Toggle Switch</h3>
        <div className="flex items-center justify-center">
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-green-500 relative">
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>
            </div>
          </label>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default UIShowCase