"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, Code, FileText, Edit2, Plus, ArrowRight, Briefcase, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  // Dummy user data
  const user = {
    fullname: "Aayush Sharma",
    email: "aayush@example.com",
    phoneNumber: "+91 9876543210",
    bio: "Passionate Full Stack Developer with a love for creating beautiful and functional web applications. Always learning new technologies.",
    skills: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS", "TypeScript"],
    resume: "aayush_sharma_resume.pdf",
    appliedJobs: [
      { id: 1, title: "Frontend Developer", company: "Google", status: "Pending", date: "2024-03-12" },
      { id: 2, title: "Backend Engineer", company: "Microsoft", status: "Accepted", date: "2024-03-10" }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column: Profile Info */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="border-none shadow-xl bg-white/80 backdrop-blur-md dark:bg-gray-900/80 rounded-3xl overflow-hidden">
               <div className="h-32 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
               <CardContent className="px-8 pb-8 -mt-12">
                  <div className="relative mb-6">
                    <div className="h-24 w-24 rounded-2xl bg-white dark:bg-gray-800 p-1 shadow-xl">
                        <div className="h-full w-full rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-400">
                            <User size={48} />
                        </div>
                    </div>
                    <Button 
                        variant="secondary" 
                        size="icon" 
                        className="absolute bottom-0 right-0 rounded-lg shadow-lg"
                        onClick={() => setIsEditing(true)}
                    >
                        <Edit2 size={16} />
                    </Button>
                  </div>

                  <div className="space-y-1 mb-8">
                    <h2 className="text-2xl font-bold">{user.fullname}</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{user.bio}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                        <Mail size={18} className="text-indigo-600" />
                        <span className="text-gray-600 dark:text-gray-300">{user.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                        <Phone size={18} className="text-indigo-600" />
                        <span className="text-gray-600 dark:text-gray-300">{user.phoneNumber}</span>
                    </div>
                  </div>

                  <hr className="my-8 border-gray-100 dark:border-gray-800" />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                         <h3 className="font-bold flex items-center text-sm uppercase tracking-wider text-gray-500"><Code size={16} className="mr-2" /> Skills</h3>
                         <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg"><Plus size={16} /></Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {user.skills.map(skill => (
                            <Badge key={skill} className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 border-none px-3 py-1 rounded-lg">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                  </div>

                  <div className="space-y-4 mt-8">
                    <h3 className="font-bold flex items-center text-sm uppercase tracking-wider text-gray-500"><FileText size={16} className="mr-2" /> Resume</h3>
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-indigo-50 dark:hover:bg-indigo-900/10 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                                <FileText size={20} className="text-red-500" />
                            </div>
                            <span className="text-sm font-medium truncate max-w-[150px]">{user.resume}</span>
                        </div>
                        <ArrowRight size={16} className="text-gray-400 group-hover:text-indigo-600 transition-colors" />
                    </div>
                  </div>
               </CardContent>
            </Card>
          </div>

          {/* Right Column: Applied Jobs */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="border-none shadow-xl bg-white/80 backdrop-blur-md dark:bg-gray-900/80 rounded-3xl overflow-hidden">
                <CardHeader className="px-8 pt-8">
                    <CardTitle className="text-2xl font-bold">Applied Jobs</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b dark:border-gray-800">
                                    <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Date</th>
                                    <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Job Title</th>
                                    <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Company</th>
                                    <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 text-right">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {user.appliedJobs.map((job, idx) => (
                                    <tr key={job.id} className={`hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors ${idx !== user.appliedJobs.length - 1 ? 'border-b dark:border-gray-800' : ''}`}>
                                        <td className="px-8 py-6 text-sm text-gray-600 dark:text-gray-400">{job.date}</td>
                                        <td className="px-8 py-6 font-bold">{job.title}</td>
                                        <td className="px-8 py-6 text-sm flex items-center">
                                            <Building2 size={16} className="mr-2 text-indigo-600" />
                                            {job.company}
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <Badge className={`rounded-full px-3 py-1 font-bold ${
                                                job.status === 'Accepted' ? 'bg-green-100 dark:bg-green-900/30 text-green-600' :
                                                job.status === 'Rejected' ? 'bg-red-100 dark:bg-red-900/30 text-red-600' :
                                                'bg-amber-100 dark:bg-amber-900/30 text-amber-600'
                                            } border-none`}>
                                                {job.status}
                                            </Badge>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
