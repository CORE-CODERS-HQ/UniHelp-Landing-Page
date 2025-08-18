import React, { useEffect, useRef, useState } from "react";
import { MessageSquareX, ShieldX, Clock, EyeOff, Users } from "lucide-react";

const Problem = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  const problems = [
    {
      icon: MessageSquareX,
      title: "Missed DMs & Lost Sales",
      description:
        "Important messages buried in group chats, opportunities slipping through the cracks",
      color: "bg-purple-500",
    },
    {
      icon: ShieldX,
      title: "Untrustworthy Sellers",
      description:
        "No way to verify seller credibility, leading to scams and disappointed buyers",
      color: "bg-purple-500",
    },
    {
      icon: Clock,
      title: "Unreliable Help",
      description:
        "Students promising help but failing to deliver when you need it most",
      color: "bg-purple-500",
    },
    {
      icon: EyeOff,
      title: "Unnoticed Talents",
      description:
        "Skilled students struggling to showcase their abilities and find paying clients",
      color: "bg-purple-500",
    },
    {
      icon: Users,
      title: "Poor Campus Connections",
      description:
        "Fragmented communication across multiple platforms, missing out on opportunities",
      color: "bg-purple-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="features"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Why{" "}
            <span className="bg-gradient-to-r from-purple-500 to-teal-600 bg-clip-text text-transparent">
              UniHelp?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every student faces these frustrating challenges daily. We're here
            to solve them once and for all.
          </p>
        </div>

        {/* Problems grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`group transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-lg transition-all duration-500 group-hover:translate-y-4 border border-gray-100">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-2xl ${problem.color} p-3 mb-6 transition-transform duration-300`}
                >
                  <problem.icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-500 transition-colors">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-2xl font-semibold text-gray-900 mb-4">
            Sound familiar?{" "}
            <span className="text-purple-500">You're not alone.</span>
          </p>
          <p className="text-lg text-gray-600">
            Join thousands of students who are ready for a better solution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
