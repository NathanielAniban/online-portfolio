import React, { useMemo } from 'react';

// Define the structure for the technology items (removed description)
interface TechItem {
  name: string;
  logo: string;
}



// Mock Data for the Carousel
const mockTechStack: TechItem[] = [
          { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
          { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
          { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: "Windows", logo: "https://cdn.worldvectorlogo.com/logos/windows.svg"},
          { name: "Apache", logo: "https://images.seeklogo.com/logo-png/31/2/apache-logo-png_seeklogo-314278.png"},
          { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
          { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },  
];

const Frameworks: TechItem[] = [
        { name: "CodeIgniter 4", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg" },
        { name: "Jquery", logo: "https://cdn.worldvectorlogo.com/logos/jquery-4.svg"},
        { name: "Bootstrap", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"},
        { name: "Tailwind CSS", logo: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg" },
      ];



const CardCarousel: React.FC = () => {
  // Duplicate the stack to ensure smooth looping (Marquee effect).
  const marqueeItems = useMemo(() => [...mockTechStack, ...mockTechStack], []);
  const marqueeFrameworks = useMemo(() => [...Frameworks, ...Frameworks], []);
  
  return (
    <div className="w-full flex flex-col items-center">      
      {/* CAROUSEL CONTAINER (Track) */}
      <h3 className="text-base font-bold text-center mb-4">Web Related Skills</h3>
          
      <div className="carousel-track w-full
       sm:max-w-xl md:max-w-3xl
      overflow-hidden mb-5 ">
        {/* The width of this div is automatically large due to its children, allowing the scroll. */}
        <div className="flex w-fit animate-marquee mb-2">
          {marqueeItems.map((lang, index) => (
            <div
              key={index} 
              className="flex-shrink-0 w-36 h-20 flex items-center justify-center p-3 mx-4 bg-gray-100 rounded-lg shadow-md transition-all duration-300 hover:bg-indigo-100 hover:shadow-xl group"
              title={lang.name}
            >
              {/* Logo and Name Container */}
              <div className="flex flex-col items-center justify-center space-y-1">
                <img
                  src={lang.logo}
                  alt={lang.name}
                  className="size-10 transition-transform group-hover:scale-110"
                  onError={(e) => { 
                    (e.target as HTMLImageElement).onerror = null; 
                    (e.target as HTMLImageElement).src = `https://placehold.co/40x40/A0A0A0/ffffff?text=?`;
                  }}
                />
                <p className="text-xs font-medium text-gray-700 group-hover:text-indigo-800 transition-colors">
                  {lang.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-track w-full
        sm:max-w-xl md:max-w-3xl 
      overflow-hidden ">
        {/* The width of this div is automatically large due to its children, allowing the scroll. */}
        <div className="flex w-fit animate-marquee">
          {marqueeFrameworks.map((lang, index) => (
            <div
              key={index} 
              className="flex-shrink-0 w-36 h-20 flex items-center justify-center p-3 mx-4 bg-gray-100 rounded-lg shadow-md transition-all duration-300 hover:bg-indigo-100 hover:shadow-xl group"
              title={lang.name}
            >
              {/* Logo and Name Container */}
              <div className="flex flex-col items-center justify-center space-y-1">
                <img
                  src={lang.logo}
                  alt={lang.name}
                  className="size-10 transition-transform group-hover:scale-110"
                  onError={(e) => { 
                    (e.target as HTMLImageElement).onerror = null; 
                    (e.target as HTMLImageElement).src = `https://placehold.co/40x40/A0A0A0/ffffff?text=?`;
                  }}
                />
                <p className="text-xs font-medium text-gray-700 group-hover:text-indigo-800 transition-colors">
                  {lang.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>
        
      </div>
      
  );
};

export default CardCarousel;