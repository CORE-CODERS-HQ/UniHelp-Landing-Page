import React, { useEffect, useRef, useState } from "react";
import {
  CheckCircle,
  ShoppingBag,
  User,
  Star,
  Users,
  BookOpen,
  FileText,
  Laptop,
  Truck,
  BadgeCheck,
  Calendar,
  DollarSign,
  Utensils,
  BrushCleaning,
  Tag,
} from "lucide-react";

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
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

  const features = [
    {
      title: "Task Services",
      subtitle: "Campus Errands, Simplified",
      description:
        "Need help with hostel chores, buying food from the cafeteria, or a quick campus run? Find reliable peers to handle it for you.",
      color: "from-purple-600 to-purple-800",
      icon: CheckCircle,
      benefits: [
        {
          icon: BrushCleaning,
          text: "Get help with hostel cleaning & small chores",
        },
        { icon: Utensils, text: "Ask someone to buy meals or snacks for you" },
        { icon: Users, text: "Connect with peers who are nearby & available" },
      ],
      mockup: "Task",
    },
    {
      title: "Campus Marketplace",
      subtitle: "Buy, Sell & Swap with Ease",
      description:
        "Trade everything students actually need — from textbooks to hostel items, affordable gadgets, and even cafeteria coupons.",
      color: "from-purple-600 to-purple-800",
      icon: ShoppingBag,
      benefits: [
        { icon: Laptop, text: "Buy & sell a wide range of items on campus" },
        { icon: Tag, text: "Affordable second-hand deals and fresh listings" },
        { icon: Truck, text: "Meetup points & in-campus delivery options" },
      ],

      mockup: "Market",
    },
    {
      title: "Talent Hub",
      subtitle: "Turn Your Skills into Opportunities",
      description:
        "Whether you tutor, design, code, braid hair, or play instruments — showcase your skills and earn from fellow students on campus.",
      color: "from-purple-600 to-purple-800",
      icon: User,
      benefits: [
        { icon: BadgeCheck, text: "Verified profiles build trust instantly" },
        { icon: Calendar, text: "Book services easily within the app" },
        { icon: DollarSign, text: "Campus-friendly payment options" },
      ],
      mockup: "Talent",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-100/50 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-100/50 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our 3{" "}
            <span className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 bg-clip-text text-transparent">
              Superpowers
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to succeed in college, wrapped in one beautiful,
            intuitive platform.
          </p>
        </div>

        {/* Features showcase */}
        <div className="space-y-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Content */}
                <div
                  className={`space-y-8${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div>
                    <div
                      className={`inline-flex items-center gap-3 p-3 rounded-2xl bg-gradient-to-r ${feature.color} mb-6`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                      <span className="text-white font-semibold text-lg">
                        {feature.title}
                      </span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                      {feature.subtitle}
                    </h3>

                    <p className="text-xl text-gray-600 leading-relaxed mb-4">
                      {feature.description}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-4 mt-4">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div
                        key={benefitIndex}
                        className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow group"
                      >
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} p-3 group-hover:scale-110 transition-transform`}
                        >
                          <benefit.icon className="w-full h-full text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">
                          {benefit.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mockup */}
                <div
                  className={`${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="relative">
                    <div
                      className={`w-full h-96 bg-gradient-to-br ${feature.color} rounded-3xl shadow-2xl p-8 flex items-center justify-center transform hover:scale-105 transition-transform duration-500`}
                    >
                      <div className="text-center text-white">
                        <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-4">
                          <feature.icon className="w-12 h-12" />
                        </div>
                        <h4 className="text-2xl font-bold mb-2">
                          {feature.mockup} Hub
                        </h4>
                        <p className="text-white/80">
                          Interactive Preview Coming Soon
                        </p>
                      </div>
                    </div>

                    {/* Floating elements */}
                    <div
                      className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-lg animate-bounce`}
                    >
                      <Star className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-20 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our waitlist and be among the first students to revolutionize
              their campus experience.
            </p>
            <button className="bg-purple-500 text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
