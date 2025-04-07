import { Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";
import formalImage from '../assets/formal-image.png';
import TypingEffect from "../components/typing-effect";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Resume from '/Resume.pdf';
export default function Homepage() {
  const navigate = useNavigate();

  return (
    <section className="relative h-[80vh] flex flex-col">
      <section className="flex flex-col md:grid md:grid-cols-2 flex-1">
        {/* Left Section */}
        <section className="relative mx-3 sm:mx-6 md:ml-10 lg:ml-20 xl:ml-20 flex flex-col justify-center text-center md:text-start py-10 z-20">
          <p className="text-sm md:text-base xl:text-lg font-medium text-gray-600 uppercase mb-2">
            Hello there, welcome to my site
          </p>

          <h1 className="text-xl/2 md:text-3xl xl:text-5xl font-bold tracking-tight uppercase whitespace-nowrap mb-2">
            My Name is&nbsp;
            <TypingEffect 
              text="Nathaniel Aniban"
              speed={50}
              delay={3000}
              onRepeat={true}
              cursorBlink={true}
              cursorType="_"
            />
          </h1>

          <p className="text-md md:text-3xl xl:text-4xl font-bold tracking-tight uppercase mb-5">
            <TypingEffect 
              text="Your Full Stack Web Developer"
              speed={50}
              delay={500}
              cursorType=""
            />
          </p>

          {/* Mobile Image */}
          <img src={formalImage} alt="Formal" className="block md:hidden h-[38vh] mx-auto mb-5" />

          <p className="md:text-md xl:text-lg font-medium text-gray-700 mb-10 break-words">
            I am a web developer with a passion for creating beautiful and functional websites. I specialize in frontend development,
            and I love working with the latest technologies to build responsive and user-friendly web applications.
          </p>

          {/* Buttons */}
          <section className="flex justify-center md:justify-start gap-4 mb-10">
            <Link to={Resume} target="_blank">
              <button className="lg:text-base font-medium tracking-tight bg-gray-200 
                hover:scale-105 hover:bg-gray-300 active:bg-gray-400 active:scale-95 transition ease-in-out duration-150 
                rounded shadow px-5 py-2">
                Download CV
              </button>
            </Link>
            <button 
              onClick={() => navigate('/about')}
              className="lg:text-base font-medium tracking-tight bg-gray-800 
              hover:scale-105 hover:bg-gray-900 active:bg-black active:scale-95 transition ease-in-out duration-150 
              rounded px-5 py-2 text-white flex items-center gap-2"
            >
              Learn More <ArrowRight size={22} />
            </button>
          </section>

          {/* Social Icons */}
          <section className="flex items-center justify-center md:justify-start gap-8">
            <Link to="https://www.facebook.com/Aniban.Nathaniel" target="_blank">
              <Facebook className="text-gray-800 hover:text-gray-600 cursor-pointer" size={25} />
            </Link>
            <Link to="https://www.instagram.com/urmirr0r_/" target="_blank">
              <Instagram className="text-gray-800 hover:text-gray-600 cursor-pointer" size={25} />
            </Link>
            <Link to="https://www.linkedin.com/in/nathaniel-aniban-48643a287/" target="_blank">
              <Linkedin className="text-gray-800 hover:text-gray-600 cursor-pointer" size={25} />
            </Link>
          </section>
        </section>

        {/* Right Section */}
        <section className="relative hidden md:flex justify-center items-center">
          <img 
            src={formalImage} 
            alt="Formal" 
            className="absolute min-h-[62vh] xl:scale-110 2xl:right-40 md:top-10"
          />
        </section>
      </section>
    </section>
  );
}
