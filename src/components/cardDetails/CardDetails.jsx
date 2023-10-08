import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import Details from "../Details/Details";

const CardDetails = () => {

    const [cardDetails, setCardDetails] = useState({});
    const { id } = useParams();

    const data = useLoaderData();

    useEffect(() => {
        const findDetails = data?.find((detail) => detail._id === id);
        setCardDetails(findDetails);
    }, [id, data])
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <Details details ={cardDetails}></Details>
            </div>
        </div>
    );
};

export default CardDetails;