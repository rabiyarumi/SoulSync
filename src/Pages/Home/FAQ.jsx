import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import SectionHeaders from "@/components/Layouts/SectionHeaders";
import Container from "@/components/Layouts/Container";
const FAQ = () => {

    const faqs = [
        {
          question: "How do I create a profile?",
          answer: "Simply sign up, fill in your details, and upload a profile picture to start your journey.",
        },
        {
          question: "Is this platform free to use?",
          answer: "Yes, you can browse profiles and connect with others for free. Some premium features may require a subscription.",
        },
        {
          question: "How can I match with someone?",
          answer: "You can browse through profiles, send an interest request, and start chatting with potential matches.",
        },
        {
          question: "Is my personal data safe?",
          answer: "Yes, we use advanced encryption to protect your data and never share it without your consent.",
        },
        {
          question: "Can I delete my profile anytime?",
          answer: "Yes, you can delete your profile permanently from the settings page at any time.",
        },
      ];
    
      const [openIndex, setOpenIndex] = useState(null);


    return (
        
            <Container>
            
            <SectionHeaders  title={"Frequently Asked "} coloredTitle={"Questions"}/>
          {/* <p className="text-gray-600 mb-8">Find answers to the most common questions about our platform.</p> */}
      
  
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left text-lg font-medium text-gray-800"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <FaChevronDown
                  className={`transition-transform duration-300 text-[#800020] ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <motion.div
                className="overflow-hidden"
                initial={{ opacity: 0, maxHeight: 0 }}
                animate={{
                  opacity: openIndex === index ? 1 : 0,
                  maxHeight: openIndex === index ? 1000 : 0, // Controls the height animation
                }}
                transition={{
                  opacity: { duration: 0.3 },
                  maxHeight: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                {openIndex === index && (
                  <div className="p-4 text-gray-600 border-t">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
        </Container>
    );
};

export default FAQ;