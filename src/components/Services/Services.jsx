import { Link } from "react-router-dom";
import { FaDollarSign } from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Services = ({ service }) => {
    const { title, image_url, _details, _id ,base_price} = service;
    useEffect(()=>{
        AOS.init({ duration: "1000" })
    },[])
    return (
        <div data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine"  className="card bg-base-100 shadow-xl">
            <figure className="lg:px-10 lg:pt-10 w-[99%] mx-auto">
                <img src={image_url} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{_details}</p>
                <p className="flex items-center">Price: {base_price} <FaDollarSign></FaDollarSign></p>
                <div className="card-actions">
                    <Link to={`/data/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Services;