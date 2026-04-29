"use client";

import { motion } from "framer-motion";

export default function CareerAdvicePage() {
  return (
    <div className="min-h-screen bg-background pt-32 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Career Advice</h1>
        <p className="text-lg text-muted-foreground">
          Expert tips, interview prep, and career guidance to help you land your dream job. This section is coming soon!
        </p>
      </motion.div>
    </div>
  );
}
