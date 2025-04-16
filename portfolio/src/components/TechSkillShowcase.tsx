import { Link } from 'react-router-dom';
import AthleticMMA from '../assets/works/athletic-mma-background.png';
import ChatApp from '../assets/works/chatapp-background.png';


export default function TechSkillShowcase(){

      const techStack = [
          { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
          { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
          { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
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
        <section className="container flex flex-col items-center justify-center relative sm:mx-auto">
            <section className="container-fluid grid sm:grid-cols-2 sm:mx-auto gap-5 justify-center">
                <article className="flex flex-col items-center">
                    <h5 className="text-base font-medium mb-2">My Tech Stack:</h5>
                    <ol className="grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-4 gap-2 mb-2 scale-[98%] md:scale-none">
                        {techStack.map((lang, index) => (
                            <li key={index} className="flex flex-nowrap gap-2 mb-2">
                                <img src={lang.logo} alt={lang.name} className={`size-5 md:size-6 ${lang.name == 'Apache' && 'relative top-2'}`} />
                                <p className="text-sm md:text-base font-medium">{lang.name}</p>

                            </li>
                        ))}
                    </ol>
                    <h5 className="text-base font-medium mb-2">Framework i'm familliar:</h5>
                    <ol className="flex flex-wrap scale-[98%] md:scale-none">
                        {Frameworks.map((lang, index) => (
                            <li key={index} className="flex mx-2 gap-2 mb-2">
                                <img src={lang.logo} alt={lang.name} className="size-5 md:size-6" />
                                <p className="text-sm md:text-base font-medium">{lang.name}</p>

                            </li>
                        ))}
                    </ol>
                </article>
                <article className="flex flex-col items-center">
                   <h5 className="text-base font-medium mb-3">My Projects</h5>
                   <section className='grid sm:grid-cols-2 gap-2 mb-5 justify-center mx-5'> 
                    <caption className='p-2 shadow-xl border rounded flex flex-col items-start'>
                        <img src={AthleticMMA} alt="" className='size-100 rounded' />
                        <figcaption className='text-sm font-medium mx-auto my-2'>Figure 1: Athletic MMA Landing Page</figcaption>
                        <p className='text-xs font-medium text-gray-500 mx-2 max-w-90 text-start line-clamp-3 mb-3'>
                        Athletic MMA is an E-Commerce Website that offers exclusive gym offers, trainings, and classes by combining combining fitness, bodybuilding and self defense training.
                        In the early stages of web development this is a <strong>Gym Membership Management Website</strong>
                        </p>
                        <p className='text-xs font-medium mx-2 mb-1'>Status: N/A</p>
                        <Link to={'/work'} className='text-sm font-medium px-2 py-1 mx-2 mb-3 bg-black text-white rounded'>
                            Learn more
                        </Link>
                    </caption>

                    <caption className='p-2 shadow-xl border rounded flex flex-col items-start'>
                        <img src={ChatApp} alt="" className='size-100 rounded' />
                        <figcaption className='text-sm font-medium mx-auto my-2'>Figure 1: ChatApp Landing Page</figcaption>
                        <p className='text-xs font-medium text-gray-500 mx-2 max-w-90 text-start line-clamp-3 mb-3'>
                            ChatApp is a Web Chat Application where you can communicate with others fast and easy. This is one of my personal project where i build a web application that
                            can be use for communication with real-time features. This website uses <strong>Firebase</strong> as a backend for user authentication and a database for chats and
                            messages.
                        </p>
                        <p className='text-xs font-medium mx-2'>Status: N/A</p>
                        <Link to={'/work'} className='text-sm font-medium px-2 py-1 mx-2 mb-3 bg-black text-white rounded mt-2'>
                            Learn more
                        </Link>
                    </caption>
                   </section>

                </article>



            </section>
        </section>
    );
}