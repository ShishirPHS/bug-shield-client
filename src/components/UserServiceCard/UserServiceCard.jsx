import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const UserServiceCard = ({ services, userServices, setUserServices }) => {
  const {
    _id,
    serviceImage,
    serviceName,
    description,
    serviceProviderImage,
    serviceProviderName,
    price,
    serviceArea,
  } = services;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/service/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Deleted from your cart.", "success");
            }
            const remaining = userServices.filter(
              (singleService) => singleService._id !== id
            );
            setUserServices(remaining);
          });
      }
    });
  };

  return (
    <div>
      <div className="grid grid-cols-2 p-8 xl:p-4 bg-white border rounded-xl h-full shadow-sm">
        <div className="col-span-1 overflow-hidden">
          <img
            className="rounded-l-xl w-full h-full object-cover"
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
            <div className="mt-5 space-x-4">
              <Link to={`/serviceUpdate/${_id}`}>
                <button className="text-white text-[10px] uppercase font-medium btn mt-5 rounded-lg py-2 px-5 bg-[#E39C0D] hover:bg-[#698F3F]">
                  Update
                </button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="text-white text-[10px] uppercase font-medium btn mt-5 rounded-lg py-2 px-5 bg-[#E39C0D] hover:bg-[#698F3F]"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

UserServiceCard.propTypes = {
  services: PropTypes.object,
  userServices: PropTypes.array,
  setUserServices: PropTypes.func,
};

export default UserServiceCard;
