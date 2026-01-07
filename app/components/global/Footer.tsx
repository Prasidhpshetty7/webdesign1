import { BiLogoGithub, BiLogoLinkedin, BiLogoInstagram } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/Prasidhpshetty7", icon: BiLogoGithub },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/prasidh-shetty7/", icon: BiLogoLinkedin },
  { name: "Instagram", url: "https://www.instagram.com/mr__shxtty/", icon: BiLogoInstagram },
  { name: "X", url: "https://x.com/ShettyPrasidh7", icon: FaSquareXTwitter },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800/50 mt-20 bg-zinc-50 dark:bg-transparent transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              PS
            </span>
            <p className="text-zinc-500 dark:text-zinc-500 text-sm mt-2">
              © {new Date().getFullYear()} Prasidh P Shetty. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                title={link.name}
              >
                <link.icon className="text-xl" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
