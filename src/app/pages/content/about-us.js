import React from 'react';

export default function AboutUs() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* About Us Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-black">About Us</h2>
        <p className="text-xl text-gray-600 mt-4">
          We are a passionate team dedicated to providing the best digital solutions for your business.
        </p>
      </div>

      {/* Our Mission */}
      <div className="text-center mb-16">
        <h3 className="text-3xl font-semibold text-black">Our Mission</h3>
        <p className="text-lg text-gray-600 mt-4">
          At Kone Lone Shin, we strive to empower businesses with innovative digital solutions,
          ensuring growth and success in the ever-evolving digital landscape.
        </p>
      </div>

      {/* Services Section */}
      <div className="pb-12">
        <h3 className="text-3xl font-semibold text-black text-center mb-8">Our Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-black mb-4">CMS Development</h4>
            <p className="text-gray-600">
              We offer customized Content Management System (CMS) development that helps manage and update websites effortlessly.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-black mb-4">E-Commerce Solutions</h4>
            <p className="text-gray-600">
              Launch your online store with our full-featured e-commerce solutions. Secure, scalable, and customizable for your business needs.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-black mb-4">Mobile App Development</h4>
            <p className="text-gray-600">
              We build cross-platform mobile applications that ensure a seamless user experience across all devices.
            </p>
          </div>
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div>
        <h3 className="text-3xl font-semibold text-black text-center mb-8">Meet Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="text-center">
            <img src="/assets/team-member-1.jpg" alt="Team Member 1" className="w-40 h-40 mx-auto rounded-full mb-4" />
            <h4 className="text-xl font-semibold text-black">Yin Khine</h4>
            <p className="text-gray-600">CEO & Founder</p>
          </div>

          {/* Team Member 2 */}
          <div className="text-center">
            <img src="/assets/team-member-2.jpg" alt="Team Member 2" className="w-40 h-40 mx-auto rounded-full mb-4" />
            <h4 className="text-xl font-semibold text-black">May Htike Swe</h4>
            <p className="text-gray-600">Product Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}
