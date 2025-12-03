const Articles = () => {
  return (
    <div className="bg-gray-50 py-10">
      <h1 className="font-bold text-3xl max-w-11/12 mx-auto mb-10 text-center md:text-left">
        Latest Articles
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-center items-center max-w-11/12 mx-auto gap-20">
        <div className="bg-white">
          <img
            src="/image-currency.jpg"
            alt=""
            className="w-[430px] lg:w-full h-[350px] lg:h-[350px] rounded-t-xl"
          />
          <div className="space-y-4 mt-2 p-6 ">
            <h4 className="text-sm text-gray-400">By Souad Al Kabir</h4>
            <h1 className="text-2xl font-bold">
              Receive money in any currency with no fees
            </h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              impedit suscipit, cum praesentium quae, repudiandae ratione autem
              ex unde dicta laboriosam blanditiis. Maiores autem eveniet
              architecto asperiores dolor numquam eaque.
            </p>
          </div>
        </div>
        <div className="bg-white ">
          <img
            src="/image-restaurant.jpg"
            alt=""
            className="w-[430px] lg:w-full h-[350px] lg:h-[350px]  rounded-t-xl"
          />
          <div className="space-y-4 mt-2 p-6">
            <h4 className="text-sm text-gray-400">By Souad Al Kabir</h4>
            <h1 className="text-2xl font-bold">
              Treat yourself without worrying about money
            </h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              impedit suscipit, cum praesentium quae, repudiandae ratione autem
              ex unde dicta laboriosam blanditiis. Maiores autem eveniet
              architecto asperiores dolor numquam eaque.
            </p>
          </div>
        </div>
        <div className="bg-white">
          <img
            src="/image-plane.jpg"
            alt=""
            className="w-[430px] lg:w-full h-[350px] lg:h-[350px]  rounded-t-xl"
          />
          <div className="space-y-4 mt-2 p-6">
            <h4 className="text-sm text-gray-400">By Souad Al Kabir</h4>
            <h1 className="text-2xl font-bold">
              Take your Digibank card wherever you go! Hi
            </h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              impedit suscipit, cum praesentium quae, repudiandae ratione autem
              ex unde dicta laboriosam blanditiis. Maiores autem eveniet
              architecto asperiores dolor numquam eaque.
            </p>
          </div>
        </div>
        <div className="bg-white">
          <img
            src="/image-confetti.jpg"
            alt=""
            className="w-[430px] lg:w-full h-[350px] lg:h-[350px]  rounded-t-xl"
          />
          <div className="space-y-4 mt-2 p-6">
            <h4 className="text-sm text-gray-400">By Souad Al Kabir</h4>
            <h1 className="text-2xl font-bold">
              Our invite-only Beta accounts are now live!
            </h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              impedit suscipit, cum praesentium quae, repudiandae ratione autem
              ex unde dicta laboriosam blanditiis. Maiores autem eveniet
              architecto asperiores dolor numquam eaque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
