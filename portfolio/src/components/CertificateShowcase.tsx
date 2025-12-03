import JavascriptEssentials from '/certificates/NathanielAniban-AMAES - Free Jav-certificate.pdf'
import PythonEssentials from '/certificates/NathanielAniban-AMAES - Free Pyt-certificate.pdf';
import Entrepeneurship from '/certificates/NathanielAniban-UGRD-ITE6101A-21-certificate.pdf';
import NetworkSecurity from '/certificates/NathanielAniban-UnderGrad-CPE635-certificate.pdf';
import EmergingTechnologies from '/certificates/NathanielAniban-UnderGrad-CS6301-certificate.pdf';
import IntroductionToNetworks from '/certificates/NathanielAniban-UnderGrad-IT6200-certificate.pdf';
import SRWEssentials from '/certificates/NathanielAniban-UnderGrad-IT6201-certificate.pdf';
import EnterpriseNetworking from '/certificates/NathanielAniban-UnderGrad-ITE620-certificate.pdf';
import CyberSecurityEssentials from '/certificates/NathanielAniban-UnderGrad-IT6300-certificate (1).pdf';
import DevNetAssociate from '/certificates/NathanielAniban-UnderGrad-IT6301-certificate (2).pdf';
import CppEssentials from '/certificates/NathanielAniban-UnderGrad-IT6304-certificate (1).pdf';
import CppAdvance from '/certificates/NathanielAniban-UnderGrad-ITE620-certificate (1).pdf';
import AlibabaCertificate from '/certificates/Alibaba-Certificate.pdf';
import AWSCertificate from '/certificates/AWS-Certificate.pdf';
import AMAESRC from '/certificates/Certificate of Participation.pdf';
import IntroToAI from '/certificates/Nathaniel, Aniban Villa-AI.pdf';
import IntroToBlockchain from '/certificates/Nathaniel, Aniban Villa-Blockchain.pdf';
import IntroToCyberSecurity from '/certificates/Nathaniel, Aniban Villa-Cybersecurity.pdf';

import { useState } from 'react';
import PdfModal from './PdfModal';

const netacadIcon : string = 'https://www.equtechnology.com/wp-content/uploads/2024/01/Cisco-Networking-Academy.svg.png';
const AMALogo : string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe_3W563HQXdnbOQcPXqARw7jxzcc3X86A7w&s';

const Certificates = [
      {
        path: JavascriptEssentials,
        name: "Completion of Partner: JavaScript Essentials 1 (JSE)",
        type: "Certificate",
        focusOn:"Programming",
        imagePath: netacadIcon,
      },
      {
        path: PythonEssentials,
        name: "Completion of Partner: PCAP - Programming Essentials in Python",
        type: "Certificate",
        focusOn:"Programming",
        imagePath: netacadIcon,
      },
      {
        path: Entrepeneurship,
        name: "Completion of Entrepreneurship",
        type: "Certificate",
        focusOn:"Others",
        imagePath: netacadIcon,
      },
      {
        path: NetworkSecurity,
        name: "Completion of Network Security",
        type: "Certificate",
        focusOn:"CyberSecurity",
        imagePath: netacadIcon,
      },
      {
        path: EmergingTechnologies,
        name: "Completion of Emerging Technologies Workshop - Model Driven Programmability",
        type: "Certificate",
        focusOn:"CyberSecurity",
        imagePath: netacadIcon,
      },
      {
       path: IntroductionToNetworks,
        name: "Completion of CCNAv7: Introduction to Networks",
        type: "Certificate",
        focusOn:"Networking",
        imagePath: netacadIcon,
      },
      {
        path: SRWEssentials,
        name: "Completion of CCNAv7: Switching, Routing, and Wireless Essentials",
        type: "Certificate",
        focusOn:"Networking",
        imagePath: netacadIcon,
      },
      {
        path: EnterpriseNetworking,
        name: "Completion of CCNAv7: Enterprise Networking, Security, and Automation",
        type: "Certificate",
        focusOn:"CyberSecurity",
        imagePath: netacadIcon,
      },
      {
        path: CyberSecurityEssentials,
        name: "Completion of Cybersecurity Essentials",
        type: "Certificate",
        focusOn:"CyberSecurity",
        imagePath: netacadIcon,
      },
      {
        path: DevNetAssociate,
        name: "Completion of DevNet Associate",
        type: "Certificate",
        focusOn:"Networking",
        imagePath: netacadIcon,
      },
      {
        path: CppEssentials,
        name: "Completion of Partner: CPA - Programming Essentials in C++",
        type: "Certificate",
        focusOn:"Programming",
        imagePath: netacadIcon,
      },
      {
        path: CppAdvance,
        name: "Completion of Partner: CPP - Advanced Programming in C++",
        type: "Certificate",
        focusOn:"Programming",
        imagePath: netacadIcon,
      },
      {
        path: AlibabaCertificate,
        name: "Generative AI - Exploring the World of AI Creativity.",
        type: "Certificate",
        focusOn:"Automation",
        imagePath: AMALogo,
      },
      {
        path: AWSCertificate,
        name: "AI Prompt Engineering Text to Image Competition",
        type: "Certificate",
        focusOn:"Automation",
        imagePath: AMALogo,

      },
      {
        path: AMAESRC,
        name: "AMA Education System Research Congress 2023",
        type: "Certificate",
        focusOn:"Others",
        imagePath: AMALogo,

      },
      {
        path: IntroToAI,
        name: "Introduction to Artificial Intelligence",
        type: "Certificate",
        focusOn:"Automation",
        imagePath: AMALogo,

      },
      {
        path: IntroToBlockchain,
        name: "Introduction to Blockchain",
        type: "Certificate",
        focusOn:"Others",
        imagePath: AMALogo,

      },
      {
        path: IntroToCyberSecurity,
        name: "Introduction to Cybersecurity",
        type: "Certificate",
        focusOn:"CyberSecurity",
        imagePath: AMALogo,

      }
    ];

    const CertificateShowcase = () => {
      const [selectedPdf, setSelectedPdf] = useState<string>("");
      const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    
      const handleOpenModal = (pdfPath: string) => {
        setSelectedPdf(pdfPath);
        setIsModalOpen(true);
      };
    
      return (
        <>
          <ol className="grid lg:grid-cols-2 gap-2 overflow-y-scroll overflow-x-hidden h-[50vh]">
            {Certificates.map((cert, index) => (
            <li
              key={index} 
              // Added items-center and text-center for centralized content
              className="flex flex-col items-center 
              text-center p-3 border border-gray-200 rounded-lg bg-white shadow-md 
              transition-all duration-300 hover:shadow-lg hover:border-indigo-400 group
              hover:cursor-pointer"
              title={cert.name}
              onClick={() => handleOpenModal(cert.path)}
            >
              
              {/* === Standard Image/Logo Section (Enlarged and Centralized) === */}
              <div className="mb-3 p-1.5 bg-white border-2 border-indigo-500 rounded-full shadow-lg">
                <img
                  src={cert.imagePath}
                  alt={cert.type}
                  // Increased size for prominence
                  className="size-12 rounded-full flex-shrink-0"
                  onError={(e) => { 
                    (e.target as HTMLImageElement).onerror = null; 
                    (e.target as HTMLImageElement).src = `https://placehold.co/48x48/A0A0A0/ffffff?text=?`;
                  }}
                />
              </div>
              
              {/* Title Section */}
              <h3 className="text-sm font-semibold text-gray-800 leading-snug group-hover:text-indigo-600 transition-colors
              break-all">
                {cert.name}
              </h3>
              {/* Bottom Section: Focus Area and Type */}
              <div className="mt-auto border-dashed border-gray-100 space-y-1 w-full">
                <p className="text-xs text-indigo-700 font-medium bg-indigo-100 rounded-full px-2 py-0.5 w-fit mx-auto">
                  {cert.focusOn}
                </p>
                <p className="text-xs text-gray-400">
                  Type: {cert.type}
                </p>
              </div>
            </li>
          ))}
          </ol>
    
          {/* Modal */}
          <PdfModal
            pdfUrl={selectedPdf}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </>
      );
    };
    
    export default CertificateShowcase;