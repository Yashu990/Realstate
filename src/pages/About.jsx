import React from 'react';

const About = () => {
  return (
    <div className="bg-white">
      <section className="pt-32 pb-20 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-zinc-900">About Us</h1>
          <p className="text-xl text-zinc-600 max-w-2xl">
            We are real estate experts in Gurgaon helping you find the best property deals through auctions.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Experience</h2>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              We have been working in Gurgaon real estate for over 15 years. Our team knows how to handle complex bank auctions and legal steps to make it easy for you.
            </p>
            <div className="grid grid-cols-2 gap-8">
               <div>
                  <p className="text-3xl font-bold text-brand-teal">15+</p>
                  <p className="text-sm font-bold text-zinc-400">Years in Business</p>
               </div>
               <div>
                  <p className="text-3xl font-bold text-brand-teal">800+</p>
                  <p className="text-sm font-bold text-zinc-400">Happy Clients</p>
               </div>
            </div>
          </div>
          <div className="bg-zinc-100 rounded-xl p-10">
             <h3 className="text-xl font-bold mb-6">Why work with us?</h3>
             <ul className="space-y-4">
                <li className="font-bold">1. Simple and clear pricing</li>
                <li className="font-bold">2. Full legal help for every deal</li>
                <li className="font-bold">3. Access to hidden properties</li>
                <li className="font-bold">4. Step-by-step bidding help</li>
             </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
