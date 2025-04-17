import { Facebook, Instagram, Linkedin, Github } from "lucide-react";
import formalImage from '../assets/formal-image.png';
import TypingEffect from "../components/typing-effect";

import CertificateShowcase from "../components/CertificateShowcase";
import { Link } from "react-router-dom";
export default function AboutPage() {
  return (
    <section className="relative flex flex-col sm:p-5 mb-10">
      <article className="container mx-auto grid items-center justify-center p-4 md:p-10">
        <section className="flex flex-col md:flex-row items-center gap-6">

          {/* Mobile View Intro Text */}
          <section className="flex flex-col text-center md:hidden">
            <p className="text-sm font-medium text-gray-500">Hello there!</p>
            <TypingEffect
              styleProp="text-2xl font-bold tracking-tight"
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

          {/* Profile Image */}
          <img
            src={formalImage}
            alt="Profile"
            className="h-80 rounded-full shadow-lg my-5"
          />

          {/* Desktop View Intro Text + Description */}
          <section className="flex flex-col items-start text-left">
            <section className="hidden md:block">
              <p className="text-sm font-medium text-gray-500">Hello there!</p>
              <TypingEffect
                styleProp="text-2xl font-bold tracking-tight"
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

            <p className="max-w-xl text-sm md:text-base font-medium text-gray-700 mt-4">
              I am a web developer with a passion for creating beautiful and functional websites. I specialize in frontend development,
              and I love working with the latest technologies to build responsive and user-friendly web applications.
            </p>

            {/* Social Links */}
            <section className="flex gap-4 mt-4">
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
                <Github className="text-gray-800 hover:text-gray-600 cursor-pointer" size={25} />
              </Link>
            </section>
          </section>
        </section>
      </article>

      <article className="container self-center grid p-4 md:p-10">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Education & Work Experience */}
          <section className="space-y-6">

            {/* Educational Attainment */}
            <section>
              <h5 className="text-base font-medium mb-2 2xl:text-2xl 2xl:font-extrabold">
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
                <h6 className="text-base font-medium uppercase">AMA Computer College</h6>
                <p className="text-xs font-medium uppercase underline mb-3">
                  2nd Floor Chipeco Building, Corner Shaw Blvd, San Antonio, Pasig City
                </p>
                <p className="text-sm font-medium text-gray-700">
                  OJT IT INTERN | September 2024 – January 2025
                </p>
                <ul className="list-disc ms-5 mt-2 text-sm text-gray-700 space-y-1">
                  <li>Troubleshooting software and hardware issues</li>
                  <li>Installed classroom management software</li>
                  <li>Assisted staff in device setup</li>
                </ul>
              </section>
            </section>
          </section>

          {/* Certificates */}
          <section>
            <h5 className="text-base font-medium mb-3 2xl:text-2xl 2xl:font-extrabold">
              Certificates
            </h5>
            <CertificateShowcase />
          </section>

        </section>
      </article>

    </section>

  )
}