"use client";
import React from "react";

export default function CMSPackage() {
  return (
    <div className="container mx-auto px-10 py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-black">CMS Package</h2>
        <p className="text-xl text-gray-700 mt-4">
          မိတ်ဆွေတို့၏ website ကို အလွယ်တကူ ပြင်ဆင်နိုင်ရန် Kone Lone Shin ရဲ့ **CMS Package** ကို ရွေးချယ်ပါ။
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="feature-card bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-black">Easy Content Management</h3>
          <p className="text-gray-600 mt-2">
            Easily add, edit, and manage content with a simple drag-and-drop editor.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="feature-card bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-black">SEO Optimization</h3>
          <p className="text-gray-600 mt-2">
            Boost your site's visibility and improve search engine rankings with built-in SEO tools.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="feature-card bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-black">Real-Time Updates</h3>
          <p className="text-gray-600 mt-2">
            Update your website in real time with no downtime or interruption in service.
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <a href="#!" className="bg-blue-500 text-white px-8 py-4 rounded-full hover:bg-blue-600 transition">
          Start Managing Your Content
        </a>
      </div>
    </div>
  );
}
