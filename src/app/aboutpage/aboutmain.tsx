const AboutMain = () => {
    return (
        <div className="bg-cover bg-center min-h-screen flex items-center justify-center p-10" style={{ backgroundImage: "url('/background-image.avif')" }}>
            <div className="max-w-4xl text-center bg-white/70 p-10 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-[#AD343E] mb-5">Welcome to Bistro Bliss</h1>
                <p className="text-lg text-gray-700">
                    At <span className="font-semibold">Bistro Bliss</span>, we believe in crafting unforgettable dining experiences. 
                    Our passion for food, hospitality, and innovation drives us to bring you a menu 
                    that blends tradition with modern flavors. Every dish is prepared with love, using 
                    the freshest ingredients sourced locally and globally.
                </p>

                <h2 className="text-2xl font-semibold text-[#2C2F24] mt-8">Our Story</h2>
                <p className="text-lg text-gray-700 mt-3">
                    What started as a small family-owned café has grown into a beloved restaurant known 
                    for its warm ambiance, friendly service, and exceptional cuisine. Whether you’re here 
                    for a casual meal, a romantic dinner, or a special celebration, we promise to make 
                    every visit delightful.
                </p>

                <h2 className="text-2xl font-semibold text-[#2C2F24] mt-8">Why Choose Us?</h2>
                <ul className="text-lg text-gray-700 mt-3 space-y-2">
                    <li>✅ Fresh, high-quality ingredients</li>
                    <li>✅ A diverse menu crafted with passion</li>
                    <li>✅ Cozy and welcoming atmosphere</li>
                    <li>✅ Friendly and attentive staff</li>
                </ul>

                <p className="text-lg text-gray-700 mt-8">
                    Join us at Bistro Bliss and indulge in flavors that bring joy to every bite. 
                    We can't wait to serve you!
                </p>
            </div>
        </div>
    );
};

export default AboutMain;
