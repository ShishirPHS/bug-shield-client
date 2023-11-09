import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import MyBookingCard from "../../components/MyBookingCard/MyBookingCard";

const MySchedule = () => {
  const { user } = useAuth();
  const [userBookings, setUserBookings] = useState([]);

  const url = `http://localhost:5000/usersBooking?email=${user?.email}`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setUserBookings(res.data);
    });
  }, [url]);

  return (
    <div className="container mx-auto py-32">
      {/* my bookings */}
      <div className="mb-20">
        <h2 className="font-bold font-Cabin text-4xl text-center mb-12">
          My Bookings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {userBookings.map((booking) => (
            <MyBookingCard key={booking._id} booking={booking}></MyBookingCard>
          ))}
        </div>
      </div>
      {/* My Pending works  */}
      <div>
        <h2 className="font-bold font-Cabin text-4xl text-center mb-12">
          My Pending works
        </h2>
      </div>
    </div>
  );
};

export default MySchedule;
