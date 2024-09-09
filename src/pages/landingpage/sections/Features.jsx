import React from "react";
import { Shield, Globe, HeartPulse, Layers } from "lucide-react"; // Example icons

const featuresData = [
  {
    icon: <Shield className="w-8 h-8 text-indigo-600 dark:text-black" />,
    title: "Secure Transactions",
    description:
      "Utilizing blockchain technology for safe and transparent payments.",
  },
  {
    icon: <Globe className="w-8 h-8 text-indigo-600 dark:text-black" />,
    title: "AI-Driven Job Matching",
    description:
      "Personalized job opportunities tailored to your skills and location.",
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-indigo-600 dark:text-black" />,
    title: "Dynamic Pricing",
    description:
      "AI algorithms adjust pricing based on demand and market conditions.",
  },
  {
    icon: <Layers className="w-8 h-8 text-indigo-600 dark:text-black" />,
    title: "Local Opportunities",
    description:
      "Connecting freelancers with jobs in both rural and urban markets.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Key Features
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-4">
            Discover the innovative features that empower freelancers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md text-center hover:scale-105 transition duration-300 ease-in-out"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 dark:text-black">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
