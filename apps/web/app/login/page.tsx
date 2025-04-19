import Image from "next/image";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { ThemeProvider } from "@workspace/ui/components/theme-provider";

export default function LoginPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="flex min-h-screen w-full bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#1a365d]">
        <div className="flex w-full flex-col md:flex-row">
          {/* Login Form Section */}
          <div className="flex w-full items-center justify-center md:w-1/2">
            <div className="w-full max-w-md space-y-8 rounded-xl bg-black/20 p-8 backdrop-blur-sm">
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="relative h-20 w-20 overflow-hidden rounded-full bg-gradient-to-r from-[#1e3a5f] to-[#64ffda] p-1">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-black/80 text-white">
                    <span className="text-sm font-bold">BISAYA BARS</span>
                  </div>
                </div>
                <h1 className="text-4xl font-bold tracking-wider text-white">
                  login
                </h1>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="Email/Username"
                    className="border-[#1e3a5f]/50 bg-white/5 text-white placeholder:text-gray-500"
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    className="border-[#1e3a5f]/50 bg-white/5 text-white placeholder:text-gray-500"
                  />
                </div>

                <div className="flex justify-center space-x-4 py-2">
                  <div className="relative">
                    <span className="absolute -top-5 left-0 right-0 text-center text-xs text-gray-400">
                      or
                    </span>
                    <div className="flex space-x-4">
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-10 w-10 rounded-full border-[#1e3a5f]/50 bg-white/5 text-white hover:bg-white/10"
                        aria-label="Login with Google"
                      >
                        <FaGoogle className="h-5 w-5 text-red-500" />
                      </Button>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-10 w-10 rounded-full border-[#1e3a5f]/50 bg-white/5 text-white hover:bg-white/10"
                        aria-label="Login with Facebook"
                      >
                        <FaFacebook className="h-5 w-5 text-blue-500" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-center text-sm text-gray-400">
                  <span>No account? </span>
                  <a
                    href="#"
                    className="font-medium text-[#64ffda] hover:text-[#8fffdf]"
                  >
                    Sign up
                  </a>
                </div>

                <Button className="w-full bg-gradient-to-r from-[#1e3a5f] to-[#64ffda] text-white hover:from-[#1a3456] hover:to-[#5ae6c4]">
                  Login
                </Button>
              </div>
            </div>
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
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0a192f]/90"></div>
              <div className="absolute bottom-8 left-8 max-w-md">
                <h2 className="text-3xl font-bold text-white">
                  Bisaya Rap Lyrics AI
                </h2>
                <p className="mt-2 text-gray-300">
                  Create authentic Bisaya rap lyrics with the power of AI.
                  Express yourself in your native language.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
