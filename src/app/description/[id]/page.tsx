"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  MapPin, 
  Briefcase, 
  Calendar, 
  Clock, 
  Users, 
  DollarSign, 
  ChevronLeft,
  Share2,
  Bookmark,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Input } from "@/components/ui/input";

const JobDescription = ({ params }: { params: { id: string } }) => {
  const [applied, setApplied] = useState(false);

  // Dummy job data - will be fetched by ID later
  const job = {
    title: "Frontend Developer",
    company: "Google",
    location: "Mountain View, CA",
    salary: "$120k - $180k",
    type: "Full-time",
    experience: "3-5 years",
    applicants: 42,
    postedDate: "March 12, 2024",
    deadline: "April 15, 2024",
    description: "We are looking for a talented Frontend Developer to join our team... You will be responsible for building high-quality, performant, and scalable web applications using React and Next.js.",
    responsibilities: [
      "Develop new user-facing features using React.js",
      "Build reusable components and front-end libraries for future use",
      "Translate designs and wireframes into high quality code",
      "Optimize components for maximum performance across a vast array of web-capable devices and browsers"
    ],
    requirements: [
      "Minimum 3 years of experience with React.js",
      "Strong proficiency in JavaScript/TypeScript",
      "Experience with Tailwind CSS and Framer Motion",
      "Excellent communication and collaboration skills"
    ],
    tags: ["React", "TypeScript", "Tailwind", "Next.js"],
    logo: "G",
    color: "bg-blue-600"
  };

  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link href="/jobs" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-indigo-600 mb-8 transition-colors">
          <ChevronLeft size={16} className="mr-1" /> Back to Job List
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="border-none shadow-xl bg-white/80 backdrop-blur-md dark:bg-gray-900/80 rounded-3xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-8 border-b dark:border-gray-800">
                  <div className="flex items-center gap-6">
                    <div className={`h-20 w-20 ${job.color} rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-xl shadow-indigo-100 dark:shadow-none`}>
                      {job.logo}
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{job.title}</h1>
                      <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400">
                        <span className="flex items-center font-semibold text-indigo-600"><Building2 size={18} className="mr-1.5" /> {job.company}</span>
                        <span className="flex items-center"><MapPin size={18} className="mr-1.5" /> {job.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button variant="outline" className="rounded-xl p-3 h-auto"><Share2 size={20} /></Button>
                    <Button variant="outline" className="rounded-xl p-3 h-auto"><Bookmark size={20} /></Button>
                    <Button 
                      onClick={() => setApplied(true)}
                      disabled={applied}
                      className={`rounded-xl px-8 py-6 text-lg font-bold transition-all ${applied ? 'bg-green-600 hover:bg-green-700' : 'bg-indigo-600 hover:bg-indigo-700'}`}
                    >
                      {applied ? <><CheckCircle2 className="mr-2" size={20} /> Applied</> : "Apply Now"}
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                   <div className="space-y-1">
                      <p className="text-sm text-gray-500 flex items-center"><Clock size={14} className="mr-1" /> Posted on</p>
                      <p className="font-semibold">{job.postedDate}</p>
                   </div>
                   <div className="space-y-1">
                      <p className="text-sm text-gray-500 flex items-center"><DollarSign size={14} className="mr-1" /> Salary</p>
                      <p className="font-semibold">{job.salary}</p>
                   </div>
                   <div className="space-y-1">
                      <p className="text-sm text-gray-500 flex items-center"><Briefcase size={14} className="mr-1" /> Job Type</p>
                      <p className="font-semibold">{job.type}</p>
                   </div>
                   <div className="space-y-1">
                      <p className="text-sm text-gray-500 flex items-center"><Users size={14} className="mr-1" /> Applicants</p>
                      <p className="font-semibold">{job.applicants} applied</p>
                   </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Description</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{job.description}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">Key Responsibilities</h3>
                    <ul className="space-y-3">
                      {job.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start text-gray-600 dark:text-gray-400">
                          <CheckCircle2 className="mr-3 text-indigo-600 flex-shrink-0 mt-1" size={18} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">Requirements</h3>
                    <ul className="space-y-3">
                      {job.requirements.map((item, i) => (
                        <li key={i} className="flex items-start text-gray-600 dark:text-gray-400">
                          <CheckCircle2 className="mr-3 text-indigo-600 flex-shrink-0 mt-1" size={18} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <Card className="border-none shadow-xl bg-white/80 backdrop-blur-md dark:bg-gray-900/80 rounded-3xl p-8">
                <h3 className="text-lg font-bold mb-6">Job Overview</h3>
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl text-indigo-600">
                            <Calendar size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Date Posted</p>
                            <p className="font-semibold">{job.postedDate}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl text-purple-600">
                            <Clock size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Deadline</p>
                            <p className="font-semibold">{job.deadline}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-pink-50 dark:bg-pink-900/20 rounded-xl text-pink-600">
                            <Briefcase size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Experience</p>
                            <p className="font-semibold">{job.experience}</p>
                        </div>
                    </div>
                </div>

                <hr className="my-8 border-gray-100 dark:border-gray-800" />

                <div className="space-y-4">
                   <h4 className="text-sm font-bold uppercase text-gray-500 tracking-wider">Tags</h4>
                   <div className="flex flex-wrap gap-2">
                      {job.tags.map(tag => (
                        <Badge key={tag} className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-indigo-600 hover:text-white border-none py-1 px-3 cursor-pointer transition-all">
                            {tag}
                        </Badge>
                      ))}
                   </div>
                </div>
            </Card>

            <Card className="border-none shadow-xl bg-indigo-600 text-white rounded-3xl p-8 overflow-hidden relative group">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                <h3 className="text-xl font-bold mb-4 relative z-10">Don&apos;t miss out!</h3>
                <p className="text-indigo-100 mb-6 relative z-10">Subscribe to our newsletter to receive the latest job updates directly in your inbox.</p>
                <div className="relative z-10 space-y-4">
                    <Input placeholder="email@example.com" className="bg-white/10 border-white/20 placeholder:text-indigo-200 text-white h-12 rounded-xl" />
                    <Button className="w-full bg-white text-indigo-600 hover:bg-indigo-50 h-12 rounded-xl font-bold">Subscribe</Button>
                </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
