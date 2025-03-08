import { FaUsers, FaLightbulb, FaTrophy, FaHeartbeat } from "react-icons/fa";
import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="p-10 max-w-6xl mx-auto">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
        About Us
      </h1>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Learn more about our journey, values, and dedication to providing the best healthcare services.
      </p>

      {/* History Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Our History</h2>
          <p className="text-gray-700 leading-relaxed">
            Founded in 1998, our healthcare center started as a small clinic with a mission to make quality healthcare accessible to everyone. Over the years, we have grown into a multi-specialty hospital, serving thousands of patients annually with state-of-the-art medical facilities and an expert team of doctors.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1682130157004-057c137d96d5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="History"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10 mb-16">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to provide <b>compassionate, high-quality, and affordable</b> healthcare services to all individuals, regardless of background. We strive to improve lives by leveraging <b>advanced medical technology, research, and innovation</b>.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
        <img
            src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="History"
            className="rounded-lg shadow-lg"
          />        </div>
      </div>

      {/* Vision Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To be a <b>global leader in healthcare</b>, known for our excellence in <b>patient care, medical research, and community service</b>. We envision a future where everyone has access to top-tier medical facilities without financial or geographical barriers.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
        <img
            src="https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZpc2lvbnxlbnwwfHwwfHx8MA%3D%3D"
            alt="History"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Our Team */}
      <div className="bg-blue-100 p-10 rounded-lg mb-16">
        <h2 className="text-2xl font-semibold text-blue-700 text-center mb-6">Meet Our Team</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-6">
          Our team of <b>renowned doctors, specialists, and healthcare professionals</b> is dedicated to offering the best medical care to every patient. With expertise across multiple domains, we ensure holistic and personalized treatment.
        </p>
        <div className="flex justify-center">
          <FaUsers className="text-blue-700 text-6xl" />
        </div>
      </div>

      {/* Achievements */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Our Achievements</h2>
          <p className="text-gray-700 leading-relaxed">
            - Awarded <b>"Best Healthcare Provider of the Year"</b> in 2022<br/>
            - Successfully treated over <b>500,000 patients</b><br/>
            - Pioneered <b>AI-based diagnostics for faster treatment</b><br/>
            - Partnered with global organizations for <b>medical research & training</b>
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <FaTrophy className="text-blue-700 text-6xl" />
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-blue-600 text-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Join Our Journey</h2>
        <p className="text-gray-200 mt-2">Experience world-class healthcare with us.</p>
        <button onClick={() => navigate('/contact')} className="mt-4 bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-200">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default About;
