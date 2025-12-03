import formalImage from '../assets/Formal-photo.jpg';

 const PrintButton: React.FC = () => {
  // Function to call the browser's native print dialog
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      // Tailwind classes to style the button
      className="print:hidden bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow transition duration-150 ease-in-out"
    >
      🖨️ Print This Page
    </button>
  );
  };
export default function ResumePage(){
    return(
         <section className="flex justify-center">
        <div className="a4-page p-5 sm:p-8">
          <div className="grid grid-rows-[auto_1fr_auto] h-full gap-4">
            <header className="flex ps-6">
              <hgroup className="flex-grow">
                <h1 className="text-xl/6 font-bold">Nathaniel Aniban</h1>
                <ul className="text-xs font-semibold text-gray-700 break-all">
                  <li>Taytay Rizal, 1920 - Philippines</li>
                  <li className="hover:text-blue-700 hover:underline"><a href="mailto:nathanielaniban.dev@gmail.com">nathanielaniban.dev@gmail.com</a></li>
                  <li><a href="https://naniban-portfolio.vercel.app" className="hover:text-blue-700 hover:underline">https://naniban-portfolio.vercel.app</a></li>
                </ul>
              </hgroup>

              <img src={formalImage} alt="Profile" 
              className="h-20 w-20 rounded shadow-lg"/>
            </header>
            <main className="ps-6">
              <div className="col-span-2">
                <h3 className="font-bold mb-1">Objectives</h3>
                <p className="text-xs font-semibold text-gray-700 mb-4">
                  I'm a full stack developer with a background in technical support, seeking to leverage my skills in
                  a dynamic organization. <br/> I aim to contribute to team success through hard work, attention to detail,
                  and excellent organizational skills.
                </p>

                <h3 className="font-bold mb-2">Educational Attainment</h3>
                <div className="text-xs font-semibold mb-4">
                  <h6 className=" uppercase">AMACC Pasig</h6>
                  <p className="text-gray-700">
                    2021 – 2025 | Bachelor of Science in Information Technology
                  </p>
                  <ul className="sm:list-disc sm:ms-5 mt-2 text-gray-700 space-y-1">
                    <li>Student Council President 2024</li>
                    <li>Major in Web Development</li>
                    <li>Summa Cum Laude</li>
                    <li>Overall GWA: 1.14</li>
                  </ul>
                </div>

                <h3 className="font-bold mb-2">Work Experience</h3>
                <div className="text-xs font-semibold mb-3">
                 <h6 className="uppercase">AMA Computer College - Pasig Branch</h6>
                  <p className="text-gray-700">
                    OJT IT INTERN | September 2024 – January 2025
                  </p>
                  <ul className="sm:list-disc sm:ms-5 mt-2 text-gray-700 space-y-1">
                    <li>Troubleshooting software and hardware issues</li>
                    <li>Setting up devices</li>
                    <li>Maintenance and support</li>
                  </ul>
                </div>
                <div className="text-xs font-semibold mb-5">
                 <h6 className="uppercase">Concentrix - Eastwood</h6>
                  <p className="text-gray-700">
                    TECHNICAL SUPPORT | May 2025 – Present
                  </p>
                  <ul className="sm:list-disc sm:ms-5 mt-2 text-gray-700 space-y-1">
                    <li>Assisting customers with technical issues</li>
                    <li>Resolving technical problems</li>
                    <li>Supporting customers with product usage and troubleshooting</li>
                  </ul>
                </div>

                <h3 className="font-bold mb-2">Related Skills</h3>
                <div className="text-xs font-semibold">
                  <ul className="sm:list-disc sm:ms-5 mb-4 text-gray-700 space-y-1">
                    <li>Proficient in HTML, CSS, JavaScript, PHP, MySQL, and Node.js</li>
                    <li>Experience with frameworks like CodeIgniter, Bootstrap, and Tailwind CSS</li>
                    <li>Strong problem-solving and debugging skills</li>
                    <li>Excellent communication and teamwork abilities</li>
                    <li>Customer service experience</li>
                  </ul>
                </div>

                <h3 className="font-bold mb-2">My Social Links</h3>
                <div className="text-xs font-semibold">
                  <ul className="sm:list-disc sm:ms-5 text-gray-700 space-y-1 break-all">
                     <li className="underline hover:text-blue-900 hover:font-medium">
                    <a href="https://facebook.com/Aniban.Nathaniel" target="_blank" rel="noopener noreferrer">
                      https://facebook.com/Aniban.Nathaniel
                    </a>
                  </li>
                  <li className="underline hover:text-blue-900 hover:font-medium">
                    <a href="https://instagram.com/urmirr0r_/" target="_blank" rel="noopener noreferrer">
                      https://instagram.com/urmirr0r_/
                    </a>
                  </li>
                  <li className="underline hover:text-blue-900 hover:font-medium">
                    <a href="https://www.linkedin.com/in/nathaniel-aniban-48643a287/" target="_blank" rel="noopener noreferrer">
                      https://www.linkedin.com/in/nathaniel-aniban-48643a287/
                    </a>
                  </li>
                  <li className="underline hover:text-blue-900 hover:font-medium">
                    <a href="https://github.com/NathanielAniban" target="_blank" rel="noopener noreferrer">
                      https://github.com/NathanielAniban
                    </a>
                  </li>
                  </ul>
                </div>

              </div>
            </main>
            <PrintButton />
            <footer className="text-sm text-gray-500 border-t pt-2">
              <p>Page 1 of 1</p>
            </footer>

          </div>
        </div>
      </section>
    )
}