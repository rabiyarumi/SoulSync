import Container from "@/components/Layouts/Container";
import SectionHeaders from "@/components/Layouts/SectionHeaders";
import { motion } from "framer-motion";
import { FaCheckCircle, FaStar, FaCrown } from "react-icons/fa";
const MembershipPlan = () => {
  const plans = [
    {
      title: "Basic Plan",
      price: "$9.99/month",
      icon: <FaCheckCircle className="text-4xl text-[#800020]" />,
      features: [
        "Access to limited profiles",
        "Basic matchmaking",
        "5 messages per day",
        "Standard support",
      ],
    },
    {
      title: "Premium Plan",
      price: "$19.99/month",
      icon: <FaStar className="text-4xl text-[#800020]" />,
      features: [
        "Unlimited profile access",
        "Advanced matchmaking",
        "Unlimited messaging",
        "Priority support",
      ],
    },
    {
      title: "Elite Plan",
      price: "$29.99/month",
      icon: <FaCrown className="text-4xl text-[#800020]" />,
      features: [
        "Exclusive profile visibility",
        "VIP matchmaking",
        "Personal relationship advisor",
        "24/7 premium support",
      ],
    },
  ];
  return (
    
    <Container>
        <SectionHeaders title={"Choose Our"} coloredTitle={"Plan"}/>
     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  w-full mx-auto mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white shadow-lg rounded-xl p-6 text-center border-t-4 border-[#800020] overflow-hidden"
            >
              <div className="flex justify-center mb-4">{plan.icon}</div>
              <h3 className="text-xl font-bold text-[#800020]">{plan.title}</h3>
              <p className="text-lg text-gray-600 font-semibold mt-2">
                {plan.price}
              </p>
              <ul className="mt-4 text-sm text-gray-600 space-y-2">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-center gap-2"
                  >
                    <FaCheckCircle className="text-green-500" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 px-5 py-2 bg-[#800020] text-white font-bold rounded-lg hover:bg-[#660017] transition">
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      
      </Container>
      
    
  );
};

export default MembershipPlan;
