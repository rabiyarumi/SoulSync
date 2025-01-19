import { Button } from "@/components/ui/button";

const Home = () => {
    return (
        <div className="bg-[#FFFDF6] min-h-screen">
        {/* Navbar */}
        <nav className="bg-[#B76E79] text-white p-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold">SoulSync</h1>
            <div>
              <button className="bg-[#F7E7CE] text-[#B76E79] px-4 py-2 rounded-full hover:bg-[#F9EAD8]">
                Sign Up
              </button>
            </div>
          </div>
        </nav>

        <Button variant="destructive">Click Me</Button>
  
        {/* Hero Section */}
        <header className="flex flex-col items-center justify-center text-center py-20">
          <h2 className="text-5xl font-bold text-[#3A3A3A] mb-4">
            Find Your Forever Love
          </h2>
          <p className="text-lg text-[#5A5A5A] max-w-2xl mx-auto">
            Start your journey to lifelong happiness with SoulSync, the most trusted matrimony platform.
          </p>
          <button className="mt-8 bg-[#B76E79] text-white px-6 py-3 rounded-full text-lg hover:bg-[#A65E6A]">
            Get Started
          </button>
        </header>
  
        {/* Features Section */}
        <section className="py-12 bg-[#F7E7CE]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-[#3A3A3A] mb-2">Secure Platform</h3>
              <p className="text-[#5A5A5A]">
                Your privacy and security are our top priorities.
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-[#3A3A3A] mb-2">Verified Profiles</h3>
              <p className="text-[#5A5A5A]">
                Every profile is thoroughly verified for authenticity.
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-[#3A3A3A] mb-2">Perfect Match</h3>
              <p className="text-[#5A5A5A]">
                Advanced algorithms ensure you find your soulmate.
              </p>
            </div>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="bg-[#B76E79] text-white py-4 text-center">
          <p>&copy; 2025 SoulSync. All rights reserved.</p>
        </footer>
      </div>
    );
};

export default Home;