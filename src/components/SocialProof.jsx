import React, { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";
import StatCountItem from "./StatCountItem";

const SocialProof = () => {
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

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Computer Science, NYU",
      avatar:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQMEAgUH/8QALBABAAICAAUDAwMFAQAAAAAAAAECAxEEEjFBUSEycRNhgTNCkSJDUqGxFP/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADmb18ufqfYFgq+p9k/U8wCwcRkjv6OotE9JBIAAAAAAAAAAAAAAAAiZ1Hqrtffp2B1bJrorm0z1QAAAAAAA6i8x94WxaJhQROp3ANA4pfbsAAAAAAAAAAAFeS3aAc3tufs5AAAAETaK+6QSK5z4o62TXLS3S0A7AAAAXUtuFKazyzsF4iJ3G0gAAAAAAAAiZ1CiZ3O1uSdRCoAAAETPLG56QCvPljHHp17Mlr2vO7TtFrTe1rSgABUXYs81mIvO6/8bPSfWOjzWrhLbiaz26IrQAAACzFPZYorOp9FwJAAAAAAJAFWXq4dZPc5AAAV5/0L/CxXn/Qv8AwgKgAAu4b9WPiVK3hv1Y+JFbQEAABdXpCldj9oOgAAAAAAAU5Pc5d5Y9XAAACLRzVmvmNJAedaOW018IbM+GLxzV97JMTWdTGpBACoNXCU915/CrFhm8xzRMV7tsRERqOiKAAAALqe1Svp7YBIAAAAAAAOMkbhUvmNxpRPXQAAAiZiI3PRmycTP9uNfcGpzalb+6NsNr3t1vafyjdvINk8Pj8SmuDHE71/LFu3k3byD0YgedufM/iXdM+Sk75pmPEg3CvFmjJ21PhYAACaxu2l6vFHpuVgAAAAAAAACvJXvCwBnHV68s77Kc9prjtrroGbPl551HtjoqBQAEAAAATEzE7ifWG3Df6lN946sK7hbcuXXaUVsIjZ6ytpXQOojUJAAAAAAAAAAAETG+rJxlJ+nHLEzG2w0DxRvz8HW3rjnlnx2ZMmG+OdXiY+8dFRWAAAABETM6iN/ADvDE2zV5Y3MLsXB5L6m08sf7bcWKmKNUj8ippXXV2CAAAAAAAAAAAAAAAiYiY1MJAUX4XDf9mvj0VW4Gv7bzHzDYAw/wDhn/OP4THA+cn8Q2gMtOCxVn+qbW/K+mOlPZWI+IdgGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/Z",
      quote:
        "Finally, a platform that gets what students actually need. Made $300 last month just helping with design projects!",
      rating: 5,
      color: "from-purple-400 to-pink-400",
    },
    {
      name: "Marcus J.",
      role: "Business Major, UCLA",
      avatar:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQMEAgUH/8QALBABAAICAAUDAwMFAQAAAAAAAAECAxEEEjFBUSEycRNhgTNCkSJDUqGxFP/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADmb18ufqfYFgq+p9k/U8wCwcRkjv6OotE9JBIAAAAAAAAAAAAAAAAiZ1Hqrtffp2B1bJrorm0z1QAAAAAAA6i8x94WxaJhQROp3ANA4pfbsAAAAAAAAAAAFeS3aAc3tufs5AAAAETaK+6QSK5z4o62TXLS3S0A7AAAAXUtuFKazyzsF4iJ3G0gAAAAAAAAiZ1CiZ3O1uSdRCoAAAETPLG56QCvPljHHp17Mlr2vO7TtFrTe1rSgABUXYs81mIvO6/8bPSfWOjzWrhLbiaz26IrQAAACzFPZYorOp9FwJAAAAAAJAFWXq4dZPc5AAAV5/0L/CxXn/Qv8AwgKgAAu4b9WPiVK3hv1Y+JFbQEAABdXpCldj9oOgAAAAAAAU5Pc5d5Y9XAAACLRzVmvmNJAedaOW018IbM+GLxzV97JMTWdTGpBACoNXCU915/CrFhm8xzRMV7tsRERqOiKAAAALqe1Svp7YBIAAAAAAAOMkbhUvmNxpRPXQAAAiZiI3PRmycTP9uNfcGpzalb+6NsNr3t1vafyjdvINk8Pj8SmuDHE71/LFu3k3byD0YgedufM/iXdM+Sk75pmPEg3CvFmjJ21PhYAACaxu2l6vFHpuVgAAAAAAAACvJXvCwBnHV68s77Kc9prjtrroGbPl551HtjoqBQAEAAAATEzE7ifWG3Df6lN946sK7hbcuXXaUVsIjZ6ytpXQOojUJAAAAAAAAAAAETG+rJxlJ+nHLEzG2w0DxRvz8HW3rjnlnx2ZMmG+OdXiY+8dFRWAAAABETM6iN/ADvDE2zV5Y3MLsXB5L6m08sf7bcWKmKNUj8ippXXV2CAAAAAAAAAAAAAAAiYiY1MJAUX4XDf9mvj0VW4Gv7bzHzDYAw/wDhn/OP4THA+cn8Q2gMtOCxVn+qbW/K+mOlPZWI+IdgGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/Z",
      quote:
        "Sold my old textbooks in minutes and found a tutor for calculus. This is exactly what campus life needed.",
      rating: 5,
      color: "from-teal-400 to-blue-400",
    },
    {
      name: "Emma K.",
      role: "Pre-Med, Stanford",
      avatar:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQMEAgUH/8QALBABAAICAAUDAwMFAQAAAAAAAAECAxEEEjFBUSEycRNhgTNCkSJDUqGxFP/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADmb18ufqfYFgq+p9k/U8wCwcRkjv6OotE9JBIAAAAAAAAAAAAAAAAiZ1Hqrtffp2B1bJrorm0z1QAAAAAAA6i8x94WxaJhQROp3ANA4pfbsAAAAAAAAAAAFeS3aAc3tufs5AAAAETaK+6QSK5z4o62TXLS3S0A7AAAAXUtuFKazyzsF4iJ3G0gAAAAAAAAiZ1CiZ3O1uSdRCoAAAETPLG56QCvPljHHp17Mlr2vO7TtFrTe1rSgABUXYs81mIvO6/8bPSfWOjzWrhLbiaz26IrQAAACzFPZYorOp9FwJAAAAAAJAFWXq4dZPc5AAAV5/0L/CxXn/Qv8AwgKgAAu4b9WPiVK3hv1Y+JFbQEAABdXpCldj9oOgAAAAAAAU5Pc5d5Y9XAAACLRzVmvmNJAedaOW018IbM+GLxzV97JMTWdTGpBACoNXCU915/CrFhm8xzRMV7tsRERqOiKAAAALqe1Svp7YBIAAAAAAAOMkbhUvmNxpRPXQAAAiZiI3PRmycTP9uNfcGpzalb+6NsNr3t1vafyjdvINk8Pj8SmuDHE71/LFu3k3byD0YgedufM/iXdM+Sk75pmPEg3CvFmjJ21PhYAACaxu2l6vFHpuVgAAAAAAAACvJXvCwBnHV68s77Kc9prjtrroGbPl551HtjoqBQAEAAAATEzE7ifWG3Df6lN946sK7hbcuXXaUVsIjZ6ytpXQOojUJAAAAAAAAAAAETG+rJxlJ+nHLEzG2w0DxRvz8HW3rjnlnx2ZMmG+OdXiY+8dFRWAAAABETM6iN/ADvDE2zV5Y3MLsXB5L6m08sf7bcWKmKNUj8ippXXV2CAAAAAAAAAAAAAAAiYiY1MJAUX4XDf9mvj0VW4Gv7bzHzDYAw/wDhn/OP4THA+cn8Q2gMtOCxVn+qbW/K+mOlPZWI+IdgGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/Z",
      quote:
        "The task help feature saved me during finals week. Connected with someone who could format my research paper perfectly.",
      rating: 5,
      color: "from-blue-400 to-purple-400",
    },
    {
      name: "Alex R.",
      role: "Engineering, MIT",
      avatar:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQMEAgUH/8QALBABAAICAAUDAwMFAQAAAAAAAAECAxEEEjFBUSEycRNhgTNCkSJDUqGxFP/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADmb18ufqfYFgq+p9k/U8wCwcRkjv6OotE9JBIAAAAAAAAAAAAAAAAiZ1Hqrtffp2B1bJrorm0z1QAAAAAAA6i8x94WxaJhQROp3ANA4pfbsAAAAAAAAAAAFeS3aAc3tufs5AAAAETaK+6QSK5z4o62TXLS3S0A7AAAAXUtuFKazyzsF4iJ3G0gAAAAAAAAiZ1CiZ3O1uSdRCoAAAETPLG56QCvPljHHp17Mlr2vO7TtFrTe1rSgABUXYs81mIvO6/8bPSfWOjzWrhLbiaz26IrQAAACzFPZYorOp9FwJAAAAAAJAFWXq4dZPc5AAAV5/0L/CxXn/Qv8AwgKgAAu4b9WPiVK3hv1Y+JFbQEAABdXpCldj9oOgAAAAAAAU5Pc5d5Y9XAAACLRzVmvmNJAedaOW018IbM+GLxzV97JMTWdTGpBACoNXCU915/CrFhm8xzRMV7tsRERqOiKAAAALqe1Svp7YBIAAAAAAAOMkbhUvmNxpRPXQAAAiZiI3PRmycTP9uNfcGpzalb+6NsNr3t1vafyjdvINk8Pj8SmuDHE71/LFu3k3byD0YgedufM/iXdM+Sk75pmPEg3CvFmjJ21PhYAACaxu2l6vFHpuVgAAAAAAAACvJXvCwBnHV68s77Kc9prjtrroGbPl551HtjoqBQAEAAAATEzE7ifWG3Df6lN946sK7hbcuXXaUVsIjZ6ytpXQOojUJAAAAAAAAAAAETG+rJxlJ+nHLEzG2w0DxRvz8HW3rjnlnx2ZMmG+OdXiY+8dFRWAAAABETM6iN/ADvDE2zV5Y3MLsXB5L6m08sf7bcWKmKNUj8ippXXV2CAAAAAAAAAAAAAAAiYiY1MJAUX4XDf9mvj0VW4Gv7bzHzDYAw/wDhn/OP4THA+cn8Q2gMtOCxVn+qbW/K+mOlPZWI+IdgGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/Z",
      quote:
        "Love how easy it is to find reliable people. The rating system actually works - no more sketchy group chat deals.",
      rating: 5,
      color: "from-green-400 to-teal-400",
    },
    {
      name: "Maya P.",
      role: "Art Student, Parsons",
      avatar:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQMEAgUH/8QALBABAAICAAUDAwMFAQAAAAAAAAECAxEEEjFBUSEycRNhgTNCkSJDUqGxFP/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADmb18ufqfYFgq+p9k/U8wCwcRkjv6OotE9JBIAAAAAAAAAAAAAAAAiZ1Hqrtffp2B1bJrorm0z1QAAAAAAA6i8x94WxaJhQROp3ANA4pfbsAAAAAAAAAAAFeS3aAc3tufs5AAAAETaK+6QSK5z4o62TXLS3S0A7AAAAXUtuFKazyzsF4iJ3G0gAAAAAAAAiZ1CiZ3O1uSdRCoAAAETPLG56QCvPljHHp17Mlr2vO7TtFrTe1rSgABUXYs81mIvO6/8bPSfWOjzWrhLbiaz26IrQAAACzFPZYorOp9FwJAAAAAAJAFWXq4dZPc5AAAV5/0L/CxXn/Qv8AwgKgAAu4b9WPiVK3hv1Y+JFbQEAABdXpCldj9oOgAAAAAAAU5Pc5d5Y9XAAACLRzVmvmNJAedaOW018IbM+GLxzV97JMTWdTGpBACoNXCU915/CrFhm8xzRMV7tsRERqOiKAAAALqe1Svp7YBIAAAAAAAOMkbhUvmNxpRPXQAAAiZiI3PRmycTP9uNfcGpzalb+6NsNr3t1vafyjdvINk8Pj8SmuDHE71/LFu3k3byD0YgedufM/iXdM+Sk75pmPEg3CvFmjJ21PhYAACaxu2l6vFHpuVgAAAAAAAACvJXvCwBnHV68s77Kc9prjtrroGbPl551HtjoqBQAEAAAATEzE7ifWG3Df6lN946sK7hbcuXXaUVsIjZ6ytpXQOojUJAAAAAAAAAAAETG+rJxlJ+nHLEzG2w0DxRvz8HW3rjnlnx2ZMmG+OdXiY+8dFRWAAAABETM6iN/ADvDE2zV5Y3MLsXB5L6m08sf7bcWKmKNUj8ippXXV2CAAAAAAAAAAAAAAAiYiY1MJAUX4XDf9mvj0VW4Gv7bzHzDYAw/wDhn/OP4THA+cn8Q2gMtOCxVn+qbW/K+mOlPZWI+IdgGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/Z",
      quote:
        "As a freelance photographer, this platform helped me build a real client base on campus. Game changer!",
      rating: 5,
      color: "from-pink-400 to-purple-400",
    },
    {
      name: "David L.",
      role: "Economics, Harvard",
      avatar:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQMEAgUH/8QALBABAAICAAUDAwMFAQAAAAAAAAECAxEEEjFBUSEycRNhgTNCkSJDUqGxFP/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADmb18ufqfYFgq+p9k/U8wCwcRkjv6OotE9JBIAAAAAAAAAAAAAAAAiZ1Hqrtffp2B1bJrorm0z1QAAAAAAA6i8x94WxaJhQROp3ANA4pfbsAAAAAAAAAAAFeS3aAc3tufs5AAAAETaK+6QSK5z4o62TXLS3S0A7AAAAXUtuFKazyzsF4iJ3G0gAAAAAAAAiZ1CiZ3O1uSdRCoAAAETPLG56QCvPljHHp17Mlr2vO7TtFrTe1rSgABUXYs81mIvO6/8bPSfWOjzWrhLbiaz26IrQAAACzFPZYorOp9FwJAAAAAAJAFWXq4dZPc5AAAV5/0L/CxXn/Qv8AwgKgAAu4b9WPiVK3hv1Y+JFbQEAABdXpCldj9oOgAAAAAAAU5Pc5d5Y9XAAACLRzVmvmNJAedaOW018IbM+GLxzV97JMTWdTGpBACoNXCU915/CrFhm8xzRMV7tsRERqOiKAAAALqe1Svp7YBIAAAAAAAOMkbhUvmNxpRPXQAAAiZiI3PRmycTP9uNfcGpzalb+6NsNr3t1vafyjdvINk8Pj8SmuDHE71/LFu3k3byD0YgedufM/iXdM+Sk75pmPEg3CvFmjJ21PhYAACaxu2l6vFHpuVgAAAAAAAACvJXvCwBnHV68s77Kc9prjtrroGbPl551HtjoqBQAEAAAATEzE7ifWG3Df6lN946sK7hbcuXXaUVsIjZ6ytpXQOojUJAAAAAAAAAAAETG+rJxlJ+nHLEzG2w0DxRvz8HW3rjnlnx2ZMmG+OdXiY+8dFRWAAAABETM6iN/ADvDE2zV5Y3MLsXB5L6m08sf7bcWKmKNUj8ippXXV2CAAAAAAAAAAAAAAAiYiY1MJAUX4XDf9mvj0VW4Gv7bzHzDYAw/wDhn/OP4THA+cn8Q2gMtOCxVn+qbW/K+mOlPZWI+IdgGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/Z",
      quote:
        "The marketplace feature is incredible. Found a great laptop deal and even made friends with the seller!",
      rating: 5,
      color: "from-orange-400 to-red-400",
    },
  ];
  const stats = [
    { id: 1, number: 100, label: "Active Students", letterf: "", letterb: "+" },
    { id: 2, number: "1", label: "Earned by Users", letterf: "₦", letterb: "M+" },
    { id: 3, number: "110", label: "Tasks Completed", letterf: "", letterb: "+" },
    { id: 4, number: "98", label: "Satisfaction Rate", letterf: "", letterb: "%" },
  ];
  // const [count, setcount] = useState();

  let count = 0
  
  function animatedCount(statNumber) {
      let counter = setInterval(() => {
        count++
        if (count === statNumber) {
          clearInterval(counter)
        }
      }, 300)
  }

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-teal-50/50 to-blue-50/50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Students{" "}
            <span className="bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
              Love
            </span>{" "}
            UniHelp
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Don't just take our word for it. Here's what early users are saying
            about their experience.
          </p>

          {/* Overall rating */}
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">4.9/5</span>
            <span className="text-gray-600">from 500+ students</span>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Quote icon */}
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${testimonial.color} rounded-2xl p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Quote className="w-full h-full text-white" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${testimonial.color} opacity-20`}
                    ></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StatCountItem key={stat.id} label={stat.label} number={stat.number} letterf={stat.letterf} letterb={stat.letterb}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
