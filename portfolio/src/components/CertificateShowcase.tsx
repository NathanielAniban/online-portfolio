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
          <ol className="grid  lg:grid-cols-2 gap-2 overflow-y-scroll overflow-x-hidden h-[40vh]">
            {Certificates.map((certificate, index) => (
              <li
                key={index}
                onClick={() => handleOpenModal(certificate.path)}
                className="cursor-pointer bg-gray-50 flex shadow-md rounded-lg p-2 mx-1
                hover:scale-105 hover:bg-gray-50 active:bg-gray-100 
                active:scale-95 transition duration-150 ease-in-out"
              >
                <img src={certificate.imagePath} className="h-20 w-20" alt={certificate.name} />
                <section>
                  <h5 className="text-sm/4 font-medium">{certificate.name}</h5>
                  <h6 className="text-xs font-medium text-gray-500">{certificate.type}</h6>
                  <p className="text-xs font-bold text-gray-700">{certificate.focusOn}</p>
                </section>
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