import PropTypes from "prop-types";
import BookingModal from "../BookingModal/BookingModal";

const SingleServiceDetails = ({ service }) => {
  const {
    serviceImage,
    serviceName,
    description,
    serviceProviderImage,
    serviceProviderName,
    price,
    serviceArea,
  } = service;

  return (
    <div className="grid grid-cols-1 p-4 bg-white border rounded-xl h-full shadow-sm">
      <div className="col-span-1 overflow-hidden">
        <img
          className="rounded-xl w-full h-full object-cover"
          src={serviceImage}
          alt={`image for ${serviceName}`}
        />
      </div>
      <div className="col-span-1">
        <div className="p-4 flex flex-col justify-center">
          <div className="">
            <div>
              <h3 className="text-3xl font-bold text-gray-800">
                {serviceName}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{description}</p>
              <h6 className="text-[#270f0f] font-bold mt-1">Price: ${price}</h6>
            </div>
            <div className="mt-2">
              <p className="mt-1 mb-2 font-semibold">{`Service provider's infos`}</p>
              <img
                className="w-10 h-10 rounded-full"
                src={serviceProviderImage}
                alt=""
              />
              <p className="text-sm">
                {" "}
                <span>Provider: </span>
                <span className="font-bold">{serviceProviderName}</span>
              </p>
              <p className="text-sm">
                {" "}
                <span>Service Area: </span>
                <span className="font-bold">{serviceArea}</span>
              </p>
            </div>
          </div>
          <div className="mt-5">
            <BookingModal service={service}></BookingModal>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleServiceDetails.propTypes = {
  service: PropTypes.object,
};

export default SingleServiceDetails;
