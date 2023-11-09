const WhoWeAre = () => {
  return (
    <div className="bg-[url(https://kit.creativemox.com/bugshield/wp-content/uploads/sites/9/2023/10/brick-wall.png)]">
      <div className="bg-[#f0f1edcc]">
        <div className="container mx-auto pt-16">
          <div className="flex items-center justify-between">
            {/* text div */}
            <div>
              <h6 className="font-Cabin font-bold text-[#698F3F] mb-6">
                Who we are
              </h6>
              <h2 className="w-[540px] text-[#26272C] font-semibold font-Cabin text-[40px] mb-6">
                The Trusted Authority in Pest Control
              </h2>
              <p className="w-[540px] text-[#676C75] font-Inter mb-7">
                We are the trusted authority in pest control, dedicated to
                providing effective and reliable solutions to protect your home
                or business. With a commitment to excellence, our team of
                experts utilizes advanced techniques and industry-leading
                practices to ensure the complete eradication of pests.
              </p>
              {/* text with icon */}
              <div className="flex mb-5">
                <div className="mr-10">
                  <div className="flex items-center">
                    <img
                      className="h-[20px] mr-1"
                      src="https://i.ibb.co/ctRXCyk/right.png"
                      alt=""
                    />
                    <p className="mb-1 text-[#676C75] font-Inter">
                      Exceed your expectations
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img
                      className="h-[20px] mr-1"
                      src="https://i.ibb.co/ctRXCyk/right.png"
                      alt=""
                    />
                    <p className="mb-1 text-[#676C75] font-Inter">
                      Premium support 24/7
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <img
                      className="h-[20px] mr-1"
                      src="https://i.ibb.co/ctRXCyk/right.png"
                      alt=""
                    />
                    <p className="mb-1 text-[#676C75] font-Inter">
                      Deliver 100% satisfaction
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img
                      className="h-[20px] mr-1"
                      src="https://i.ibb.co/ctRXCyk/right.png"
                      alt=""
                    />
                    <p className="mb-1 text-[#676C75] font-Inter">
                      Professional Expert
                    </p>
                  </div>
                </div>
              </div>
              <button className="text-white uppercase font-semibold btn mt-5 rounded-lg py-3 px-8 bg-[#E39C0D] hover:bg-[#698F3F]">
                Discover more
              </button>
            </div>
            {/* img div */}
            <div>
              <img
                className="w-[640px]"
                src="https://kit.creativemox.com/bugshield/wp-content/uploads/sites/9/2023/10/2-3a.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
