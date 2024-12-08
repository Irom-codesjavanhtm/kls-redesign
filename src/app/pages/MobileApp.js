"use client";
import React from "react";

export default function MobileApplication() {
  return (
    <div className="container mx-auto px-10 py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-black">Mobile Application</h2>
        <p className="text-xl text-gray-700 mt-4">
          မိတ်ဆွေရဲ့ ကိုယ်ပိုင် **Mobile Application** တစ်ခု ဖန်တီးရန် Kone Lone Shin ကို ဆက်သွယ်ပါ။
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="feature-card bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-black">Custom App Design</h3>
          <p className="text-gray-600 mt-2">
            Tailored design to match your brand’s unique identity and style.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="feature-card bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-black">Cross-Platform Development</h3>
          <p className="text-gray-600 mt-2">
            Apps built to work seamlessly on both iOS and Android platforms.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="feature-card bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-black">User-Focused Features</h3>
          <p className="text-gray-600 mt-2">
            Advanced features for a smooth and engaging user experience.
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <a href="#!" className="bg-blue-500 text-white px-8 py-4 rounded-full hover:bg-blue-600 transition">
          Create Your Mobile App Today
        </a>
      </div>
    </div>
  );
}
