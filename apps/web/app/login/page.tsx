"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { ThemeProvider } from "@workspace/ui/components/theme-provider";
import { motion } from "framer-motion";
import { useAuth } from "@workspace/ui/components/context/authContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const success = await login(email, password);
      if (success) {
        router.push("/home");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("An error occurred during login");
      console.error(err);
    }
  };

  if (!mounted) return null;

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="relative flex min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#1a365d]">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-[#64ffda]-5 blur-[100px]" />
          <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-[#1e3a5f]-20 blur-[120px]" />
          <motion.div
            className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#64ffda]-10 blur-[80px]"
            animate={{
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -right-20 top-1/3 h-40 w-40 rounded-full bg-[#1e3a5f]-30 blur-[60px]"
            animate={{
              x: [0, -20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="relative z-10 flex w-full flex-col md:flex-row">
          {/* Login Form Section */}
          <div className="flex w-full items-center justify-center p-6 md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md overflow-hidden rounded-xl bg-[#0a192f]-70 p-1 backdrop-blur-lg"
            >
              <div className="rounded-lg bg-gradient-to-r from-[#1e3a5f]-20 to-[#64ffda]-5 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <div className="flex flex-col items-center justify-center space-y-3">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1,
                    }}
                    className="relative h-24 w-24"
                  >
                    <div className="absolute inset-0 animate-pulse-slow rounded-full bg-gradient-to-r from-[#1e3a5f] to-[#64ffda] blur-sm"></div>
                    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#1e3a5f] to-[#64ffda] p-1">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0a192f] text-white">
                        <span className="text-lg font-bold">BISAYA BARS</span>
                      </div>
                    </div>
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-gradient-to-r from-white to-[#64ffda] bg-clip-text text-5xl font-bold tracking-wider text-transparent"
                  >
                    login
                  </motion.h1>
                </div>

                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8 space-y-5"
                >
                  {error && (
                    <div className="rounded-md bg-red-500/20 p-3 text-center text-sm text-red-300">
                      {error}
                    </div>
                  )}

                  <div className="space-y-3">
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="Email/Username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-[#1e3a5f]-50 bg-[#112240]-50 py-6 pl-10 pr-4 text-white placeholder:text-gray-500 focus:border-[#64ffda] focus:ring-[#64ffda]-20"
                        required
                      />
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg
                          className="h-5 w-5 text-[#64ffda]-70"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                        </svg>
                      </div>
                    </div>
                    <div className="relative">
                      <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border-[#1e3a5f]-50 bg-[#112240]-50 py-6 pl-10 pr-4 text-white placeholder:text-gray-500 focus:border-[#64ffda] focus:ring-[#64ffda]-20"
                        required
                      />
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg
                          className="h-5 w-5 text-[#64ffda]-70"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-6 py-2">
                    <div className="relative">
                      <span className="absolute -top-5 left-0 right-0 text-center text-xs text-gray-400">
                        or
                      </span>
                      <div className="flex space-x-4">
                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-[#1e3a5f]-50 bg-[#112240]-50 text-white transition-all hover:border-[#64ffda]-50"
                        >
                          <div className="absolute -inset-0.5 -z-10 rounded-full bg-gradient-to-r from-[#1e3a5f] to-[#64ffda] opacity-0 blur transition-all group-hover:opacity-70"></div>
                          <FaGoogle className="h-5 w-5 text-red-500" />
                        </motion.button>
                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-[#1e3a5f]-50 bg-[#112240]-50 text-white transition-all hover:border-[#64ffda]-50"
                        >
                          <div className="absolute -inset-0.5 -z-10 rounded-full bg-gradient-to-r from-[#1e3a5f] to-[#64ffda] opacity-0 blur transition-all group-hover:opacity-70"></div>
                          <FaFacebook className="h-5 w-5 text-blue-500" />
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 text-center text-sm text-gray-400">
                    <span>No account? </span>
                    <Link
                      href="/register"
                      className="font-medium text-[#64ffda] transition-colors hover:text-[#8fffdf]"
                    >
                      Sign up
                    </Link>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="relative w-full overflow-hidden bg-gradient-to-r from-[#1e3a5f] to-[#64ffda] py-6 text-lg font-semibold text-white transition-all hover:shadow-[0_0_20px_rgba(100,255,218,0.4)]"
                    >
                      <span className="relative z-10">Login</span>
                      <span className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1e3a5f] to-[#64ffda] opacity-0 transition-opacity hover:opacity-100"></span>
                    </Button>
                  </motion.div>
                </motion.form>
              </div>
            </motion.div>
          </div>

          {/* Image Section */}
          <div className="hidden md:flex md:w-1/2">
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Music producer in studio"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0a192f]-90"></div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute bottom-16 left-8 max-w-md"
              >
                <div className="relative">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#1e3a5f] to-[#64ffda] opacity-30 blur"></div>
                  <div className="relative rounded-lg bg-[#0a192f]-80 p-6 backdrop-blur-sm">
                    <h2 className="text-3xl font-bold text-white">
                      Bisaya Rap Lyrics AI
                    </h2>
                    <p className="mt-2 text-gray-300">
                      Create authentic Bisaya rap lyrics with the power of AI.
                      Express yourself in your native language.
                    </p>
                    <div className="mt-4 h-1 w-20 bg-gradient-to-r from-[#1e3a5f] to-[#64ffda]"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
