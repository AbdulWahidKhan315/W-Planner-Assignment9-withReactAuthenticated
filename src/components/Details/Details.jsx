import { AiFillStar } from 'react-icons/ai';

const Details = ({ details }) => {

    const { title, image_url, _details, discount_des, review, service_taken,experties_say,thumbnail_url1,
        thumbnail_url2,thumbnail_url3,base_price,medium_price,normal_price } = details || {}
    return (
        <div>
            <div className="flex flex-col lg:flex-row justify-center items-center container mx-auto gap-10">
                <div>
                    <img className="rounded-lg" src={image_url} alt="" />
                </div>
                <div className="">
                    <h1 className="text-4xl font-bold italic underline text-violet-800 mb-6">{title}-</h1>
                    <p>{_details}</p>
                    <h3 className="text-2xl text-violet-700 italic mt-4"><span className="text-4xl font-bold">Discount</span> with terms and conditions-</h3>
                    <p>{discount_des}</p>
                    <div className='border border-violet-600 p-4 mt-4 rounded-lg flex justify-between bg-violet-200 text-xl'>
                        <p className='flex items-center'>Reviews: {review}
                            <AiFillStar className='text-yellow-500 text-xl'></AiFillStar></p>
                        <h3>Total sold services: {service_taken}</h3>
                    </div>
                    <div className='mt-3 border border-violet-900 bg-violet-200 text-violet-900 p-4 rounded-lg hover:scale-105 duration-300'>
                        <h2 className="text-4xl font-bold">Details price list:</h2>
                        <p className='text-3xl ml-3'>*** Premium:{base_price}</p>
                        <p className='text-2xl ml-12'>** Medium:{medium_price}</p>
                        <p className='text-xl ml-24'>* Normal:{normal_price}</p>
                    </div>
                </div>
            </div>
            {/* <div className='container mx-auto mt-10'>
                <h1 className="text-4xl text-center font-bold text-pink-400 underline mb-6">What Experties say about our services</h1>
                <div className='flex flex-col lg:flex-row items-center border border-pink-500 bg-pink-100 rounded-lg p-4 gap-6'>
                    <img className='w-[200px] h-[200px] rounded-full' src={thumbnail_url1} alt="" />
                    <p className='text-xl'>{experties_say}</p>
                </div>
                <div className='flex flex-col lg:flex-row items-center border border-pink-500 bg-pink-100 rounded-lg p-4 gap-6'>
                    <p className='text-xl'>{experties_say}</p>
                    <img className='w-[200px] h-[200px] rounded-full' src={thumbnail_url2} alt="" />
                </div>
                <div className='flex flex-col lg:flex-row items-center border border-pink-500 bg-pink-100 rounded-lg p-4 gap-6'>
                    <img className='w-[200px] h-[200px] rounded-full' src={thumbnail_url3} alt="" />
                    <p className='text-xl'>{experties_say}</p>
                </div>
            </div> */}
        </div>
    );
};

export default Details;