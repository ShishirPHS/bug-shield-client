import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleServiceDetails from "../SingleServiceDetails/SingleServiceDetails";
import OtherServices from "../OtherServices/OtherServices";

const ServiceDetails = () => {
  const service = useLoaderData();
  const [sameProviderServices, setSameProviderServices] = useState([]);

  const url = `http://localhost:5000/usersService?email=${service.serviceProviderEmail}`;
  useEffect(() => {
    axios(url).then((res) => {
      setSameProviderServices(res.data);
    });
  }, [setSameProviderServices, url]);

  const excludingCurrentOne = sameProviderServices.filter(
    (services) => services._id !== service._id
  );

  console.log(excludingCurrentOne);

  return (
    <div className="container mx-auto py-36">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <SingleServiceDetails service={service}></SingleServiceDetails>
        </div>
        <div>
          <p className="mb-12 text-4xl font-bold text-center font-Cabin">
            Other Services from this provider
          </p>
          {/* other services */}
          {excludingCurrentOne.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {excludingCurrentOne?.map((service) => (
                <OtherServices
                  key={service._id}
                  service={service}
                ></OtherServices>
              ))}
            </div>
          ) : (
            <p className="text-center">
              No other services available from this provider
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
