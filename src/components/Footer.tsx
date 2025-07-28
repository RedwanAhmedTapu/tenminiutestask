import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">10 Minute School</h3>
            <p className="text-gray-400">
              Learn anything in just 10 minutes. The largest online learning platform in Bangladesh.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Courses</h4>
            <ul className="space-y-2">
              <li><Link href="/courses" className="text-gray-400 hover:text-white">All Courses</Link></li>
              <li><Link href="/ielts" className="text-gray-400 hover:text-white">IELTS</Link></li>
              <li><Link href="/skills" className="text-gray-400 hover:text-white">Skills Development</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} 10 Minute School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;