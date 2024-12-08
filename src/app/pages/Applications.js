"use client";
import React from "react";

export default function Applications() {
  return (
    <div className="container mx-auto px-10 py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-black">Custom Applications</h2>
        <p className="text-xl text-gray-700 mt-4">
          မိတ်ဆွေရဲ့ လုပ်ငန်းလိုအပ်ချက်အလိုက် **Window Applications** ကို ဖန်တီးခြင်းအတွက် Kone Lone Shin ကို ဆက်သွယ်ပါ။
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="feature-card bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-black">Tailored to Your Business</h3>
          <p className="text-gray-600 mt-2">
            Custom-built applications designed to meet the specific needs of your business.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="feature-card bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-black">Integration with Existing Systems</h3>
          <p className="text-gray-600 mt-2">
            Seamless integration with your current software to enhance functionality.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="feature-card bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-black">Efficient Performance</h3>
          <p className="text-gray-600 mt-2">
            Optimize your business processes with high-performance applications.
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <a href="#!" className="bg-blue-500 text-white px-8 py-4 rounded-full hover:bg-blue-600 transition">
          Build Your Custom App
        </a>
      </div>
    </div>
  );
}
