import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What is the purpose of this platform?",
    answer: (
      <p>
        Our platform empowers freelancers by connecting them with a diverse
        range of short-term jobs and gig work, utilizing blockchain for secure
        transactions and AI for personalized job matching.
      </p>
    ),
  },
  {
    question: "How does the payment system work?",
    answer: (
      <p>
        We implement a secure escrow system using blockchain technology,
        ensuring that payments are safe and transparent for both freelancers and
        clients.
      </p>
    ),
  },
  {
    question: "What types of jobs can I find?",
    answer: (
      <p>
        Freelancers can find various opportunities, including gig work,
        project-based jobs, and specialized roles tailored to both rural and
        urban markets.
      </p>
    ),
  },
  {
    question: "How does AI assist in job matching?",
    answer: (
      <p>
        Our AI algorithms analyze user profiles, skills, and preferences to
        provide tailored job recommendations, enhancing the job search
        experience.
      </p>
    ),
  },
  {
    question: "Is this platform accessible in rural areas?",
    answer: (
      <p>
        Yes, we are committed to connecting freelancers in both urban and rural
        areas, promoting local economies and job opportunities.
      </p>
    ),
  },
];

function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-12 md:py-24 px-8  ">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="py-4 text-3xl font-bold tracking-tight md:text-5xl text-gray-800 dark:text-white">
            Frequently Asked Questions
          </h1>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white  rounded-lg ">
              <button
                className="flex justify-between w-full p-4 text-left text-lg font-medium bg-gray-100 dark:bg-gray-800 rounded-t-lg focus:outline-none hover:bg-gray-200 transition duration-300"
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
                <ChevronDown
                  className={`w-5 h-5 ml-2 text-gray-500 transition-transform duration-200 ${
                    activeIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out bg-gray-100 ${
                  activeIndex === index ? "max-h-screen p-4" : "max-h-0"
                }`}
              >
                <div className="text-gray-700 ">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
