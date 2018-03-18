import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGooglePlus,
  FaInstagram,
  FaTwitter,
  FaEnvelopeO
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://www.facebook.com/ColumbiaAPAHM/">
        <FaFacebook />
      </a>
    </li>
    <li>
      <a href="https://twitter.com/cuapahm">
        <FaTwitter />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/cuapahm/?hl=en">
        <FaInstagram />
      </a>
    </li>
    <li>
      <a href="mailto:cuapahm@gmail.com">
        <FaEnvelopeO />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
