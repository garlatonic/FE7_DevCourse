import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-24">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="#"
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Github"
          >
            <Github size={20} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
        <p className="text-center text-sm text-gray-500">
          Copyright ©2025 All rights reserved
        </p>
      </div>
    </footer>
  );
}
