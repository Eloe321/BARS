"use client";

import Link from "next/link";
import { Button } from "@workspace/ui/components/button";
import { ThemeProvider } from "@workspace/ui/components/theme-provider";
import { FaMicrophone, FaRobot, FaLanguage, FaMusic } from "react-icons/fa";
import { HiTranslate, HiLightningBolt } from "react-icons/hi";
import { useAuth } from "@workspace/ui/components/context/authContext";
import { FiUser, FiLogOut } from "react-icons/fi";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";

export default function HomePage() {
  const { isAuthenticated, user, logout } = useAuth();

  const handleLogout = () => {
    logout();

    window.location.href = "/login";
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="min-h-screen bg-[#0a192f] text-white">
        {/* Navigation */}
        <nav className="border-b border-[#1e3a5f] bg-[#0a192f]-90 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-r from-[#1e3a5f] to-[#64ffda] p-0.5">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0a192f] text-white">
                  <span className="text-xs font-bold">BARS</span>
                </div>
              </div>
              <span className="text-xl font-bold">Bisaya Bars</span>
            </div>
            <div className="hidden space-x-6 md:flex">
              <Link
                href="#features"
                className="text-gray-300 transition hover:text-[#64ffda]"
              >
                Features
              </Link>
              <Link
                href="#examples"
                className="text-gray-300 transition hover:text-[#64ffda]"
              >
                Examples
              </Link>
              <Link
                href="#how-it-works"
                className="text-gray-300 transition hover:text-[#64ffda]"
              >
                How It Works
              </Link>
              <Link
                href="#pricing"
                className="text-gray-300 transition hover:text-[#64ffda]"
              >
                Pricing
              </Link>
            </div>

            {/* Conditional rendering based on authentication status */}
            <div className="flex items-center gap-4">
              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="flex cursor-pointer items-center gap-2 rounded-full border border-[#1e3a5f] bg-[#112240] px-3 py-2 text-sm">
                      <div className="h-8 w-8 rounded-full bg-[#1e3a5f] flex items-center justify-center">
                        <FiUser className="h-4 w-4 text-[#64ffda]" />
                      </div>
                      <span className="text-gray-300">
                        {user?.username || "User"}
                      </span>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="border border-[#1e3a5f] bg-[#112240] z-50">
                    <Link href="/editor" passHref>
                      <DropdownMenuItem className="text-gray-300 hover:bg-[#1e3a5f] hover:text-[#64ffda] cursor-pointer">
                        <FaMusic className="mr-2 h-4 w-4" />
                        Editor
                      </DropdownMenuItem>
                    </Link>
                    <DropdownMenuSeparator className="bg-[#1e3a5f]" />
                    <DropdownMenuItem
                      className="text-gray-300 hover:bg-[#1e3a5f] hover:text-[#64ffda] cursor-pointer"
                      onClick={handleLogout}
                    >
                      <FiLogOut className="mr-2 h-4 w-4" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="text-sm text-[#64ffda] hover:text-[#8fffdf]"
                  >
                    Login
                  </Link>
                  <Link href="/register">
                    <Button className="bg-gradient-to-r from-[#1e3a5f] to-[#64ffda] text-white hover:from-[#1a3456] hover:to-[#5ae6c4]">
                      Get Started
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 -z-10 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                  Create Authentic{" "}
                  <span className="text-[#64ffda]">Bisaya Rap Lyrics</span> with
                  AI
                </h1>
                <p className="text-lg text-gray-300">
                  Express yourself in your native language with our advanced AI
                  tool designed specifically for Bisaya rap artists.
                </p>
                <div className="flex flex-wrap gap-4">
                  {isAuthenticated ? (
                    <Link href="/editor">
                      <Button className="bg-gradient-to-r from-[#1e3a5f] to-[#64ffda] text-white hover:from-[#1a3456] hover:to-[#5ae6c4]">
                        Go to Editor
                      </Button>
                    </Link>
                  ) : (
                    <Link href="/register">
                      <Button className="bg-gradient-to-r from-[#1e3a5f] to-[#64ffda] text-white hover:from-[#1a3456] hover:to-[#5ae6c4]">
                        Try For Free
                      </Button>
                    </Link>
                  )}
                  <Button
                    variant="outline"
                    className="border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]-10"
                  >
                    Watch Demo
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg border border-[#1e3a5f] bg-[#112240]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <FaMusic className="mx-auto h-16 w-16 text-[#64ffda]" />
                    <p className="mt-4 text-gray-300">Interactive Demo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-[#112240] py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold">Powerful Features</h2>
              <p className="mt-4 text-gray-300">
                Everything you need to create amazing Bisaya rap lyrics
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <FaLanguage className="h-8 w-8 text-[#64ffda]" />,
                  title: "Bisaya Language Support",
                  description:
                    "Our AI is specifically trained on Bisaya language patterns and cultural references.",
                },
                {
                  icon: <FaMicrophone className="h-8 w-8 text-[#64ffda]" />,
                  title: "Rhyme Suggestions",
                  description:
                    "Get intelligent rhyme suggestions that respect Bisaya pronunciation and flow.",
                },
                {
                  icon: <FaRobot className="h-8 w-8 text-[#64ffda]" />,
                  title: "AI-Powered Creativity",
                  description:
                    "Generate complete verses or get help with specific lines when you're stuck.",
                },
                {
                  icon: <HiTranslate className="h-8 w-8 text-[#64ffda]" />,
                  title: "Translation Assistance",
                  description:
                    "Easily translate between Bisaya, Tagalog, and English to expand your audience.",
                },
                {
                  icon: <HiLightningBolt className="h-8 w-8 text-[#64ffda]" />,
                  title: "Fast Generation",
                  description:
                    "Get lyrics in seconds, allowing you to focus on performance and delivery.",
                },
                {
                  icon: <FaMusic className="h-8 w-8 text-[#64ffda]" />,
                  title: "Beat Matching",
                  description:
                    "Our AI can adapt lyrics to match specific beats and tempos for perfect flow.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-[#1e3a5f] bg-[#0a192f] p-6 transition-all hover:border-[#64ffda]-50 hover:shadow-[0_0_15px_rgba(100,255,218,0.1)]"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Example Section */}
        <section id="examples" className="py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold">See It In Action</h2>
              <p className="mt-4 text-gray-300">
                Check out these examples of AI-generated Bisaya rap lyrics
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border border-[#1e3a5f] bg-[#112240] p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold">Street Life</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]-10"
                  >
                    Generate Similar
                  </Button>
                </div>
                <div className="rounded-md bg-[#0a192f] p-4">
                  <p className="font-mono text-gray-300">
                    Sa kalsada sa Cebu, akong sugilanon
                    <br />
                    Bisaya nga rapper, way kahadlokan
                    <br />
                    Ang akong mga pulong, puno sa kamatuoran
                    <br />
                    Sa matag linya, naa'y kahulugan
                  </p>
                </div>
                <div className="mt-4 flex justify-between text-sm text-gray-400">
                  <span>Theme: Urban Life</span>
                  <span>Generated in 2.3 seconds</span>
                </div>
              </div>
              <div className="rounded-lg border border-[#1e3a5f] bg-[#112240] p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold">Island Dreams</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]-10"
                  >
                    Generate Similar
                  </Button>
                </div>
                <div className="rounded-md bg-[#0a192f] p-4">
                  <p className="font-mono text-gray-300">
                    Kabukiran ug kadagatan, atong bahandi
                    <br />
                    Bisaya nga kultura, dili malimti
                    <br />
                    Ang atong pinulongan, atong gipasidunggi
                    <br />
                    Sa tibuok kalibutan, atong ipaila
                  </p>
                </div>
                <div className="mt-4 flex justify-between text-sm text-gray-400">
                  <span>Theme: Cultural Pride</span>
                  <span>Generated in 1.8 seconds</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="bg-[#112240] py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold">How It Works</h2>
              <p className="mt-4 text-gray-300">
                Create amazing Bisaya rap lyrics in just a few simple steps
              </p>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#1e3a5f] to-[#64ffda]"></div>
              <div className="space-y-12">
                {[
                  {
                    number: "01",
                    title: "Choose Your Theme",
                    description:
                      "Select a theme or topic for your rap lyrics, or provide some keywords to guide the AI.",
                  },
                  {
                    number: "02",
                    title: "Set Your Parameters",
                    description:
                      "Specify the length, style, and complexity of the lyrics you want to generate.",
                  },
                  {
                    number: "03",
                    title: "Generate Lyrics",
                    description:
                      "Our AI will create Bisaya rap lyrics based on your specifications in seconds.",
                  },
                  {
                    number: "04",
                    title: "Edit and Refine",
                    description:
                      "Fine-tune the generated lyrics, request alternatives, or make manual edits as needed.",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="relative grid gap-8 md:grid-cols-5"
                  >
                    <div className="relative md:col-span-1">
                      <div className="absolute left-1/2 top-6 h-12 w-12 -translate-x-1/2 transform rounded-full border-4 border-[#0a192f] bg-[#112240] md:left-auto md:right-0 md:translate-x-1/2">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-r from-[#1e3a5f] to-[#64ffda]">
                          <span className="font-mono font-bold">
                            {step.number}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-4">
                      <div className="rounded-lg border border-[#1e3a5f] bg-[#0a192f] p-6">
                        <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                        <p className="text-gray-300">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4">
            <div className="rounded-xl border border-[#1e3a5f] bg-gradient-to-r from-[#0a192f] to-[#112240] p-8 text-center shadow-lg md:p-12">
              <h2 className="text-3xl font-bold">
                Ready to Create Amazing Bisaya Rap Lyrics?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-300">
                Join thousands of Bisaya artists who are already using our AI to
                enhance their creativity and produce professional-quality rap
                lyrics.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button className="bg-gradient-to-r from-[#1e3a5f] to-[#64ffda] text-white hover:from-[#1a3456] hover:to-[#5ae6c4]">
                  Get Started For Free
                </Button>
                <Button
                  variant="outline"
                  className="border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]-10"
                >
                  View Pricing Plans
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#1e3a5f] bg-[#0a192f] py-12">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-8 md:grid-cols-4">
              <div>
                <div className="flex items-center gap-2">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-r from-[#1e3a5f] to-[#64ffda] p-0.5">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0a192f] text-white">
                      <span className="text-xs font-bold">BB</span>
                    </div>
                  </div>
                  <span className="text-lg font-bold">Bisaya Bars</span>
                </div>
                <p className="mt-4 text-sm text-gray-400">
                  Empowering Bisaya artists with AI-powered rap lyrics
                  generation.
                </p>
              </div>
              <div>
                <h3 className="mb-4 font-bold text-[#64ffda]">Product</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <Link href="#" className="hover:text-[#64ffda]">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#64ffda]">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#64ffda]">
                      API
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#64ffda]">
                      Integrations
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 font-bold text-[#64ffda]">Resources</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <Link href="#" className="hover:text-[#64ffda]">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#64ffda]">
                      Tutorials
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#64ffda]">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#64ffda]">
                      Support
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 font-bold text-[#64ffda]">Company</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <Link href="#" className="hover:text-[#64ffda]">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#64ffda]">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#64ffda]">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#64ffda]">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 border-t border-[#1e3a5f] pt-6 text-center text-sm text-gray-400">
              <p>
                © {new Date().getFullYear()} Bisaya Bars. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
