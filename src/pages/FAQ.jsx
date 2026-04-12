import React, { useState } from 'react';

const FAQ = () => {
  const questions = [
    { q: "What is an NCLT property?", a: "These are properties sold through courts because of company legal issues. They are very safe because they are sold under government rules." },
    { q: "What are the risks?", a: "The main risk is the bidding process, but we help you through every step to make it safe." },
    { q: "What kind of profit can I expect?", a: "Most people see 15-25% profit in 1-3 years by buying these at low prices." },
    { q: "Can I get my membership fee back?", a: "Yes, the fee is put towards your first property purchase through us." },
    { q: "How are the prices so low?", a: "Banks want to sell these quickly to get their money back, so they sell them for 20-50% less than market price." }
  ];

  return (
    <div className="bg-white">
      <section className="pt-32 pb-20 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-zinc-900">Help & FAQ</h1>
          <p className="text-xl text-zinc-600 max-w-2xl">
            Find answers to common questions about our platform and auction properties.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            {questions.map((f, i) => (
              <div key={i} className="pb-8 border-b border-zinc-100">
                <h3 className="text-2xl font-bold mb-4 text-zinc-900">{f.q}</h3>
                <p className="text-lg text-zinc-500 font-medium italic">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50 text-center">
         <h3 className="text-3xl font-bold mb-8">Still have questions?</h3>
         <button className="px-10 py-4 bg-zinc-900 text-white rounded-lg font-bold text-sm uppercase">Contact Our Team</button>
      </section>
    </div>
  );
};

export default FAQ;
