import { useEffect, useState } from "react";
import Logo from "../../assets/images/23.svg";
import Bars from "../../assets/images/bars.svg";
import { NavLink, useLocation } from "react-router-dom";
function Navbar() {
  // sidebar state
  const [aside, setAside] = useState("w-[0px]");
  //   about us dropdown state
  const [aboutDropdown, setAboutDropdown] = useState(false);

  // About Dropdown Menu hide functionality
  const location = useLocation();
  useEffect(() => {
    setAboutDropdown(false);
  }, [location]);

  function aboutDropdownMouseEnter() {
    setAboutDropdown(true);
  }
  function aboutDropdownMouseLeave() {
    setAboutDropdown(false);
  }
  return (
    <>
      {/* Navbar Section start */}

      <nav
        className={`w-full fixed top-0 left-0 z-50 h-16 lg:h-auto py-3 bg-main-color-3 flex items-center justify-between px-5 lg:px-14 `}
      >
        {/* logo div start */}
        <div>
          <img src={Logo} alt="" className="w-36" />
        </div>
        {/* logo div end */}

        {/* menus start */}
        <div className="hidden lg:block w-[500px]">
          <ul className="flex items-center  gap-12 text-main-color-1 font-medium font-sans ">
            <li className="cursor-pointer hover:text-main-color-2 duration-200">
              <NavLink to="/">Home</NavLink>
            </li>
            <li
              className="flex items-center justify-center text-main-color-1 cursor-pointer  duration-200 relative"
              onMouseEnter={aboutDropdownMouseEnter}
              onMouseLeave={aboutDropdownMouseLeave}
            >
              About Us
              <svg
                className="w-[16px] h-[16px] font-bold ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
              <div className="relative mt-16">
                {aboutDropdown && (
                  <ul className="px-5 absolute -right-[6rem]  w-[240px] py-5 bg-white shadow-sm border-[1px] border-gray-200 flex flex-col gap-3">
                    <li className="hover:text-main-color-2 duration-500 hover:translate-x-2 group flex items-center gap-2">
                      <span className="bg-main-color-2 w-0 group-hover:w-5 h-[2px]  duration-500 "></span>{" "}
                      <span>
                        <NavLink to="/about-us">About Us</NavLink>
                      </span>
                    </li>
                    <li className="hover:text-main-color-2 duration-500 hover:translate-x-2 group flex items-center gap-2">
                      <span className="bg-main-color-2 w-0 group-hover:w-5 h-[2px]  duration-500 "></span>{" "}
                      <span>
                        <NavLink to="/Schedule">Schedule</NavLink>
                      </span>
                    </li>
                    <li className="hover:text-main-color-2 duration-500 hover:translate-x-2 group flex items-center gap-2">
                      <span className="bg-main-color-2 w-0 group-hover:w-5 h-[2px]  duration-500 "></span>{" "}
                      <span>
                        <NavLink to="/ourTeacher">Our Teachers</NavLink>
                      </span>
                    </li>
                    <li className="hover:text-main-color-2 duration-500 hover:translate-x-2 group flex items-center gap-2">
                      <span className="bg-main-color-2 w-0 group-hover:w-5 h-[2px]  duration-500 "></span>{" "}
                      <span>
                        <NavLink to="/pricing">Pricing</NavLink>
                      </span>
                    </li>
                    <li className="hover:text-main-color-2 duration-500 hover:translate-x-2 group flex items-center gap-2">
                      <span className="bg-main-color-2 w-0 group-hover:w-5 h-[2px]  duration-500 "></span>{" "}
                      <span>
                        <NavLink to="/career">Career</NavLink>
                      </span>
                    </li>
                    <li className="hover:text-main-color-2 duration-500 hover:translate-x-2 group flex items-center gap-2">
                      <span className="bg-main-color-2 w-0 group-hover:w-5 h-[2px]  duration-500 "></span>{" "}
                      <span>
                        <NavLink to="/Testimonial">Testimonials</NavLink>{" "}
                      </span>
                    </li>
                    <li className="hover:text-main-color-2 duration-500 hover:translate-x-2 group flex items-center gap-2">
                      <span className="bg-main-color-2 w-0 group-hover:w-5 h-[2px]  duration-500 "></span>{" "}
                      <span>
                        <NavLink to="/FAQ">FAQ</NavLink>
                      </span>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li className="cursor-pointer hover:text-main-color-2 duration-200">
              <NavLink to="/Classes">Classes</NavLink>
            </li>
            <li className="cursor-pointer hover:text-main-color-2 duration-200">
              <NavLink to="Programs">Programs</NavLink>
            </li>
          </ul>
        </div>
        {/* menus end */}

        {/* btns div start */}
        <div className="flex items-center gap-6">
          <div className="relative">
            <svg
              className="w-commerce-commercecartopenlinkicon icon text-main-color-1 me-5 hover:text-main-color-2 duration-200 cursor-pointer"
              width="17px"
              height="17px"
              viewBox="0 0 17 17"
            >
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                  d="M2.60592789,2 L0,2 L0,0 L4.39407211,0 L4.84288393,4 L16,4 L16,9.93844589 L3.76940945,12.3694378 L2.60592789,2 Z M15.5,17 C14.6715729,17 14,16.3284271 14,15.5 C14,14.6715729 14.6715729,14 15.5,14 C16.3284271,14 17,14.6715729 17,15.5 C17,16.3284271 16.3284271,17 15.5,17 Z M5.5,17 C4.67157288,17 4,16.3284271 4,15.5 C4,14.6715729 4.67157288,14 5.5,14 C6.32842712,14 7,14.6715729 7,15.5 C7,16.3284271 6.32842712,17 5.5,17 Z"
                  fill="currentColor"
                  fillRule="nonzero"
                ></path>
              </g>
            </svg>
            <span className="px-[6px]  rounded-xl bg-main-color-2 text-white absolute -top-3 -right-1 flex items-center justify-center font-sans font-medium text-sm ">
              0
            </span>
          </div>

          <button className="px-8 py-4 bg-main-color-1 text-white font-sans hover:bg-main-color-2 duration-200 cursor-pointer hidden lg:block">
            Start Learning
          </button>

          <img
            src={Bars}
            loading="lazy"
            alt="icon"
            height="16"
            className="image-burger  w-6 block lg:hidden cursor-pointer"
            onClick={() => setAside("w-[300px] duration-300")}
          />
        </div>

        {/* btns div end */}
      </nav>

      {/* Sidebar */}

      <aside
        className={`${aside} h-screen bg-white shadow-xl absolute top-0 left-0 overflow-hidden z-50 `}
      >
        <div className="flex w-full p-4 items-center justify-between">
          <img src={Logo} alt="" className="w-32" />
          <svg
            className="w-[26px] h-[26px] text-main-color-1 cursor-pointer"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            onClick={() => setAside("w-[0px] duration-300")}
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18 17.94 6M18 18 6.06 6"
            />
          </svg>
        </div>

        <div className="flex mt-10 mx-6">
          <ul className="flex items-start  gap-4 text-main-color-1 font-medium font-sans flex-col w-full ">
            <li className="cursor-pointer hover:text-main-color-2 duration-200">
              <NavLink to="/">Home</NavLink>
            </li>
            <li
              className="text-main-color-1 cursor-pointer  duration-200 relative w-full"
              onMouseEnter={aboutDropdownMouseEnter}
              onMouseLeave={aboutDropdownMouseLeave}
            >
              <div className="flex items-center justify-between w-full group">
                <span>About Us</span>
                <svg
                  className="w-[16px] h-[16px] font-bold ms-1 group-hover:rotate-180 duration-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </div>

              <div
                className={`w-full  overflow-hidden  duration-1000  ${
                  aboutDropdown ? "max-h-[400px] " : "max-h-[0px] "
                }`}
              >
                {aboutDropdown && (
                  <ul className="px-5 mt-2 w-full py-5 bg-white   flex flex-col gap-3">
                    <li className="hover:text-main-color-2 duration-500 hover:translate-x-2 group flex items-center gap-2">
                      <span className="bg-main-color-2 w-0 group-hover:w-5 h-[2px]  duration-500 "></span>{" "}
                      <span>
                        <NavLink to="/about-us">About Us</NavLink>
                      </span>
                    </li>
                    <li className="hover:text-main-color-2 duration-500 hover:translate-x-2 group flex items-center gap-2">
                      <span className="bg-main-color-2 w-0 group-hover:w-5 h-[2px]  duration-500 "></span>{" "}
                      <span>
                        <NavLink to="/Schedule">Schedule</NavLink>
                      </span>
                    </li>
                    <li className="hover:text-main-color-2 duration-500 hover:translate-x-2 group flex items-center gap-2">
                      <span className="bg-main-color-2 w-0 group-hover:w-5 h-[2px]  duration-500 "></span>{" "}
                      <span>
                        <NavLink to="/ourTeacher">Our Teachers</NavLink>
                      </span>
                    </li>
                    <li className="hover:text-main-color-2 duration-500 hover:translate-x-2 group flex items-center gap-2">
                      <span className="bg-main-color-2 w-0 group-hover:w-5 h-[2px]  duration-500 "></span>{" "}
                      <span>
                        <NavLink to="/pricing">Pricing</NavLink>
                      </span>
                    </li>
                    <li className="hover:text-main-color-2 duration-500 hover:translate-x-2 group flex items-center gap-2">
                      <span className="bg-main-color-2 w-0 group-hover:w-5 h-[2px]  duration-500 "></span>{" "}
                      <span>
                        <NavLink to="/career">Career</NavLink>
                      </span>
                    </li>
                    <li className="hover:text-main-color-2 duration-500 hover:translate-x-2 group flex items-center gap-2">
                      <span className="bg-main-color-2 w-0 group-hover:w-5 h-[2px]  duration-500 "></span>{" "}
                      <span>
                        <NavLink to="/Testimonial">Testimonials</NavLink>{" "}
                      </span>
                    </li>
                    <li className="hover:text-main-color-2 duration-500 hover:translate-x-2 group flex items-center gap-2">
                      <span className="bg-main-color-2 w-0 group-hover:w-5 h-[2px]  duration-500 "></span>{" "}
                      <span>
                        <NavLink to="/FAQ">FAQ</NavLink>
                      </span>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li className="cursor-pointer hover:text-main-color-2 duration-200">
              <NavLink to="/Classes">Classes</NavLink>
            </li>
            <li className="cursor-pointer hover:text-main-color-2 duration-200">
              <NavLink to="Programs">Programs</NavLink>
            </li>
          </ul>
        </div>

        <div className="flex items-center  mx-6 mt-10">
          <button className="px-8 py-4 bg-main-color-1 text-white font-sans hover:bg-main-color-2 duration-200 cursor-pointer ">
            Start Learning
          </button>
        </div>
      </aside>

      {/* Navbar Section end */}
    </>
  );
}

export default Navbar;
