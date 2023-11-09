import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const BookingModal = ({ service }) => {
  const { user } = useAuth();
  const { email } = user;

  const { serviceImage, serviceName, serviceProviderEmail, price } = service;

  const handleSubmit = () => {
    document.getElementById("submit").click();
  };

  const handleBookingForm = (e) => {
    e.preventDefault();

    const form = e.target;
    const serviceName = form.serviceName.value;
    const serviceImage = form.serviceImage.value;
    const serviceProviderEmail = form.serviceProviderEmail.value;
    const userEmail = form.userEmail.value;
    const serviceTakingDate = form.serviceTakingDate.value;
    const specialInstruction = form.specialInstruction.value;
    const price = form.price.value;

    axios
      .post("https://bug-shield-server.vercel.app/booking", {
        serviceName,
        serviceImage,
        serviceProviderEmail,
        userEmail,
        serviceTakingDate,
        specialInstruction,
        price,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            text: "Booking added successfully",
          });
          const close = document.getElementById("close-btn");
          close.click();
        }
      });
  };

  return (
    <div>
      <button
        type="button"
        className="py-3 px-10 inline-flex items-center text-sm uppercase rounded-lg border border-transparent font-medium mt-5 bg-[#E39C0D] hover:bg-[#698F3F] text-white"
        data-hs-overlay="#hs-scroll-inside-body-modal"
      >
        Book Now
      </button>

      <div
        id="hs-scroll-inside-body-modal"
        className="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto"
      >
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)]">
          <div className="max-h-full overflow-hidden flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            {/* modal header */}
            <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
              <h3 className="font-bold text-gray-800 dark:text-white">
                Service Booking
              </h3>
              <button
                type="button"
                id="close-btn"
                className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-overlay="#hs-scroll-inside-body-modal"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
            {/* modal body */}
            <div className="p-4 overflow-y-auto">
              <div className="space-y-4">
                <div className="">
                  <form
                    onSubmit={handleBookingForm}
                    className="w-full bg-white px-7 py-10 border rounded-xl drop-shadow-2xl"
                  >
                    <p className="font-bold text-center text-3xl text-[#26272C] mb-7">
                      Please Booking
                    </p>
                    <div>
                      <label className="text-[#676C75] font-semibold">
                        Service Name
                      </label>
                      <input
                        type="text"
                        name="serviceName"
                        className="mt-1 py-2 px-3 block bg-[#F0F1ED] w-full border-none rounded-md text-sm"
                        placeholder="Service Name"
                        required
                        readOnly
                        value={serviceName}
                      />
                    </div>
                    <div className="mt-3">
                      <label className="text-[#676C75] font-semibold">
                        Service Image
                      </label>
                      <input
                        type="text"
                        name="serviceImage"
                        className="mt-1 py-2 px-3 block bg-[#F0F1ED] w-full border-none rounded-md text-sm"
                        placeholder="Service Image "
                        required
                        readOnly
                        value={serviceImage}
                      />
                    </div>
                    <div className="mt-3">
                      <label className="text-[#676C75] font-semibold">
                        Service Provider email
                      </label>
                      <input
                        type="text"
                        name="serviceProviderEmail"
                        className="mt-1 py-2 px-3 block bg-[#F0F1ED] w-full border-none rounded-md text-sm"
                        placeholder="Service Image "
                        required
                        readOnly
                        value={serviceProviderEmail}
                      />
                    </div>
                    <div className="mt-3">
                      <label className="text-[#676C75] font-semibold">
                        User Email
                      </label>
                      <input
                        type="text"
                        name="userEmail"
                        className="mt-1 py-2 px-3 block bg-[#F0F1ED] w-full border-none rounded-md text-sm"
                        placeholder="Service Image "
                        required
                        readOnly
                        value={email}
                      />
                    </div>
                    <div className="mt-3">
                      <label className="text-[#676C75] font-semibold">
                        Service Taking Date
                      </label>
                      <input
                        type="date"
                        name="serviceTakingDate"
                        className="mt-1 py-2 px-3 block bg-[#F0F1ED] w-full border-none rounded-md text-sm"
                        placeholder="Service Taking Date"
                        required
                      />
                    </div>
                    <div className="mt-3">
                      <label className="text-[#676C75] font-semibold">
                        Special instruction
                      </label>
                      <input
                        type="text"
                        name="specialInstruction"
                        className="mt-1 py-2 px-3 block bg-[#F0F1ED] w-full border-none rounded-md text-sm"
                        placeholder="Special instruction"
                        required
                      />
                    </div>
                    <div className="mt-3">
                      <label className="text-[#676C75] font-semibold">
                        Price
                      </label>
                      <input
                        type="text"
                        name="price"
                        className="mt-1 py-2 px-3 block bg-[#F0F1ED] w-full border-none rounded-md text-sm"
                        placeholder="Special instruction"
                        required
                        readOnly
                        value={price}
                      />
                    </div>
                    <div className="mt-5 hidden">
                      <input
                        id="submit"
                        type="submit"
                        className="gap-x-2 py-3 px-10 inline-flex items-center text-sm rounded-lg border border-transparent font-medium bg-[#E39C0D] hover:bg-[#698F3F] text-white"
                        value="Purchase this Service"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* purchase button */}
            <div
              onClick={handleSubmit}
              className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700"
            >
              <button className="gap-x-2 py-3 px-10 inline-flex items-center text-sm rounded-lg border border-transparent font-medium bg-[#E39C0D] hover:bg-[#698F3F] text-white">
                Purchase this Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BookingModal.propTypes = {
  service: PropTypes.object,
};

export default BookingModal;
