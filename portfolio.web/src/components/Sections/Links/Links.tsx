import { FaGithub, FaLinkedin } from "react-icons/fa";
import './Links.scss';

const LINKS = [
  {
    href: "https://github.com/brunoccst/",
    label: "GitHub",
    icon: <FaGithub />,
  },
  {
    href: "https://www.linkedin.com/in/brunoccst/",
    label: "LinkedIn",
    icon: <FaLinkedin />,
  },
];

const Links = () => (
  <div className="links-section">
    <h2>Links</h2>
    <ul>
      {LINKS.map(link => (
        <li key={link.href}>
            <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
            >
                {link.icon}
                {link.label}
            </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Links;
