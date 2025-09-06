export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white h-[80vh] flex flex-col justify-center items-center text-center px-4"
    >
      <h2 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
        Welcome to PlacementHub
      </h2>
      <p className="text-lg mb-6 max-w-2xl">
        Your one-stop platform to prepare, practice, and succeed in college
        placements. Explore resources, mock tests, and more.
      </p>
      <a
        href="#services"
        className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-yellow-300 transition"
      >
        Get Started
      </a>
    </section>
  );
}