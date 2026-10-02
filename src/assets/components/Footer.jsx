import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-custom flex flex-col gap-5 py-8 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Chayma. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/chaymamighri"
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 transition hover:text-emerald-600"
          >
            <FaGithub size={19} />
          </a>

          <a
            href="https://linkedin.com/in/chayma-mighri"
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 transition hover:text-emerald-600"
          >
            <FaLinkedin size={19} />
          </a>
        </div>
      </div>
    </footer>
  );
}