import { FaFacebookF, FaInstagram } from "react-icons/fa";
import team1 from "../../assets/images/11.jpg";
import team2 from "../../assets/images/12.jpg";
import team3 from "../../assets/images/13.jpg";
import team4 from "../../assets/images/14.jpg";
function Team() {
  const TeamData = [
    {
      id: 1,
      image: team1,
      name: "Michael Williams",
    },
    {
      id: 2,
      image: team2,
      name: "Emily Smith",
    },
    {
      id: 3,
      image: team3,
      name: "Daniel Brown",
    },
    {
      id: 4,
      image: team4,
      name: "Jasmine Rodriguez",
    },
  ];

  return (
    <div className="mt-32 gap-14">
      <div className="flex flex-col items-center justify-center gap-3">
        <div>
          <span className="text-main-color-2 bg-[#f4fafa] px-2 py-1">
            Our Team
          </span>
        </div>
        <div>
          <h1 className="text-main-color-1 text-3xl w-[100%] text-center sm:text-4xl font-[500] mt-2">
            Meet Our Teachers
          </h1>
        </div>
        <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[55%]">
          <p className="text-main-color-1 text-center">
            Pellentesque mattis mauris ac tortor volutpat, eu fermentum sapien
            euismod. In id tempus metus. Donec eu volutpat nibh, in maximus
            ligula.
          </p>
        </div>
      </div>

      <div className="px-5 lg:px-12 flex flex-wrap justify-center lg:flex-nowrap gap-5 mt-14">
        {TeamData.map((data) => (
          <div
            key={data.id}
            className="sm:w-[230px] md:w-[300px] flex flex-col items-center justify-center gap-3"
          >
            <div>
              <img
                src={data.image}
                className="w-[100%] duration-300 cursor-pointer border-[8px] border-[#f4fafa] object-cover hover:border-main-color-1"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-3 ">
              <h1 className="font-semibold text-main-color-1">{data.name}</h1>
              <div className="flex gap-3 justify-center">
                <FaFacebookF className="text-white bg-main-color-1 py-[1px] px-[10px] text-3xl hover:text-black hover:bg-main-color-2 duration-300 cursor-pointer rounded-full" />
                <FaInstagram className="text-white bg-main-color-1 py-[1px] px-[10px] text-3xl hover:text-black hover:bg-main-color-2 duration-300 cursor-pointer rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-14">
        <button className="bg-main-color-1 text-white py-[13px] px-8 font-medium text-lg hover:bg-main-color-2 duration-300">
          View all
        </button>
      </div>
    </div>
  );
}

export default Team;
