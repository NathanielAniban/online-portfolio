import { Link } from 'react-router-dom';
import AthleticMMA from '../assets/works/athletic-mma-background.png';
import MyCreationsbyColeen from '../assets/works/mycreationsbycoleen.png'

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
        <section className="container mx-auto px-4 md:py-8">
        <section className="grid lg:grid-cols-2 gap-2">
          {/* Tech Stack + Frameworks */}
          <article className="flex flex-col items-center">
            <h5 className="text-base font-medium mb-2">My Tech Stack:</h5>
            <ol className="grid grid-cols-4 gap-2 mb-4">
              {techStack.map((lang, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center gap-1 px-4 bg-gray-800 text-white p-2 rounded-full hover:scale-105 transition duration-300 cursor-pointer"
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
            <ol className="flex flex-wrap justify-center gap-2 scale-90 mb-4">
              {Frameworks.map((lang, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center gap-1 bg-gray-800 text-white py-3 px-5 rounded-full hover:scale-105 transition duration-300 cursor-pointer"
                >
                  <img src={lang.logo} alt={lang.name} className="size-4 sm:size-6" />
                  <p className="text-xs font-medium hidden sm:block">{lang.name}</p>
                </li>
              ))}
            </ol>
          </article>
      
          {/* Projects Section */}
          <article className="flex flex-col items-center">
            <h5 className="text-base font-medium mb-4">My Projects</h5>
            <section className="grid sm:grid-cols-2 gap-4 w-full">
              {[{
                img: AthleticMMA,
                title: 'Athletic MMA Landing Page',
                desc: `Athletic MMA is an E-Commerce Website offering exclusive gym offers, training, and classes. 
                       It's a Gym Membership Management Website combining fitness, bodybuilding, and self-defense training.`,
                status: 'Done'
                    },
              {  img: MyCreationsbyColeen,
                title: 'My Creations By Coleen Landing Page',
                desc: `The 'My Creations by Coleen' specialize on creating
                      a beautiful, personalized digital invitations for birthdays, celebrations, and all kinds of events!.
                      Whether you're planning a kid’s party, a milestone birthday, or any special gathering,
                      I’ll design an invite that matches your theme and vibe perfectly.`,
                status: 'Done'
              }
            ].map((proj, i) => (
                <figure key={i} className="p-3 border shadow-md rounded flex flex-col">
                  <img src={proj.img} alt={proj.title} className="rounded mb-3" />
                  <figcaption className="text-sm font-medium text-center mb-2">{proj.title}</figcaption>
                  <p className="text-xs text-gray-500 font-medium line-clamp-3 mb-3">{proj.desc}</p>
                  <p className="text-xs font-medium mb-2">Status: {proj.status}</p>
                  <Link to="/work" className="text-sm font-medium bg-black text-white px-3 py-1 rounded self-start">
                    Learn more
                  </Link>
                </figure>
              ))}
            </section>
          </article>
        </section>
      </section>
      
    );
}