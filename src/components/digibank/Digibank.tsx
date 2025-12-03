
const Digibank = () => {
  return (
      <div className="lg:-mt-20 py-20 bg-gray-100">
        <div className="max-w-11/12 mx-auto">
          <h1 className="text-3xl font-bold mb-5 text-center md:text-left">
            Why choose Digibank
          </h1>
          <p className="text-gray-600  text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Velit nam, neque, error eum quas, fugit culpa fugiat <br />
            consequatur cupiditate optio .
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-center items-center max-w-11/12 mx-auto mt-10">
          <div className="space-y-5 flex flex-col md:justify-baseline md:items-baseline justify-center items-center">
            <img src="/icon-online.svg" alt="" />
            <h1 className="text-2xl font-bold">Online Banking</h1>
            <p className="text-gray-600 text-center md:text-left ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              dolorem porro sequi quae sapiente dolores vel vero perferendis
              fugiat optio dignissimos architecto itaque, culpa dolore a saepe
              cupiditate? Obcaecati, eius!
            </p>
          </div>
          <div className="space-y-5 flex flex-col md:justify-baseline md:items-baseline justify-center items-center">
            <img src="/icon-budgeting.svg" alt="" />
            <h1 className="text-2xl font-bold">Simple Budgeting</h1>
            <p className="text-gray-600 text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              dolorem porro sequi quae sapiente dolores vel vero perferendis
              fugiat optio dignissimos architecto itaque, culpa dolore a saepe
              cupiditate? Obcaecati, eius!
            </p>
          </div>
          <div className="space-y-5 flex flex-col md:justify-baseline md:items-baseline justify-center items-center">
            <img src="/icon-onboarding.svg" alt="" />
            <h1 className="text-2xl font-bold">Fast Onboarding</h1>
            <p className="text-gray-600 text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              dolorem porro sequi quae sapiente dolores vel vero perferendis
              fugiat optio dignissimos architecto itaque, culpa dolore a saepe
              cupiditate? Obcaecati, eius!
            </p>
          </div>
          <div className="space-y-5 flex flex-col md:justify-baseline md:items-baseline justify-center items-center">
            <img src="/icon-api.svg" alt="" />
            <h1 className="text-2xl font-bold">Open Api</h1>
            <p className="text-gray-600 text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              dolorem porro sequi quae sapiente dolores vel vero perferendis
              fugiat optio dignissimos architecto itaque, culpa dolore a saepe
              cupiditate? Obcaecati, eius!
            </p>
          </div>
        </div>
      </div>
  );
};

export default Digibank;
