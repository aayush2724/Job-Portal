"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Briefcase, Filter, ChevronRight, Bookmark } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";

const Jobs = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  // Dummy jobs for layout - will be replaced with API later
  const jobListings = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Google",
      location: "Mountain View, CA",
      salary: "$120k - $180k",
      type: "Full-time",
      time: "2 days ago",
      tags: ["React", "TypeScript", "Tailwind"],
      logo: "G",
      color: "bg-blue-600"
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "Microsoft",
      location: "Redmond, WA",
      salary: "$130k - $190k",
      type: "Full-time",
      time: "5 hours ago",
      tags: ["Node.js", "Python", "Azure"],
      logo: "M",
      color: "bg-indigo-600"
    },
    {
      id: 3,
      title: "Product Designer",
      company: "Airbnb",
      location: "San Francisco, CA",
      salary: "$110k - $160k",
      type: "Remote",
      time: "1 week ago",
      tags: ["Figma", "UI/UX", "System Design"],
      logo: "A",
      color: "bg-pink-600"
    },
    {
      id: 4,
      title: "Mobile App Developer",
      company: "Apple",
      location: "Cupertino, CA",
      salary: "$125k - $185k",
      type: "Full-time",
      time: "3 days ago",
      tags: ["Swift", "SwiftUI", "iOS"],
      logo: "A",
      color: "bg-gray-900"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Find Your Next Adventure</h1>
            <p className="text-gray-600 dark:text-gray-400">Discover or pursue your career with over 10,000+ jobs available.</p>
          </div>
          <div className="flex items-center space-x-3">
             <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  placeholder="Search jobs..." 
                  className="pl-10 w-[240px] md:w-[320px] bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 rounded-xl" 
                />
             </div>
             <Button 
               variant="outline" 
               className="md:hidden"
               onClick={() => setFilterOpen(!filterOpen)}
             >
               <Filter size={18} />
             </Button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className={`lg:w-1/4 space-y-8 ${filterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-lg">Filters</h3>
                    <button className="text-sm text-indigo-600 font-medium">Clear All</button>
                </div>

                <div className="space-y-6">
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">Experience Level</h4>
                        <div className="space-y-3">
                            {["Entry Level", "Intermediate", "Senior", "Expert"].map((level) => (
                                <div key={level} className="flex items-center space-x-3">
                                    <Checkbox id={level} />
                                    <label htmlFor={level} className="text-sm text-gray-600 dark:text-gray-400 cursor-pointer">{level}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <hr className="border-gray-100 dark:border-gray-800" />

                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">Job Type</h4>
                        <div className="space-y-3">
                            {["Full-time", "Part-time", "Freelance", "Internship", "Remote"].map((type) => (
                                <div key={type} className="flex items-center space-x-3">
                                    <Checkbox id={type} />
                                    <label htmlFor={type} className="text-sm text-gray-600 dark:text-gray-400 cursor-pointer">{type}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <hr className="border-gray-100 dark:border-gray-800" />

                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">Salary Range</h4>
                        <div className="space-y-3">
                            {["$20k - $50k", "$50k - $100k", "$100k - $150k", "$150k+"].map((salary) => (
                                <div key={salary} className="flex items-center space-x-3">
                                    <Checkbox id={salary} />
                                    <label htmlFor={salary} className="text-sm text-gray-600 dark:text-gray-400 cursor-pointer">{salary}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
          </aside>

          {/* Jobs List */}
          <main className="lg:w-3/4 space-y-6">
             {jobListings.map((job, idx) => (
               <motion.div
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: idx * 0.1 }}
                 key={job.id}
               >
                 <Card className="group border border-gray-100 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-900 transition-all rounded-3xl overflow-hidden shadow-sm hover:shadow-xl bg-white/50 backdrop-blur-sm dark:bg-gray-900/50">
                    <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row p-6 items-start md:items-center">
                            {/* Company Logo */}
                            <div className={`h-16 w-16 ${job.color} rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-4 md:mb-0 md:mr-6 shadow-lg shadow-indigo-100 dark:shadow-none`}>
                                {job.logo}
                            </div>
                            
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 transition-colors">
                                        {job.title}
                                    </h3>
                                    <button className="text-gray-400 hover:text-indigo-600 transition-colors">
                                        <Bookmark size={20} />
                                    </button>
                                </div>
                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                                    <span className="flex items-center font-medium"><Building2 size={16} className="mr-1" /> {job.company}</span>
                                    <span className="flex items-center"><MapPin size={16} className="mr-1" /> {job.location}</span>
                                    <span className="flex items-center bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 px-2 py-0.5 rounded text-xs font-bold uppercase">{job.type}</span>
                                    <span className="flex items-center font-bold text-indigo-600">{job.salary}</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {job.tags.map(tag => (
                                        <Badge key={tag} variant="secondary" className="rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-none px-3 py-1">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6 md:mt-0 md:ml-8 flex flex-col items-center">
                                <Button className="bg-gray-900 dark:bg-white dark:text-black hover:bg-indigo-600 dark:hover:bg-indigo-600 dark:hover:text-white rounded-2xl px-8 py-6 group">
                                    Apply Now <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <span className="text-xs text-gray-400 mt-2">{job.time}</span>
                            </div>
                        </div>
                    </CardContent>
                 </Card>
               </motion.div>
             ))}
          </main>
        </div>
      </div>
    </div>
  );
};

// Supporting component
const Building2 = ({ size, className }: { size: number, className: string }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>
    </svg>
);

export default Jobs;
