import { useEffect, useState } from "react";
import SingleServiceCard from "../../components/SingleServiceCard/SingleServiceCard";

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    fetch("https://bug-shield-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container mx-auto py-36">
      <h1 className="text-center text-4xl font-bold font-Cabin mb-12">
        All Services
      </h1>
      <div className="px-5 grid grid-cols-1 xl:grid-cols-2 gap-6">
        {isShow
          ? services?.map((service) => (
              <SingleServiceCard
                key={service._id}
                service={service}
              ></SingleServiceCard>
            ))
          : services
              ?.slice(0, 6)
              .map((service) => (
                <SingleServiceCard
                  key={service._id}
                  service={service}
                ></SingleServiceCard>
              ))}
      </div>
      {services?.length > 6 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setIsShow(!isShow)}
            className="text-white uppercase font-semibold btn mt-5 rounded-lg py-3 px-10 bg-[#E39C0D] hover:bg-[#698F3F]"
          >
            {isShow ? "See Less" : "See all"}
          </button>
        </div>
      )}
    </div>
  );
};

export default AllServices;
