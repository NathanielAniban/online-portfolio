import { Facebook, Instagram, Linkedin, Github, ArrowRight } from "lucide-react";
import formalImage from '../assets/Formal-photo.jpg';
import TypingEffect from "../components/typing-effect";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Resume from '/Resume.pdf';
import TechSkillShowcase from "../components/TechSkillShowcase";

export default function Homepage() {
  const navigate = useNavigate();

  return (
    <section className="relative flex flex-col sm:p-5 mb-10">
      <section className="container flex flex-col mx-auto sm:flex-row items-center justify-center px-4 py-8">
        {/* Mobile Header */}
        <section className="flex flex-col text-center sm:hidden mb-6">
          <p className="text-sm text-gray-500">Hello there!</p>
          <TypingEffect
            styleProp="text-2xl font-bold"
            text="My Name is Nathaniel Aniban"
            speed={50}
            delay={3000}
            onRepeat={false}
            cursorBlink={true}
            cursorType="_"
          />
          <TypingEffect
            styleProp="text-lg font-medium"
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
            <TypingEffect
              styleProp="text-2xl font-bold"
              text="My Name is Nathaniel Aniban"
              speed={50}
              delay={3000}
              onRepeat={false}
              cursorBlink={true}
              cursorType="_"
            />
            <br />
            <TypingEffect
              styleProp="text-lg font-medium"
              text="Your Full Stack Web Developer"
              speed={50}
              delay={500}
              cursorType=""
            />
          </section>

          <p className="max-w-xl text-sm md:text-base text-gray-700 my-4">
            I am a web developer with a passion for creating beautiful and functional websites.
            I specialize in frontend development and love working with the latest technologies
            to build responsive and user-friendly web applications.
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
            <Link to={Resume} target="_blank">
              <button className="text-sm font-medium bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition px-5 py-2 rounded shadow">
                Download CV
              </button>
            </Link>
            <button
              onClick={() => navigate('/about')}
              className="text-sm font-medium bg-gray-800 text-white hover:bg-gray-900 active:bg-black transition px-5 py-2 rounded flex items-center gap-2"
            >
              Learn More <ArrowRight size={22} />
            </button>
          </section>
        </section>
      </section>

      <TechSkillShowcase />
    </section>
  );

}
