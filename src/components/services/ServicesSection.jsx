import React from "react";

const ServicesSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 underline">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl h-full">
            <div className="p-6 flex flex-col items-center">
              <div className="bg-blue-500 text-white rounded-full p-4 mb-4">
                <img src="Images/cargo-ship.png" alt="" />
              </div>
              <h3 className="text-xl font-bold mb-2">Ship Management</h3>
              <p className="text-gray-600 text-center">
                Our team of experienced shore personnel in consultation with the
                owners teams operate our fleet in such a manner that we provide
                the best performance at a competitive cost.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl h-full">
            <div className="p-6 flex flex-col items-center">
              <div className="bg-green-500 text-white rounded-full p-4 mb-4">
                <img src="Images/consultant.png" alt="" />
              </div>
              <h3 className="text-xl font-bold mb-2">Technical Consultancy</h3>
              <p className="text-gray-600 text-center">
                Drawing on the experience of our team we provide various
                services required by the owners such as emission reduction
                solutions, dry-docking support and vessel inspections.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl h-full">
            <div className="p-6 flex flex-col items-center">
              <div className="bg-yellow-500 text-white rounded-full p-4 mb-4">
                <img src="Images/workers.png" alt="" />
              </div>
              <h3 className="text-xl font-bold mb-2">Crew Management</h3>
              <p className="text-gray-600 text-center">
                We are in the process of obtaining our licenses for crew
                recruitment in order to operate our managed ships with our in-house
                recruited seafarers. This would allow us to provide a better
                trained and experienced staff onboard our vessels while at the
                same time ensuring that our seafarers are assured of continuing
                professional growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
