import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSlack,
  FaTelegram,
} from "react-icons/fa";
import Logo from "../../assets/images/24.svg";
function Footer() {
  return (
    <>
      {/* Footer start */}
      <footer className="px-5 mt-5 lg:px-14 w-full py-20 bg-main-color-1 text-white ">
        <div className="flex flex-wrap lg:flex-nowrap gap-8 lg:gap-3">
          <div className=" w-full lg:w-[50%] flex items-center lg:items-start justify-center  flex-col">
            <img src={Logo} className="w-44" alt="" />
            <p className="my-8">
              Our innovative classes and programs are designed to meet <br />{" "}
              the needs of diverse learners, offering flexible and accessible{" "}
              <br /> pathways to skill development.
            </p>
            <p className="text-md cursor-pointer hover:text-white text-main-color-2 font-sans font-medium">
              More About Us
            </p>
          </div>
          <div className=" w-full lg:w-[50%]">
            <ul className="flex items-center justify-center gap-10 w-full flex-wrap">
              <li className="cursor-pointer hover:text-main-color-2 duration-200 text-lg font-sans">
                About Us
              </li>
              <li className="cursor-pointer hover:text-main-color-2 duration-200 text-lg font-sans">
                Classes
              </li>
              <li className="cursor-pointer hover:text-main-color-2 duration-200 text-lg font-sans">
                Shop
              </li>
              <li className="cursor-pointer hover:text-main-color-2 duration-200 text-lg font-sans">
                Blog
              </li>
              <li className="cursor-pointer hover:text-main-color-2 duration-200 text-lg font-sans">
                Contact
              </li>
            </ul>
            <div className="flex w-full items-center sm:justify-center mt-8 gap-10 flex-wrap md:flex-nowrap">
              <div className="h-40">
                <h1 className="text-2xl  font-sans font-medium">Contact Us</h1>
                <ul>
                  <li className="mt-5 text-main-color-2">+1 212 425 8617</li>
                  <li className="mt-1 text-main-color-2">
                    info@yourdomain.com
                  </li>
                </ul>
              </div>
              <div className="h-40">
                <h1 className="text-2xl  font-sans font-medium mb-5">
                  Location
                </h1>
                <p className="text-main-color-2">
                  5 Washington Square, New York, USA
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between flex-wrap flex-col lg:flex-row gap-5 mt-10">
          <div className="flex  items-center justify-start gap-5">
            <FaLinkedin className="text-2xl hover:text-main-color-2 cursor-pointer duration-200" />
            <FaFacebook className="text-2xl hover:text-main-color-2 cursor-pointer duration-200" />
            <FaInstagram className="text-2xl hover:text-main-color-2 cursor-pointer duration-200" />
            <FaSlack className="text-2xl hover:text-main-color-2 cursor-pointer duration-200" />
            <FaTelegram className="text-2xl hover:text-main-color-2 cursor-pointer duration-200" />
          </div>

          <p className="text-xl text-main-color-3">
            © AdvancEd. All Rights Reserved. Licensing <br /> Template by
            wCopilot Powered by Webflow
          </p>
        </div>
      </footer>
      {/* Footer end */}
    </>
  );
}

export default Footer;
