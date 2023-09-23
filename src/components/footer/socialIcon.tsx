import Link from "next/link";
import {
  IconBxlFacebook,
  IconInstagramLogo,
  IconLinkedinLine,
  IconTwitterLogo,
} from "../assets/socialIcon";

const socialLinks = [
  {
    icon: <IconBxlFacebook />,
    url: "/",
    name: "facebook",
  },
  {
    icon: <IconTwitterLogo />,
    url: "/",
    name: "twitter",
  },
  {
    icon: <IconInstagramLogo />,
    url: "/",
    name: "instagram",
  },
  {
    icon: <IconLinkedinLine />,
    url: "/",
    name: "linkedin",
  },
];

function SocialIcon() {
  return (
    <div className="flex gap-5 items-center">
      {socialLinks.map((link, i) => (
        <Link
          key={i}
          target="_blank"
          href={link.url}
          className="text-xl hover:text-blue-500 text-white "
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
}

export default SocialIcon;
