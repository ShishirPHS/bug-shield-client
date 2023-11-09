import { useState } from "react";
import { useEffect } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import { Link } from "react-router-dom";

const PopularServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://bug-shield-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container mx-auto mb-32">
      <div className="mb-24">
        <h3 className="text-[#26272C] text-[39px] font-Cabin font-semibold text-center">
          Popular Services
        </h3>
        <p className="text-[#676C75] font-Inter text-center w-auto lg:w-[600px] mx-auto mt-8">
          Explore our most sought-after pest control services, trusted by
          homeowners and businesses across the region.
        </p>
      </div>
      <div className="px-5 grid grid-cols-1 xl:grid-cols-2 gap-6">
        {services?.length > 4
          ? services
              ?.slice(0, 4)
              .map((service) => (
                <ServiceCard key={service._id} service={service}></ServiceCard>
              ))
          : services?.map((service) => (
              <ServiceCard key={service._id} service={service}></ServiceCard>
            ))}
      </div>
      {services?.length > 4 && (
        <div className="flex justify-center mt-10">
          <Link className="mt-5" to="/services">
            <button className="text-white uppercase font-semibold btn rounded-lg py-3 px-10 bg-[#E39C0D] hover:bg-[#698F3F]">
              Show all
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default PopularServices;
