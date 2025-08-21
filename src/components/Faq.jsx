import React from "react";
import { CirclePlus, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const Faq = () => {
  const [openFaqs, setOpenFaqs] = useState([]);

  function handleClick(id) {
    if (openFaqs.includes(id)) {
      setOpenFaqs(openFaqs.filter((faqid) => faqid !== id));
    } else {
      setOpenFaqs([...openFaqs, id]);
    }
  }
  const Faqs = [
    {
      id: 1,
      question: "What is UniHelp?",
      answer:
        "UniHelp is a platform designed to connect students with resources, communities, and opportunities to make university life easier and more productive.",
    },
    {
      id: 2,
      question: "Is UniHelp free to use?",
      answer:
        "Yes, UniHelp offers free access to core features. We also plan to roll out premium features for extra benefits in the future.",
    },
    {
      id: 3,
      question: "Can I access UniHelp on mobile?",
      answer:
        "Absolutely. UniHelp is built to work seamlessly on both desktop and mobile devices, and we are working on a dedicated mobile app.",
    },
    {
      id: 4,
      question: "How can I join the waitlist?",
      answer:
        "You can join the waitlist by clicking the 'Join Waitlist' button on our homepage and filling out the short form.",
    },
    {
      id: 5,
      question: "When will UniHelp launch?",
      answer:
        "We are actively building and testing the platform. Our public beta is planned for mid-2026.",
    },
  ];
  return (
    <section className="px-2 pb-5 mb-14 flex justify-center">
      <div>
        {Faqs.map((faq) => (
          <div
            key={faq.id}
            className="lg:w-2xl mb-3 px-3 py-5 border-b-violet-600 border-2 rounded-b-xl border-transparent sm:w-full md:w-[600px]"
          >
            <div className="flex justify-between items-center">
              <h1 className="text-xl">{faq.question}</h1>{" "}
              {openFaqs.includes(faq.id) ? (
                <ChevronUp
                  color="#7f22fe"
                  onClick={() => handleClick(faq.id)}
                  className="hover:cursor-pointer"
                />
              ) : (
                <ChevronDown
                  color="#7f22fe"
                  onClick={() => handleClick(faq.id)}
                  className="hover:cursor-pointer"
                />
              )}
            </div>
            <div
              className={`mt-3 transition-all duration-500 ease-in-out overflow-hidden ${
                openFaqs.includes(faq.id)
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <li className="text-[#575858]">{faq.answer}</li>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
