import Button from "../../utilis/Button";
import {motion} from "framer-motion"
const transition = {
  duration: 0.8,
  delay: 0.4,
  ease: [0, 0.71, 0.2, 1.01],
};
const Hero = () => {
    return (
      <motion.div
        animate={{ y: -40 }}
        transition={transition}
        className="flex flex-col-reverse md:flex-row justify-between items-center gap-5 -mt-28 overflow-hidden pb-5"
      >
        <div className="lg:ml-24 pl-6 space-y-4 flex flex-col lg:justify-baseline justify-center items-center lg:items-baseline">
          <h1 className="text-3xl font-bold">
            Next generation <br /> digital banking
          </h1>
          <h4 className="text-center md:text-left lg:text text-gray-700">
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipisicing elit. Nulla rerum, deleniti eum,
            <br /> sit tempora illum ut aperiam repellat quod doloribus minus
            tempore?
          </h4>
          <Button />
        </div>
        <div className="bg-[url('/bg-intro-desktop.svg')] bg-no-repeat bg-cover lg:relative lg:h-screen w-full lg:w-[1000px] lg:-right-10">
          <img
            src="/image-mockups.png"
            alt=""
            className="lg:absolute w-auto lg:h-[105%] lg:-right-20 "
          />
        </div>
      </motion.div>
    );
};

export default Hero;