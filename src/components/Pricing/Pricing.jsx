import about2 from "../../assets/images/30.png";
import svg from "../../assets/images/38.svg";
import star from "../../assets/images/16.webp";

function Pricing() {
  const testimonailData = [
    {
      id: 1,
      title: "Robert Fox",
      desc: "The curriculum is well-structured and aligned with academic standards, providing students with engaging and interactive learning experiences.",
      date: "22 / 10 / 2023",
    },
    {
      id: 2,
      title: "Jacob Jones",
      desc: "The curriculum is well-structured and aligned with academic standards, providing students with engaging and interactive learning experiences.",
      date: "10 / 01 / 2024",
    },

    {
      id: 3,
      title: "Kristin Watson",
      desc: "The curriculum is well-structured and aligned with academic standards, providing students with engaging and interactive learning experiences.",
      date: "22 / 02 / 2024",
    },
    // {
    //   id: 4,
    //   title: "Ken Torrin",
    //   desc: "The curriculum is well-structured and aligned with academic standards, providing students with engaging and interactive learning experiences.",
    //   date: "10 / 03 / 2024",
    // },
    // {
    //   id: 5,
    //   title: "Mark Williamson",
    //   desc: "The curriculum is well-structured and aligned with academic standards, providing students with engaging and interactive learning experiences.",
    //   date: "20 / 03 / 2024",
    // },
    // {
    //   id: 6,
    //   title: "Esther Howard",
    //   desc: "The curriculum is well-structured and aligned with academic standards, providing students with engaging and interactive learning experiences.",
    //   date: "26 / 04 / 2024",
    // },
  ];

  return (
    <div className="lg:mt-20 mt-14">
      <div className=" gap-10 top-0 w-full h-[400px] lg:h-[390px] bg-main-color-3 text-main-color-1 flex justify-start pt-28 items-center flex-col">
        <h1 className="text-4xl sm:text-6xl font-medium">Our Pricing</h1>
        <div className="w-[90%] sm:w-[500px] text-center">
          <p className="text-sm sm:text-md font-medium">
            Our experienced educators utilize cutting-edge technology to deliver
            engaging lessons, personalized support, and interactive experiences
            that inspire curiosity and foster academic success.
          </p>
        </div>
      </div>

      <div className="px-5 xl:px-12 mt-32 flex flex-col gap-7 lg:gap-0 lg:flex-row justify-center items-center">
        <div className="w-[100%] md:w-[85%] lg:w-[400px] flex flex-col items-center justify-center pb-10 bg-main-color-3 gap-10">
          <div className="bg-main-color-1 w-full py-7">
            <h1 className="text-white text-2xl font-medium text-center">
              Additional Fees:
            </h1>
          </div>
          <div className="flex items-end">
            <h1 className="text-main-color-1 text-4xl font-medium">$30-50</h1>
            <span className="text-gray-500 text-lg font-medium"> /lesson</span>
          </div>
          <div className="w-[86%]">
            <ul className="flex flex-col gap-4 px-4 text-base font-medium">
              <li className="list-disc text-main-color-1 border-b pb-4">
                Registration fee student per year
              </li>
              <li className="list-disc text-main-color-1 border-b pb-4">
                Instrument rental fee per month
              </li>
              <li className="list-disc text-main-color-1">24/7 Support</li>
            </ul>
          </div>
          <div>
            <button className="bg-main-color-1 mt-2 text-white py-[17px] px-8 font-medium text-sm hover:bg-main-color-2 duration-300">
              Choose plan
            </button>
          </div>
        </div>
        <div className="w-[100%] md:w-[85%] lg:w-[400px] flex flex-col items-center justify-center pb-10 bg-main-color-3 gap-10 border border-main-color-1 px-[1px]">
          <div className="bg-main-color-1 w-full py-7">
            <h1 className="text-white text-2xl font-medium text-center">
              Individual Lessons:
            </h1>
          </div>
          <div className="flex items-end">
            <h1 className="text-main-color-1 text-4xl font-medium">$40-70</h1>
            <span className="text-gray-500 text-lg font-medium"> /lesson</span>
          </div>
          <div className="w-[86%] md:w-[80%]">
            <ul className="flex flex-col gap-4 px-4 text-base font-medium">
              <li className="list-disc text-main-color-1 border-b pb-4">
                30-minute lesson
              </li>
              <li className="list-disc text-main-color-1 border-b pb-4">
                45-minute lesson
              </li>
              <li className="list-disc text-main-color-1 border-b pb-4">
                60-minute lesson
              </li>
              <li className="list-disc text-main-color-1 border-b pb-4">
                Lessons are tailored to the student&apos;s individual needs
              </li>
              <li className="list-disc text-main-color-1">24/7 Support</li>
            </ul>
          </div>
          <div>
            <button className="bg-main-color-1 mt-2 text-white py-[17px] px-8 font-medium text-sm hover:bg-main-color-2 duration-300">
              Choose plan
            </button>
          </div>
        </div>
        <div className="w-[100%] md:w-[85%] lg:w-[400px] flex flex-col items-center justify-center pb-10 bg-main-color-3 gap-10">
          <div className="bg-main-color-1 w-full py-7">
            <h1 className="text-white text-2xl font-medium text-center">
              Group Lessons:
            </h1>
          </div>
          <div className="flex items-end">
            <h1 className="text-main-color-1 text-4xl font-medium">$25-45</h1>
            <span className="text-gray-500 text-lg font-medium"> /lesson</span>
          </div>
          <div className="w-[86%]">
            <ul className="flex flex-col gap-4 px-4 text-base font-medium">
              <li className="list-disc text-main-color-1 border-b pb-4">
                Individual approach to each student
              </li>
              <li className="list-disc text-main-color-1 border-b pb-4">
                Group lessons on various instruments
              </li>
              <li className="list-disc text-main-color-1">Free trial lesson</li>
            </ul>
          </div>
          <div>
            <button className="bg-main-color-1 mt-2 text-white py-[17px] px-8 font-medium text-sm hover:bg-main-color-2 duration-300">
              Choose plan
            </button>
          </div>
        </div>
      </div>

      <div className="mt-32 bg-main-color-3 py-24 gap-14">
        <div className="flex flex-col items-center justify-center gap-3">
          <div>
            <span className="text-main-color-2 bg-[#dff6ec] px-2 py-1">
              What You Get
            </span>
          </div>
          <div>
            <h1 className="text-main-color-1 text-3xl w-[100%] text-center sm:text-5xl font-[500] mt-2">
              See Our Features
            </h1>
          </div>
        </div>

        <div className="px-5 flex-col gap-5  md:items-center lg:flex-row lg:gap-5 lg:px-5 xl:gap-5 xl:flex-row xl:px-12 flex mt-10 lg:mt-24 justify-center">
          <div className="flex w-[100%] items-center lg:items-start lg:w-[30%] flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h1 className="flex text-2xl justify-center lg:justify-start font-[400] text-main-color-1">
                01. Flexible Learning
              </h1>
              <p className="text-main-color-1 text-center lg:text-start md:w-[100%] lg:w-[330px]">
                Study at your own pace with online courses available 24/7.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="flex text-2xl justify-center lg:justify-start font-[400] text-main-color-1">
                02. Hands-On Projects
              </h1>
              <p className="text-main-color-1 text-center lg:text-start md:w-[100%] lg:w-[330px]">
                Apply your knowledge through practical, project-based learning.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="flex text-2xl justify-center lg:justify-start font-[400] text-main-color-1">
                03. Certification Programs
              </h1>
              <p className="text-main-color-1 text-center lg:text-start md:w-[100%] lg:w-[330px]">
                Earn recognized certifications to boost your career prospects.
              </p>
            </div>
          </div>
          <div className="w-[100%] lg:w-[30%] xl:w-[40%]">
            <div className="relative flex justify-center lg:justify-end xl:justify-center">
              <img
                src={svg}
                className="w-full sm:w-96  h-60 lg:h-72 lg:w-60 xl:w-[400px] object-cover lg:left-14 xl:left-7 absolute lg:top-0 xl:top-5 z-10"
                alt=""
              />
              <img
                src={about2}
                className="w-60 h-96 lg:w-52 xl:w-60 lg:h-80 xl:h-96 z-20"
                alt=""
              />
              <div className="bg-main-color-1 w-full sm:w-96 h-40 lg:h-40 lg:w-60 xl:w-96 lg:left-14 xl:left-7 absolute top-56 z-10"></div>
            </div>
          </div>
          <div className="flex w-[100%] items-center lg:items-start lg:w-[30%] flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h1 className="flex text-2xl justify-center lg:justify-start font-[400] text-main-color-1">
                04. Expert Instructors
              </h1>
              <p className="text-main-color-1 text-center lg:text-start md:w-[100%] lg:w-[330px]">
                Learn from industry professionals with real-world experience.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="flex text-2xl justify-center lg:justify-start font-[400] text-main-color-1">
                05. Supportive Community
              </h1>
              <p className="text-main-color-1 text-center lg:text-start md:w-[100%] lg:w-[330px]">
                Connect with instructors and peers for guidance and
                collaboration.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="flex text-2xl justify-center lg:justify-start font-[400] text-main-color-1">
                06. Global Accessibility
              </h1>
              <p className="text-main-color-1 text-center lg:text-start md:w-[100%] lg:w-[330px]">
                Access high-quality education from anywhere in the world.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32 gap-14">
        <div className="flex flex-col items-center justify-center gap-3">
          <div>
            <span className="text-main-color-2 bg-[#f4fafa] px-2 py-1">
              Testimonials
            </span>
          </div>
          <div>
            <h1 className="text-main-color-1 text-3xl w-[100%] text-center sm:text-4xl font-[500] mt-2">
              What Our Clients Say
            </h1>
          </div>
          <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[55%]">
            <p className="text-main-color-1 text-center">
              Welcome to our online school, where learning knows no boundaries.
              With our innovative virtual platform, students can access
              high-quality education from anywhere in the world. Pause video
            </p>
          </div>
        </div>

        <div className="flex gap-5 px-10 items-center justify-center flex-wrap  mt-16">
          {testimonailData.map((data) => (
            <div
              key={data.id}
              className="bg-main-color-3 w-full sm:w-[45%] lg:w-80 px-8 py-7 flex flex-col gap-5"
            >
              <div className="flex gap-1">
                <img src={star} className="w-4" alt="" />
                <img src={star} className="w-4" alt="" />
                <img src={star} className="w-4" alt="" />
                <img src={star} className="w-4" alt="" />
                <img src={star} className="w-4" alt="" />
              </div>
              <div className="text-main-color-1">{data.title}</div>
              <div>
                <p className="text-sm w-[93%] font-semibolds text-main-color-1">
                  {data.desc}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="cursor-pointer text-main-color-1">
                  <h1 className="text-sm font-semibold">{data.name}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
