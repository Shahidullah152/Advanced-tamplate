import AboutIMG from "../../assets/images/29.webp";
function About() {
  return (
    <>
      {/* About section start */}
      <section className="px-5 lg:px-14 w-full mt-12 flex items-center justify-between gap-5 flex-wrap lg:flex-nowrap py-20   ">
        {/* content div start */}
        <div className="w-full lg:w-[43%]  flex items-center lg:items-start justify-start h-auto flex-col">
          <span className="px-2 py-1 capitalize font-sans  bg-main-color-3 text-main-color-2">
            About Us
          </span>
          <h1 className="text-[50px]  my-5 font-medium font-sans text-main-color-1">
            About School
          </h1>
          <p className="text-main-color-1 text-center font-sans w-full sm:w-[500px] lg:w-full">
            With our innovative virtual platform, students can access
            high-quality education from anywhere in the world. Our experienced
            educators utilize cutting-edge technology to deliver engaging
            lessons, personalized support, and interactive experiences that
            inspire curiosity and foster academic success.
          </p>

          <div className="flex items-center justify-center lg:justify-start w-full mt-16 gap-16  ms-5">
            <ul className="list-disc text-main-color-1 flex flex-col gap-3">
              <li>Flexibility</li>
              <li>Variety of courses</li>
              <li>Use of technologies</li>
            </ul>
            <ul className="list-disc text-main-color-1 flex flex-col gap-3">
              <li>Accessibility</li>
              <li>Individualized training</li>
              <li>Development of skills</li>
            </ul>
          </div>

          <div className="mt-20">
            <button className="px-8 py-4 bg-main-color-1 text-white font-sans hover:bg-main-color-2 duration-200 cursor-pointer  ">
              More About Us
            </button>
          </div>
        </div>
        {/* content div end */}

        {/* img div start */}
        <div className="w-full lg:w-[57%] h-auto">
          <img
            src={AboutIMG}
            alt=""
            className="h-[550px] border-8 border-main-color-3 object-cover"
          />
        </div>
        {/* img div end */}
      </section>
      {/* About section end */}

      {/* About Number start */}
      <div className="px-5 lg:px-14 w-full flex items-center justify-center gap-32 text-center bg-dott bg-cover bg-no-repeat py-20 flex-wrap md:flex-nowrap">
        <div>
          <h1 className="text-[55px] text-main-color-1 font-serif">20+</h1>
          <p className="text-main-color-1  font-sans">Professional Teachers</p>
        </div>
        <div>
          <h1 className="text-[55px] text-main-color-1 font-serif">54</h1>
          <p className="text-main-color-1  font-sans">Learning Groups</p>
        </div>
        <div>
          <h1 className="text-[55px] text-main-color-1 font-serif">900+</h1>
          <p className="text-main-color-1  font-sans">Happy Students</p>
        </div>
        <div>
          <h1 className="text-[55px] text-main-color-1 font-serif">8</h1>
          <p className="text-main-color-1  font-sans">Special Classes</p>
        </div>
      </div>
      {/* About Number end */}
    </>
  );
}

export default About;
