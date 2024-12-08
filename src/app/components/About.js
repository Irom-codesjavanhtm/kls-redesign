"use client";
import React from "react";
import Link from 'next/link';
import Projects from "../pages/Projects";

export default function About() {
  return (
    <div className="container mx-auto px-10 bg-white" id="about">
      {/* Header Section */}
      <div className="text-center mb-12 py-12">
        <p className="text-2xl text-black mt-4">
          &quot; အကောင်းမွန်ဆုံး ဝန်ဆောင်မှုတွေနဲ့ <span className="text-lime-400 font-semibold">Kone Lone Shin</span> မှ ကြိုဆိုပါတယ် &quot;
        </p>
        <div className="flex justify-center items-center">
            <span className="block w-11/12 border-b border-gray-400 py-7"></span>
        </div>
    </div>

    <div className="pb-5">
        <h2 className="text-4xl font-semibold text-black">Our Services</h2>
    </div>

      {/* Service Sections */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-8">
        {/* Service 1 */}
        <div className="service-card bg-white shadow hover:shadow-2xl transition-all duration-200 rounded-lg p-6">
          <div className="service-icon text-center">
          </div>
          <h3 className="text-xl font-semibold text-center mt-4 text-black py-3">Online Store</h3>
          <p className="text-left text-black mt-2">
            အခန်းငှားခ၊ နေရာအတွက် စိတ်ပူစရာမလိုပဲ… မိတ်ဆွေရဲ့ စီးပွားရေးကို အလွယ်တကူ စတင်ချင်ရင် Kone Lone Shin ရဲ့ Online Store Package လေးကို ရွေးချယ်ပါ။ မည်သည့် နေရာမှ မဆို အွန်လိုင်းမှ အရောင်းလုပ်ငန်းကို စတင်လိုက်ပါ!
          </p>
          <div className="text-center mt-4">
            <div className="text-center mt-4 text-black py-4 px-2 border-2 border-lime-300 rounded-lg transition-all duration-300 hover:bg-lime-600 hover:text-white hover:border-lime-600">
              <Link href="/OnlineStore">
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>

        {/* Service 2 */}
        <div className="service-card bg-white shadow hover:shadow-2xl transition-all duration-200 rounded-lg p-6">
          <div className="service-icon text-center">
          </div>
          <h3 className="text-xl font-semibold text-center mt-4 text-black py-3">CMS Package</h3>
          <p className="text-left text-black mt-2">
            မိတ်ဆွေရဲ့ ကိုယ်ပိုင် website ကို အလွယ်တကူ ကိုယ်တိုင်ပြင်ချင်ရင် CMS Package လေးကို ရွေးချယ်လိုက်ပါ။ အရည်အသွေးမြင့်၊ လွယ်ကူသည့် Content Management System ဖြင့် မိတ်ဆွေရဲ့ ဝဘ်ဆိုက်ကို ပြင်ဆင်ခြင်းနှင့် အဆင့်မြင့်စီမံခန့်ခွဲမှုကို လက်ခံပါ။
          </p>
          <div className="text-center mt-4">
            <div className="text-center mt-4 text-black py-4 px-2 border-2 border-lime-300 rounded-lg transition-all duration-300 hover:bg-lime-600 hover:text-white hover:border-lime-600">
              <Link href="/CMSPackage">
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>

        {/* Service 3 */}
        <div className="service-card bg-white shadow hover:shadow-2xl transition-all duration-200 rounded-lg p-6">
          <div className="service-icon text-center">
          </div>
          <h3 className="text-xl font-semibold text-center mt-4 text-black py-3">Mobile Application</h3>
          <p className="text-left text-black mt-2">
            ခေတ်နဲ့အမှီလိုက်သည့် မိတ်ဆွေရဲ့ ကိုယ်ပိုင် Mobile Application တစ်ခု ဖန်တီးချင်ရင် Kone Lone Shin ကိုဆက်သွယ်လိုက်ပါ။ မည်သည့် ပလက်ဖောင်းအတွက်မဆို အသုံးပြုနိုင်သော အဆင့်မြင့် mobile app များကို ဖန်တီးပေးပါသည်။
          </p>
          <div className="text-center mt-4">
            <div className="text-center mt-4 text-black py-4 px-2 border-2 border-lime-300 rounded-lg transition-all duration-300 hover:bg-lime-600 hover:text-white hover:border-lime-600">
              <Link href="/MobileApp">
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>

        {/* Service 4 */}
        <div className="service-card bg-white shadow hover:shadow-2xl transition-all duration-200 rounded-lg p-6">
          <div className="service-icon text-center">
          </div>
          <h3 className="text-xl font-semibold text-center mt-4 text-black py-3">Applications</h3>
          <p className="text-left text-black mt-2">
            မိတ်ဆွေရဲ့ ရုံး၊ အိမ်၊ ဆေးခန်း၊ လုပ်ငန်း စသည်တို့တွင် လိုအပ်သော Window Applications များကို လုပ်ငန်းလိုအပ်ချက်အတိုင်း ကိုယ်ပိုင် app များကို ဖန်တီးပေးနေပါသည်။ နေရာတိုင်းအတွက် လိုအပ်ချက်ပေါ် မူတည်၍ အသုံးပြုနိုင်သော လုပ်ငန်းအပလီကေးရှင်းများကို ပြုလုပ်ပေးပါသည်။
          </p>
          <div className="text-center mt-4">
            <div className="text-center mt-4 text-black py-4 px-2 border-2 border-lime-300 rounded-lg transition-all duration-300 hover:bg-lime-600 hover:text-white hover:border-lime-600">
              <Link href="/Applications">
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Projects />
    </div>
  );
}
