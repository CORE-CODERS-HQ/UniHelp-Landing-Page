import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

import { Users, Zap, ShoppingCart, ArrowRight } from "lucide-react";

export default function UniHelpLanding() {
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // bg-gradient-to-tl from-purple-300 via-white to-blue-50
  return (
    <div id="home" className="h-[45vh] lg:h-screen animate-gentleDrift">
      {/* Hero Section */}
      <section className="flex flex-col justify-center relative overflow-hidden px-4 pt-20 md:py-32">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-transparent to-blue-500/10" /> */}
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          {/* Floating Particles */}
          <div className="absolute top-10 left-10 h-24 w-24 rounded-full bg-violet-600 opacity-30 blur-xl" />
          <div
            className="absolute bottom-20 right-20 h-32 w-32 rounded-full bg-teal-400 opacity-30 blur-2xl"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/3 left-1/4 h-16 w-16 rounded-full bg-blue-400 opacity-40 blur-lg"
            style={{ animationDelay: "4s" }}
          />

          {/* SVG Waves */}
          <svg
            className="absolute bottom-0 left-0 w-full h-64 opacity-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,96C672,96,768,128,864,160C960,192,1056,224,1152,213.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="relative mx-auto pt-20 max-w-7xl">
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
              className={`pb-8 m-16 mx-8 mb-8 sm:mx-0 sm:mb-0 ${
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
