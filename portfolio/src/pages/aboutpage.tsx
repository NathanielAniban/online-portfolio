import { Facebook, Instagram, Linkedin, Github } from "lucide-react";
import formalImage from '../assets/formal-image.png';
import TypingEffect from "../components/typing-effect";
import IconsCarousel from "../components/icons-carousel";
import CertificateShowcase from "../components/CertificateShowcase";
import { Link } from "react-router-dom";
export default function AboutPage() {
  return (
    <section className="relative h-[80vh] flex flex-col">
    <section className="flex flex-row w-full max-w-screen-xl mx-auto px-0">
      {/* Left Section */}
      <section className="relative hidden md:flex w-[100vh] flex-col justify-center text-center md:text-start py-10 z-20">
        <img src={formalImage} alt="Formal" className="hidden md:block h-[38vh] mx-auto mb-5" />
      </section>
  
      {/* Right Section */}
      <section className="relative flex flex-col justify-center text-center md:text-start py-10 z-20 w-full px-4">
        <p className="text-sm md:text-base xl:text-lg font-medium text-gray-600 uppercase mb-2">
          About myself
        </p>
  
        <h1 className="text-xl/2 md:text-3xl xl:text-5xl font-bold tracking-tight uppercase whitespace-nowrap mb-2">
          My Name is&nbsp;
          <TypingEffect
            text="Nathaniel Aniban"
            speed={50}
            delay={5000}
            onRepeat={false}
            cursorBlink={true}
            cursorType="_"
          />
        </h1>
  
        <p className="text-md md:text-3xl xl:text-2xl font-bold tracking-tight uppercase mb-5">
          <TypingEffect
            text="Full Stack Web Developer"
            speed={50}
            delay={500}
            cursorType=""
          />
        </p>
  
        {/* Mobile Image */}
        <img src={formalImage} alt="Formal" className="block md:hidden h-[38vh] mx-auto mb-5" />
  
        <p className="md:text-md xl:text-lg font-medium text-gray-700 mb-3 break-words">
          I am a web developer with a passion for creating beautiful and functional websites. 
          I specialize in frontend development, and I love working with the latest technologies 
          to build responsive and user-friendly web applications.
        </p>

        <Link to="https://www.credly.com/users/nathaniel-aniban" target="_blank">
          <button className="bg-emerald-800 hover:bg-emerald-900 hover:scale-105 text-white px-3 py-2 rounded text-base font-medium transition ease-in-out duration-150 mb-10">
            Checkout my Badges on Credly
          </button>
        </Link>

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
            <Link to="https://github.com/NathanielAniban" target="_blank">
              <Github className="text-gray-800 hover:text-gray-600 cursor-pointer" size={25}/>
            </Link>
        </section>
      </section>
    </section>
  
    <article className="w-full max-w-screen-xl mx-auto grid justify-center px-4">
      {/* Educational Attainment */}
      <section className="relative text-start mb-2">
        <h1 className="text-xl font-bold">Educational Attainment</h1>
        <ol>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              September 2024 - October 2025
            </time>
            <h3 className="text-lg/5 font-semibold tracking-tight text-gray-900 dark:text-white mb-3">
              Bachelor of Science in Information Technology - AMA Computer College
            </h3>
            <ol className="text-base list-disc mx-5 font-normal text-gray-500 dark:text-gray-400">
              <li>Presidential Lister from 1st Year to 3rd Year Trimestral</li>
              <li>Student Council President from September to December 2024</li>
              <li>Overall GWA: 1.14</li>
            </ol>
          </li>
        </ol>
      </section>
  
      {/* Work Experience */}
      <section className="relative text-start">
        <h1 className="text-xl font-bold">Work Experience</h1>
        <ol>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              September 2024 - January 2025
            </time>
            <h3 className="text-lg/5 tracking-tight font-semibold text-gray-900 dark:text-white mb-3">
              On The Job Trainee | IT INTERN - AMA Computer College
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Helps on troubleshooting software and hardware issues, installing classroom management software, 
              and helps employees set up devices they needed.
            </p>
          </li>
        </ol>
      </section>
    </article>

    <article className="w-full max-w-screen-xl mx-auto grid justify-center px-4">
      <IconsCarousel/>
    </article>
    <article className="w-full max-w-screen-xl mx-auto grid justify-center px-4 pb-20">
      <h1 className="text-medium text-center font-medium underline mb-5">Certifications</h1>
      <CertificateShowcase/>
    </article>
  </section>
  
  )
}