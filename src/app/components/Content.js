"use client";
import React, { useState, useEffect } from "react";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      id: 1,
      image: "/assets/teamwork-1.jpeg",
      caption: "Turn your Vision Into Reality",
      title: "Turn your Vision Into Reality",
      description: "Contact us",
    },
    {
      id: 2,
      image: "/assets/teamwork-2.jpeg",
      caption: "What We Can Achieve Together",
      title: "What We Can Achieve Together",
      description: "Scroll Down",
    },
    {
      id: 3,
      video: "/assets/solowork-1.mp4",  // Using video instead of image
      caption: "Online 24/7",
      title: "Work Everyday, Never Stop Grinding",
      description: "Feel free to contact us anytime available",
    },
  ];

  // Move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  // Automatic scrolling
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="relative w-full top-0 overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full h-[80vh] bg-cover bg-center relative"
          >
            {/* Check if it's a video */}
            {slide.video ? (
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src={slide.video}
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
            )}

            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white p-8">
              {/* Caption Container */}
              <div className="text-center max-w-2xl">
                {/* Title */}
                <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                {/* Description */}
                <p className="text-lg">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent p-4 rounded-full shadow-md hover:bg-gray-600 hover:bg-opacity-25 focus:outline-none"
        aria-label="Previous Slide"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent p-4 rounded-full shadow-md hover:bg-gray-600 hover:bg-opacity-25 focus:outline-none"
        aria-label="Next Slide"
      >
        ❯
      </button>
    </div>
  );
}
