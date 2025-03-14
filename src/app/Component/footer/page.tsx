import { FaPhoneAlt, FaGoogle, FaTwitter, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';



const Footer = () => {
    return (
        <>
            <div className="bg-[#474747] mt-20 p-5">
                <div className="grid md:grid-cols-4 sm:grid-cols-1   gap-5   w-[85%] m-auto mt-20 text-sm/8  ">
                    <div className=''>
                        <div className="flex gap-4 items-center ">
                            <img src="/footerlogo.png" />
                            <h1 className='font-playfair text-2xl italic text-white'>Bistro Bliss</h1>
                        </div>
                        <p className='text-[#ADB29E] mt-5 '>
                            In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
                        <div className='flex gap-1 pt-4 '>
                            <FaTwitter className=' text-white  bg-[#AD343E] rounded-full w-7 h-7 p-2 ' />
                            <FaFacebook className='  text-white  bg-[#AD343E] rounded-full w-7 h-7 p-2 ' />
                            <FaInstagram className=' text-white  bg-[#AD343E] rounded-full w-7 h-7 p-2 ' />
                            <FaTiktok className=' text-white  bg-[#AD343E] rounded-full w-7 h-7 p-2 ' />
                        </div>
                    </div>
                    <div className='md:p-5 sm:p-2  md:ml-5 sm:ml-none'>
                        <span className='text-white font-DM Sans font-light'>Pages</span>
                        <div className='text-[#DBDFD0] font-DM Sans'>
                            <p>Home</p>
                            <p>About</p>
                            <p>Menue</p>
                            <p>Pricing</p>
                            <p>Blog</p>
                            <p>Contact</p>
                            <p>Delivering</p>
                        </div>

                    </div>
                    <div className='md:p-5 sm:p-2'>
                        <span className='text-white font-DM Sans font-light'>UtilityPages</span>
                        <div className='text-[#DBDFD0] font-DM Sans'>
                        <p>Start Here</p>
                        <p>Styleguide</p>
                        <p>Password Protected</p>
                        <p>404 Not Found</p>
                        <p>Lincenses</p>
                        <p>Changelog</p>
                        <p>View More</p>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <span className='text-white font-DM Sans'>Follow Us On Instagram</span>
                        <div className=' grid grid-cols-2  gap-2 mt-5 h-[250px]  '>
                            <img src='/food.png' className='h-full w-full object-cover rounded-lg' />
                            <img src='/meal.png' className='h-full w-full object-cover rounded-lg' />
                            <img src='/food.png' className='h-full w-full object-cover rounded-lg'/>
                            <img src='/food.png' className='h-full w-full object-cover rounded-lg'/>
                        </div>
                    </div>
                </div>
                <div className="mt-20 md:p-20 sm:p-10 ">
                <p className='text-center text-[#ADB29E] text-base sm:text-sm font-dm-san '>
                    Copyright © 2023 Hashtag Developer. All Rights Reserved</p>
                </div>

            </div>

        </>
    );
}

export default Footer;