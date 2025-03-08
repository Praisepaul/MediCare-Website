import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError("All fields are required.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setError("Please enter a valid email.");
      return;
    }

    if (formData.phone.length < 10) {
      setError("Please enter a valid phone number.");
      return;
    }

    setSuccess("Message sent successfully!");
    setError("");

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="p-10 max-w-5xl mx-auto">

      <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Contact Us</h1>
      <p className="text-center text-gray-600 mb-8">
        Have questions? Get in touch with us using the form below.
      </p>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/3 bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-blue-700">Contact Details</h2>
          <div className="flex items-center gap-3 mb-4">
            <FaMapMarkerAlt className="text-blue-600 text-lg" />
            <p className="text-gray-700">123 Medical Street, Bangalore, India</p>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <FaPhone className="text-blue-600 text-lg" />
            <p className="text-gray-700">+91 98765 43210</p>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-blue-600 text-lg" />
            <p className="text-gray-700">contact@hospital.com</p>
          </div>
        </div>

        <div className="md:w-2/3 bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-blue-700">Send a Message</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 border rounded-md w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 border rounded-md w-full"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="p-3 border rounded-md w-full"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="p-3 border rounded-md w-full h-28"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-500 text-sm">{success}</p>}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-md font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4 text-blue-700">Find Us on the Map</h2>
        <iframe
          className="w-full h-64 rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31094.296437095157!2d77.5945629057354!3d12.971598630527266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167db1a0fbbd%3A0xb4b48d29e7f5e1d!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1640935212345!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
