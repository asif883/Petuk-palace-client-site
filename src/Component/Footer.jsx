import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white ">
            <footer className="py-16 max-w-7xl mx-auto px-4 mt-8 lg:mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* About */}
                <div>
                <h2 className="text-xl font-semibold mb-3">Welcome to Petuk Palace</h2>
                <p className="text-sm">
                    Established in 2023, Petuk Palace is where flavors meet passion.
                    We bring authentic taste and heartwarming hospitality for food lovers across the nation.
                </p>
                <p className="mt-3 text-sm">
                    Come hungry, leave happy — every visit is a royal feast!
                </p>
                </div>

                {/* Contact Info */}
                <div>
                <h2 className="text-xl font-semibold mb-3">Contact</h2>
                <p className="flex items-center text-sm mb-2">
                    <FaMapMarkerAlt className="mr-2" /> 45 Foodie Lane, Dhaka 1205
                </p>
                <p className="flex items-center text-sm mb-2">
                    <FaPhoneAlt className="mr-2" /> +880 1234-567890
                </p>
                <p className="flex items-center text-sm">
                    <FaEnvelope className="mr-2" /> contact@petukpalace.com
                </p>
                </div>

                {/* Hours */}
                <div>
                <h2 className="text-xl font-semibold mb-3">Opening Hours</h2>
                <p className="text-sm mb-1">Monday - Friday: 12pm – 10pm</p>
                <p className="text-sm mb-1">Saturday: 1pm – 11pm</p>
                <p className="text-sm">Sunday: Closed</p>
                </div>

                {/* Quick Links */}
                <div>
                <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
                <ul className="space-y-1 text-sm">
                    <li><a href="#" className="hover:underline">Menu</a></li>
                    <li><a href="#" className="hover:underline">Reservations</a></li>
                    <li><a href="#" className="hover:underline">FAQ</a></li>
                    <li><a href="#" className="hover:underline">Health & Safety</a></li>
                    <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            </footer>
            <div className="max-w-7xl mx-auto px-4 pb-4 mt-10 border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
            <p>© 2025 Petuk Palace. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0 text-xl">
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
            <a href="#" aria-label="TikTok"><FaTiktok /></a>
            </div>
            </div>
    </div>

  );
};

export default Footer;