import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import MyBookingCard from "../../components/MyBookingCard/MyBookingCard";
import Swal from "sweetalert2";

const MySchedule = () => {
  const { user } = useAuth();
  const [userBookings, setUserBookings] = useState([]);
  const [otherUserBookings, setOtherUserBookings] = useState([]);

  const url = `https://bug-shield-server.vercel.app/usersBooking?email=${user?.email}`;
  const url2 = `https://bug-shield-server.vercel.app/otherUsersBooking?email=${user?.email}`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setUserBookings(res.data);
    });
  }, [url]);

  useEffect(() => {
    axios.get(url2).then((res) => {
      setOtherUserBookings(res.data);
    });
  }, [url2]);

  const handleStatusUpdate = (id) => {
    const updatedStatus = document.getElementById("status").value;
    console.log(updatedStatus);

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

  return (
    <div className="container mx-auto py-32">
      {/* my bookings */}
      <div className="mb-20">
        <h2 className="font-bold font-Cabin text-4xl text-center mb-12">
          My Bookings
        </h2>
        {userBookings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {userBookings?.map((booking) => (
              <MyBookingCard
                key={booking._id}
                booking={booking}
              ></MyBookingCard>
            ))}
          </div>
        ) : (
          <p className="text-center font-semibold">No bookings yet.</p>
        )}
      </div>
      {/* My Pending works  */}
      <div>
        <h2 className="font-bold font-Cabin text-4xl text-center mb-12">
          My Pending works
        </h2>
        {/* cards container */}

        {otherUserBookings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherUserBookings?.map((booking) => (
              <div
                key={booking._id}
                className="grid grid-cols-2 p-4 bg-white border rounded-xl h-full shadow-sm"
              >
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
                          <span className="font-bold">
                            Service Taking Date:{" "}
                          </span>
                          {booking.serviceTakingDate}
                        </h6>
                        {/* status */}
                        <div className="mt-2 flex items-center justify-start space-x-2">
                          <p className="font-bold">Status: </p>
                          <select
                            onChange={() => handleStatusUpdate(booking._id)}
                            className="bg-[#f1efef] px-2 py-1 rounded-sm"
                            name="status"
                            id="status"
                            defaultValue={
                              booking.status?.status
                                ? booking?.status?.status
                                : "Pending"
                            }
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
            ))}
          </div>
        ) : (
          <p className="text-center font-semibold">
            No one books your services yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default MySchedule;
