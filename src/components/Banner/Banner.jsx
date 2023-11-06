const Banner = () => {
  return (
    <div className="bg-[url(https://i.ibb.co/3vt5gVG/banner-img.jpg)] bg-no-repeat bg-cover mb-28">
      <div className="bg-gradient-to-r from-[#c7c7c7cc] to-[#f0f1ed1a] py-[112px]">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h6 className="rounded-3xl font-bold text-sm inline bg-[#E39C0D] text-white px-5 py-2">
              WELCOME TO BUGSHIELD
            </h6>
            <h1 className="font-Cabin font-bold text-6xl w-[620px] text-white my-12 leading-[75px]">
              <span className="block">Your Ultimate</span> Pest Control Solution
              Starts Here
            </h1>
            <p className="text-white w-[672px] font-Inter">
              Aenean volutpat ornare adipiscing hac praesent neque nisl
              consectetur diam ac fusce parturient cursus etiam habitant
              sagittis gravida molestie elementum donec blandit duis conubia mus
              nunc lectus eleifend
            </p>
            <button className="px-6 py-3 mt-10 bg-[#E39C0D] text-white rounded-xl">
              discover more
            </button>
          </div>
          <div>
            <img src="https://i.ibb.co/2yQhyQ7/pngwing-com.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
