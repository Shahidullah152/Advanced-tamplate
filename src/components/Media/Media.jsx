import { useRef, useState } from "react";
import Video from "../../assets/images/1.mp4";
function Media() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <>
      {/* our Media sectino start */}
      <section className="px-5 lg:px-14  w-full mt-20 py-20">
        {/* text div start */}
        <div className="w-full text-center">
          <span className="bg-[#dff6ec] px-2 py-1 font-sans text-main-color-2">
            Our Media
          </span>
          <h1 className="text-[50px] font-medium my-2  font-sans text-main-color-1">
            Teaching our students
          </h1>
          <p className="text-main-color-1">
            Welcome to our online school, where learning knows no boundaries.
            With our innovative <br /> virtual platform, students can access
            high-quality education from anywhere in the world.
          </p>
        </div>
        {/* text div end */}

        <div className="w-full  relative h-[480px] mt-16">
          <video
            ref={videoRef}
            src={Video}
            muted
            loop
            autoPlay
            className="w-[100%] h-full object-cover border-8 border-main-color-3"
          ></video>
          <button
            onClick={togglePlayPause}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:bg-main-color-1  p-4  rounded-full text-white bg-main-color-2 hover:scale-105 transition-all duration-300`}
          >
            {isPlaying ? (
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M8 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H8Zm7 0a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1Z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
        {/* video div end */}
      </section>
      {/* our Media sectino end */}
    </>
  );
}

export default Media;
