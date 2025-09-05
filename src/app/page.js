export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      
      {/* Navbar */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">PlacementHub</h1>
        <nav>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">Practice</a></li>
            <li><a href="#" className="hover:text-blue-600">Resources</a></li>
            <li><a href="#" className="hover:text-blue-600">About</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center flex-grow py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <h2 className="text-5xl font-extrabold text-blue-700 mb-4">
          Welcome to PlacementHub 🚀
        </h2>
        <p className="text-lg text-gray-700 max-w-xl mb-6">
          Your one-stop platform to practice coding, aptitude, and prepare for interviews.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p className="text-sm">
          © 2025 PlacementHub | All Rights Reserved
        </p>
      </footer>
    </main>
  );
}