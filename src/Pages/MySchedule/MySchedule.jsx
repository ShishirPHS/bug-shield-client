import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import MyBookingCard from "../../components/MyBookingCard/MyBookingCard";

const MySchedule = () => {
  const { user } = useAuth();
  const [userBookings, setUserBookings] = useState([]);
  const [otherUserBookings, setOtherUserBookings] = useState([]);

  const url = `http://localhost:5000/usersBooking?email=${user?.email}`;
  const url2 = `http://localhost:5000/otherUsersBooking?email=${user?.email}`;

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

  return (
    <div className="container mx-auto py-32">
      {/* my bookings */}
      <div className="mb-20">
        <h2 className="font-bold font-Cabin text-4xl text-center mb-12">
          My Bookings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {userBookings?.map((booking) => (
            <MyBookingCard key={booking._id} booking={booking}></MyBookingCard>
          ))}
        </div>
      </div>
      {/* My Pending works  */}
      <div>
        <h2 className="font-bold font-Cabin text-4xl text-center mb-12">
          My Pending works
        </h2>
        {/* cards container */}
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
                        <span className="font-bold">Service Taking Date: </span>
                        {booking.serviceTakingDate}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySchedule;
