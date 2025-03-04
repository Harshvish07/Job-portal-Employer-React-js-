import {
  FaGlobe,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaHeadset
} from "react-icons/fa";

const Support = () => {
  return (
    <div className="flex h-full  w-full mx-auto  p-4">
      {/* Left Section: Contact Us */}
      <div className="w-1/2 pr-8">
        <h3 className="text-lg font-semibold text-gray-700">Contact Us</h3>

        {/* Who We Are */}
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

          {/* Email Support Button */}
          <button className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
            Email Support
          </button>
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
        </div>
      </div>
    </div>
  );
};

// Reusable Support Link Component
const SupportLink = ({ icon, text }) => {
  return (
    <div className="flex items-center bg-gray-100 p-3 rounded-lg cursor-pointer hover:bg-gray-200 transition">
      <span className="text-lg mr-3">{icon}</span>
      <p className="text-gray-700 font-medium flex-1">{text}</p>
      <span className="text-gray-500">→</span>
    </div>
  );
};

export default Support;
