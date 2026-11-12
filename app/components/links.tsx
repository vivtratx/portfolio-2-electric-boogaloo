import { FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
  {
    label: "LinkedIn",
    handle: "@vivtratx",
    href: "https://www.linkedin.com/in/vivtratx",
    icon: FaLinkedin,
    color: "hover:bg-blue-50",
  },
  {
    label: "GitHub",
    handle: "@vivtratx",
    href: "https://github.com/vivtratx/",
    icon: FaGithub,
    color: "hover:bg-blue-50",
  },
];

export const LinksPage = () => {
  return (
    <div className="flex flex-col gap-2">
      {links.map(({ label, handle, href, icon: Icon, color }) => {
        return (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-4 rounded-xl px-4 py-3 transition-colors duration-150 ${color}`}
          >
            <Icon className="h-5 w-5 flex-shrink-0 text-slate-600" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-slate-800">{label}</span>
              <span className="text-xs text-slate-400">{handle}</span>
            </div>
            <svg
              className="ml-auto h-4 w-4 text-slate-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        );
      })}
    </div>
  );
};
