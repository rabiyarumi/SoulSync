import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/Layouts/Container";
import { Button } from "@/components/ui/button";
import SectionHeaders from "@/components/Layouts/SectionHeaders";

const AboutUs = () => {
    return (
        <Container>
      <section className="pb-10">
        <div className="text-center mb-10">
            <SectionHeaders title={""} coloredTitle={"About Us"}/>
          
          <p className="text-lg text-gray-600 -mt-6">
            Welcome to our matrimonial platform, where connections are built with trust and love.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-[#800020]">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Our mission is to connect individuals and families, fostering meaningful relationships that last a lifetime.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-[#800020]">What We Offer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                We provide a secure and user-friendly platform for finding your ideal life partner, with advanced filters and privacy options.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-[#800020]">Why Choose Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                With verified profiles, personalized recommendations, and dedicated support, we ensure a seamless matchmaking experience.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
          <p className="text-gray-600 mb-6">
            Become a part of our growing family and take the first step towards a happy and fulfilling married life.
          </p>
          <Button className=" ">
            Register Now
          </Button>
        </div>
      </section>
    </Container>
    );
};

export default AboutUs;