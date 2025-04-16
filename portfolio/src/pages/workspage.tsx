import AthleticMMA from '../assets/works/athletic-mma-background.png';
import ChatApp from '../assets/works/chatapp-background.png';
import CustomAutBG from '../assets/works/Authentication-Login-Background.png';
import { Link } from 'react-router-dom';


interface WorksProperties {
    title: string;
    linkTitle: string;
    img: string;
    article: string;
    link: string;
    figureTitle: string,
  }

function Works({ title, img, article, figureTitle, linkTitle, link }: WorksProperties) {
    return (
      <article className='block p-5'>
        <h1 className='text-xl font-extrabold mb-3'>{title}</h1>
        <figure className='lg:w-140 xl:w-130'>
          <img src={img} alt={`${title} Image`} className='rounded mb-2 border' />
          <figcaption className='text-base font-medium text-center tracking-tight mb-2'>
            {figureTitle}
          </figcaption>
          <p
          className='text-sm md:text-base font-medium text-gray-600 mx-2 mb-3'
          dangerouslySetInnerHTML={{ __html: article }}
        />
          <Link to={link} target='_blank'>
            <button className='text-base font-medium mx-2 w-full md:w-auto bg-gray-800 hover:scale-110 hover:bg-gray-900 active:scale-95 active:bg-black cursor-pointer transition ease-in-out duration-150 text-white px-3 py-1 rounded'>
              {linkTitle}
            </button>
          </Link>
        </figure>
      </article>
    );
  }

export default function WorkPage(){
    return(
        <section className="relative h-[80vh] flex flex-col">
            <h1 className="text-4xl text-center mt-5 font-extrabold">My Works</h1>
            <section className='flex md:flex-row flex-wrap justify-center'>
                <Works
                title='1st Project: ATHLETIC MMA'
                img={AthleticMMA}
                article='  Athletic MMA is an E-Commerce Website that offers exclusive gym offers, trainings, and classes by combining combining fitness, bodybuilding and self defense training.
                            In the early stages of web development this is a <strong>Gym Membership Management Website</strong> where it uses Codeigniter 4 as a framework and MySql for database.
                            <br/><br/>
                            While, in the current stages we downgrade the website to only <strong>Landing Page</strong> where the sole purposes of this site is to promote the gym plans. The website uses
                            React - Vite for the frontend design.
                            '
                link={'https://athleticmma.online'}
                figureTitle='Figure 1: ATHLETIC MMA'
                linkTitle="Visit our Website"
                />

                <Works
                title='2nd Project: ChatApp'
                img={ChatApp}
                article='  ChatApp is a Web Chat Application where you can communicate with others fast and easy. This is one of my personal project where i build a web application that
                            can be use for communication with real-time features. This website uses <strong>Firebase</strong> as a backend for user authentication and a database for chats and
                            messages.
                            <br/><br/>
                            Also, this website uses <strong>React, Tailwind Css,</strong> and <strong>Vercel</strong> for frontend design and for static page server. In the development phase,
                            i use <strong>FERN Stack</strong> (Firebase, Express, React, Nodejs) to create this application.
                            '
                link={'https://chatapp-chi-three.vercel.app'}
                figureTitle='Figure 2: ChatApp'
                linkTitle="Visit my Website"
                />
                <Works
                title='3rd Project: Custom Authentication System'
                img={CustomAutBG}
                article='   This is a full-stack Authentication System built with a focus on security, speed, and developer-friendly implementation. It features a Single Page Application (SPA) using React/Vite + TypeScript for the frontend and CodeIgniter 4 (PHP Framework) for the backend API.'
                link={'https://github.com/NathanielAniban/auth_w_security'}
                figureTitle='Figure 3: Custom Authentication System'
                linkTitle="Check out my Code"
                />
            </section>
        </section>
    )
}