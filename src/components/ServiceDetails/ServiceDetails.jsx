import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData();
  console.log(service);
  return <div>{service.serviceName}</div>;
};

export default ServiceDetails;
