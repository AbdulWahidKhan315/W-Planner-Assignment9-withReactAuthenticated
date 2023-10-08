import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { FaSearch } from 'react-icons/fa';

const TopVenues = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="md:grid md:grid-cols-4 md:gap-4 container mx-auto mt-14">
                <div className=" md:col-span-3 ">
                    <div className="text-center text-[#ba869a] space-y-2 border-b-2 border-[#ba869a] border-dashed">
                        <p>DESTINATION WEDDING & HONEYMOON RESORTS</p>
                        <h1 className="text-3xl">TOP 5 DESTINATION WEDDING</h1>
                        <h1 className="text-4xl">VENUES IN THE CARIBBEAN & MEXICO</h1>
                    </div>
                    <div className="mt-3">
                        <p className="text-[#ba869a] text-2xl">Riviera Maya, Mexico</p>
                        <img className="my-3" src={'https://i.ibb.co/55r056L/venue3.jpg'} alt="" />
                        <p>This award-winning destination wedding resort in Riviera Maya, Mexico welcomes adults 18+ to experience their exclusive Gourmet-Inclusive® concept in a romantic, 5-star setting. You and your guests will be in very good hands throughout your stay, as you enjoy spacious suites (swim-ups are available!), local cuisine, a relaxing spa and variety of activities to keep you entertained each day and night. </p>
                        <p className="mt-4">For the big day, the Memorable Moments Signature Wedding Designer Team is ready to work their magic and take care of all the details - from the ceremony decor, bouquet(s) and boutonniere(s), photography, reception entertainment, and more! No matter your budget, party size and venue preferences, they have the perfect venue space (including an onsite chapel for traditional celebrations)! </p>

                        <p className="text-[#ba869a] text-2xl mt-8">Margaritaville Island Reserve Cap Cana - Cap Cana, Dominican Republic</p>
                        <img className="my-3" src={'https://i.ibb.co/XWg00gz/venue2.jpg'} alt="" />
                        <p>Laid-back luxury is the name of the game at this brand new, 5-star oasis in Cap Cana, Dominican Republic. Imagine saying “I do” under a swaying palm tree right by the turquoise sea with the sun setting in the distance. Couples who want the best of both worlds for their Caribbean destination wedding should consider this recent customer favorite. </p>
                        <p className="mt-8">While you plan the perfect celebration with your Specialist, you won’t have to worry about a thing. The onsite team will provide you with an idyllic setting, add their impeccable service and cater to your unique vision as you watch your dream destination wedding come to life. </p>

                        <p className="text-[#ba869a] text-2xl mt-8">Hard Rock Hotel & Casino Punta Cana - Punta Cana, Dominican Republic</p>
                        <img className="my-3" src={'https://i.ibb.co/wYNsgZG/venue1.jpg'} alt="" />
                        <p>Rock n’ roll n’ romance! Hard Rock Hotel & Casino Punta Cana is a long standing customer favorite amongst couples looking to get married in the Caribbean. Your guests will enjoy thrilling activities, exhilarating nightlife and tantalizing culinary options to truly awaken their senses. </p>
                        <p className="mt-8">Turn up the volume and make it a day you’ll never forget. Hard Rock has designed one-of-a-kind wedding collections to fit your vibe, from a Tropical Paradise package to a Modern Enchantment package. Whether you’re looking for an oceanside ceremony on Piano Beach or an intimate gathering under the Trumpet Gazebo, your destination wedding dreams will become a reality at Hard Rock Hotel & Casino Punta Cana. </p>

                        <p className="text-[#ba869a] text-2xl mt-8">Generations Riviera Maya – Riviera Maya, Mexico</p>
                        <img className="my-3" src={'https://i.ibb.co/YWbqBS6/venue4.jpg'} alt="" />
                        <p>Created especially for multi-generational wedding parties, this highly-rated beach resort in Mexico accommodates guest lists of all sizes, ages and interests. Generations Riviera Maya has it all – from breathtaking oceanfront views to infinity pool balcony suites complete with a concierge team who are ready to fulfill your every wish. </p>
                        <p className="mt-8">The Always and Forever wedding package goes beyond the basics to include special details for your special day, including ceremony decor, semi-private dinner reservation, complimentary honeymoon and anniversary amenities and more. </p>

                        <p className="text-[#ba869a] text-2xl mt-8">Majestic Elegance Costa Mujeres – Cancun, Mexico</p>
                        <img className="my-3" src={'https://i.ibb.co/fM2kpSX/venue5.jpg'} alt="" />
                        <p>On the northern shores of Cancun lies this modern, 5-star Mexico destination wedding resort by Majestic Resorts. A recent customer favorite for many reasons, this upscale venue will provide everything you need for your celebration. Start with a beautiful beachfront location, add in a delicious wedding cake, tropical floral arrangements, and finish with a glass of champagne for the whole group after the ceremony. </p>
                        <p className="mt-8">As newlyweds, you’ll enjoy a romantic breakfast in your suite the morning after the big day, plus a candlelight dinner, complimentary massage at the spa, and more! Ask your Certified Destination Wedding Specialist how to take advantage of the FREE Majestic Wedding Package. </p>
                    </div>
                </div>
                <div className="p-4 ">
                    <div className="relative">
                        <input className="border relative w-full p-2 rounded-lg" type="text" name="" id="" placeholder="Search here...." />
                        <p className="absolute right-2 top-3"><FaSearch></FaSearch></p>
                    </div>
                    <button className="btn w-full my-5 bg-[#ba869a] text-white">Exclusive Savings</button>
                    <div className="relative">
                        <img src={'https://i.ibb.co/KqC8GBt/savings.jpg'} alt="" />
                        <p className="absolute top-16 left-24 text-white text-center text-2xl">Save your money <br /> with us!!!!</p>
                    </div>
                    <button className="btn w-full my-5 bg-[#ba869a] text-white">Recent Posts</button>
                    <p className="text-black border-b-2 border-dotted my-2">Destination Weddings at Sandos Caracol Eco Resort</p>
                    <p className="text-black border-b-2 border-dotted my-2">Destination Weddings at Riu Palace Costa Mujeres</p>
                    <p className="text-black border-b-2 border-dotted my-2">Chantelle and Isaiah’s Destination Wedding in Riviera Maya, Mexico</p>
                    <p className="text-black border-b-2 border-dotted my-2">Sonia & Michael’s Destination Wedding in Riviera Maya, Mexico</p>
                    <p className="text-black border-b-2 border-dotted my-2">Destination Weddings at Seadust Cancun Family Resort</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default TopVenues;