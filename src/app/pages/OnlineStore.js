"use client";
import React from "react";

export default function OnlineStore() {
  return (
    <div className="container mx-auto px-10 py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-black">Online Store</h2>
        <p className="text-xl text-gray-700 mt-4">
          တစ်နေရာတည်းတွင် အွန်လိုင်းမှ အရောင်းလုပ်ငန်းတည်ဆောက်ရန် အတွက် Kone Lone Shin ရဲ့ **Online Store Package** ကို ရွေးချယ်ပါ။
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="feature-card bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-black">E-commerce Platform</h3>
          <p className="text-gray-600 mt-2">
            Your complete online shopping platform with secure payment gateway integrations.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="feature-card bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-black">Customizable Themes</h3>
          <p className="text-gray-600 mt-2">
            Choose from a variety of modern and responsive themes to suit your brand's identity.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="feature-card bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-black">Mobile-Responsive</h3>
          <p className="text-gray-600 mt-2">
            Access your online store on any device, ensuring seamless user experience across platforms.
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <a href="#!" className="bg-blue-500 text-white px-8 py-4 rounded-full hover:bg-blue-600 transition">
          Get Started with Your Store
        </a>
      </div>
    </div>
  );
}
