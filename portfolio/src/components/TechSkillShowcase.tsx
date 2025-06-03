
export default function TechSkillShowcase(){

      const techStack = [
          { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
          { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
          { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: "Windows", logo: "https://cdn.worldvectorlogo.com/logos/windows.svg"},
          { name: "Apache", logo: "https://cdn.worldvectorlogo.com/logos/apache-13.svg"},
          { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
          { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      ];

      const Frameworks = [
        { name: "CodeIgniter 4", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg" },
        { name: "Jquery", logo: "https://cdn.worldvectorlogo.com/logos/jquery-4.svg"},
        { name: "Bootstrap", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"},
        { name: "Tailwind CSS", logo: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg" },
      ];

    return(
        <section className="px-2 md:py-7">
        <section className="block gap-2">
          {/* Tech Stack + Frameworks */}
          <article className="flex flex-col items-center">
            <h5 className="text-base font-medium mb-2">My Tech Stack:</h5>
            <ol className="grid grid-cols-4 gap-2 mb-4">
              {techStack.map((lang, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center gap-1 px-4 bg-gray-800 text-white p-2 
                  rounded-full hover:scale-105 transition duration-300 cursor-pointer"
                  title={lang.name}
                  >
                  <img
                    src={lang.logo}
                    alt={lang.name}
                    className={`size-4 sm:size-6 ${
                      ['Express', 'Windows'].includes(lang.name) ? 'invert' : ''
                    } ${lang.name === 'Apache' ? 'relative top-1 sm:top-2' : ''}`}
                  />
                  <p className="text-xs font-medium hidden sm:block">{lang.name}</p>
                </li>
              ))}
            </ol>
      
            <h5 className="text-base font-medium mb-2">Frameworks I'm Familiar With:</h5>
            <ol className="flex flex-wrap gap-2 mb-4">
              {Frameworks.map((lang, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center gap-1 bg-gray-800 text-white py-2 px-4 rounded-full 
                  hover:scale-105 transition duration-300 cursor-pointer"
                  title={lang.name}
                >
                  <img src={lang.logo} alt={lang.name} className="size-4 sm:size-6" />
                  <p className="text-xs font-medium hidden sm:block">{lang.name}</p>
                </li>
              ))}
            </ol>
          </article>
        </section>
      </section>
      
    );
}