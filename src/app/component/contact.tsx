import React from "react";

const Contact = () => {
  return (
    <div id="Contact">
      <section className="text-white body-font bg-gradient-to-r from-pink-600 via-pink-500 to-white relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          {/* Lighter Left Side - Map & Info */}
          <div className="lg:w-2/3 md:w-1/2 bg-pink-200/30 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13592.890693900845!2d74.33073814003639!3d31.60035771297874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b0b83c7ea7d%3A0x51cf9a6d6eb7bbf0!2sShad%20Bagh%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709654384206!5m2!1sen!2s"
            />
            <div className="bg-white/80 relative flex flex-wrap py-6 rounded shadow-md text-pink-800">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">Shadbagh Tajpora, Lahore</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="leading-relaxed">faryalnoshad5@gmail.com</a>
                <h2 className="title-font font-semibold tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">03299755665</p>
              </div>
            </div>
          </div>

          {/* Darker Right Side - Form */}
          <div className="lg:w-1/3 md:w-1/2 bg-pink-900 bg-opacity-90 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 rounded-md p-8">
            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
              Contact
            </h2>
            <p className="leading-relaxed mb-5 text-white">
              Feel free to contact Syeda Faryal
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white/10 rounded border border-pink-300 focus:border-white focus:ring-2 focus:ring-pink-400 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white/10 rounded border border-pink-300 focus:border-white focus:ring-2 focus:ring-pink-400 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white/10 rounded border border-pink-300 focus:border-white focus:ring-2 focus:ring-pink-400 h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>
            <button className="inline-flex items-center bg-gradient-to-r from-pink-600 via-pink-500 to-white text-white border-0 py-3 px-8 focus:outline-none hover:from-pink-700 hover:to-pink-500 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-pink-400">
              Send Message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
