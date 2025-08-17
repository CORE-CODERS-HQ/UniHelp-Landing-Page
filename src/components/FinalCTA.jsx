import React, { useEffect, useRef, useState } from "react";
import {
  ChevronRight,
  Users,
  Zap,
  Star,
  ArrowRight,
  Twitter,
  Instagram,
  Mail,
} from "lucide-react";

const FinalCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
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

  const handleSubmit = () => {}; //remve this later jika
  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     // Handle waitlist signup
  //     console.log("Waitlist signup:", email);
  //     setEmail("");
  //     // Show success message
  //   };
  const handleWaitlistSignup = (e) => {
    e.preventDefault();
    console.log("Waitlist signup:", email);
    setEmail("");
  };

  const benefits = [
    { icon: Users, text: "Early access to beta features" },
    { icon: Star, text: "Priority customer support" },
    { icon: Zap, text: "Exclusive founding member perks" },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white relative overflow-hidden rounded-t-2xl"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-purple-700/30 to-purple-600/30 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Header */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Join the
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Movement
            </span>
          </h2>
        </div>
        {/* Secondary Footer */}
        <div className="mt-12 border-t border-white/20 pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
            {/* Column 1 - Brand */}
            <div>
              <h4 className="text-lg font-semibold mb-3">UniHelp</h4>
              <p className="text-sm text-white/70">
                Empowering students with the tools and community they need to
                thrive.
              </p>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-white/70 hover:text-white transition"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-white/70 hover:text-white transition"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="text-white/70 hover:text-white transition"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-white/70 hover:text-white transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Socials */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Connect</h4>
              <div className="flex justify-center sm:justify-start gap-4">
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition"
                >
                  <Twitter />
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition"
                >
                  <Instagram />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition"
                ></a>
                <a
                  href="mailto:getunihelp@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition"
                >
                  <Mail />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <div className="mt-8 text-center text-white/60 text-sm">
            © 2025 UniHelp. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
