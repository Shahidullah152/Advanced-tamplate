import IMG1 from "../../assets/images/2.jpg";
import IMG2 from "../../assets/images/3.jpg";
import IMG3 from "../../assets/images/5.jpg";
function Recent() {
  return (
    <>
      {/* recent text div start */}
      <div className="flex items-center justify-center gap-5 sm:justify-between px-14 mt-28 flex-wrap ">
        <div>
          <span className="bg-[#dff6ec] px-2 py-1 font-sans text-main-color-2">
            It’s Interesting
          </span>
          <h1 className="text-[50px] font-medium my-2  font-sans text-main-color-1">
            Recent Posts
          </h1>
        </div>
        <button className="bg-main-color-1 text-white py-[17px] px-8 font-medium text-sm hover:bg-main-color-2 duration-300">
          Read More
        </button>
      </div>
      {/* recent text div end */}

      {/* cards start */}
      <section className="lg:px-14 px-5 w-full mt-16 lg:flex lg:gap-5">
        <div className="w-full lg:w-96 mt-5 lg:h-[600px]  md:flex lg:flex-col relative lg:w-[500px] border-2 border-gray-100">
          <span className="uppercase absolute top-3 left-5 z-50 bg-main-color-2 text-white font-sans font-medium px-3 hover:bg-main-color-1 duration-300 cursor-pointer  py-1">
            Technology
          </span>
          <div className="overflow-hidden w-full md:w-[500px] lg:w-full">
            <img
              src={IMG3}
              alt=""
              className="hover:scale-125 md:h-full object-cover duration-500 cursor-pointer w-full"
            />
          </div>

          <div className="bg-white p-10 text-center">
            <h1 className="text-xl font-sans font-medium mb-5 text-main-color-1 hover:text-main-color-2 duration-200 cursor-pointer">
              Unlocking the Power of Inquiry-Based Learning
            </h1>
            <p className="text-main-color-1 ">
              By flipping the traditional model of education on its head,
              inquiry-based learning puts students in the driver's seat of their
              own learning journey.
            </p>
            <p className="text-xl text-main-color-2 mt-5 hover:text-main-color-1 cursor-pointer">
              Read More
            </p>
          </div>
        </div>
        <div className="w-full lg:w-96 mt-10 border-2 border-gray-100 md:flex relative block lg:hidden">
          <span className="uppercase absolute top-3 left-5 z-50 bg-main-color-2 text-white font-sans font-medium px-3 hover:bg-main-color-1 duration-300 cursor-pointer  py-1">
            Strategies
          </span>
          <div className="overflow-hidden w-full md:w-[500px]">
            <img
              src={IMG2}
              alt=""
              className="hover:scale-125 md:h-full object-cover duration-500 cursor-pointer w-full"
            />
          </div>

          <div className="bg-white p-10 text-center">
            <h1 className="text-xl font-sans font-medium mb-5 text-main-color-1 hover:text-main-color-2 duration-200 cursor-pointer">
              Integrating Arts into Education for Holistic
            </h1>
            <p className="text-main-color-1 ">
              By flipping the traditional model of education on its head,
              inquiry-based learning puts students in the driver's seat of their
              own learning journey.
            </p>
            <p className="text-xl text-main-color-2 mt-5 hover:text-main-color-1 cursor-pointer">
              Read More
            </p>
          </div>
        </div>
        <div className="w-full lg:w-96 mt-10 border-2 border-gray-100 md:flex relative block lg:hidden">
          <span className="uppercase absolute top-3 left-5 z-50 bg-main-color-2 text-white font-sans font-medium px-3 hover:bg-main-color-1 duration-300 cursor-pointer  py-1">
            Technology
          </span>
          <div className="overflow-hidden w-full md:w-[500px]">
            <img
              src={IMG1}
              alt=""
              className="hover:scale-125 md:h-full object-cover duration-500 cursor-pointer w-full"
            />
          </div>

          <div className="bg-white p-10 text-center">
            <h1 className="text-xl font-sans font-medium mb-5 text-main-color-1 hover:text-main-color-2 duration-200 cursor-pointer">
              Unlocking the Power of Inquiry-Based Learning
            </h1>
            <p className="text-main-color-1 ">
              By flipping the traditional model of education on its head,
              inquiry-based learning puts students in the driver's seat of their
              own learning journey.
            </p>
            <p className="text-xl text-main-color-2 mt-5 hover:text-main-color-1 cursor-pointer">
              Read More
            </p>
          </div>
        </div>
        <div className="flex flex-col hidden lg:block lg:w-[600px]">
          <div className="w-full mt-5 border-2 border-gray-100 md:flex relative">
            <span className="uppercase absolute top-3 left-5 z-50 bg-main-color-2 text-white font-sans font-medium px-3 hover:bg-main-color-1 duration-300 cursor-pointer  py-1">
              Strategies
            </span>
            <div className="overflow-hidden w-full md:w-[1300px]">
              <img
                src={IMG2}
                alt=""
                className="hover:scale-125 md:h-full object-cover duration-500 cursor-pointer w-full"
              />
            </div>

            <div className="bg-white p-10 text-center">
              <h1 className="text-xl font-sans font-medium mb-5 text-main-color-1 hover:text-main-color-2 duration-200 cursor-pointer">
                Integrating Arts into Education for Holistic
              </h1>
              <p className="text-main-color-1 ">
                By flipping the traditional model of education on its head,
                inquiry-based learning puts students in the driver's seat of
                their own learning journey.
              </p>
              <p className="text-xl text-main-color-2 mt-5 hover:text-main-color-1 cursor-pointer">
                Read More
              </p>
            </div>
          </div>
          <div className="w-full mt-5 border-2 border-gray-100 md:flex relative">
            <span className="uppercase absolute top-3 left-5 z-50 bg-main-color-2 text-white font-sans font-medium px-3 hover:bg-main-color-1 duration-300 cursor-pointer  py-1">
              Technology
            </span>
            <div className="overflow-hidden w-full md:w-[1300px]">
              <img
                src={IMG1}
                alt=""
                className="hover:scale-125 md:h-full object-cover duration-500 cursor-pointer w-full"
              />
            </div>

            <div className="bg-white p-10 text-center">
              <h1 className="text-xl font-sans font-medium mb-5 text-main-color-1 hover:text-main-color-2 duration-200 cursor-pointer">
                Unlocking the Power of Inquiry-Based Learning
              </h1>
              <p className="text-main-color-1 ">
                By flipping the traditional model of education on its head,
                inquiry-based learning puts students in the driver's seat of
                their own learning journey.
              </p>
              <p className="text-xl text-main-color-2 mt-5 hover:text-main-color-1 cursor-pointer">
                Read More
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* cards end */}
    </>
  );
}

export default Recent;
