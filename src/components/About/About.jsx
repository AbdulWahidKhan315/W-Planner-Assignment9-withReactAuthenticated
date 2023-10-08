
const About = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row gap-10 items-center mt-10 justify-center border-b-4 border-violet-700 border-dotted">
                <div>
                    <h1 className="text-4xl font-bold text-center mb-10 text-pink-400 italic">About Us</h1>
                    <p>Wedding is a montage of special moments experienced by the couples and their families. We, dummy company at area in city, state, bring in equal style and detail to every wedding story – we help conceptualize, design, organize and coordinate the sequence of rituals and ceremonies for the subtle and smooth flow of your special day. We take pride in our ability to create the perfect ambience, blending traditions with current trends and innovations. Whether you wish for a small and intimate affair, a royal wedding or an exotic & scintillating destination wedding, we will make it a zealous moment to treasure and remember!!!!

                    </p>
                </div>
                <div className="relative">
                    <img className="rounded-lg mb-10" src={'https://i.ibb.co/KbMZ3qv/aboutUs.jpg'} alt="" />
                    <div className="absolute top-2 left-2 hidden md:flex">
                        <img className="w-1/3 rounded-lg" src={'https://i.ibb.co/0cv9s1d/thumbnail3.jpg'} alt="" />
                    </div>
                    <div className="absolute top-48 left-8 hidden md:flex">
                        <img className="w-1/3 rounded-lg" src={'https://i.ibb.co/r4BdRVV/thumbnail2.jpg'} alt="" />
                    </div>
                    {/* <div className="absolute top-2 left-56">
                    <img className="w-1/6 rounded-lg" src={'https://i.ibb.co/gPqx9Xs/Abride1.jpg'} alt="" />
                    </div> */}
                </div>
            </div>


        </div>
    );
};

export default About;