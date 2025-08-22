export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="p-5 bg-white shadow-md flex justify-between">
        <h1 className="text-2xl font-bold">Roshan Shirke</h1>
        <ul className="flex gap-6">
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#blog" className="hover:text-blue-500">Blog</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h2 className="text-5xl font-bold mb-4">Hi, I'm Roshan 👋</h2>
        <p className="text-lg max-w-2xl">
          A passionate Web Developer (MERN / Next.js) exploring full stack development and digital innovation.
        </p>
      </section>

      {/* About */}
      <section id="about" className="p-10 max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold mb-4">About Me</h3>
        <p>
          I am a fresher pursuing MCA (2024–26) with skills in Java, Python, C++, React, and Next.js.
          I love building end-to-end applications, automating workflows, and working on exciting projects.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="p-10 bg-gray-200">
        <h3 className="text-3xl font-semibold mb-6 text-center">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h4 className="text-xl font-bold">Portfolio Website</h4>
            <p>Personal website showcasing projects and blog.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h4 className="text-xl font-bold">Stock Market Automation</h4>
            <p>Automated stock market analytics with n8n + APIs.</p>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="p-10 max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold mb-6">Blog</h3>
        <p>Coming soon... 🚀 I’ll share tutorials and my learning journey here.</p>
      </section>

      {/* Contact */}
      <section id="contact" className="p-10 bg-gray-800 text-white text-center">
        <h3 className="text-3xl font-semibold mb-4">Contact</h3>
        <p>Email: roshanshirke6735@gmail.com</p>
        <p>LinkedIn: <a href="#" className="text-blue-400">Your LinkedIn</a></p>
      </section>
    </main>
  );
}
