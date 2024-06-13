import React from 'react'

const Missonvission = () => {
  return (
    <>
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">
                  Our Mission
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  As a growing company, we intend to take our staff and
                  seafarers with us on this journey... A rising tide lifts all
                  boats.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="bg-blue-400 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-white">
                  Our Vision
                </h2>
                <p className="text-white leading-relaxed">
                  We seek to work towards forming an organization which, as it
                  grows, also promotes inclusive growth and conservation of the
                  environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Missonvission
