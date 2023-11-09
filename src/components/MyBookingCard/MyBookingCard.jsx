import PropTypes from "prop-types";

const MyBookingCard = ({ booking }) => {
  const {
    serviceName,
    serviceImage,
    serviceTakingDate,
    // specialInstruction,
    // price,
  } = booking;

  return (
    <div>
      <div className="grid grid-cols-2 p-4 bg-white border rounded-xl h-full shadow-sm">
        <div className="col-span-1 overflow-hidden">
          <img
            className="rounded-l-xl w-full h-full object-cover"
            src={serviceImage}
            alt={`image for ${serviceName}`}
          />
        </div>
        <div className="col-span-1">
          <div className="p-4 flex flex-col h-full justify-center">
            <div className="">
              <div>
                <p className="text-[#270f0f] font-semibold mt-1">
                  <span className="font-bold">Service Name:</span> {serviceName}
                </p>
                <h6 className="text-[#270f0f] font-semibold mt-1">
                  <span className="font-bold">Service Taking Date: </span>
                  {serviceTakingDate}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MyBookingCard.propTypes = {
  booking: PropTypes.object,
};

export default MyBookingCard;
