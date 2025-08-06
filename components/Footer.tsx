import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@constants";

const Footer = () => (
  <footer className="flex flex-col text-black-100  mt-5 border-t border-gray-100">
    <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
      <div className="flex flex-col justify-start items-start gap-6">
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-90 transition-opacity"
        >
          <Image
            src="/logo.png"
            alt="Go Motors Logo"
            width={50}
            height={50}
            className="object-contain"
          />
          <h4 className="text-2xl font-semibold tracking-tight text-primary-blue">
            Go Motors
          </h4>
        </Link>

        <p className="max-w-xs text-base text-gray-700">
          A trusted car rental platform for affordable, self-drive, and
          chauffeur-driven rides across major cities.
        </p>
      </div>

      <div className="footer__links">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-gray-500"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
      <p>@2025 Go Motors. All rights reserved</p>

      <div className="footer__copyrights-link">
        <Link href="/" className="text-gray-500">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-gray-500">
          Terms & Condition
        </Link>
        <Link href="/" className="text-gray-500">
          About Us
        </Link>
        <Link href="/" className="text-gray-500">
          Contact
        </Link>
        <Link href="/" className="text-gray-500">
          FAQ
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
