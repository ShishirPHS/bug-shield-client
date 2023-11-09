import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import UserServiceCard from "../../components/UserServiceCard/UserServiceCard";

const MyServices = () => {
  const { user } = useAuth();
  const [userServices, setUserServices] = useState([]);

  const url = `http://localhost:5000/usersService?email=${user?.email}`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setUserServices(res.data);
    });
  }, [url]);

  // console.log(userServices);

  return (
    <div className="container mx-auto py-36">
      <h1 className="text-center text-4xl font-bold font-Cabin mb-12">
        My Services
      </h1>
      <div className="px-5 grid grid-cols-1 xl:grid-cols-2 gap-6">
        {userServices.map((singleService) => (
          <UserServiceCard
            key={singleService._id}
            services={singleService}
            userServices={userServices}
            setUserServices={setUserServices}
          ></UserServiceCard>
        ))}
      </div>
    </div>
  );
};

export default MyServices;
