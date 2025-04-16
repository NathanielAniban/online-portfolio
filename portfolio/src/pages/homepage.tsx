import { Facebook, Instagram, Linkedin, Github, ArrowRight } from "lucide-react";
import formalImage from '../assets/formal-image.png';
import TypingEffect from "../components/typing-effect";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Resume from '/Resume.pdf';
import TechSkillShowcase from "../components/TechSkillShowcase";

export default function Homepage() {
  const navigate = useNavigate();

  return(
    <section className="relative h-[80vh]">
      <section className="container flex flex-col sm:flex-row items-center justify-center relative scale-[98%] md:scale-none sm:mx-auto sm:p-15">
        <section className="flex flex-col mb-5 block sm:hidden">
          <p className="text-sm/2 font-medium break-words tracking-tight text-gray-500
              2xl:text-xl
              ">Hello there!</p>
              <TypingEffect 
                    styleProp="text-2xl/6 font-bold tracking-tight
                    2xl:text-4xl/6 text-nowrap break-words
                    "
                    text="My Name is Nathaniel Aniban"
                    speed={50}
                    delay={3000}
                    onRepeat={false}
                    cursorBlink={true}
                    cursorType="_"/>
              <TypingEffect 
                    styleProp="text-lg font-medium tracking-tight
                    2xl:text-xl/10"
                    text="Your Full Stack Web Developer"
                    speed={50}
                    delay={500}
                    cursorType=""
                  />
        </section>
        <img src={formalImage} alt="" className="h-[25vh] bg-gray-50 rounded-full shadow-lg mx-10 my-5 relative sm:bottom-10 xl:bottom-none 2xl:mb-5" />
        <section className="relative flex flex-col">
          <section className="hidden sm:block">
            <p className="text-sm/2 font-medium break-words tracking-tight text-gray-500
            2xl:text-xl
            ">Hello there!</p>
            <TypingEffect 
                  styleProp="text-2xl/6 font-bold tracking-tight
                  2xl:text-4xl/6
                  "
                  text="My Name is Nathaniel Aniban"
                  speed={50}
                  delay={3000}
                  onRepeat={false}
                  cursorBlink={true}
                  cursorType="_"/>
            <br/>
            <TypingEffect 
                  styleProp="text-lg font-medium tracking-tight
                  2xl:text-xl/10"
                  text="Your Full Stack Web Developer"
                  speed={50}
                  delay={500}
                  cursorType=""
                />
          </section>

          <p className="w-80 sm:w-auto text-sm md:text-md xl:text-lg font-medium text-gray-700 mb-3 2xl:w-[80vh] break-words">
            I am a web developer with a passion for creating beautiful and functional websites. I specialize in frontend development,
            and I love working with the latest technologies to build responsive and user-friendly web applications.
          </p>

          <section className="flex items-center justify-center md:justify-start gap-4 mb-5">
            <Link to="https://www.facebook.com/Aniban.Nathaniel" target="_blank">
              <Facebook className="text-gray-800 hover:text-gray-600 cursor-pointer" size={25} />
            </Link>
            <Link to="https://www.instagram.com/urmirr0r_/" target="_blank">
              <Instagram className="text-gray-800 hover:text-gray-600 cursor-pointer" size={25} />
            </Link>
            <Link to="https://www.linkedin.com/in/nathaniel-aniban-48643a287/" target="_blank">
              <Linkedin className="text-gray-800 hover:text-gray-600 cursor-pointer" size={25} />
            </Link>
            <Link to="https://github.com/NathanielAniban" target="_blank">
              <Github className="text-gray-800 hover:text-gray-600 cursor-pointer" size={25}/>
            </Link>
          </section>

          <section className="flex flex-nowrap justify-center md:justify-start gap-4 mb-2">
            <Link to={Resume} target="_blank">
              <button className="text-sm lg:text-md font-medium tracking-tight bg-gray-200 
                hover:scale-105 hover:bg-gray-300 active:bg-gray-400 active:scale-95 transition ease-in-out duration-150 
                rounded shadow px-5 py-2">
                Download CV
              </button>
            </Link>
           
            <button 
              onClick={() => navigate('/about')}
              className="text-sm lg:text-md font-medium tracking-tight bg-gray-800 
              hover:scale-105 hover:bg-gray-900 active:bg-black active:scale-95 transition ease-in-out duration-150 
              rounded px-5 py-2 text-white flex items-center flex-1 mx-5 sm:mx-0 justify-center sm:justify-start sm:flex-none gap-2"
            >
              Learn More <ArrowRight size={22} />
            </button>
          </section>

        </section>
      </section>
      <TechSkillShowcase/>
    </section>
  );

}
