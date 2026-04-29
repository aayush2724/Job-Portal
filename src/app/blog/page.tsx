"use client";

import { motion } from "framer-motion";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background pt-32 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Blog</h1>
        <p className="text-lg text-muted-foreground">
          Read the latest news, industry trends, and product updates from the JobPortal team. Stay tuned for our first post!
        </p>
      </motion.div>
    </div>
  );
}
