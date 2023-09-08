import { phoneNumbers, socialMedia } from "../constants";
import copy from "clipboard-copy";

const Footer = () => {
  const handleCopy =
    (number, country = "") =>
    (e) => {
      copy(number.replace(/\s/g, ""));
      e.target.innerText = "Copied!";
      setTimeout(() => {
        e.target.innerText = `${number} ${country}`;
      }, 1200);
    };

  return (
    <div className="relative f-full h-auto bg-primary flex flex-wrap justify-around py-10 px-20">
      <div>
        {phoneNumbers.map((phoneNumber) => (
          <p
            className="text-secondary hover:text-white cursor-pointer text-[13px] m-1"
            key={phoneNumber.number}
            onClick={handleCopy(phoneNumber.number, `(${phoneNumber.country})`)}
          >
            {phoneNumber.number} ({phoneNumber.country})
          </p>
        ))}
      </div>

      <div className="flex mx-[15px]">
        {socialMedia.map((media) => (
          <a
            key={media.link}
            href={media.link}
            target="_blanck"
            className="px-1"
          >
            <img
              className="w-9 h-9 object-contain"
              src={media.img}
              alt="social media"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
