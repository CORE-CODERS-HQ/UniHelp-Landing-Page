import React, { useEffect, useRef, useState } from "react";
import {
  MessageSquare,
  Search,
  Zap,
  Calendar,
  Lightbulb,
  ArrowRight,
  BadgeCheck,
  Shield,
  ChevronRight,
} from "lucide-react";

const Roadmap = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const roadmapItems = [
    {
      icon: MessageSquare,
      title: "In app Messaging & AI assistance",
      description:
        "Real-time messaging with and file sharing for tasks, marketplace, and talent hub. AI helps you complete purchase when you are away for some time",
      status: "Planned 2026",
      color: "bg-purple-600",
    },
    {
      icon: BadgeCheck,
      title: "Verified Profiles",
      description:
        "Optional ID verification for trusted helpers, sellers, and talents on campus.",
      status: "Planned 2026",
      color: "bg-purple-600",
    },
    {
      icon: Shield,
      title: "Secure Wallet & Payments",
      description:
        "Safe in-app payments with deposits, withdrawals, and purchase protection.",
      status: "Planned 2026",
      color: "bg-purple-600",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 pb-15 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-100/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-teal-100/30 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            We're Just{" "}
            <span className="bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
              Getting Started
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our vision extends far beyond what you see today. Here's what's
            coming next on our journey to revolutionize campus life.
          </p>
        </div>

        {/* Roadmap timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden sm:block absolute left-4 sm:left-1/2 transform sm:-translate-x-px h-full w-0.5 bg-gradient-to-b from-purple-400 via-purple-600 to-purple-800"></div>

          <div className="space-y-4 sm:-space-y-24">
            {roadmapItems.map((item, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 top-[-calc(${
                  index * 24
                }px)] ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`hidden sm:block absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-8 h-8 ${item.color} rounded-full border-4 border-white shadow-lg z-10`}
                  ></div>

                  {/* Content card */}
                  <div
                    className={`w-full sm:w-5/12 ${
                      index % 2 === 0 ? "sm:ml-auto" : "sm:mr-auto"
                    }`}
                  >
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100">
                      <div
                        className={`w-16 h-16 ${item.color} rounded-2xl p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <item.icon className="w-full h-full text-white" />
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-500 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      <div
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-white text-sm font-medium`}
                      >
                        <Calendar className="w-4 h-4" />
                        {item.status}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community input section */}
        <div
          className={`mt-20 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            id="join-waitlist"
            className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 rounded-3xl p-8 sm:p-12 text-white text-center"
          >
            <div className="w-16 h-16 bg-white rounded-2xl p-4 mx-auto mb-6">
              <Lightbulb className="w-full h-full text-purple-500" />
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Help Shape the Future
            </h3>

            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Your ideas matter! Join our community and help us build the
              features that will make your campus life even better.
            </p>
            <form className="max-w-lg mx-auto mb-3">
              <div className="relative flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-2xl bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-purple-400/50 font-medium"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-0 group bg-purple-500 text-white px-4 h-full whitespace-nowrap rounded-2xl font-semibold text-base shadow-lg hover:shadow-xl transform hover:scale-90 hover:translate-x-1 transition-all duration-300 hidden items-center justify-center gap-2 sm:flex"
                >
                  Join Waitlist
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="w-full justify-center flex mb-3 mt-3">
                <button
                  type="submit"
                  className="bg-purple-500 text-white px-18 h-full whitespace-nowrap rounded-2xl font-semibold text-base shadow-lg hover:shadow-xl transform hover:scale-90 hover:translate-x-1 transition-all duration-300 flex items-center justify-center gap-1 py-4 sm:hidden mx-auto w-full xs:w-[65%]"
                >
                  Join Waitlist
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-purple-500 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                Join Our Community
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
