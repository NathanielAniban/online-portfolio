import { Facebook, Instagram, Linkedin, Github, ArrowRight } from "lucide-react";
import formalImage from '../assets/Formal-photo.jpg';
import TypingEffect from "../components/typing-effect";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import CardCarousel from "../components/CardCarousel";
//import Resume from '/Resume.pdf';
import ProjectCard from "../components/project-card";
import AthleticMMA from '../assets/works/athletic-mma-background.png';
import MyCreationsbyColeen from '../assets/works/mycreationsbycoleen.png'

export default function Homepage() {
  const navigate = useNavigate();

  interface ProjectProps {
  img: string;
  title: string;
  description: string;
  status: 'Complete' | 'In Progress' | 'On Hold';
  linkUrl: string; // Added explicit URL for the button
}

  const Description: ProjectProps[] = [{
    img: AthleticMMA,
    title: 'Athletic MMA Landing Page',
    description: `Athletic MMA is an E-Commerce Website offering exclusive gym offers, training, and classes. 
           It's a Gym Membership Management Website combining fitness, bodybuilding, and self-defense training.`,
    status: "Complete",
    linkUrl: "#athletic-mma"

        },
  {  img: MyCreationsbyColeen,
    title: 'My Creations By Coleen Landing Page',
    description: `The 'My Creations by Coleen' specialize on creating
          a beautiful, personalized digital invitations for birthdays, celebrations, and all kinds of events!.
          Whether you're planning a kid’s party, a milestone birthday, or any special gathering,
          I’ll design an invite that matches your theme and vibe perfectly.`,
    status: "Complete",
    linkUrl: "#mycreationsbycoleen"
  }
];

  return (
    <main className="relative flex flex-col py-2">
      <header 
      className="flex flex-col col-span-3 sm:flex-row items-center 
      justify-center mb-5">
         <img
                src={formalImage}
                alt="Profile"
                className="h-[25vh] bg-gray-50 rounded-full shadow-lg 
                mx-6 my-5 sm:mb-0"
          />
        <hgroup className="block grid text-center 
        sm:text-start mx-2 sm:my-5">
            <p className="text-sm text-gray-500">Hello there!</p>
                <TypingEffect
                  styleProp="text-2xl/6 font-bold font-mono"
                  text="Nathaniel Aniban"
                  speed={50}
                  delay={3000}
                  onRepeat={false}
                  cursorBlink={true}
                  cursorType="_"
                />
                <TypingEffect
                  styleProp="text-sm font-medium font-mono"
                  text="Your Full Stack Developer | Technical Support"
                  speed={50}
                  delay={500}
                  cursorType=""
                />
            <p className="max-w-xl text-sm md:text-base text-gray-700 font-mono tracking-tight my-4">
              Hi. I'm your aspiring&nbsp;
              <u className="font-bold hover:text-lg transition-all ease-in-out duration-150">
                Full Stack Web Developer</u>, I'm open to Freelance Projects.
              I specialise on <u className="font-bold hover:text-lg transition-all ease-in-out duration-150">frontend/backend web development</u>.
            </p>
            <div className="grid gap-2">
              <section className="flex justify-center sm:justify-start gap-4 mb-2">
                  <Link to="https://www.facebook.com/Aniban.Nathaniel" target="_blank">
                    <Facebook className="text-gray-800 hover:text-gray-600" size={25} />
                  </Link>
                  <Link to="https://www.instagram.com/urmirr0r_/" target="_blank">
                    <Instagram className="text-gray-800 hover:text-gray-600" size={25} />
                  </Link>
                  <Link to="https://www.linkedin.com/in/nathaniel-aniban-48643a287/" target="_blank">
                    <Linkedin className="text-gray-800 hover:text-gray-600" size={25} />
                  </Link>
                  <Link to="https://github.com/NathanielAniban" target="_blank">
                    <Github className="text-gray-800 hover:text-gray-600" size={25} />
                  </Link>
            </section>
              <div className="flex gap-2">
                <button
                className="text-sm font-medium bg-teal-800 text-white 
                  h-full    
                  hover:bg-teal-900 active:bg-teal-800 
                  transition px-5 py-2 rounded shadow w-full sm:w-auto mb-2"
                >
                  <a href="https://www.credly.com/users/nathaniel-aniban/badges" target="_blank"  
                  > Visit My Credly
                  </a>
                </button>
                <button
                  onClick={() => navigate('/about')}
                  className="text-sm font-medium bg-gray-800 text-white hover:bg-gray-900 active:bg-black 
                  transition px-5 py-2 rounded flex items-center gap-2 justify-center w-full sm:w-auto"
                >
                  Learn More <ArrowRight size={22} />
                </button>
              </div>
            </div>
        </hgroup>
      </header>
      <section className="flex flex-col items-center justify-center mb-4">
        <section className="w-full md:w-[220mm]">
          <ul className="flex flex-col items-start gap-2">
            <CardCarousel/>
          </ul>
        </section>  
      
        <section className="flex flex-col sm:grid sm:grid-cols-2 gap-2 p-4 mt-4">
                <h1 className="text-base font-bold col-span-2 text-center mb-2">My Projects</h1>
                <ProjectCard {...Description[0]} />
                <ProjectCard {...Description[1]} />
        </section>
        
        
      </section>
    </main>
  );

}
