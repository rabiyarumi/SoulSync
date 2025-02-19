import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from "../../assets/love.png"
import Container from './Container';

const Footer = () => {
    return (
        <footer className="bg-[#800020] text-white py-6">
       <Container>
       <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-6">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start md:w-1/3">
            <img src={logo} alt="Logo" className="h-24 " />
            <p className="text-center md:text-left">
              Welcome to our matrimonial page, where we help you find your perfect match with love and trust.
            </p>
          </div>
  
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <li><a href="/faq" className="hover:underline">FAQs</a></li>
            </ul>
          </div>
  
          {/* Social Media */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
  
        {/* Copyright Section */}
        <div className="text-center border-t border-gray-300 mt-6 pt-4">
          <p>&copy; {new Date().getFullYear()} Matrimonial Page. All rights reserved.</p>
        </div>
       </Container>
      </footer>
    );
};

export default Footer;