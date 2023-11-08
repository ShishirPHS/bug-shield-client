import { useLoaderData, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const ServiceUpdate = () => {
  const service = useLoaderData();
  const { user } = useAuth();
  const { displayName, email } = user;
  const navigate = useNavigate();

  const { _id, serviceImage, serviceName, price, serviceArea, description } =
    service;

  const handleUpdateService = (e) => {
    e.preventDefault();

    const form = e.target;

    const serviceImage = form.servicePhoto.value;
    const serviceName = form.serviceName.value;
    const price = form.price.value;
    const description = form.description.value;
    const serviceArea = form.serviceArea.value;

    axios
      .put(`http://localhost:5000/service/${_id}`, {
        serviceImage,
        serviceName,
        price,
        description,
        serviceArea,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          Swal.fire({
            icon: "success",
            text: "Service updated successfully",
          });
        }
        navigate("/myServices");
      });
  };

  return (
    <div>
      <div>
        <div className="bg-[url(https://i.ibb.co/tJC1tND/brick-wall.png)] min-h-screen">
          <div className="bg-[#f0f1edcc] min-h-screen">
            <div className="container mx-auto w-[90%] lg:w-2/4 py-28">
              <form
                onSubmit={handleUpdateService}
                className="w-full bg-white px-7 py-10 border rounded-xl drop-shadow-2xl"
              >
                <p className="font-bold text-center text-3xl text-[#26272C] mb-7">
                  Update Service
                </p>
                <div>
                  <label className="text-[#676C75] font-semibold">
                    Service Image URL
                  </label>
                  <input
                    type="text"
                    name="servicePhoto"
                    className="mt-1 py-2 px-3 block bg-[#F0F1ED] w-full border-none rounded-md text-sm"
                    placeholder="Service image url"
                    required
                    defaultValue={serviceImage}
                  />
                </div>
                <div className="mt-3">
                  <label className="text-[#676C75] font-semibold">
                    Service Name
                  </label>
                  <input
                    type="text"
                    name="serviceName"
                    className="mt-1 py-2 px-3 block bg-[#F0F1ED] w-full border-none rounded-md text-sm"
                    placeholder="Service Name"
                    required
                    defaultValue={serviceName}
                  />
                </div>
                <div className="mt-3">
                  <label className="text-[#676C75] font-semibold">Price</label>
                  <input
                    type="text"
                    name="price"
                    className="mt-1 py-2 px-3 block bg-[#F0F1ED] w-full border-none rounded-md text-sm"
                    placeholder="Price"
                    required
                    defaultValue={price}
                  />
                </div>
                <div className="mt-3">
                  <label className="text-[#676C75] font-semibold">
                    Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    className="mt-1 py-2 px-3 block bg-[#F0F1ED] w-full border-none rounded-md text-sm"
                    placeholder="Description"
                    required
                    defaultValue={description}
                  />
                </div>
                <div className="mt-3">
                  <label className="text-[#676C75] font-semibold">
                    Service Provider Name
                  </label>
                  <input
                    type="text"
                    name="serviceProviderName"
                    className="mt-1 py-2 px-3 block bg-[#F0F1ED] w-full border-none rounded-md text-sm"
                    placeholder="Service Provider Name"
                    required
                    value={displayName}
                    readOnly
                  />
                </div>
                <div className="mt-3">
                  <label className="text-[#676C75] font-semibold">
                    Service Provider Email
                  </label>
                  <input
                    type="text"
                    name="serviceProviderEmail"
                    className="mt-1 py-2 px-3 block bg-[#F0F1ED] w-full border-none rounded-md text-sm"
                    placeholder="Service Provider Email"
                    required
                    value={email}
                    readOnly
                  />
                </div>

                <div className="mt-3">
                  <label className="text-[#676C75] font-semibold">
                    Service Area
                  </label>
                  <input
                    type="text"
                    name="serviceArea"
                    className="mt-1 py-2 px-3 block bg-[#F0F1ED] w-full border-none rounded-md text-sm"
                    placeholder="Service Area"
                    required
                    defaultValue={serviceArea}
                  />
                </div>
                <input
                  type="submit"
                  className="text-white uppercase font-semibold btn mt-5 rounded-lg py-3 w-full bg-[#E39C0D] hover:bg-[#698F3F]"
                  value="Update"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceUpdate;
