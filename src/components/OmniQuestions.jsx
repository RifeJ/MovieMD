import React, { useState } from "react";

function OmniQuestions() {
  const [openId, setOpenId] = useState(null);

  const questions = [
    {
      id: 1,
      title: "What is Omni?",
      content:
        "Omni is a comprehensive, all-in-one digital ecosystem specifically engineered to streamline your personal and professional workflow. By centralizing your most essential tools into a single, intuitive interface...",
    },
    {
      id: 2,
      title: "How do I Get Help If I Have Any Issues?",
      content:
        "We pride ourselves on providing world-class support to our community. If you encounter any technical difficulties, our dedicated support team is available 24/7 through several channels...",
    },
    {
      id: 3,
      title: "Is Omni Good For Kids & Families?",
      content:
        "Safety and collaboration are at the heart of the Omni experience. We have built robust, industry-leading parental controls that allow guardians to manage content visibility effectively...",
    },
    {
      id: 4,
      title: "How much Does Omni Cost?",
      content:
        "Omni offers a variety of flexible pricing tiers tailored to meet different needs and budgets. We offer a feature-rich 'Free Forever' plan for individual users...",
    },
  ];

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="mt-26 flex flex-col items-center gap-32">
      <h1 className="text-5xl font-bold">
        The Omni Questions Everyone's Asking
      </h1>

      <div className="flex flex-col gap-9 w-278.75">
        {questions.map((q) => (
          <div
            key={q.id}
            className={`cursor-pointer collapse collapse-arrow border border-secondary pl-8 py-7.25 w-full rounded-3xl transition-all ${openId === q.id ? "collapse-open" : "collapse-close"}`}>
            <input
              type="checkbox"
              className="peer"
              checked={openId === q.id}
              onChange={() => handleToggle(q.id)}
            />

            <div
              className="collapse-title font-bold text-2xl cursor-pointer"
              onClick={() => handleToggle(q.id)}>
              {q.title}
            </div>

            <div className="collapse-content z-1 text-gray-500 text-lg">
              <p>{q.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OmniQuestions;
