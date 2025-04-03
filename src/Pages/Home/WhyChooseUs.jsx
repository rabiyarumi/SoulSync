import { Card } from "@/components/ui/card";
import image from "../../assets/married-2.webp";
import { FaUserCheck, FaHeadset, FaChartLine, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import { Section } from "lucide-react";
import Container from "@/components/Layouts/Container";
import SectionHeaders from "@/components/Layouts/SectionHeaders";


const WhyChooseUs = () => {

    const features = [
        {
          icon: <FaUserCheck className="text-4xl text-[#800020]" />, 
          title: "Human Verified Profiles", 
          description: "We ensure every profile is thoroughly verified through multiple steps, giving you the confidence that you are connecting with real, genuine individuals who are truly serious about finding their perfect match.",
        },
        {
          icon: <FaHeadset className="text-4xl text-[#800020]" />, 
          title: "24/7 Support", 
          description: "Our dedicated support team is available at all hours of the day and night to assist you with any inquiries, technical issues, or concerns, ensuring a seamless and stress-free experience whenever you need it.",
        },
        {
          icon: <FaChartLine className="text-4xl text-[#800020]" />, 
          title: "High Success Rate", 
          description: "Thousands of happy couples have found their life partners through our platform. Our advanced matchmaking system and personalized recommendations make finding the right person easier than ever before.",
        },
        {
          icon: <FaLock className="text-4xl text-[#800020]" />, 
          title: "Privacy & Security", 
          description: "We prioritize the safety of your personal information. With advanced encryption and strict privacy policies, your data and conversations remain secure, ensuring a safe and trustworthy matchmaking experience.",
        },
      ];

  return (
    <Container>
      <SectionHeaders title={"Why "} coloredTitle={"Choose Us"} />

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8  w-full mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative bg-white shadow-lg rounded-xl p-6 text-center flex flex-col items-center border-t-4 border-[#800020] overflow-hidden"
          >
            {/* Moon Shape Border */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-12 bg-[#800020] rounded-full"></div>
            
            <p className="mt-3">{feature.icon}</p>
            <h3 className="text-xl font-bold text-[#800020] mt-4">{feature.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
   

      {/* <div className="flex justify-center items-center   my-24">
        <div className="relative max-w-4xl w-full flex justify-center items-center flex-wrap gap-6">
         
          <div className="w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden border-8 border-[#800020] shadow-xl relative z-10">
            <img
              src={image}
              alt="Why Choose Us"
              className="w-full h-full object-cover"
            />
          </div>

          
          <Card className="absolute top-[-80px] left-[0px] lg:left-[-100px]  p-5 bg-white shadow-lg rounded-xl border-t-4 border-[#800020]  flex flex-col ">
            <FaUserCheck className="text-3xl text-[#800020] mb-2" />
            <h3 className="text-lg font-bold text-[#800020]">
              Human Verified Profiles
            </h3>
            <p className="text-sm text-gray-600 mt-1 w-72">
            We ensure that every profile goes through a strict verification process,
            </p>
          </Card>

          <Card className="absolute top-[-80px] right-[0px]  p-5 bg-white shadow-lg rounded-xl border-t-4 border-[#800020] text-center flex flex-col items-center">
            <FaHeadset className="text-3xl text-[#800020] mb-2" />
            <h3 className="text-lg font-bold text-[#800020]">24/7 Support</h3>
            <p className="text-sm text-gray-600 mt-1">
              We’re always here to assist you.
            </p>
          </Card>

          <Card className="absolute bottom-[-80px] left-[0px] p-5 bg-white shadow-lg rounded-xl border-t-4 border-[#800020] text-center flex flex-col items-center">
            <FaChartLine className="text-3xl text-[#800020] mb-2" />
            <h3 className="text-lg font-bold text-[#800020]">
              High Success Rate
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Thousands have found their match.
            </p>
          </Card>

          <Card className="absolute bottom-[-80px] right-[0px]  p-5 bg-white shadow-lg rounded-xl border-t-4 border-[#800020] text-center flex flex-col items-center">
            <FaLock className="text-3xl text-[#800020] mb-2" />
            <h3 className="text-lg font-bold text-[#800020]">
              Privacy & Security
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Your data is safe with us.
            </p>
          </Card>
        </div>
      </div> */}
    </Container>
  );
};

export default WhyChooseUs;
