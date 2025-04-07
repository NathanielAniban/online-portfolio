import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage(){
    return(
        <section className="relative h-[80vh] flex flex-col">
            <section className="text-center mb-10">
                <h1 className="lg:text-2xl font-extrabold">Get in touch</h1>
                <p className="text-base font-medium">Have a question or want to work together? Feel free to send me a message.</p>
            </section>
            <section className="container flex flex-col md:flex-row gap-10 mx-auto">
                <article className="flex flex-col">
                    <h1 className="text-2xl font-bold mb-3">Contact Details</h1>
                    <ol className="flex flex-col space-y-1">
                        <li className="flex items-center space-x-2">
                            <Mail size={20}/>
                            <p className="text-base font-medium">nathanielaniban1@gmail.com</p>
                        </li>
                        <li className="flex items-center space-x-2">
                            <MapPin size={20}/>
                            <p className="text-base font-medium">Taytay Rizal, 1920, Philippines</p>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Phone size={20}/>
                            <p className="text-base font-medium">+63 905 916 3323</p>
                        </li>
                    </ol>
                </article>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7723.4038176383965!2d121.1324213!3d14.5590315!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c70fb9ca9f39%3A0x7da1664552f5107f!2sNew%20Taytay%20Public%20Market!5e0!3m2!1sen!2sph!4v1743994783583!5m2!1sen!2sph" 
                width="600" loading="lazy" className="rounded shadow w-full h-[40vh] lg:h-[80vh]"></iframe>
            </section>
        </section>
    )
}