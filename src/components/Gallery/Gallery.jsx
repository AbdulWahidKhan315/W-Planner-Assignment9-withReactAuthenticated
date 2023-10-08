import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Gallery = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container mx-auto">
                <h1 className="text-4xl text-center text-[#ba869a]">Get inspired by our beautiful couples.</h1>
                <p className="text-center my-4 text-[#ba869a]">Our happy newlyweds have said I do all over the world. Discover how you can make your dream a reality, just like they did!</p>
            </div>
            <div className="md:grid md:grid-cols-4 md:gap-2 container mx-auto bg-pink-400">
                <div className="col-span-2 relative">
                    <img src={'https://i.ibb.co/g6s1x0z/gallery1.jpg'} alt="" />
                    <h3 className="text-3xl absolute top-6 left-16 text-pink-400 font-bold border p-2 border-pink-900">Kayla & Marissa</h3>
                </div>
                <div className="relative">
                    <img src={'https://i.ibb.co/w7yzTgq/gallery11.jpg'} alt="" />
                    <h3 className="text-2xl absolute top-1 left-1 text-yellow-600 font-bold border p-2 border-white">Nikki & Trey</h3>
                </div>
                <div className="relative">
                    <img src={'https://i.ibb.co/hCY3zj6/gallery5.jpg'} alt="" />
                    <h3 className="text-2xl absolute top-1 right-1 text-pink-700 font-bold border p-2 border-pink-900">Kimberly & Alan</h3>
                </div>
            </div>
            <div className="md:grid md:grid-cols-4 md:gap-2 container mx-auto bg-pink-300">
                <div className="relative">
                    <img src={'https://i.ibb.co/VM3PJQ6/gallery3.jpg'} alt="" />
                    <h3 className="text-2xl absolute top-1 right-1 text-white font-bold border p-2 border-pink-900">Rayan & Josiah</h3>
                </div>
                <div className="relative">
                    <img src={'https://i.ibb.co/HqtWR1B/gallery8.jpg'} alt="" />
                    <h3 className="text-2xl absolute top-1 right-1 text-black font-bold border p-2 border-white">Jordan & Austin</h3>
                </div>
                <div className="col-span-2 relative">
                    <img src={'https://i.ibb.co/M6SyM9j/gallery6.jpg'} alt="" />
                    <h3 className="text-2xl absolute top-1 left-1 text-pink-700 font-bold border p-2 border-pink-900">Lily & Frank</h3>
                </div>
            </div>
            <div className="md:grid md:grid-cols-4 md:gap-2 container mx-auto bg-pink-200">
                <div className="relative">
                    <img src={'https://i.ibb.co/tzZj7qd/gallery2.jpg'} alt="" />
                    <h3 className="text-2xl absolute top-1 right-1 text-black font-bold border p-2 border-pink-900">Lun & Travis</h3>
                </div>
                <div className="col-span-2 relative">
                    <img src={'https://i.ibb.co/Mf6pQH9/gallery9.jpg'} alt="" />
                    <h3 className="text-2xl absolute top-1 right-1 text-pink-600 font-bold border p-2 border-white">Amy & Zach</h3>
                </div>
                <div className="relative">
                    <img src={'https://i.ibb.co/DKGWM5G/gallery4.jpg'} alt="" />
                    <h3 className="text-2xl absolute top-1 left-1 text-white font-bold border p-2 border-pink-900">Jasmine & Clifton</h3>
                </div>
            </div>
            <div className="md:grid md:grid-cols-4 md:gap-2 container mx-auto bg-pink-100">
                <div className="col-span-2 relative">
                    <img src={'https://i.ibb.co/nL6G883/gallery10.jpg'} alt="" />
                    <h3 className="text-2xl absolute top-1 left-1 text-black font-bold border p-2 border-pink-900">Stevie & Morgan</h3>
                </div>
                <div className="relative">
                    <img src={'https://i.ibb.co/Hd7MjRC/gallery7.jpg'} alt="" />
                    <h3 className="text-2xl absolute top-1 right-1 text-pink-600 font-bold border p-2 border-white">Kayla & Jack</h3>
                </div>
                <div className="relative">
                    <img src={'https://i.ibb.co/RH2CgZR/gallery12.jpg'} alt="" />
                    <h3 className="text-2xl absolute top-1 left-1 text-white font-bold border p-2 border-pink-900">Abraham & Nalia</h3>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Gallery;