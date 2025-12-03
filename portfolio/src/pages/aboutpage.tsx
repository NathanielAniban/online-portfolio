import { Facebook, Instagram, Linkedin, Github } from "lucide-react";
import formalImage from '../assets/Formal-photo.jpg';
import TypingEffect from "../components/typing-effect";

import CertificateShowcase from "../components/CertificateShowcase";
import { Link } from "react-router-dom";
export default function AboutPage() {
  return (
    <main className="relative flex flex-col">
       <header 
      className="flex flex-col col-span-3 sm:flex-row items-center 
      justify-center ">
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
            </div>
        </hgroup>
      </header>
      <section className="w-[240mm] self-center grid p-4 md:p-10">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education & Work Experience */}
          <section className="space-y-6">
            {/* Educational Attainment */}
            <section>
              <h5 className="text-base font-medium mb-2 
              2xl:text-2xl 2xl:font-extrabold">
                Educational Attainment
              </h5>
              <section>
                <h6 className="text-base font-medium uppercase">AMACC Pasig</h6>
                <p className="text-sm font-medium text-gray-700">
                  2021 – 2025 | Bachelor of Science in Information Technology
                </p>
                <ul className="list-disc ms-5 mt-2 text-sm text-gray-700 space-y-1">
                  <li>Student Council President 2024</li>
                  <li>Major in Web Development</li>
                  <li>Summa Cum Laude</li>
                  <li>Overall GWA: 1.14</li>
                </ul>
              </section>
            </section>

            {/* Work Experience */}
            <section>
              <h5 className="text-base font-medium mb-2 2xl:text-2xl 2xl:font-extrabold">
                Work Experience
              </h5>
              <section>
                <h6 className="text-base font-medium uppercase">AMA Computer College - Pasig branch</h6>
                <p className="text-xs font-medium text-gray-700">
                  OJT IT INTERN | September 2024 – January 2025
                </p>
                <ul className="list-disc ms-5 mt-2 text-sm text-gray-700 space-y-1">
                  <li>Troubleshooting software and hardware issues</li>
                  <li>Installed classroom management software</li>
                  <li>Assisted staff in device setup</li>
                </ul>
              </section>
              <section className="mt-4">
              <div>
                 <h6 className="text-base font-medium uppercase">Concentrix - Eastwood</h6>
                  <p className="text-xs font-medium text-gray-700">
                    TECHNICAL SUPPORT | May 2025 – Present
                  </p>
                  <ul className="text-sm sm:list-disc sm:ms-5 mt-2 text-gray-700 space-y-1">
                    <li>Assisting customers with technical issues</li>
                    <li>Resolving technical problems</li>
                    <li>Supporting customers with product usage and troubleshooting</li>
                  </ul>
                </div>

              </section>
            </section>
          </section>

          {/* Certificates */}
          <section>
            <h5 className="text-base font-medium mb-3 
            2xl:text-2xl 2xl:font-extrabold">
              Certificates
            </h5>
            <CertificateShowcase />
          </section>

        </section>
      </section>
    </main>

  )
}