import { useState, useEffect } from "react";
import {
  FaGlobe,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaHeadset,
  FaEnvelope
} from "react-icons/fa";

const CustomerSupports = () => {
  const [contactInfo, setContactInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSupportInfo = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "https://technohire-backend.onrender.com/employer/help-support/contact"
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch contact details: ${response.statusText}`
          );
        }

        const data = await response.json();
        setContactInfo(data); // API returns a single object
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSupportInfo();
  }, []);

  return (
    <div className="flex h-full w-3/4 mx-auto p-4">
      {/* Left Section: Contact Us */}
      <div className="w-1/2 pr-8">
        <h3 className="text-lg font-semibold text-gray-700">Contact Us</h3>

        <div className="mt-4">
          <p className="text-purple-600 font-semibold">Who we are</p>
          <h2 className="text-3xl font-bold text-gray-900">
            We care about customer services
          </h2>

          <p className="text-gray-500 mt-2">
            Want to chat? We’d love to hear from you! Get in touch with our
            Customer Success Team to inquire about speaking events, advertising
            rates, or just say hello.
          </p>

          {loading && (
            <p className="text-gray-500">Loading contact details...</p>
          )}
          {error && <p className="text-red-500">{error}</p>}

          {contactInfo && (
            <a
              href={`mailto:${contactInfo.detail}`}
              className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 inline-block"
            >
              {contactInfo.method}Email {contactInfo.detail}
            </a>
          )}
        </div>
      </div>

      {/* Right Section: Social Links */}
      <div className="w-1/2">
        <h3 className="text-lg font-semibold text-gray-700">Reach Out @</h3>
        <div className="mt-3 space-y-3">
          <SupportLink
            icon={<FaGlobe className="text-gray-500" />}
            text="Website"
          />
          <SupportLink
            icon={<FaFacebookF className="text-blue-600" />}
            text="Facebook"
          />
          <SupportLink
            icon={<FaInstagram className="text-pink-600" />}
            text="Instagram"
          />
          <SupportLink
            icon={<FaWhatsapp className="text-green-600" />}
            text="WhatsApp"
          />
          <SupportLink
            icon={<FaTwitter className="text-blue-400" />}
            text="Twitter"
          />
          <SupportLink
            icon={<FaHeadset className="text-purple-600" />}
            text="Customer Service"
          />
          {contactInfo && (
            <SupportLink
              icon={<FaEnvelope className="text-gray-500" />}
              text={contactInfo.method}
              url={`mailto:${contactInfo.detail}`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

// Reusable Support Link Component
const SupportLink = ({ icon, text, url }) => {
  return (
    <a
      href={url || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center bg-gray-100 p-3 rounded-lg cursor-pointer hover:bg-gray-200 transition"
    >
      <span className="text-lg mr-3">{icon}</span>
      <p className="text-gray-700 font-medium flex-1">{text}</p>
      <span className="text-gray-500">→</span>
    </a>
  );
};

export default CustomerSupports;
