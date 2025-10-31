import React from 'react';

const FooterLink = ({ href, children }) => (
  <a href={href} className="text-gray-500 hover:text-blue-600 transition-colors duration-300">{children}</a>
);

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold text-blue-600 mb-4">Website.com</h3>
            <p className="text-gray-500">The easiest way to create a stunning website.</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Products</h4>
            <div className="flex flex-col space-y-3">
              <FooterLink href="#">Website Builder</FooterLink>
              <FooterLink href="#">Domain Names</FooterLink>
              <FooterLink href="#">Web Hosting</FooterLink>
              <FooterLink href="#">eCommerce</FooterLink>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Company</h4>
            <div className="flex flex-col space-y-3">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Resources</h4>
            <div className="flex flex-col space-y-3">
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Help Center</FooterLink>
              <FooterLink href="#">Webinars</FooterLink>
              <FooterLink href="#">Affiliates</FooterLink>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {/* Add social icons here if needed */}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Website.com. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;