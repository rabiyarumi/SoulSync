import Container from '@/components/Layouts/Container';
import { FaHandshake, FaRegHeart, FaUsers } from 'react-icons/fa';
const HowItWorks = () => {
    return (
       <Container>
         <section className="">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#800020] mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#800020] text-white p-6 rounded-lg shadow-lg">
            <FaHandshake className="text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Create Your Profile</h3>
            <p>Sign up and create your personalized profile to start your journey of finding the perfect match.</p>
          </div>
          <div className="bg-[#800020] text-white p-6 rounded-lg shadow-lg">
            <FaRegHeart className="text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Match with Others</h3>
            <p>Browse through profiles, connect with potential partners, and express interest in your ideal match.</p>
          </div>
          <div className="bg-[#800020] text-white p-6 rounded-lg shadow-lg">
            <FaUsers className="text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Find Your Soulmate</h3>
            <p>Once you've connected, engage in conversations, get to know each other, and take your next step towards love.</p>
          </div>
        </div>
      </div>
    </section>
       </Container>
    );
};

export default HowItWorks;