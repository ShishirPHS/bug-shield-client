import PropTypes from "prop-types";
import { useState } from "react";
import Swal from "sweetalert2";

const PendingWorkCard = ({ booking }) => {
  const [status, setStatus] = useState(
    booking.status?.status ? booking.status.status : "Pending"
  );

  const handleStatusUpdate = (id, updatedStatus) => {
    fetch(`https://bug-shield-server.vercel.app/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: updatedStatus }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            text: "Status updated successfully",
          });
        }
      });
  };

  const handleStatusChange = (e) => {
    const updatedStatus = e.target.value;
    setStatus(updatedStatus);
    handleStatusUpdate(booking._id, updatedStatus);
  };

  return (
    <div className="grid grid-cols-2 p-4 bg-white border rounded-xl h-full shadow-sm">
      <div className="col-span-1 overflow-hidden">
        <img
          className="rounded-l-xl w-full h-full object-cover"
          src={booking.serviceImage}
          alt={`image for ${booking.serviceName}`}
        />
      </div>
      <div className="col-span-1">
        <div className="p-4 flex flex-col h-full justify-center">
          <div className="">
            <div>
              <p className="text-[#270f0f] font-semibold mt-1">
                <span className="font-bold">Service Name:</span>{" "}
                {booking.serviceName}
              </p>
              <h6 className="text-[#270f0f] font-semibold mt-1">
                <span className="font-bold">Service Taking Date: </span>
                {booking.serviceTakingDate}
              </h6>
              {/* status */}
              <div className="mt-2 flex items-center justify-start space-x-2">
                <p className="font-bold">Status: </p>
                <select
                  onChange={handleStatusChange}
                  className="bg-[#f1efef] px-2 py-1 rounded-sm"
                  value={status}
                >
                  <option value="pending">Pending</option>
                  <option value="inProgress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PendingWorkCard.propTypes = {
  booking: PropTypes.object.isRequired,
};

export default PendingWorkCard;
