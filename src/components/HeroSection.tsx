import ReferBox from "./referform/ReferBox";

const HeroSection = () => {
  return (
    <div className="pr-3.5  bg-blue-50 md:rounded-[29px] max-w-[1360px] mx-auto">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 flex-row-reverse relative">
        <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            srcSet="./heroimg.png"
            className="grow w-full aspect-[1.22] max-md:mt-10 max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full md:relative md:bottom-auto absolute bg-gradient-to-t md:from-transparent from-white to-transparent h-1/2 bottom-0 py-4">
          <div className="flex flex-col max-md:mt-10 max-md:max-w-full md:items-start items-center">
            <div className="flex flex-col md:items-start items-center pl-11 mt-14 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-8xl font-bold text-gray-900 max-md:max-w-full max-md:text-4xl ">
                Let’s Learn & Earn
              </div>
              <div className="self-center md:mt-20 mt-5 md:text-4xl text-blue-600 max-md:mt-10">
                Get a chance to win <br />
                up-to
                <span className="md:text-6xl font-bold text-blue-600">
                  Rs. 15,000
                </span>
              </div>
              <div className="my-6">
                <ReferBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
