import Container from "@/components/Layouts/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactUs = () => {
    return (
       
        <Container>
             <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#800020' }}>
            Contact Us
          </h1>
          <p className="text-lg text-gray-600">
            Have questions or need assistance? We're here to help you.
          </p>
        </section>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#800020] focus:ring-[#800020]"
                    placeholder="John Doe"
                  />
                </div>
  
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#800020] focus:ring-[#800020]"
                    placeholder="johndoe@example.com"
                  />
                </div>
  
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#800020] focus:ring-[#800020]"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
  
                <button
                  type="submit"
                  className="w-full bg-[#800020] text-white py-2 px-4 rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#800020]"
                >
                  Send Message
                </button>
              </form>
            </CardContent>
          </Card>
  
          {/* Contact Details */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Our Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">Address</h3>
                  <p className="text-gray-700">123 Civil Lane, Suite 456, Dhaka, Bangladesh</p>
                </div>
  
                <div>
                  <h3 className="text-lg font-medium">Phone</h3>
                  <p className="text-gray-700">0088180 456-7890</p>
                </div>
  
                <div>
                  <h3 className="text-lg font-medium">Email</h3>
                  <p className="text-gray-700">support@soulsync.com</p>
                </div>
  
                <div>
                  <h3 className="text-lg font-medium">Working Hours</h3>
                  <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        </Container>
       
      
    );
};

export default ContactUs;