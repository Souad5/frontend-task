import Button from "../../utilis/Button";

const Footer = () => {
  return (
    <div className="bg-blue-950 text-white p-10">
      <div className="max-w-11/12 mx-auto flex flex-col lg:flex-row  justify-center lg:justify-between items-center lg:p-10">
        <div className="flex flex-col lg:flex-row  justify-around items-center  text-white lg:gap-40">
          <div className="lg:space-y-20 flex flex-col gap-5">
            <img src="/logo-light.svg" alt="" />
            <div className="flex gap-6">
              <img src="/icon-facebook.svg" alt="" />
              <img src="/icon-youtube.svg" alt="" />
              <img src="/icon-twitter.svg" alt="" />
              <img src="/icon-pinterest.svg" alt="" />
              <img src="/icon-instagram.svg" alt="" />
            </div>
          </div>
          <div>
            <ul className="flex flex-col justify-center items-center gap-3 my-5 lg:gap-10">
              <li>
                <h1>About Us</h1>
              </li>
              <li>
                <h1>Contact</h1>
              </li>
              <li>
                <h1>Blog</h1>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col justify-center items-center gap-3 my-5 lg:gap-10">
              <li>Careers</li>
              <li>Support</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 lg:space-y-10 ">
          <Button />
          <p className="text-gray-400">&copy Digibank. All Rights Reserverd</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
