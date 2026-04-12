import React from 'react';

const Membership = () => {
  return (
    <div className="bg-white">
      <section className="pt-32 pb-20 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-zinc-900">Join Our Membership</h1>
          <p className="text-xl text-zinc-600 max-w-2xl">
            Get access to the best property deals in Gurgaon. Join a community of serious buyers today.
          </p>
        </div>
      </section>

      <section className="section-padding bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
           <div className="bg-brand-teal text-white p-12 rounded-xl shadow-xl">
              <h2 className="text-2xl font-bold mb-6">Yearly Access</h2>
              <div className="text-5xl font-bold mb-4">₹1,00,000</div>
              <p className="text-white/70 mb-10">No hidden fees. Full transparency for every deal.</p>
              
              <ul className="space-y-4 mb-10">
                 <li className="flex items-center gap-3 font-bold text-sm underline decoration-white/20 underline-offset-4">Check 1000+ Premium Properties</li>
                 <li className="flex items-center gap-3 font-bold text-sm underline decoration-white/20 underline-offset-4">Get Legal Reports for Free</li>
                 <li className="flex items-center gap-3 font-bold text-sm underline decoration-white/20 underline-offset-4">Help with Bidding and Auctions</li>
                 <li className="flex items-center gap-3 font-bold text-sm underline decoration-white/20 underline-offset-4">Buy Properties for Resale Help</li>
              </ul>
              
              <button className="w-full py-4 bg-white text-brand-teal rounded font-bold uppercase text-sm">Sign Up Now</button>
           </div>
           
           <div className="space-y-6">
              <div className="p-8 bg-white rounded-xl border border-zinc-200">
                 <h4 className="text-xl font-bold mb-4">Trusted By 800+ People</h4>
                 <p className="text-zinc-600">We have helped hundreds of people find and buy their dream properties at low prices.</p>
              </div>
              <div className="p-8 bg-white rounded-xl border border-zinc-200">
                 <h4 className="text-xl font-bold mb-4">Direct Bank Connection</h4>
                 <p className="text-zinc-600">We work directly with banks to get you the best off-market deals before anyone else.</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
