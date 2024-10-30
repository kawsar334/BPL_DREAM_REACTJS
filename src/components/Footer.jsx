
import logo from "../assets/logo.png"

const Footer = () => {
    return (
        <footer className="bg-[#06091A] text-base-content py-10  h-max">
            <div className="w-full md:w-[80%] m-auto  h-max">
                <div className="flex justify-start  md:justify-center my-10">
                <img
                    src={logo} 
                    alt="Logo"
                    className="w-30 h-30 my-10"
                />
            </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left md:text-left px-4">
                <div className="text-left">
                    <h2 className="font-bold text-lg mb-4 text-[white]">About Us</h2>
                        <p className="w-[80%] md:w-[90%] text-[gray]">
                        We are a passionate team dedicated to providing the best services to our customers.
                    </p>
                </div>

                    <div className=" ">
                        <h2 className="font-bold text-lg mb-4 text-[white]">Useful Links</h2>
                        <ul className="space-y-2 text-[gray]">
                        <li><a href="#home" className="link link-hover">Home</a></li>
                        <li><a href="#services" className="link link-hover">Services</a></li>
                        <li><a href="#contact" className="link link-hover">Contact</a></li>
                    </ul>
                </div>


                <div className="">
                        <h2 className="font-bold text-lg mb-4 text-[white]">Newsletter</h2>
                        <p className="mb-4 text-[gray]">Subscribe to our newsletter</p>
                    <div className="flex justify-center md:justify-start">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full max-w-xs"
                        />
                            <button className="btn btn-[#ff5733] ml-2 bg-gradient-to-r from-[yellow] via-[#ff5733]">Subscribe</button>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Copyright */}
                <div className="mt-10 border-t border-base-300 text-center pt-4 text-[gray]  m-auto">
                <p className="text-sm">&copy; 2024 Your Company. All Rights Reserved.</p>
            </div>
        </div>
        </footer>
    );
};

export default Footer;
