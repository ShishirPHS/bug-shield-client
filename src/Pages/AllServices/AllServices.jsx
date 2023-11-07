import { useEffect, useState } from "react";
import SingleServiceCard from "../../components/SingleServiceCard/SingleServiceCard";

const AllServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container mx-auto py-36">
      <div className="px-5 grid grid-cols-1 xl:grid-cols-2 gap-6">
        {services.map((service) => (
          <SingleServiceCard
            key={service._id}
            service={service}
          ></SingleServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
