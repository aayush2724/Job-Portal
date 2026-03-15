"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Building2, Globe, MapPin, FileText, Loader2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const RegisterCompany = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [companyName, setCompanyName] = useState("");

  const registerNewCompany = async () => {
    setLoading(true);
    try {
      // API call placeholder
      setTimeout(() => {
        router.push("/admin/companies/setup");
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-black pt-24 pb-20 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl"
      >
        <Card className="border-none shadow-2xl bg-white/80 backdrop-blur-md dark:bg-gray-900/80 rounded-3xl overflow-hidden">
          <CardHeader className="text-center pb-2">
            <div className="flex justify-center mb-4">
                <div className="p-4 bg-indigo-600 rounded-3xl shadow-xl shadow-indigo-100 dark:shadow-none">
                    <Building2 className="w-10 h-10 text-white" />
                </div>
            </div>
            <CardTitle className="text-3xl font-bold">Register Your Company</CardTitle>
            <CardDescription className="text-lg">What would you like to give your company name? You can change this later.</CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="companyName" className="text-base font-bold">Company Name</Label>
                    <Input 
                        id="companyName"
                        placeholder="e.g. Google, Microsoft etc."
                        className="py-6 px-6 text-lg rounded-2xl border-gray-200 dark:bg-gray-800/50 dark:border-gray-700 focus:ring-2 focus:ring-indigo-600"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                    />
                </div>
                
                <div className="flex items-center gap-4 pt-4">
                    <Button variant="outline" className="flex-1 py-7 rounded-2xl text-lg font-bold" onClick={() => router.back()}>Cancel</Button>
                    <Button className="flex-1 py-7 rounded-2xl text-lg font-bold bg-indigo-600 hover:bg-indigo-700 transition-all group" disabled={!companyName || loading} onClick={registerNewCompany}>
                        {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <>Continue <ChevronRight size={20} className="ml-1 group-hover:translate-x-1 transition-transform" /></>}
                    </Button>
                </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default RegisterCompany;
