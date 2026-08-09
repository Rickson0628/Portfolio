"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.h1
          className="text-8xl font-bold md:text-9xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          404
        </motion.h1>

        <motion.p
          className="mt-4 font-mono text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Page not found
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/"
            className="inline-block rounded-md border border-border px-6 py-3 font-mono text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-univ hover:text-univ"
          >
            Go Home
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}