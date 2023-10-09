import Navbar from "../Navbar/Navbar";
import { useLoaderData } from "react-router-dom";
import Services from "../Services/Services";
import About from "../About/About";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Home = () => {
    const services = useLoaderData();

    useEffect(() => {
        AOS.init({ duration: "1000" })
    }, [])
    return (
        <div>
            <div className="relative">
                <img className="lg:h-[800px] w-full" src={'https://i.ibb.co/sKWZbTF/banner2.jpg'} alt="" />
                <div data-aos="fade-down" data-aos-duration="2000" className="absolute top-0 w-full h-screen">
                    <Navbar></Navbar>
                    <div data-aos="fade-down" data-aos-duration="2000" className="flex flex-col items-center md:mt-48 space-y-4 text-violet-700">
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold">Perfect Planners for</h1>
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold">Your Special Wedding Day</h1>
                        <button className="btn btn-outline btn-primary font-bold">Enquire Now</button>
                    </div>
                </div>
                <div className="container mx-auto mt-8">
                    <h1 className="text-4xl text-center font-bold mb-10 italic text-violet-700">Our Services</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2 lg:gap-3">
                        {
                            services.map(service => <Services key={service._id} service={service}></Services>)
                        }
                    </div>
                </div>
            </div>
            <div className="container mx-auto p-1">
                <About></About>
            </div>
            <div  className="container mx-auto">
                <Testimonials></Testimonials>
            </div>
              <Footer></Footer>
        </div>
    );
};

export default Home;
