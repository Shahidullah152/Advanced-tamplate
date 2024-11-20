import star from "../../assets/images/16.webp";

function Testimonials() {
  const testimonailData = [
    {
      id: 1,
      title: "“Seriously amazing!”",
      desc: "Education provides a comprehensive and flexible learning environment that caters to the diverse needs of students.",
      name: "Lauren N.",
    },
    {
      id: 2,
      title: "“Seriously amazing!”",
      desc: "Education provides a comprehensive and flexible learning environment that caters to the diverse needs of students.",
      name: "Samantha P.",
    },
    {
      id: 3,
      title: "“Seriously amazing!”",
      desc: "Education provides a comprehensive and flexible learning environment that caters to the diverse needs of students.",
      name: "Jane W.",
    },
  ];

  return (
    <div className="mt-32 gap-14">
      <div className="flex flex-col items-center justify-center gap-3">
        <div>
          <span className="text-main-color-2 bg-[#f4fafa] px-2 py-1">
            Testimonialss
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

      <div className="flex gap-5 px-10 items-center justify-center flex-wrap md:flex-nowrap mt-16">
        {testimonailData.map((data) => (
          <div
            key={data.id}
            className="bg-main-color-3 w-full sm:w-[45%] lg:max-w-sm px-8 py-7 flex flex-col gap-5"
          >
            <div className="flex gap-1">
              <img src={star} className="w-4" alt="" />
              <img src={star} className="w-4" alt="" />
              <img src={star} className="w-4" alt="" />
              <img src={star} className="w-4" alt="" />
              <img src={star} className="w-4" alt="" />
            </div>
            <div className="text-main1">{data.title}</div>
            <div>
              <p className="text-sm w-[93%] font-semibolds text-main1">
                {data.desc}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="cursor-pointer text-main1">
                <h1 className="text-sm font-semibold">{data.name}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
