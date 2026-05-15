const footerSections = [
  {
    title: "SHOP NOW",
    links: ["Dress", "Trouser", "Pants", "Shirt", "T-Shirt"],
  },
  {
    title: "BY GENDER",
    links: ["Male", "Female", "Unisex"],
  },
  {
    title: "BY AGE",
    links: ["Infant", "Children", "Teenager", "Adult", "Senior"],
  },
  {
    title: "ACCESSORIES",
    links: ["Bag", "Bracelet", "Caps", "Belt", "Watches"],
  },
  {
    title: "COMPANY",
    links: [
      "About Us",
      "Terms Of Use",
      "Contact Us",
      "Career",
      "Shipping Terms",
    ],
  },
];

const socialLinks = [
  "Facebook",
  "Twitter",
  "Youtube",
  "Instagram",
  "TikTok",
];

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white w-full">
      <div className="max-w-full mx-auto px-5 sm:px-8 md:px-10 py-10 md:py-14">
        {/* Top Section */}
        <div className="flex flex-col xl:flex-row justify-between gap-12 border-b border-gray-800 pb-10">
          {/* Logo */}
          <div className="flex justify-center xl:justify-start">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
              ZEND
            </h1>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 w-full xl:w-auto">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h2 className="text-sm font-semibold mb-4 uppercase tracking-wide">
                  {section.title}
                </h2>

                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li
                      key={link}
                      className="text-sm text-gray-300 hover:text-white transition duration-300 cursor-pointer"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 pt-8">
          {/* Copyright */}
          <p className="text-sm text-gray-400 text-center lg:text-left">
            © 2023 Zend. All rights reserved.
          </p>

          {/* Social Links */}
          <ul className="flex flex-wrap justify-center lg:justify-end gap-3">
            {socialLinks.map((social) => (
              <li
                key={social}
                className="border border-gray-700 px-4 py-2 rounded-full text-sm text-gray-300 hover:text-white hover:border-white transition duration-300 cursor-pointer"
              >
                {social}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;