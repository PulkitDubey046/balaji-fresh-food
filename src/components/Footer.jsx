import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaYoutube,
  FaInstagram
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="mt-16 text-gray-900 bg-yellow-400">
      <div className="grid gap-10 px-6 py-12 mx-auto max-w-7xl md:grid-cols-3">

        {/* Brand / Trust */}
        <div className="space-y-4">
          <h3 className="text-2xl font-extrabold text-red-700">
            Balaji Fresh Food
          </h3>
          <p className="text-sm leading-relaxed">
            Balaji Fresh Food by Balaji Traders is committed to manufacturing
            pure, hygienic, and high-quality Chana Besan and Sattu using
            trusted sourcing and modern processing standards.
          </p>
        </div>

        {/* Connect with us */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-red-700">
            Connect with us
          </h4>

          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-red-700" />
              <a
                href="mailto:info@balajitradersusp.com"
                className="hover:underline"
              >
                info@balajitradersusp.com
              </a>
            </li>

            <li className="flex items-center gap-3">
              <FaPhone className="text-red-700" />
              <span>+91 99555 45013</span>
            </li>

            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-red-700" />
              <span>
                Plot No. D-13, BIADA Industrial Area, New Phase-1,
                Thana Sarai, OP-Siwan, Bihar, India
              </span>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="space-y-4 md:text-right">
          <h4 className="text-lg font-bold text-red-700">
            Follow us
          </h4>

          <div className="flex gap-3 md:justify-end">
            <a
              href="/website/social/facebook"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="p-3 transition bg-yellow-300 rounded-full hover:bg-yellow-200"
            >
              <FaFacebookF className="text-red-700" />
            </a>

            <a
              href="/website/social/youtube"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="p-3 transition bg-yellow-300 rounded-full hover:bg-yellow-200"
            >
              <FaYoutube className="text-red-700" />
            </a>

            <a
              href="/website/social/instagram"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="p-3 transition bg-yellow-300 rounded-full hover:bg-yellow-200"
            >
              <FaInstagram className="text-red-700" />
            </a>

            <a
              href="/website/social/x"
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter)"
              className="p-3 transition bg-yellow-300 rounded-full hover:bg-yellow-200"
            >
              <FaXTwitter className="text-red-700" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="py-4 text-xs text-center text-gray-800 border-t border-red-300">
        <p>
          © {new Date().getFullYear()} Balaji Fresh Food · A unit of Balaji Traders
        </p>
        <p className="mt-1">
          Developed by{' '}
          <a 
            href="https://pulkitdubey.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-semibold text-red-700 hover:underline"
          >
            Pulkit Dubey
          </a>
        </p>
      </div>
    </footer>
  )
}
