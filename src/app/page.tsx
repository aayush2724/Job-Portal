"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Briefcase, Users, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 flex flex-col items-center">
        {/* Animated background blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 opacity-30 dark:opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-50 rounded-full dark:bg-indigo-900/30 dark:text-indigo-400">
            No. 1 Job Portal Website
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-8">
            Search, Apply & <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              Get Your Dream Job
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Connecting talented professionals with world-class companies. Start your journey today and find opportunities that match your passion.
          </p>

          {/* Search Bar */}
          <div className="relative w-full max-w-3xl mx-auto mb-16">
            <div className="flex flex-col md:flex-row items-center p-2 bg-white dark:bg-gray-900 rounded-2xl md:rounded-full shadow-2xl shadow-indigo-100 dark:shadow-none border border-gray-100 dark:border-gray-800">
              <div className="flex-1 flex items-center px-4 w-full border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-800">
                <Search className="text-gray-400 mr-3" size={20} />
                <Input 
                  placeholder="Job title or keywords" 
                  className="border-none focus-visible:ring-0 bg-transparent text-lg py-6"
                />
              </div>
              <div className="flex-1 flex items-center px-4 w-full">
                <Search className="text-gray-400 mr-3" size={20} />
                <Input 
                  placeholder="Location" 
                  className="border-none focus-visible:ring-0 bg-transparent text-lg py-6"
                />
              </div>
              <Button className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl md:rounded-full px-8 py-7 text-lg font-bold transition-all shadow-lg shadow-indigo-200 dark:shadow-none">
                Find Jobs
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">10k+</span>
              <span className="text-gray-500 text-sm">Active Jobs</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">5k+</span>
              <span className="text-gray-500 text-sm">Companies</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">20k+</span>
              <span className="text-gray-500 text-sm">Job Seekers</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Feature Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 dark:text-gray-400">The easiest way to land your next role</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Briefcase className="w-8 h-8 text-indigo-600" />, 
                title: "Wide Range of Jobs", 
                desc: "Explore thousands of job listings from top companies across various industries." 
              },
              { 
                icon: <Users className="w-8 h-8 text-purple-600" />, 
                title: "Personalized Matches", 
                desc: "Recieve tailored job recommendations based on your skills and preferences." 
              },
              { 
                icon: <Building2 className="w-8 h-8 text-pink-600" />, 
                title: "Top Companies", 
                desc: "Direct connection with HR and recruiters from leading global organizations." 
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <div className="p-3 bg-gray-50 dark:bg-gray-900 w-fit rounded-xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{feature.desc}</p>
                <Link href="#" className="flex items-center text-indigo-600 font-semibold hover:gap-2 transition-all">
                  Learn more <ArrowRight size={16} className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
