import React from 'react'

function NormalShowCase() {
  return (
  <section className="bg-gray-950 text-white py-16 px-6 md:px-12">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Everything You Need to Build UI Smarter
    </h2>
    <p className="text-gray-400 text-lg mb-12">
      From saving components to remixing public designs, DirectCode UI gives you the tools to build faster, organize better, and collaborate effortlessly.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
      {[
        {
          title: "📁 Personal UI Library",
          desc: "Save your favorite components and organize them into collections. Access them anytime, from any device.",
        },
        {
          title: "🌐 Public Library",
          desc: "Explore UI elements shared by others. Like, remix, and learn from the community.",
        },
        {
          title: "📊 Engagement Metrics",
          desc: "Track views, likes, saves, and remix counts. Know what’s trending and what’s loved.",
        },
        {
          title: "🧩 Component Remixing",
          desc: "Fork any public component and make it your own. Customize styles, logic, and layout instantly.",
        },
        {
          title: "📱 Responsive Design",
          desc: "Preview components across screen sizes. Tailored layout for mobile, tablet, and desktop.",
        },
        {
          title: "🔍 Smart Search & Filters",
          desc: "Find components by tags, popularity, or recency. Filter by type, style, or author.",
        },
      ].map((feature, i) => (
        <div key={i} className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-300">{feature.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  )
}

export default NormalShowCase