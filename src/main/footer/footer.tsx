import { forwardRef } from "react";

import { SocialType } from "../types";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = forwardRef((props, ref) => {
  const socials: SocialType[] = [
    {
      name: "LinkedIn",
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/faris-alsaif/",
      account: "Faris-Alsaif",
      backgroundColor: "bg-[#0077B5]",
    },
    {
      name: "Email",
      icon: faEnvelope,
      link: "mailto:farisalsaif19@gmail.com",
      account: "FarisAlsaif19@gmail.com",
      backgroundColor: "bg-[#D44638]",
    },
    {
      name: "Phone",
      icon: faWhatsapp,
      link: "https://wa.me/966505251238",
      account: "+966505251238",
      backgroundColor: "bg-[#25D366]",
    },
  ];

  return (
    <footer
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#111827] -mx-4 px-4 py-8"
    >
      <h1 className="text-5xl text-left text-white">
        Contact
        <br /> info
      </h1>
      <div>
        <div className="flex flex-col gap-4 mt-4">
          {socials.map((social) => (
            <div className="flex items-center gap-2" key={social.name}>
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 rounded-xl text-white w-16 h-16 justify-center ${social.backgroundColor}`}
              >
                <span className="text-2xl">
                  <FontAwesomeIcon icon={social.icon} />
                </span>
              </a>
              <div>
                <span className="text-xl font-medium text-white">
                  {social.account}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
});

export default Footer;
