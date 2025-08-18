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
      name: "Bala Abdulazeez Mayo",
      role: "Sofware Engineering Science, BUK",
      avatar:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQMEAgUH/8QALBABAAICAAUDAwMFAQAAAAAAAAECAxEEEjFBUSEycRNhgTNCkSJDUqGxFP/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADmb18ufqfYFgq+p9k/U8wCwcRkjv6OotE9JBIAAAAAAAAAAAAAAAAiZ1Hqrtffp2B1bJrorm0z1QAAAAAAA6i8x94WxaJhQROp3ANA4pfbsAAAAAAAAAAAFeS3aAc3tufs5AAAAETaK+6QSK5z4o62TXLS3S0A7AAAAXUtuFKazyzsF4iJ3G0gAAAAAAAAiZ1CiZ3O1uSdRCoAAAETPLG56QCvPljHHp17Mlr2vO7TtFrTe1rSgABUXYs81mIvO6/8bPSfWOjzWrhLbiaz26IrQAAACzFPZYorOp9FwJAAAAAAJAFWXq4dZPc5AAAV5/0L/CxXn/Qv8AwgKgAAu4b9WPiVK3hv1Y+JFbQEAABdXpCldj9oOgAAAAAAAU5Pc5d5Y9XAAACLRzVmvmNJAedaOW018IbM+GLxzV97JMTWdTGpBACoNXCU915/CrFhm8xzRMV7tsRERqOiKAAAALqe1Svp7YBIAAAAAAAOMkbhUvmNxpRPXQAAAiZiI3PRmycTP9uNfcGpzalb+6NsNr3t1vafyjdvINk8Pj8SmuDHE71/LFu3k3byD0YgedufM/iXdM+Sk75pmPEg3CvFmjJ21PhYAACaxu2l6vFHpuVgAAAAAAAACvJXvCwBnHV68s77Kc9prjtrroGbPl551HtjoqBQAEAAAATEzE7ifWG3Df6lN946sK7hbcuXXaUVsIjZ6ytpXQOojUJAAAAAAAAAAAETG+rJxlJ+nHLEzG2w0DxRvz8HW3rjnlnx2ZMmG+OdXiY+8dFRWAAAABETM6iN/ADvDE2zV5Y3MLsXB5L6m08sf7bcWKmKNUj8ippXXV2CAAAAAAAAAAAAAAAiYiY1MJAUX4XDf9mvj0VW4Gv7bzHzDYAw/wDhn/OP4THA+cn8Q2gMtOCxVn+qbW/K+mOlPZWI+IdgGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/Z",

      quote:
        "I take coding gigs between lectures and withdraw my earnings to my bank quickly. The people are reliable and payments are clear so it has become a steady side income.",
      rating: 5,
      color: "bg-gradient-to-r from-purple-500 to-blue-400",
    },
    {
      name: "Bolaji Olatunde",
      role: "Business Administration, University of Ilorin",
      avatar:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQMEAgUH/8QALBABAAICAAUDAwMFAQAAAAAAAAECAxEEEjFBUSEycRNhgTNCkSJDUqGxFP/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADmb18ufqfYFgq+p9k/U8wCwcRkjv6OotE9JBIAAAAAAAAAAAAAAAAiZ1Hqrtffp2B1bJrorm0z1QAAAAAAA6i8x94WxaJhQROp3ANA4pfbsAAAAAAAAAAAFeS3aAc3tufs5AAAAETaK+6QSK5z4o62TXLS3S0A7AAAAXUtuFKazyzsF4iJ3G0gAAAAAAAAiZ1CiZ3O1uSdRCoAAAETPLG56QCvPljHHp17Mlr2vO7TtFrTe1rSgABUXYs81mIvO6/8bPSfWOjzWrhLbiaz26IrQAAACzFPZYorOp9FwJAAAAAAJAFWXq4dZPc5AAAV5/0L/CxXn/Qv8AwgKgAAu4b9WPiVK3hv1Y+JFbQEAABdXpCldj9oOgAAAAAAAU5Pc5d5Y9XAAACLRzVmvmNJAedaOW018IbM+GLxzV97JMTWdTGpBACoNXCU915/CrFhm8xzRMV7tsRERqOiKAAAALqe1Svp7YBIAAAAAAAOMkbhUvmNxpRPXQAAAiZiI3PRmycTP9uNfcGpzalb+6NsNr3t1vafyjdvINk8Pj8SmuDHE71/LFu3k3byD0YgedufM/iXdM+Sk75pmPEg3CvFmjJ21PhYAACaxu2l6vFHpuVgAAAAAAAACvJXvCwBnHV68s77Kc9prjtrroGbPl551HtjoqBQAEAAAATEzE7ifWG3Df6lN946sK7hbcuXXaUVsIjZ6ytpXQOojUJAAAAAAAAAAAETG+rJxlJ+nHLEzG2w0DxRvz8HW3rjnlnx2ZMmG+OdXiY+8dFRWAAAABETM6iN/ADvDE2zV5Y3MLsXB5L6m08sf7bcWKmKNUj8ippXXV2CAAAAAAAAAAAAAAAiYiY1MJAUX4XDf9mvj0VW4Gv7bzHzDYAw/wDhn/OP4THA+cn8Q2gMtOCxVn+qbW/K+mOlPZWI+IdgGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/Z",

      quote:
        "I sold my textbooks and a printer in a week. It felt much safer than posting on WhatsApp and the buyer collected from the faculty convenience point without any problems.",
      rating: 5,
      color: "bg-gradient-to-r from-purple-500 to-blue-400",
    },
    {
      name: "Habeebullah Ajibola",
      role: "Computer Science, Afe Babalola University",
      avatar:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQMEAgUH/8QALBABAAICAAUDAwMFAQAAAAAAAAECAxEEEjFBUSEycRNhgTNCkSJDUqGxFP/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADmb18ufqfYFgq+p9k/U8wCwcRkjv6OotE9JBIAAAAAAAAAAAAAAAAiZ1Hqrtffp2B1bJrorm0z1QAAAAAAA6i8x94WxaJhQROp3ANA4pfbsAAAAAAAAAAAFeS3aAc3tufs5AAAAETaK+6QSK5z4o62TXLS3S0A7AAAAXUtuFKazyzsF4iJ3G0gAAAAAAAAiZ1CiZ3O1uSdRCoAAAETPLG56QCvPljHHp17Mlr2vO7TtFrTe1rSgABUXYs81mIvO6/8bPSfWOjzWrhLbiaz26IrQAAACzFPZYorOp9FwJAAAAAAJAFWXq4dZPc5AAAV5/0L/CxXn/Qv8AwgKgAAu4b9WPiVK3hv1Y+JFbQEAABdXpCldj9oOgAAAAAAAU5Pc5d5Y9XAAACLRzVmvmNJAedaOW018IbM+GLxzV97JMTWdTGpBACoNXCU915/CrFhm8xzRMV7tsRERqOiKAAAALqe1Svp7YBIAAAAAAAOMkbhUvmNxpRPXQAAAiZiI3PRmycTP9uNfcGpzalb+6NsNr3t1vafyjdvINk8Pj8SmuDHE71/LFu3k3byD0YgedufM/iXdM+Sk75pmPEg3CvFmjJ21PhYAACaxu2l6vFHpuVgAAAAAAAACvJXvCwBnHV68s77Kc9prjtrroGbPl551HtjoqBQAEAAAATEzE7ifWG3Df6lN946sK7hbcuXXaUVsIjZ6ytpXQOojUJAAAAAAAAAAAETG+rJxlJ+nHLEzG2w0DxRvz8HW3rjnlnx2ZMmG+OdXiY+8dFRWAAAABETM6iN/ADvDE2zV5Y3MLsXB5L6m08sf7bcWKmKNUj8ippXXV2CAAAAAAAAAAAAAAAiYiY1MJAUX4XDf9mvj0VW4Gv7bzHzDYAw/wDhn/OP4THA+cn8Q2gMtOCxVn+qbW/K+mOlPZWI+IdgGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/Z",

      quote:
        "I needed a photographer at short notice. I posted a task and someone replied within an hour. The work was great and I released payment after confirming the photos.",
      rating: 5,
      color: "bg-gradient-to-r from-purple-500 to-blue-400",
    },

    {
      name: "Isa Abdulmuktadir",
      role: "Chemical Engineering, FUT Minna",
      avatar:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQMEAgUH/8QALBABAAICAAUDAwMFAQAAAAAAAAECAxEEEjFBUSEycRNhgTNCkSJDUqGxFP/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADmb18ufqfYFgq+p9k/U8wCwcRkjv6OotE9JBIAAAAAAAAAAAAAAAAiZ1Hqrtffp2B1bJrorm0z1QAAAAAAA6i8x94WxaJhQROp3ANA4pfbsAAAAAAAAAAAFeS3aAc3tufs5AAAAETaK+6QSK5z4o62TXLS3S0A7AAAAXUtuFKazyzsF4iJ3G0gAAAAAAAAiZ1CiZ3O1uSdRCoAAAETPLG56QCvPljHHp17Mlr2vO7TtFrTe1rSgABUXYs81mIvO6/8bPSfWOjzWrhLbiaz26IrQAAACzFPZYorOp9FwJAAAAAAJAFWXq4dZPc5AAAV5/0L/CxXn/Qv8AwgKgAAu4b9WPiVK3hv1Y+JFbQEAABdXpCldj9oOgAAAAAAAU5Pc5d5Y9XAAACLRzVmvmNJAedaOW018IbM+GLxzV97JMTWdTGpBACoNXCU915/CrFhm8xzRMV7tsRERqOiKAAAALqe1Svp7YBIAAAAAAAOMkbhUvmNxpRPXQAAAiZiI3PRmycTP9uNfcGpzalb+6NsNr3t1vafyjdvINk8Pj8SmuDHE71/LFu3k3byD0YgedufM/iXdM+Sk75pmPEg3CvFmjJ21PhYAACaxu2l6vFHpuVgAAAAAAAACvJXvCwBnHV68s77Kc9prjtrroGbPl551HtjoqBQAEAAAATEzE7ifWG3Df6lN946sK7hbcuXXaUVsIjZ6ytpXQOojUJAAAAAAAAAAAETG+rJxlJ+nHLEzG2w0DxRvz8HW3rjnlnx2ZMmG+OdXiY+8dFRWAAAABETM6iN/ADvDE2zV5Y3MLsXB5L6m08sf7bcWKmKNUj8ippXXV2CAAAAAAAAAAAAAAAiYiY1MJAUX4XDf9mvj0VW4Gv7bzHzDYAw/wDhn/OP4THA+cn8Q2gMtOCxVn+qbW/K+mOlPZWI+IdgGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/Z",

      quote:
        "I sold spare parts and started getting repair jobs from classmates. The verification badge helped build trust and brought repeat customers.",
      rating: 5,
      color: "bg-gradient-to-r from-purple-500 to-blue-400",
    },
    {
      name: "Ifeoma E.",
      role: "Graphic Designer, University of Nigeria, Nsukka",
      avatar:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQMEAgUH/8QALBABAAICAAUDAwMFAQAAAAAAAAECAxEEEjFBUSEycRNhgTNCkSJDUqGxFP/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADmb18ufqfYFgq+p9k/U8wCwcRkjv6OotE9JBIAAAAAAAAAAAAAAAAiZ1Hqrtffp2B1bJrorm0z1QAAAAAAA6i8x94WxaJhQROp3ANA4pfbsAAAAAAAAAAAFeS3aAc3tufs5AAAAETaK+6QSK5z4o62TXLS3S0A7AAAAXUtuFKazyzsF4iJ3G0gAAAAAAAAiZ1CiZ3O1uSdRCoAAAETPLG56QCvPljHHp17Mlr2vO7TtFrTe1rSgABUXYs81mIvO6/8bPSfWOjzWrhLbiaz26IrQAAACzFPZYorOp9FwJAAAAAAJAFWXq4dZPc5AAAV5/0L/CxXn/Qv8AwgKgAAu4b9WPiVK3hv1Y+JFbQEAABdXpCldj9oOgAAAAAAAU5Pc5d5Y9XAAACLRzVmvmNJAedaOW018IbM+GLxzV97JMTWdTGpBACoNXCU915/CrFhm8xzRMV7tsRERqOiKAAAALqe1Svp7YBIAAAAAAAOMkbhUvmNxpRPXQAAAiZiI3PRmycTP9uNfcGpzalb+6NsNr3t1vafyjdvINk8Pj8SmuDHE71/LFu3k3byD0YgedufM/iXdM+Sk75pmPEg3CvFmjJ21PhYAACaxu2l6vFHpuVgAAAAAAAACvJXvCwBnHV68s77Kc9prjtrroGbPl551HtjoqBQAEAAAATEzE7ifWG3Df6lN946sK7hbcuXXaUVsIjZ6ytpXQOojUJAAAAAAAAAAAETG+rJxlJ+nHLEzG2w0DxRvz8HW3rjnlnx2ZMmG+OdXiY+8dFRWAAAABETM6iN/ADvDE2zV5Y3MLsXB5L6m08sf7bcWKmKNUj8ippXXV2CAAAAAAAAAAAAAAAiYiY1MJAUX4XDf9mvj0VW4Gv7bzHzDYAw/wDhn/OP4THA+cn8Q2gMtOCxVn+qbW/K+mOlPZWI+IdgGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/Z",

      quote:
        "I get steady poster and flyer commissions from campus clubs. The Talent section helped me turn my design skills into real bookings.",
      rating: 5,
      color: "bg-gradient-to-r from-purple-500 to-blue-400",
    },

    {
      name: "Umar Abdulkareem",
      role: "College of Medicine, University of Ibadan",
      avatar:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQMEAgUH/8QALBABAAICAAUDAwMFAQAAAAAAAAECAxEEEjFBUSEycRNhgTNCkSJDUqGxFP/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADmb18ufqfYFgq+p9k/U8wCwcRkjv6OotE9JBIAAAAAAAAAAAAAAAAiZ1Hqrtffp2B1bJrorm0z1QAAAAAAA6i8x94WxaJhQROp3ANA4pfbsAAAAAAAAAAAFeS3aAc3tufs5AAAAETaK+6QSK5z4o62TXLS3S0A7AAAAXUtuFKazyzsF4iJ3G0gAAAAAAAAiZ1CiZ3O1uSdRCoAAAETPLG56QCvPljHHp17Mlr2vO7TtFrTe1rSgABUXYs81mIvO6/8bPSfWOjzWrhLbiaz26IrQAAACzFPZYorOp9FwJAAAAAAJAFWXq4dZPc5AAAV5/0L/CxXn/Qv8AwgKgAAu4b9WPiVK3hv1Y+JFbQEAABdXpCldj9oOgAAAAAAAU5Pc5d5Y9XAAACLRzVmvmNJAedaOW018IbM+GLxzV97JMTWdTGpBACoNXCU915/CrFhm8xzRMV7tsRERqOiKAAAALqe1Svp7YBIAAAAAAAOMkbhUvmNxpRPXQAAAiZiI3PRmycTP9uNfcGpzalb+6NsNr3t1vafyjdvINk8Pj8SmuDHE71/LFu3k3byD0YgedufM/iXdM+Sk75pmPEg3CvFmjJ21PhYAACaxu2l6vFHpuVgAAAAAAAACvJXvCwBnHV68s77Kc9prjtrroGbPl551HtjoqBQAEAAAATEzE7ifWG3Df6lN946sK7hbcuXXaUVsIjZ6ytpXQOojUJAAAAAAAAAAAETG+rJxlJ+nHLEzG2w0DxRvz8HW3rjnlnx2ZMmG+OdXiY+8dFRWAAAABETM6iN/ADvDE2zV5Y3MLsXB5L6m08sf7bcWKmKNUj8ippXXV2CAAAAAAAAAAAAAAAiYiY1MJAUX4XDf9mvj0VW4Gv7bzHzDYAw/wDhn/OP4THA+cn8Q2gMtOCxVn+qbW/K+mOlPZWI+IdgGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/Z",

      quote:
        "I posted a task to get groceries and for a quick room clean. I paid into escrow and released payment after the job. It was smooth fair and stress free.",
      rating: 5,
      color: "bg-gradient-to-r from-purple-500 to-blue-400",
    },
  ];

  const stats = [
    {
      id: 1,
      number: 100,
      label: "Active Students",
      letterf: "",
      letterb: "+",
      letterm: "",
      large: false,
    },
    {
      id: 2,
      number: 1,
      label: "Earned by Users",
      letterf: "₦",
      letterb: "+",
      letterm: "M",
      large: true,
    },
    {
      id: 3,
      number: 110,
      label: "Tasks Completed",
      letterf: "",
      letterb: "+",
      letterm: "",
      large: false,
    },
    {
      id: 4,
      number: 98,
      label: "Satisfaction Rate",
      letterf: "",
      letterb: "%",
      letterm: "",
      large: false,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
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
            <span className="bg-gradient-to-r from-purple-500 to-teal-600 bg-clip-text text-transparent">
              Love
            </span>{" "}
            UniHelp
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Don't just take our word for it. Here's what early users are saying
            about their experience.
          </p>

          {/* Overall rating */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
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
                {/* Quote icon */}
                <div
                  className={`w-12 h-12 ${testimonial.color} rounded-2xl p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}
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
                      className={`absolute inset-0 rounded-full opacity-20 border-4 border-purple-500`}
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
              <StatCountItem
                key={stat.id}
                label={stat.label}
                number={stat.number}
                letterf={stat.letterf}
                letterb={stat.letterb}
                large={stat.large}
                letterm={stat.letterm}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
