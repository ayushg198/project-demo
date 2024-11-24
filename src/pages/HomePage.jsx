import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Home/Hero'; // Adjust the path as needed

function HomePage() {
  return (
    <div className="sm:bg-[#8ecae6] min-h-screen p-4">
      <Hero />
      {/* Other content for the HomePage */}
    </div>
  );
}

export default HomePage;
