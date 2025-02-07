"use client"
import Link from 'next/link'; // For navigation
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa'; // Social media icons
import { IoLocationOutline } from 'react-icons/io5'; // Location icon

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-6">
      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 border-b border-gray-700 pb-8">
        
        {/* Column 1: Find a Store */}
        <div>
          <h3 className="text-sm font-semibold mb-4">Find a Store</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:underline">
                Become a Member
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Sign Up for Email
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Send Us Feedback
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Student Discounts
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2: Get Help */}
        <div>
          <h3 className="text-sm font-semibold mb-4">Get Help</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:underline">
                Order Status
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Delivery
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Returns
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Payment Options
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact Us on Nike.com
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact Us for Other Inquiries
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: About Nike */}
        <div>
          <h3 className="text-sm font-semibold mb-4">About Nike</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:underline">
                News
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Investors
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Sustainability
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Social Media */}
        <div className="flex lg:justify-end gap-4">
          <a href="#" aria-label="Twitter" className="text-lg hover:text-gray-400">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Facebook" className="text-lg hover:text-gray-400">
            <FaFacebook />
          </a>
          <a href="#" aria-label="YouTube" className="text-lg hover:text-gray-400">
            <FaYoutube />
          </a>
          <a href="#" aria-label="Instagram" className="text-lg hover:text-gray-400">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 flex flex-wrap justify-between items-center text-xs text-gray-400">
        
        {/* Country and Copyright */}
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <IoLocationOutline className="text-lg" />
          <p>India</p>
          <p>© 2023 Nike, Inc. All Rights Reserved</p>
        </div>

        {/* Legal and Guides */}
        <div className="flex flex-wrap gap-4">
          <Link href="#" className="hover:underline">
            Guides
          </Link>
          <Link href="#" className="hover:underline">
            Terms of Sale
          </Link>
          <Link href="#" className="hover:underline">
            Terms of Use
          </Link>
          <Link href="#" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
