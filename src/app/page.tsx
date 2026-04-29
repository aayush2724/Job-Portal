"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Briefcase, Users, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 flex flex-col items-center">
        
        {/* Abstract Background Elements matching the dark theme */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-primary/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl w-full"
        >
          <h1 className="text-5xl lg:text-[5rem] leading-tight font-extrabold tracking-tight text-white mb-6">
            Employment, <span className="text-primary">made easy.</span>
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Your next role is just a search away. Join over 2 million professionals finding their perfect fit.
          </p>

          {/* Search Bar */}
          <div className="relative w-full max-w-4xl mx-auto mb-20">
            <div className="flex flex-col md:flex-row items-center p-2 bg-card rounded-2xl md:rounded-full shadow-2xl border border-white/5">
              <div className="flex-1 flex items-center px-6 w-full border-b md:border-b-0 md:border-r border-white/10">
                <Search className="text-muted-foreground mr-3" size={20} />
                <Input 
                  placeholder="Job title, keywords..." 
                  className="border-none focus-visible:ring-0 bg-transparent text-white placeholder:text-muted-foreground text-lg py-6 shadow-none"
                />
              </div>
              <div className="flex-1 flex items-center px-6 w-full">
                <MapPin className="text-muted-foreground mr-3" size={20} />
                <Input 
                  placeholder="Location" 
                  className="border-none focus-visible:ring-0 bg-transparent text-white placeholder:text-muted-foreground text-lg py-6 shadow-none"
                />
              </div>
              <Button className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white rounded-xl md:rounded-full px-10 py-7 text-lg font-bold transition-all shadow-lg shadow-primary/20 mt-2 md:mt-0">
                Search
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-12 md:gap-24 border-t border-white/5 pt-12">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-extrabold text-white mb-1">98%</span>
              <span className="text-muted-foreground text-sm tracking-wider uppercase font-semibold">Success Rate</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-extrabold text-white mb-1">24/7</span>
              <span className="text-muted-foreground text-sm tracking-wider uppercase font-semibold">Support</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-[#181820]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Choose Us?</h2>
            <p className="text-muted-foreground">The easiest way to land your next role</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Briefcase className="w-8 h-8 text-primary" />, 
                title: "Wide Range of Jobs", 
                desc: "Explore thousands of job listings from top companies across various industries." 
              },
              { 
                icon: <Users className="w-8 h-8 text-primary" />, 
                title: "Personalized Matches", 
                desc: "Receive tailored job recommendations based on your skills and preferences." 
              },
              { 
                icon: <Building2 className="w-8 h-8 text-primary" />, 
                title: "Top Companies", 
                desc: "Direct connection with HR and recruiters from leading global organizations." 
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-card p-8 rounded-2xl shadow-xl border border-white/5 hover:border-primary/30 transition-colors"
              >
                <div className="p-4 bg-primary/10 w-fit rounded-2xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">{feature.desc}</p>
                <Link href="#" className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all">
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
