import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
// import backgroundImage from "../assets/unihelp-background.jpeg";

import { Users, Zap, ShoppingCart, ArrowRight } from "lucide-react";

export default function UniHelpLanding() {
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // bg-gradient-to-tl from-purple-300 via-white to-blue-50
  return (
    <div id="home" className="min-h-screen animate-gentleDrift">
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: "url('/unihelp-background.jpeg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="relative overflow-hidden px-4 py-20 md:py-32"
      >
        {/* <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-transparent to-blue-500/10" /> */}

        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <div className={`${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
              <Badge className="mb-6 text-lg bg-violet-100 text-violet-700 hover:bg-violet-200">
                Built for Students, By Students
              </Badge>

              <h1 className="font-montserrat text-4xl font-bold tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
                Campus Hustle,{" "}
                <span className="bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent animate-gradientShift">
                  Upgraded.
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 md:text-xl">
                One app for tasks, talents, and trading — built for students, by
                students.
              </p>
            </div>

            <div
              className={`mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center ${
                isVisible ? "animate-fadeInUp animate-delay-200" : "opacity-0"
              }`}
            >
              <Button
                size="xl"
                className="gradient-purple-blue text-white hover:scale-105 transition-transform duration-200 px-8 py-3 text-lg font-semibold"
              >
                Join the Waitlist
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="xl"
                className="border-violet-200 text-violet-700 hover:bg-violet-50 px-8 py-3 text-lg bg-transparent"
              >
                See How It Works
              </Button>
            </div>

            {/* Floating App Mockup */}
            <div
              className={`mt-16 ${
                isVisible ? "animate-scaleIn animate-delay-300" : "opacity-0"
              }`}
            >
              <div className="relative mx-auto max-w-sm">
                <div className="animate-float">
                  <div className="relative rounded-3xl bg-gradient-to-br from-violet-600 to-blue-500 p-1 shadow-2xl">
                    <div className="rounded-3xl bg-white p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="h-8 w-8 rounded-full bg-violet-100" />
                          <div className="flex gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-400" />
                            <div className="h-2 w-2 rounded-full bg-yellow-400" />
                            <div className="h-2 w-2 rounded-full bg-red-400" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-3 w-3/4 rounded bg-gray-200" />
                          <div className="h-3 w-1/2 rounded bg-gray-100" />
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="aspect-square rounded-lg bg-violet-100" />
                          <div className="aspect-square rounded-lg bg-blue-100" />
                          <div className="aspect-square rounded-lg bg-teal-100" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Icons */}
                <div
                  className="absolute -top-4 -left-4 animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="rounded-full bg-white p-3 shadow-lg">
                    <Users className="h-6 w-6 text-violet-600" />
                  </div>
                </div>
                <div
                  className="absolute -top-8 -right-2 animate-float"
                  style={{ animationDelay: "2s" }}
                >
                  <div className="rounded-full bg-white p-3 shadow-lg">
                    <Zap className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
                <div
                  className="absolute -bottom-4 -right-6 animate-float"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="rounded-full bg-white p-3 shadow-lg">
                    <ShoppingCart className="h-6 w-6 text-teal-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
