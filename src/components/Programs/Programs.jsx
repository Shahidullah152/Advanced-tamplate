import cardIMG1 from "../../assets/images/8.jpg";
import cardIMG2 from "../../assets/images/9.jpg";
import cardIMG3 from "../../assets/images/10.jpg";
function Programs() {
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

export default Programs;
