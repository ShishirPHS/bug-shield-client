import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className="bg-[url(https://kit.creativemox.com/bugshield/wp-content/uploads/sites/9/2023/10/garden-pest-control-service-e1698290086768.jpg)] bg-no-repeat bg-cover mb-28">
      <div className="bg-gradient-to-r from-[#c7c7c7cc] to-[#f0f1ed1a] py-[112px]">
        <div className="container mx-auto flex justify-between items-center">
          <div className="lg:ml-24 flex flex-col items-center lg:items-start">
            <h6
              className="rounded-3xl font-bold text-sm inline bg-[#E39C0D] text-white px-5 py-2"
              data-aos="fade-up"
            >
              WELCOME TO BUGSHIELD
            </h6>
            <h1
              className="font-Cabin text-center lg:text-left font-bold text-6xl w-auto lg:w-[620px] text-white my-12 leading-[75px]"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <span className="block">Your Ultimate</span> Pest Control Solution
              Starts Here
            </h1>
            <p
              className="text-white text-center lg:text-left w-auto lg:w-[672px] font-Inter"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              Aenean volutpat ornare adipiscing hac praesent neque nisl
              consectetur diam ac fusce parturient cursus etiam habitant
              sagittis gravida molestie elementum donec blandit duis conubia mus
              nunc lectus eleifend
            </p>
            <button
              className="px-6 py-3 mt-10 bg-[#E39C0D] text-white rounded-xl"
              data-aos="fade-up"
              data-aos-delay="1500"
            >
              discover more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
