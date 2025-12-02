import Button from "../../utilis/Button";

const Hero = () => {
    return (
        <div className="flex justify-between items-center gap-5 -mt-28 overflow-x-hidden min-w-7xl mx-auto">
            <div className="ml-56 space-y-4">
                <h1 className="text-3xl ">Next generation <br /> digital banking</h1>
                <h4>Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit. Nulla rerum, deleniti eum,<br /> sit tempora illum ut aperiam repellat quod doloribus minus tempore? 
                </h4>
                <Button/>
            </div>
            <div className="bg-[url('/bg-intro-desktop.svg')] bg-no-repeat bg-cover relative h-screen w-[850px] -right-10" >
                <img src="/image-mockups.png" alt="" className="absolute w-auto h-[105%] -right-20 " />
            </div>
        </div>
    );
};

export default Hero;