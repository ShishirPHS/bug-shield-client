import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import MyBookingCard from "../../components/MyBookingCard/MyBookingCard";
import PendingWorkCard from "../../components/PendingWorkCard/PendingWorkCard";

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

        {otherUserBookings && otherUserBookings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherUserBookings?.map((booking) => (
              <PendingWorkCard
                key={booking._id}
                booking={booking}
              ></PendingWorkCard>
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
