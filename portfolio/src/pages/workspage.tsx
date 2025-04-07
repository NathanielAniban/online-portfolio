import AthleticMMA from '../assets/works/athletic-mma-background.png';
import ChatApp from '../assets/works/chatapp-background.png';
import { Link } from 'react-router-dom';


export default function WorkPage(){
    return(
        <section className="relative h-[80vh] flex flex-col">
            <h1 className="text-4xl text-center mt-5 font-extrabold">My Works</h1>
            <section className='grid grid-cols-1 md:grid-cols-2 mx-auto'>
                <article className='block p-5'>
                    <h1 className='text-xl font-extrabold mb-3'>1st Project: ATHLETIC MMA</h1>
                <figure className='xl:w-150 xl:h-150'>
                        <img src={AthleticMMA} alt="Athletic MMA Landing Page" className='rounded mb-2 border' />
                        <figcaption className='text-base font-medium text-center tracking-tight mb-2'>Figure 1: ATHLETIC MMA Landing Page</figcaption>
                        <p className='text-sm md:text-base font-medium text-gray-600 mx-2 mb-3'>
                            Athletic MMA is an E-Commerce Website that offers exclusive gym offers, trainings, and classes by combining combining fitness, bodybuilding and self defense training.
                            In the early stages of web development this is a <strong>Gym Membership Management Website</strong> where it uses Codeigniter 4 as a framework and MySql for database.
                            <br/><br/>
                            While, in the current stages we downgrade the website to only <strong>Landing Page</strong> where the sole purposes of this site is to promote the gym plans. The website uses
                            React - Vite for the frontend design.
                        </p>
                        <Link to='https://athleticmma.online' target='_blank' >
                        <button className='text-base font-medium mx-2 w-full md:w-auto bg-gray-800 hover:scale-110 hover:bg-gray-900 active:scale-95 active:bg-black cursor-pointer transition ease-in-out duration-150 text-white px-3 py-1 rounded'>
                            Check our website
                        </button>
                        </Link>
                </figure>
                </article>

                <article className='block p-5'>
                    <h1 className='text-xl font-extrabold mb-3'>2nd Project: ChatApp</h1>
                <figure className='xl:w-150 xl:h-150'>
                        <img src={ChatApp} alt="Athletic MMA Landing Page" className='rounded mb-2 border' />
                        <figcaption className='text-base font-medium text-center tracking-tight mb-2'>Figure 2: ChatApp Landing Page</figcaption>
                        <p className='text-sm md:text-base font-medium text-gray-600 mx-2 mb-3'>
                            ChatApp is a Web Chat Application where you can communicate with others fast and easy. This is one of my personal project where i build a web application that
                            can be use for communication with real-time features. This website uses <strong>Firebase</strong> as a backend for user authentication and a database for chats and
                            messages.
                            <br/><br/>
                            Also, this website uses <strong>React, Tailwind Css,</strong> and <strong>Vercel</strong> for frontend design and for static page server. In the development phase,
                            i use <strong>FERN Stack</strong> (Firebase, Express, React, Nodejs) to create this application.
                        </p>
                        <Link to='https://chatapp-chi-three.vercel.app' target='_blank' >
                        <button className='text-base font-medium mx-2 w-full md:w-auto bg-gray-800 hover:scale-110 hover:bg-gray-900 active:scale-95 active:bg-black cursor-pointer transition ease-in-out duration-150 text-white px-3 py-1 rounded'>
                            Check my website
                        </button>
                        </Link>
                </figure>
                </article>
            </section>
        </section>
    )
}