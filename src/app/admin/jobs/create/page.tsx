"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Briefcase, MapPin, DollarSign, LayoutList, Loader2, ChevronLeft, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

const PostJob = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    jobType: "",
    experience: "",
    position: 0,
    companyId: ""
  });

  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // API Call placeholder
    setTimeout(() => {
        router.push("/admin/jobs");
        setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-black pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/admin/jobs" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-indigo-600 mb-8 transition-colors">
          <ChevronLeft size={16} className="mr-1" /> Back to Dashboard
        </Link>

        <div className="mb-10">
            <h1 className="text-4xl font-extrabold tracking-tight mb-2">Post New Opportunity</h1>
            <p className="text-gray-600 dark:text-gray-400">Fill in the details below to find your next great hire.</p>
        </div>

        <Card className="border-none shadow-2xl bg-white/80 backdrop-blur-md dark:bg-gray-900/80 rounded-3xl overflow-hidden">
          <CardContent className="p-8">
            <form onSubmit={submitHandler} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="title" className="font-bold flex items-center"><Briefcase size={16} className="mr-2 text-indigo-600" /> Job Title</Label>
                        <Input id="title" name="title" placeholder="e.g. Senior Frontend Developer" required value={input.title} onChange={changeEventHandler} className="py-6 rounded-xl border-gray-200 dark:bg-gray-800 dark:border-gray-700" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="location" className="font-bold flex items-center"><MapPin size={16} className="mr-2 text-indigo-600" /> Location</Label>
                        <Input id="location" name="location" placeholder="e.g. San Francisco, Remote" required value={input.location} onChange={changeEventHandler} className="py-6 rounded-xl border-gray-200 dark:bg-gray-800 dark:border-gray-700" />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="description" className="font-bold">Job Description</Label>
                    <Textarea id="description" name="description" placeholder="Describe the role and responsibilities..." required value={input.description} onChange={changeEventHandler} className="min-h-[150px] rounded-xl border-gray-200 dark:bg-gray-800 dark:border-gray-700" />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="salary" className="font-bold flex items-center"><DollarSign size={16} className="mr-2 text-indigo-600" /> Salary Range</Label>
                        <Input id="salary" name="salary" placeholder="e.g. $100k - $150k" required value={input.salary} onChange={changeEventHandler} className="py-6 rounded-xl border-gray-200 dark:bg-gray-800 dark:border-gray-700" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="jobType" className="font-bold">Job Type</Label>
                        <Select onValueChange={(value) => setInput({...input, jobType: value})}>
                            <SelectTrigger className="py-6 rounded-xl border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                                <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl">
                                <SelectItem value="Full-time">Full-time</SelectItem>
                                <SelectItem value="Part-time">Part-time</SelectItem>
                                <SelectItem value="Remote">Remote</SelectItem>
                                <SelectItem value="Contract">Contract</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="experience" className="font-bold">ExperienceLevel</Label>
                        <Input id="experience" name="experience" placeholder="e.g. 2+ years" required value={input.experience} onChange={changeEventHandler} className="py-6 rounded-xl border-gray-200 dark:bg-gray-800 dark:border-gray-700" />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="requirements" className="font-bold">Key Requirements (Comma separated)</Label>
                    <Input id="requirements" name="requirements" placeholder="React, Node.js, TypeScript..." required value={input.requirements} onChange={changeEventHandler} className="py-6 rounded-xl border-gray-200 dark:bg-gray-800 dark:border-gray-700" />
                </div>

                <div className="pt-4 flex justify-end">
                    <Button type="submit" className="px-10 py-7 rounded-2xl text-lg font-bold bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-100 dark:shadow-none transition-all" disabled={loading}>
                        {loading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Publishing...</> : <><PlusCircle className="mr-2" size={20} /> Post Job Opportunity</>}
                    </Button>
                </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Internal Link component for cleaner code
import Link from "next/link";

export default PostJob;
