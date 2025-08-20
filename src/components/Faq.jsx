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
      question: "How do I reset my password?",
      answer:
        "Go to the account settings page, click 'Reset Password', and follow the instructions sent to your email.",
      category: "Account",
    },
    {
      id: 2,
      question: "Can I use the app offline?",
      answer:
        "Yes, some features work offline. However, syncing your data requires an internet connection.",
      category: "Usage",
    },
    {
      id: 3,
      question: "What payment methods do you accept?",
      answer:
        "We accept credit/debit cards, PayPal, and bank transfers depending on your region.",
      category: "Billing",
    },
    {
      id: 4,
      question: "How do I contact support?",
      answer:
        "You can reach our support team via the 'Help' section in the app or by emailing support@example.com.",
      category: "Support",
    },
  ];
  return (
    <section className="px-2 pb-5 mb-14 flex justify-center">
      <div>
        {Faqs.map((faq) => (
          <div
            key={faq.id}
            className="w-2xl mb-3 px-3 py-5 border-b-violet-600 border-2 rounded-b-xl border-transparent"
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


