import HeroIMG1 from "../../assets/images/19.webp";
import HeroIMG2 from "../../assets/images/20.webp";
function Hero() {
  return (
    <>
      {/* Hero section start*/}
      <section className="px-5 xl:px-14 w-full mt-40 flex justify-between items-center flex-wrap lg:flex-nowrap">
        {/* content div start */}
        <div className="w-full lg:w-auto text-center lg:text-start">
          <span className="px-2 py-1 capitalize font-sans  bg-main-color-3 text-main-color-2">
            Research your occupation
          </span>
          <h1 className="text-[50px] lg:text-[60px] my-5 font-sans text-main-color-1">
            Explore Boundless <br /> Opportunities
          </h1>
          <p className="text-main-color-1 font-sans">
            Discover a world of learning at your fingertips with our online{" "}
            <br />
            school. Our flexible and accessible platform offers high-quality{" "}
            <br />
            education tailored to your needs.
          </p>

          <div className="flex gap-5 mt-16 text-center lg:text-start w-full items-center justify-center lg:justify-start">
            <button className="px-8 py-4 bg-main-color-2 text-white font-sans hover:bg-main-color-1 duration-200 cursor-pointer  ">
              Choose Class
            </button>
            <button className="px-8 py-4 bg-main-color-1 text-white font-sans hover:bg-main-color-2 duration-200 cursor-pointer  ">
              Get Started
            </button>
          </div>
        </div>
        {/* content div end */}

        {/* img div start */}
        <div className="flex items-center mt-10 lg:mt-0 flex-col md:flex-row justify-center w-full lg:w-auto lg:justify-end relative ">
          <img
            src={HeroIMG2}
            alt=""
            className="w-full md:w-[470px] object-cover  border-8 border-main-color-3 "
          />
          <img
            src={HeroIMG1}
            alt=""
            className="w-full md:w-60 h-[330px] object-cover md:absolute md:left-32 lg:-left-20 top-48 border-8 border-main-color-3 "
          />
        </div>
        {/* img div end */}
      </section>
      {/* Hero section end*/}
    </>
  );
}

export default Hero;
