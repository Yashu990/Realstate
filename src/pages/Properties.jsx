import React from 'react';

const Properties = () => {
  const properties = [
    { name: "Sector 42 Luxury Flat", price: "₹2.5 Cr", auction: "Auction Date: Oct 20", status: "Public" },
    { name: "DLF Phase 5 Apartment", price: "₹4.1 Cr", auction: "Auction Date: Oct 25", status: "Public" },
    { name: "Commercial Office Gurgaon", price: "₹8.5 Cr", auction: "Auction Date: Nov 05", status: "Public" }
  ];

  return (
    <div className="bg-white">
      <section className="pt-32 pb-20 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-zinc-900">Properties For Sale</h1>
          <p className="text-xl text-zinc-600 max-w-2xl">
            Check out our current list of auction properties in Gurgaon and nearby areas.
          </p>
        </div>
      </section>

      <section className="section-padding bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {properties.map((p, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm">
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <p className="text-2xl font-bold text-brand-teal mb-4">{p.price}</p>
                <div className="text-sm font-bold text-zinc-400 mb-6">{p.auction}</div>
                <button className="w-full py-3 border border-brand-teal text-brand-teal rounded font-bold text-xs uppercase">View Details</button>
              </div>
            ))}
          </div>

          <div className="bg-zinc-900 text-white p-12 rounded-2xl text-center">
             <h2 className="text-3xl font-bold mb-6 italic">Want to see all 1000+ properties?</h2>
             <p className="text-zinc-400 mb-10 max-w-xl mx-auto font-medium">Join our membership to get unrestricted access to all properties, legal reports, and expert advice.</p>
             <button className="px-10 py-4 bg-brand-teal rounded-lg font-bold text-sm uppercase">Join Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Properties;
