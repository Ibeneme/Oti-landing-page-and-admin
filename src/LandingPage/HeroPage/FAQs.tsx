import React, { useState } from "react";
import "./FAQSection.css";

const FAQSection: React.FC = () => {
  const faqsData = [
    {
      question: "What are the benefits of using OTI Signals?",
      answer:
        "OTI Signals provides real-time trading signals across cryptocurrencies, stocks, forex, and commodities. Subscribing to our service can help you stay informed about market trends and make informed trading decisions.",
    },
    {
      question: "How can I become a provider on OTI Signals?",
      answer:
        "If you're a seasoned trader with valuable insights to share, you can join OTI Signals as a provider. Simply sign up on our platform and start offering your own trading signals to our community.",
    },
    {
      question: "Is there a community feature on OTI Signals?",
      answer:
        "Yes, OTI Signals has a vibrant community where users can interact, share ideas, and discuss market trends. Join our community to connect with like-minded traders and enhance your trading knowledge.",
    },
    // Add more FAQ items as needed
  ];

  // State to track the open/closed state of each accordion item
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Function to toggle the open/closed state of an accordion item
  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq-section" data-aos="zoom-in">
      <h2 className="section-header">FAQs</h2>
      <div className="accordion-container" data-aos="zoom-in">
        {faqsData.map((faq, index) => (
          <div data-aos="zoom-in" className="accordion-item" key={index}>
            <div
              // data-aos="zoom-in"
              className={`accordion-header ${
                openIndex === index ? "open" : ""
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="accordion-question">{faq.question}</h3>
              <span className="accordion-icon">&#x25BE;</span>
            </div>
            {openIndex === index && (
              <div className="accordion-content">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
