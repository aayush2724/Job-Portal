"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Briefcase } from "lucide-react";

const Signup = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "student",
  });

  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });
      const data = await res.json();
      if (data.success) {
        router.push("/login");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50/50 dark:bg-black p-4 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="border-none shadow-xl bg-white/80 backdrop-blur-md dark:bg-gray-900/80">
          <CardHeader className="space-y-1 text-center">
            <div className="flex justify-center mb-2">
              <div className="p-3 bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-200 dark:shadow-none">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold tracking-tight">Create an account</CardTitle>
            <CardDescription>Enter your details to get started with JobPortal</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={submitHandler} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullname">Full Name</Label>
                <Input
                  id="fullname"
                  name="fullname"
                  placeholder="John Doe"
                  required
                  value={input.fullname}
                  onChange={changeEventHandler}
                  className="bg-gray-50/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  value={input.email}
                  onChange={changeEventHandler}
                  className="bg-gray-50/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="1234567890"
                  required
                  value={input.phoneNumber}
                  onChange={changeEventHandler}
                  className="bg-gray-50/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  value={input.password}
                  onChange={changeEventHandler}
                  className="bg-gray-50/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
                />
              </div>

              <div className="space-y-3 pt-2">
                <Label>I am a:</Label>
                <RadioGroup
                  defaultValue="student"
                  className="flex space-x-4"
                  onValueChange={(value) => setInput({ ...input, role: value })}
                >
                  <div className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg flex-1 cursor-pointer">
                    <RadioGroupItem value="student" id="student" />
                    <Label htmlFor="student" className="cursor-pointer">Student</Label>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg flex-1 cursor-pointer">
                    <RadioGroupItem value="recruiter" id="recruiter" />
                    <Label htmlFor="recruiter" className="cursor-pointer">Recruiter</Label>
                  </div>
                </RadioGroup>
              </div>

              <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 py-6 text-base font-semibold" disabled={loading}>
                {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait</> : "Create Account"}
              </Button>
              
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                Already have an account?{" "}
                <Link href="/login" className="text-indigo-600 font-semibold hover:underline">
                  Login here
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Signup;
