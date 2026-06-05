import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-green-900 text-base-content rounded p-10">

      {/* title */}
      <div className="mb-6">
        <h1 className="text-white text-6xl font-bold mt-15 mb-4">KeenKeeper</h1>
        <p className="text-white">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
      </div>

      {/* social */}
      <div className="space-y-3 text-white">
        <h3 className="text-[20px] font-medium">Social Links</h3>
        <div className="flex gap-3">
          <FaInstagram className="text-3xl" />
          <FaFacebook className="text-3xl" />
          <FaX className="text-3xl" />
        </div>
      </div>

      {/* bottom part */}
      <div className="flex flex-wrap justify-between items-center w-full px-10 py-5 border-t border-white/10 text-white">
        <p>© 2026 KeenKeeper. All rights reserved.</p>
        <ul className="flex gap-5">
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Cookies</li>
        </ul>
      </div>

    </footer>
  );
};

export default Footer;