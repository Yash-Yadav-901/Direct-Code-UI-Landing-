import React from 'react'

function RealTimeShowCase() {
  return (
    <div><section className="bg-gray-950 text-white py-16 px-6 md:px-12">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Real-Time Collaboration
    </h2>
    <p className="text-gray-400 text-lg mb-8">
      Edit together, preview instantly, and chat live. Build UI components with your team in real time—no refresh, no delay.
    </p>

    {/* Demo Video */}
    <div className="relative w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
      <video
        src="/videos/realtime-demo.mp4" // Replace with your actual video path
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto"
      />
      <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-xs text-white px-2 py-1 rounded">
        Live demo of real-time collaboration
      </div>
    </div>
  </div>
</section>
</div>
  )
}

export default RealTimeShowCase