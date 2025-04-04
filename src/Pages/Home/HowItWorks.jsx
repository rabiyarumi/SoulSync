import { motion } from "framer-motion";
import Container from "@/components/Layouts/Container";
import SectionHeaders from "@/components/Layouts/SectionHeaders";
import { FaHandshake, FaRegHeart, FaUsers } from "react-icons/fa";


const HowItWorks = () => {

  const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: { boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" },
};


  return (
    <Container>
    <section className="py-12">
      <div className="mx-auto text-center w-full">
        <SectionHeaders title="" coloredTitle="How It Works" />

        {/* Animated Grid Container */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // Triggers when 20% is visible
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
        >
          {/* Card 1 */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-[#800020] text-white p-6 rounded-lg shadow-lg"
          >
            <FaHandshake className="text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Create Your Profile</h3>
            <p>
              Sign up and create your personalized profile to start your
              journey of finding the perfect match.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-[#800020] text-white p-6 rounded-lg shadow-lg"
          >
            <FaRegHeart className="text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Match with Others</h3>
            <p>
              Browse through profiles, connect with potential partners, and
              express interest in your ideal match.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-[#800020] text-white p-6 rounded-lg shadow-lg"
          >
            <FaUsers className="text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Find Your Soulmate</h3>
            <p>
              Once you've connected, engage in conversations, get to know each
              other, and take your next step towards love.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  </Container>
  );
};

export default HowItWorks;
