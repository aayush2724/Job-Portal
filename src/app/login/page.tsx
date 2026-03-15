"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Briefcase } from "lucide-react";

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: input.email,
        password: input.password,
      });

      if (res?.error) {
        alert(res.error);
      } else {
        router.replace("/");
        router.refresh();
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
            <CardTitle className="text-2xl font-bold tracking-tight">Welcome back</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={submitHandler} className="space-y-4">
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
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="#" className="text-xs text-indigo-600 hover:underline">Forgot password?</Link>
                </div>
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

              <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 py-6 text-base font-semibold mt-4" disabled={loading}>
                {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait</> : "Login"}
              </Button>
              
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="text-indigo-600 font-semibold hover:underline">
                  Sign up for free
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Login;
