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
    <div className="min-h-screen flex items-center justify-center bg-background p-4 pt-24 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md z-10 my-8"
      >
        <Card className="border border-white/5 shadow-2xl bg-card">
          <CardHeader className="space-y-1 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 border border-primary/20 rounded-2xl shadow-lg shadow-primary/20">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold tracking-tight text-white">Create an account</CardTitle>
            <CardDescription className="text-muted-foreground">Enter your details to get started with JobPortal</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={submitHandler} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullname" className="text-white">Full Name</Label>
                <Input
                  id="fullname"
                  name="fullname"
                  placeholder="John Doe"
                  required
                  value={input.fullname}
                  onChange={changeEventHandler}
                  className="bg-background border-white/10 text-white placeholder:text-muted-foreground/50 focus-visible:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  value={input.email}
                  onChange={changeEventHandler}
                  className="bg-background border-white/10 text-white placeholder:text-muted-foreground/50 focus-visible:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="text-white">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="1234567890"
                  required
                  value={input.phoneNumber}
                  onChange={changeEventHandler}
                  className="bg-background border-white/10 text-white placeholder:text-muted-foreground/50 focus-visible:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  value={input.password}
                  onChange={changeEventHandler}
                  className="bg-background border-white/10 text-white placeholder:text-muted-foreground/50 focus-visible:ring-primary"
                />
              </div>

              <div className="space-y-3 pt-2">
                <Label className="text-white">I am a:</Label>
                <RadioGroup
                  defaultValue="student"
                  className="flex space-x-4"
                  onValueChange={(value) => setInput({ ...input, role: value })}
                >
                  <div className="flex items-center space-x-2 bg-background border border-white/10 p-3 rounded-xl flex-1 cursor-pointer hover:border-primary/50 transition-colors">
                    <RadioGroupItem value="student" id="student" />
                    <Label htmlFor="student" className="cursor-pointer text-white">Student</Label>
                  </div>
                  <div className="flex items-center space-x-2 bg-background border border-white/10 p-3 rounded-xl flex-1 cursor-pointer hover:border-primary/50 transition-colors">
                    <RadioGroupItem value="recruiter" id="recruiter" />
                    <Label htmlFor="recruiter" className="cursor-pointer text-white">Recruiter</Label>
                  </div>
                </RadioGroup>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 py-6 text-base font-semibold text-white shadow-lg shadow-primary/20 mt-2" disabled={loading}>
                {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait</> : "Create Account"}
              </Button>
              
              <p className="text-center text-sm text-muted-foreground mt-4">
                Already have an account?{" "}
                <Link href="/login" className="text-primary font-semibold hover:underline">
                  Log in here
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
