import { motion } from "framer-motion";
import { useState } from "react";

const icons = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Typescript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Javascript", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png"},
  { name: "Tailwind CSS", logo: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg" },
  { name: "Bootstrap", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"},
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "CodeIgniter 4", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg" },
  { name: "Jquery", logo: "https://cdn.worldvectorlogo.com/logos/jquery-4.svg"}
];


const IconsCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);

  const duplicatedIcons = [...icons, ...icons, ...icons, ...icons];

  return (
    <div className="w-full overflow-hidden py-10 relative">
      <h5 className="text-base font-medium underline text-center">My Tech Stack</h5>
      <div
        className="overflow-hidden whitespace-nowrap relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex"
          animate={{
            x: isPaused ? "0" : ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {duplicatedIcons.map((icon, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-20 h-20 sm:h-40 sm:w-40 m-4 flex items-center justify-center bg-gray-100 rounded-xl"
            >
              <img
                src={icon.logo}
                alt={icon.name}
                className="h-16 w-16 object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default IconsCarousel;
