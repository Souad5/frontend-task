import Button from "../../utilis/Button";

const Footer = () => {
    return (
        <div className="bg-blue-950 text-white">
            <div className="max-w-11/12 mx-auto flex justify-between items-center p-10">
                <div className="flex justify-around items-center text-white gap-40"> 
                    <div className="space-y-20">
                    <img src="/logo-light.svg" alt="" />
                    <div className="flex gap-6">
                        <img src="/icon-facebook.svg" alt="" /><img src="/icon-youtube.svg" alt="" /><img src="/icon-twitter.svg" alt="" /><img src="/icon-pinterest.svg" alt="" /><img src="/icon-instagram.svg" alt="" />
                    </div>
                </div>
                <div>
                    <ul className="flex flex-col gap-10">
                        <li><h1>About Us</h1></li>
                        <li><h1>Contact</h1></li>
                        <li><h1>Blog</h1></li>
                    </ul>
                </div>
                <div >
                    <ul className="flex flex-col gap-10">
                        <li>Careers</li>
                        <li>Support</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                </div>
                <div className="space-y-10 ">
                    <Button/>
                    <p>&copy Digibank. All Rights Reserverd</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;