import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="w-full border-t border-gray-800 bg-gray-900 text-gray-500">
            <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
                <p>Built with React, Vite, Tailwind and React Router</p>
                <div className="flex items-center gap-4">
                    <a href="https://github.com/Alex-Liu-0704" target="_blank" className="flex items-center gap-2 hover:text-white transition">
                        <FaGithub className="text-lg" />
                        <span>GitHub</span>
                    </a>
                    <a href="" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition">
                        <FaLinkedin className="text-lg" />
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};