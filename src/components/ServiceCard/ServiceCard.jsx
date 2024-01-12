import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {
    _id,
    serviceImage,
    serviceName,
    description,
    serviceProviderImage,
    serviceProviderName,
    price,
  } = service;

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-4 lg:p-8 xl:p-4 bg-white border rounded-xl h-full shadow-sm">
        <div className="col-span-1 overflow-hidden">
          <img
            className="rounded-xl lg:rounded-l-xl w-full h-full object-cover"
            src={serviceImage}
            alt={`image for ${serviceName}`}
          />
        </div>
        <div className="col-span-1">
          <div className="p-4 flex flex-col h-full justify-center">
            <div className="flex-grow">
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {serviceName}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {description.slice(0, 100)}...
                </p>
                <h6 className="text-[#270f0f] font-semibold mt-1">${price}</h6>
              </div>
              <div className="mt-2">
                <img
                  className="w-10 h-10 rounded-full"
                  src={serviceProviderImage}
                  alt=""
                />
                <p className="text-sm">{serviceProviderName}</p>
              </div>
            </div>
            <div className="mt-5">
              <Link to={`/services/${_id}`}>
                <button className="text-white text-sm uppercase font-medium btn mt-5 rounded-lg py-3 px-10 bg-[#E39C0D] hover:bg-[#698F3F]">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;
