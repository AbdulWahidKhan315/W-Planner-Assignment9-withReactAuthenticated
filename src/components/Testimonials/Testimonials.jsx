const Testimonials = () => {
    return (
        <div>
            <div className="mt-12 bg-gradient-to-r from-purple-300 to-violet-400 rounded-lg p-3 border-dashed border-2 border-violet-900">
                <h1 className="text-4xl text-center font-bold italic text-violet-800">Testimonials</h1>
                <div className="flex flex-col md:flex-row gap-5 text-center mt-6">
                    <div>
                        <img className="w-32 h-32 rounded-full mx-auto" src={'https://i.ibb.co/hH2QvFV/couple1.jpg'} alt="" />
                        <h1 className="text-3xl">Pankaj Sharma:</h1>
                        <p>Thank you for the amazing wedding decor.It was much better than i had even visualised!</p>
                    </div>
                    <div>
                        <img className="w-32 h-32 rounded-full mx-auto" src={'https://i.ibb.co/ysSz6x0/couple2.jpg'} alt="" />
                        <h1 className="text-3xl">Stuti Vora:</h1>
                        <p>Right from the entrance to aisle, from stage to the floral look, from urn pots, centerpieces to selfie booth, everything was pure attention to detail.</p>
                    </div>
                    <div>
                        <img className="w-32 h-32 rounded-full mx-auto" src={'https://i.ibb.co/3c3ybbD/couple3.jpg'} alt="" />
                        <h1 className="text-3xl">Ashish SIngh:</h1>
                        <p>Thank you so much for planning my wedding so good and making it grand for me. Happy with the services.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;