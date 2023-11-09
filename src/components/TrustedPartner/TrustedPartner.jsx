const TrustedPartner = () => {
  return (
    <div className="container mx-auto py-32">
      {/* heading and title */}
      <div className="mb-10">
        <h2 className="text-[#26272C] font-semibold text-[39px] text-center w-[640px] mx-auto mb-5">
          Your Trusted Partner in Pest Control Excellence
        </h2>
        <p className="text-[#676C75] font-Inter w-[600px] mx-auto text-center">
          We are dedicated to providing unparalleled pest control services for
          homes and businesses. With a commitment to excellence, we utilize
          advanced techniques and industry-leading practices.
        </p>
      </div>
      {/* cards container */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* single card 1 */}
        <div className="text-center px-6 py-10 bg-[#F0F1ED] rounded-lg">
          <h4 className="text-center text-[#26272C] font-Cabin text-2xl">
            Inspection and Assessment
          </h4>
          <p className="font-Inter text-[#26272C] my-5">
            our expert technicians conduct a thorough examination of your
            property to identify any existing pest issues and assess the extent
            of infestation.
          </p>
          <button className="text-white uppercase font-semibold btn mt-5 rounded-lg py-3 px-8 bg-[#E39C0D] hover:bg-[#698F3F]">
            Learn more
          </button>
        </div>
        {/* single card 2 */}
        <div className="text-center px-6 py-10 bg-[#F0F1ED] rounded-lg">
          <h4 className="text-center text-[#26272C] font-Cabin text-2xl">
            Extermination and Treatment
          </h4>
          <p className="font-Inter text-[#26272C] my-5">
            Our comprehensive extermination and treatment services are designed
            to eliminate pests effectively and efficiently. With a focus on
            tailored solutions.
          </p>
          <button className="text-white uppercase font-semibold btn mt-5 rounded-lg py-3 px-8 bg-[#E39C0D] hover:bg-[#698F3F]">
            Learn more
          </button>
        </div>
        {/* single card 3 */}
        <div className="text-center px-6 py-10 bg-[#F0F1ED] rounded-lg">
          <h4 className="text-center text-[#26272C] font-Cabin text-2xl">
            Prevention and Maintenance
          </h4>
          <p className="font-Inter text-[#26272C] my-5">
            Prevention and maintenance are crucial aspects of our pest control
            services. We believe in taking proactive measures to prevent future
            infestations by identifying.
          </p>
          <button className="text-white uppercase font-semibold btn mt-5 rounded-lg py-3 px-8 bg-[#E39C0D] hover:bg-[#698F3F]">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrustedPartner;
