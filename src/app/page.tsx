'use client'
import React, { useState } from 'react';
import Image from "next/image";
import { ChevronDown, ArrowRight, CreditCard, Users, ArrowUpRight, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

const Page = () => {
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const benefits = [
    { icon: <CreditCard className="w-5 h-5" />, text: "Invoice Management" },
    { icon: <CreditCard className="w-5 h-5" />, text: "Seamless Integration" },
    { icon: <CreditCard className="w-5 h-5" />, text: "Partner Perks" },
    { icon: <CreditCard className="w-5 h-5" />, text: "Nova Boost" },
  ];

  const navItems = ["Business Checking", "Solutions", "Resources", "Results", "Contact"];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen font-sans overflow-hidden ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white' 
        : 'bg-white text-gray-900'
    }`}>
     
      <header className="container mx-auto px-4 py-6 flex items-center justify-between relative z-10">
       
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full" />
          <span className={`text-2xl font-bold ${
            isDarkMode 
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500'
              : 'text-gray-900'
          }`}>nova</span>
        </div>

        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} flex items-center group relative`}
            >
              {item}
              {item !== "Results" && (
                <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              )}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        
        <div className="flex items-center space-x-6">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} hidden md:block transition-colors duration-300`}>
            Log In
          </button>
          <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2">
            <div className="bg-white bg-opacity-20 rounded-full p-1">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-semibold">Get Started</span>
          </button>
        </div>
      </header>

    
      <main className="container mx-auto px-4 py-16 relative">
       
        <div className="grid md:grid-cols-2 gap-12 items-center">
       
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h1 className={`text-5xl md:text-6xl font-bold leading-tight mb-6 ${
                isDarkMode 
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500'
                  : 'text-gray-900'
              }`}>
                ALL YOUR BUSINESS BANKING IN ONE PLATFORM
              </h1>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-lg mb-8`}>
                Take your business to new heights with faster cash flow and clear financial insights all with a free Nova account. Apply in 10 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2">
                  <div className="bg-white bg-opacity-20 rounded-full p-1">
                    <ArrowUpRight className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-sm font-semibold">Start your journey</span>
                </button>
                <a
                  href="#"
                  className={`text-center sm:text-left ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300 flex items-center justify-center gap-2`}
                >
                  Watch Demo <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          
          <div className="relative grid grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Image
                src="/11.png"
                alt="Business banking interface"
                width={300}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-gray-800 p-4 rounded-xl shadow-lg">
                <div className="text-sm font-semibold text-gray-300">Daily Revenue</div>
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">$12,584</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative mt-12"
            >
              <Image
                src="/card.png"
                alt="Mobile banking app"
                width={300}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -left-4 bg-gray-800 p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="font-semibold text-gray-300">Payment Received</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <section className="mt-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className={`text-4xl font-bold mb-8 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                ONLINE BANKING THAT TAKES YOUR BUSINESS TO THE{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">NEXT LEVEL</span>
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center gap-4 p-4 rounded-xl ${
                      isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                    } transition-all duration-300`}
                    
                    onMouseLeave={() => setHoveredBenefit(null)}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center text-white">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{benefit.text}</h3>
                      <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Streamline your business operations</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Image
                src="/3.png"
                alt="Dashboard interface"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className={`absolute top-4 right-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} px-4 py-2 rounded-full shadow-lg`}>
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Real-time Analytics</span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;