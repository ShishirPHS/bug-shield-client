const AddServices = () => {
  const handleAddService = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="bg-[url(https://i.ibb.co/tJC1tND/brick-wall.png)] min-h-screen">
        <div className="bg-[#f0f1edcc] min-h-screen">
          <div className="container mx-auto w-[90%] lg:w-2/4 py-28">
            <form
              onSubmit={handleAddService}
              className="w-full bg-white px-7 py-10 border rounded-xl drop-shadow-2xl"
            >
              <p className="font-bold text-center text-3xl text-[#26272C] mb-7">
                Add a service
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
                />
              </div>
              <div className="mt-3">
                <label className="text-[#676C75] font-semibold">
                  Service Provider Image
                </label>
                <input
                  type="text"
                  name="serviceProviderImage"
                  className="mt-1 py-2 px-3 block bg-[#F0F1ED] w-full border-none rounded-md text-sm"
                  placeholder="Service Provider Image"
                  required
                />
              </div>
              <input
                type="submit"
                className="text-white uppercase font-semibold btn mt-5 rounded-lg py-3 w-full bg-[#E39C0D] hover:bg-[#698F3F]"
                value="Add Service"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddServices;
