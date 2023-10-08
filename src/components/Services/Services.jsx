import { Link } from "react-router-dom";

const Services = ({ service }) => {
    const { title, image_url, _details, _id } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image_url} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{_details}</p>
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