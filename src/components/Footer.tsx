import { FaGithub, FaLinkedin } from 'react-icons/fa';

const year = new Date().getFullYear();

const Footer = () => (
  <footer className="p-8 bg-white shadow-sm mt-8">
    <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-4">
        <span className="uppercase font-semibold text-sm tracking-wide text-gray-500">
          Find me on
        </span>
        <div className="flex gap-6">
          <a
            href="https://github.com/lone-cloud"
            rel="noreferrer"
            target="_blank"
            aria-label="GitHub"
            className="flex items-center gap-2 py-2 px-4 rounded-lg text-gray-900 bg-transparent transition-all duration-200 hover:text-blue-600 hover:bg-gray-200 hover:-translate-y-0.5"
          >
            <FaGithub size={20} className="transition-transform duration-200" />
            <span className="text-sm font-medium">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/egor-philippov"
            rel="noreferrer"
            target="_blank"
            aria-label="LinkedIn"
            className="flex items-center gap-2 py-2 px-4 rounded-lg text-gray-900 bg-transparent transition-all duration-200 hover:text-blue-600 hover:bg-gray-200 hover:-translate-y-0.5"
          >
            <FaLinkedin size={20} className="transition-transform duration-200" />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm leading-normal">
        Forged with{' '}
        <span role="img" aria-label="hot fire burning">
          🔥
        </span>{' '}
        ©{year}{' '}
        <a
          href="https://www.nidratech.com/"
          target="_blank"
          className="text-blue-600 font-medium transition-all duration-200 hover:text-blue-700"
          rel="noreferrer"
        >
          Nidratech Ltd.
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
