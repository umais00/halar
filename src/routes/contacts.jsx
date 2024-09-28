import React, { useState } from "react";

function Contacts() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Define box shadow colors for each social media platform
  const shadowColors = {
    twitter: "0px 0px 10px 2px rgba(29, 161, 242, 0.7)", // Twitter blue
    facebook: "0px 0px 10px 2px rgba(59, 89, 152, 0.7)", // Facebook blue
    weixin: "0px 0px 10px 2px rgba(7, 193, 96, 0.7)", // WeChat green
    codepen: "0px 0px 10px 2px rgba(0, 0, 0, 0.7)", // CodePen black
    github: "0px 0px 10px 2px rgba(191, 46, 226, 0.7)", // GitHub purple
    youtube: "0px 0px 10px 2px rgba(255, 0, 0, 0.7)", // YouTube red
  };

  return (
    <div className="flex flex-col justify-evenly items-center min-h-[88vh]">
      <div className="flex n:flex-col lg:flex-row gap-0 w-full items-center lg:-ml-28 justify-around">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.847491651304!2d68.86361297517045!3d27.691108126208114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3935d5e4b67f50a9%3A0x79ffa3a99b9305f6!2sHalar%20Institute%20of%20Emerging%20Technologies%20(H-IET)!5e0!3m2!1sen!2s!4v1727166145711!5m2!1sen!2s"
          width="800"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* SVG for gooey filter */}
        <svg width="0" height="0" className="absolute">
          <filter id="goo">
            <feGaussianBlur
              stdDeviation="10 10"
              in="SourceGraphic"
              result="blur"
            />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7"
              in="blur"
              result="colormatrix"
            />
            <feComposite
              in="SourceGraphic"
              in2="colormatrix"
              operator="over"
              result="composite"
            />
          </filter>
        </svg>

        <nav
          className="gooey-menu w-24 h-24 relative -mt-10"
          style={{ filter: "url(#goo)" }}
        >
          <label
            className="gooey-menu__toggle absolute w-20 h-20 flex justify-center items-center bg-gray-900 text-white rounded-full cursor-pointer z-10"
            onClick={toggleMenu}
            style={{
              boxShadow: "0px 0px 15px 3px rgba(255, 255, 255, 0.6)", // Always show shadow for toggle
            }}
          >
            <i className="fas fa-share"></i>
          </label>

          <ul className="gooey-menu__items absolute">
            {[
              "twitter",
              "facebook",
              "weixin",
              "codepen",
              "github",
              "youtube",
            ].map((icon, index) => (
              <li
                key={icon}
                className="gooey-menu__item w-20 cursor-pointer h-20 bg-gray-900 text-white rounded-full flex justify-center items-center absolute transition-transform duration-300"
                style={{
                  transform: isOpen
                    ? `rotate(${
                        index * (360 / 6)
                      }deg) translate(8rem) rotate(-${index * (360 / 6)}deg)`
                    : "translate(0)",
                  transitionDelay: `${index * 0.05}s`,
                  boxShadow: isOpen
                    ? shadowColors[icon] // Use shadow colors defined earlier
                    : "0px 0px 0px rgba(0, 0, 0, 0)", // No shadow when not open
                  transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition for both
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color =
                    shadowColors[icon].match(/rgba\(([^)]+)\)/)[0];
                  e.currentTarget.querySelector("i").style.transition =
                    "color 0.3s ease"; // Add transition for <i> element
                  e.currentTarget.style.transform += " scale(1.1)"; // Scale up icon
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "white"; // Reset color when not hovering
                  e.currentTarget.querySelector("i").style.transition =
                    "color 0.3s ease"; // Add transition for <i> element
                  e.currentTarget.style.transform =
                    e.currentTarget.style.transform.replace(
                      / scale\(1\.1\)/,
                      ""
                    ); // Reset scale
                }}
              >
                <i
                  className={`fab fa-${icon} transition-colors duration-300`}
                  style={{ transition: "color 0.3s ease" }}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex justify-evenly self-stretch">
        <p className="flex  items-center n:hidden md:block">
          <i class="fa-solid fa-building mx-2"></i>
          Miani Road Near Noor Masjid
          <p className="md:hidden">,Sukkur, Sindh, 65200</p>
        </p>
        <p className="flex  items-center ">
          <i class="fa-solid fa-phone mx-2"></i>
          +92 3123580828{" "}
          <p className="n:hidden lg:block"> Mon to Sat 10:00 am to 09:00 pm</p>
        </p>
        <p className="flex  items-center">
          <i class="fa-solid fa-envelope mx-2"></i>
          info@halariet.com{" "}
          <p className="n:hidden lg:block"> Send us your query anytime!</p>
        </p>
      </div>
    </div>
  );
}

export default Contacts;
