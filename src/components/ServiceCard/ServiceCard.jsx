import PropTypes from "prop-types";

const ServiceCard = ({ service }) => {
  const { serviceImage, serviceName } = service;
  return (
    <div>
      <div className="bg-white border rounded-xl shadow-sm sm:flex dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div className="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-[15rem] md:rounded-se-none md:max-w-xs">
          <img
            className="w-full h-full absolute top-0 start-0 object-cover"
            src={serviceImage}
            alt=""
          />
        </div>
        <div className="flex flex-wrap">
          <div className="p-4 flex flex-col h-full sm:p-7">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              {serviceName}
            </h3>
            <p className="mt-1 text-gray-500 dark:text-gray-400">
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </p>
            <div className="mt-5 sm:mt-auto">
              <p className="text-xs text-gray-500 dark:text-gray-500">
                Last updated 5 mins ago
              </p>
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
