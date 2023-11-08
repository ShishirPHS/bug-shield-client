import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const MyServices = () => {
  const { user } = useAuth();
  const [userServices, setUserServices] = useState([]);

  const url = `http://localhost:5000/usersService?email=${user?.email}`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setUserServices(res.data);
    });
  }, [url]);

  console.log(userServices);

  return <div>{userServices.length}</div>;
};

export default MyServices;
