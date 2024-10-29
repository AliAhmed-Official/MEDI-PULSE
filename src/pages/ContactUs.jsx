import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function ContactUs() {
  return (
    <>
      <Header />
      <section className="py-10 pb-24 px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600">We'd love to hear from you! Fill out the form below to reach out to us.</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 shadow-full rounded-lg">
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input type="text" className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-[#0cc1e0]" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input type="email" className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-[#0cc1e0]" placeholder="Your Email" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                <textarea className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-[#0cc1e0]" placeholder="Your Message" rows="5"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#0cc1e0] hover:bg-[#0cc1e0] text-white font-bold py-3 rounded-lg transition duration-200">Send Message</button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-[#0cc1e0] text-white p-8 shadow-full rounded-lg flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
            <p className="mb-4">Have any questions? We're here to help you!</p>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="material-icons text-white mr-2">phone</span>
                <p>+92 32 22506260</p>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-white mr-2">email</span>
                <p>aliahmedchamp@example.com</p>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-white mr-2">location_on</span>
                <p>123 Main Street, City, Country</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ContactUs