import Button from "../../utilis/Button";

const Navbar = () => {
    return (
        <div className="flex justify-around items-center p-4 relative z-10 bg-white  border-b border-b-gray-100">
            <div>
                <img src="/logo-dark.svg" alt="" />
            </div>
            <div>
                <ul className="flex gap-8 text-gray-400">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div>
                <Button/>
            </div>
        </div>
    );
};

export default Navbar;
