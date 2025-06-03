import { Facebook, Instagram, Linkedin, Github, ArrowRight } from "lucide-react";
import formalImage from '../assets/Formal-photo.jpg';
import TypingEffect from "../components/typing-effect";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
//import Resume from '/Resume.pdf';
import TechSkillShowcase from "../components/TechSkillShowcase";
import ProjectCard from "../components/project-card";
import AthleticMMA from '../assets/works/athletic-mma-background.png';
import MyCreationsbyColeen from '../assets/works/mycreationsbycoleen.png'

export default function Homepage() {
  const navigate = useNavigate();

  const Description = [{
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
];

  return (
    <section className="relative flex flex-col sm:p-5  mb-10">
      <section className="container flex flex-col mx-auto sm:flex-row items-center justify-center px-4 mb-10">
        {/* Mobile Header */}
        <section className="flex flex-col text-center sm:hidden mb-6">
          <p className="text-sm text-gray-500">Hello there!</p>
          <TypingEffect
            styleProp="text-2xl/6 font-bold font-mono"
            text="My Name is Nathaniel Aniban"
            speed={50}
            delay={3000}
            onRepeat={false}
            cursorBlink={true}
            cursorType="_"
          />
          <TypingEffect
            styleProp="text-sm font-medium font-mono"
            text="Your Full Stack Web Developer"
            speed={50}
            delay={500}
            cursorType=""
          />
        </section>

        {/* Image */}
        <img
          src={formalImage}
          alt="Profile"
          className="h-[25vh] bg-gray-50 rounded-full shadow-lg mx-6 my-5 sm:mb-0"
        />

        {/* Desktop Content */}
        <section className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <section className="hidden sm:block">
            <p className="text-sm text-gray-500">Hello there!</p>
            <p className="text-2xl/5 font-bold font-mono tracking-tight">
              My Name is&nbsp;
              <TypingEffect
                text="Nathaniel Aniban"
                speed={50}
                delay={5000}
                onRepeat={true}
                cursorBlink={true}
                cursorType="_"
              />
            </p>
            <p className="text-lg font-medium font-mono tracking-tight">  
              <TypingEffect
                text="Your Full Stack Web Developer"
                speed={50}
                delay={500}
                cursorType=""
              />
            </p>
          </section>

          <p className="max-w-xl text-sm md:text-base text-gray-700 font-mono tracking-tight my-4">
            Hi. I'm your aspiring&nbsp;
            <u className="font-bold hover:text-lg transition-all ease-in-out duration-150">
              Full Stack Web Developer</u>, I'm open to Freelance Projects.
            I specialise on <u className="font-bold hover:text-lg transition-all ease-in-out duration-150">frontend/backend web development</u>.
          </p>

          {/* Social Icons */}
          <section className="flex gap-4 mb-5">
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

          {/* Buttons */}
          <section className="flex flex-wrap gap-4">
              <button className="text-sm font-medium bg-gray-200 hover:bg-gray-300 active:bg-gray-400 
              transition px-5 py-2 rounded shadow w-full sm:w-auto">
                Download CV (Unavailable)
              </button>
            <button
              onClick={() => navigate('/about')}
              className="text-sm font-medium bg-gray-800 text-white hover:bg-gray-900 active:bg-black 
              transition px-5 py-2 rounded flex items-center gap-2 justify-center w-full sm:w-auto"
            >
              Learn More <ArrowRight size={22} />
            </button>
          </section>
        </section>
      </section>
      <section className="flex flex-col flex-wrap gap-2 justify-center items-center">
        <TechSkillShowcase />
        <section className="block">
          <h1 className="text-base font-medium text-center mb-2">My Projects</h1>
          <article className="grid grid-cols-2 gap-2">
            {
              Description.map(card => (
                <section>
                  <ProjectCard
                  img={card.img}
                  title={card.title}
                  description={card.desc}
                  status={card.status}
                  />
                </section>
              ))
            }
            
          </article>
        </section>
      </section>
    </section>
  );

}
