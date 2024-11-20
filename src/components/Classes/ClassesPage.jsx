import cardIMG1 from "../../assets/images/8.jpg";
import cardIMG2 from "../../assets/images/9.jpg";
import cardIMG3 from "../../assets/images/10.jpg";
function ClassesPage() {
  const CardData = [
    {
      id: 1,
      title: "Wisdom Program",
      description:
        "Our program is dedicated to nurturing intellect, and empowering individuals to lead fulfilling.",
      img: cardIMG3,
      link: "More Info",
    },
    {
      id: 2,
      title: "Language Lessons",
      description:
        "Whether you're looking to learn a new language for travel, work, or personal enrichment.",
      img: cardIMG2,
      link: "More Info",
    },
    {
      id: 3,
      title: "TechTrek Institute",
      description:
        "Our institute is dedicated to providing cutting-edge education and training that equips students with the skills.",
      img: cardIMG1,
      link: "More Info",
    },
  ];
  return (
    <>
      {/* text div start */}
      <div className="w-full lg:mt-20 mt-14 bg-main-color-1 text-white h-[450px] flex gap-5 items-center justify-center flex-col text-center">
        <h1 className="text-6xl font-sans font-medium">Lovely Classes</h1>
        <p>
          Welcome to our Education classes page! Our school offers a wide <br />
          variety of classes taught by highly experienced and passionate <br />
          teachers.
        </p>
      </div>
      {/* text div end */}

      {/* Classes start */}
      <section className="mt-20 bg-main-color-3 py-24  gap-14">
        <div className="flex flex-col items-center justify-center gap-3">
          <div>
            <span className="text-main-color-2 bg-[#dff6ec] px-2 py-1">
              Our Classes
            </span>
          </div>
          <div>
            <h1 className="text-main-color-1 text-3xl w-[100%] text-center sm:text-5xl font-[500] mt-2">
              Choose Your Class
            </h1>
          </div>
        </div>
        <div className="flex justify-center mt-20">
          <div className="bg-white flex flex-col justify-center items-center w-[98%] lg:w-[90%] p-1">
            <div className="flex flex-col justify-center items-center gap-5 sm:gap-0 sm:flex-row sm:justify-between sm:items-center bg-main-color-3 w-[100%] px-5 lg:px-20 py-6">
              <div className="flex flex-col items-center sm:items-start gap-3 w-[100%] sm:w-[60%] md:w-[75%]">
                <h1 className="cursor-pointer text-main1 hover:text-main2 duration-300 text-xl font-semibold">
                  Creative Writing
                </h1>
                <p className="w-[80%] text-main1 text-center sm:text-start">
                  Our classes are designed to accommodate writers of all levels,
                  from beginners to seasoned professionals.
                </p>
              </div>
              <div className="">
                <p className="text-main1">Mon-Fri: 12:00 - 14:30</p>
                <p className="text-main1">Sunday: 17:00 - 19:30</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 sm:gap-0 sm:flex-row sm:justify-between sm:items-center  w-[100%] px-5 lg:px-20 py-6">
              <div className="flex flex-col items-center sm:items-start gap-3 w-[100%] sm:w-[60%] md:w-[75%]">
                <h1 className="cursor-pointer text-main1 hover:text-main2 duration-300 text-xl font-semibold">
                  3D Graphics
                </h1>
                <p className="w-[80%] text-main1 text-center sm:text-start">
                  Dive into the captivating world of 3D graphics and unlock your
                  creative potential with our courses.
                </p>
              </div>
              <div className="">
                <p className="text-main1">Mon-Fri: 10:00 - 12:30</p>
                <p className="text-main1">Sunday: 16:00 - 18:30</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 sm:gap-0 sm:flex-row sm:justify-between sm:items-center bg-main-color-3 w-[100%] px-5 lg:px-20 py-6">
              <div className="flex flex-col items-center sm:items-start gap-3 w-[100%] sm:w-[60%] md:w-[75%]">
                <h1 className="cursor-pointer text-main1 hover:text-main2 duration-300 text-xl font-semibold">
                  Art and Design
                </h1>
                <p className="w-[80%] text-main1 text-center sm:text-start">
                  Unleash your artistic talents and explore the boundless
                  possibilities of visual expression with our Art courses.
                </p>
              </div>
              <div className="">
                <p className="text-main1">Mon-Thu: 10:00 - 12:30</p>
                <p className="text-main1">Friday: 17:00 - 19:30</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 sm:gap-0 sm:flex-row sm:justify-between sm:items-center  w-[100%] px-5 lg:px-20 py-6">
              <div className="flex flex-col items-center sm:items-start gap-3 w-[100%] sm:w-[60%] md:w-[75%]">
                <h1 className="cursor-pointer text-main1 hover:text-main2 duration-300 text-xl font-semibold">
                  Programming
                </h1>
                <p className="w-[80%] text-main1 text-center sm:text-start">
                  Dive into the dynamic world of programming and unleash your
                  potential to create innovative solutions.
                </p>
              </div>
              <div className="">
                <p className="text-main1">Mon-Fri: 12:00 - 14:30</p>
                <p className="text-main1">Sunday: 17:00 - 19:30</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 sm:gap-0 sm:flex-row sm:justify-between sm:items-center bg-main-color-3 w-[100%] px-5 lg:px-20 py-6">
              <div className="flex flex-col items-center sm:items-start gap-3 w-[100%] sm:w-[60%] md:w-[75%]">
                <h1 className="cursor-pointer text-main1 hover:text-main2 duration-300 text-xl font-semibold">
                  Computer Science
                </h1>
                <p className="w-[80%] text-main1 text-center sm:text-start">
                  Embark on a captivating journey into the world of computer
                  science and discover the limitless possibilities...
                </p>
              </div>
              <div className="">
                <p className="text-main1">Mon-Fri: 10:00 - 10:30</p>
                <p className="text-main1">Sunday: 17:00 - 19:30</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-14">
          <button className="bg-main-color-1 text-white py-[17px] px-8 font-medium text-sm hover:bg-main-color-2 duration-300">
            Read More
          </button>
        </div>
      </section>

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

      {/* Our Programs section start */}
      <section className="px-5 lg:px-14 bg-main-color-3 w-full mt-32 py-20">
        {/* text div start */}
        <div className="w-full text-center">
          <span className="bg-[#dff6ec] px-2 py-1 font-sans text-main-color-2">
            Our Programs
          </span>
          <h1 className="text-[50px] font-medium my-2  font-sans text-main-color-1">
            Our Popular Programs
          </h1>
          <p className="text-main-color-1">
            We offer a diverse range of interactive and engaging classes
            designed to inspire curiosity <br /> and ignite a passion for
            learning.
          </p>
        </div>
        {/* text div end */}

        {/* cards */}
        <div className="flex items-center justify-center gap-6 flex-wrap lg:flex-nowrap mt-14">
          {CardData.map((data) => (
            <div key={data.id} className="w-full md:w-96 shadow-sm">
              <div className="overflow-hidden w-full">
                <img
                  src={data.img}
                  alt=""
                  className="hover:scale-125 object-cover duration-500 cursor-pointer w-full"
                />
              </div>

              <div className="bg-white p-10 text-center">
                <h1 className="text-3xl font-sans font-medium mb-5 text-main-color-1 hover:text-main-color-2 duration-200 cursor-pointer">
                  {data.title}
                </h1>
                <p className="text-main-color-1 ">{data.description}</p>
                <p className="text-xl text-main-color-2 mt-5 hover:text-main-color-1 cursor-pointer">
                  {data.link}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-main-color-1 text-white font-sans hover:bg-main-color-2 duration-200 cursor-pointer  ">
            View All
          </button>
        </div>
      </section>
      {/* Our Programs section end */}
    </>
  );
}

export default ClassesPage;
