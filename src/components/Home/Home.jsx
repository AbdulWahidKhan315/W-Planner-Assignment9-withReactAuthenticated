import Navbar from "../Navbar/Navbar";
import banner from '../../../public/banner2.jpg'
import { useLoaderData } from "react-router-dom";
import Services from "../Services/Services";
import About from "../About/About";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";

const Home = () => {
    const services = useLoaderData();
    return (
        <div>
            <div className="relative">
                <img className="lg:h-[800px] w-full" src={banner} alt="" />
                <div className="absolute top-0 w-full h-screen">
                    <Navbar></Navbar>
                    <div className="flex flex-col items-center md:mt-48 space-y-4 text-violet-700">
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold">Perfect Planners for</h1>
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold">Your Special Wedding Day</h1>
                        <button className="btn btn-outline btn-primary font-bold">Enquire Now</button>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto mt-8">
                    <h1 className="text-4xl text-center font-bold mb-10">Our Services</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {
                            services.map(service => <Services key={service._id} service={service}></Services>)
                        }
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <About></About>
            </div>
            <div className="container mx-auto">
                <Testimonials></Testimonials>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;
