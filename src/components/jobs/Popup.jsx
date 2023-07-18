import Button from "../../containers/Button";

const Popup = () => {
  return (
    <>
      <div>
        <button
          data-modal-target="popup-modal"
          data-modal-toggle="popup-modal"
          className=""
          type="button"
        >
          Submit
        </button>

        <div
          id="popup-modal"
          tabindex="-1"
          className="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-purplish rounded-lg shadow">
              <button
                type="button"
                className="absolute top-3 right-2.5 bg-transparent hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="popup-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>

              <form className="p-6 flex flex-col gap-3">
                <p className="mb-5 text-sm font-bold text-center">
                  Please fill the form for further process
                </p>

                <div className="flex flex-col gap-3">
                  <label htmlFor="name" className="font-bold text-gray-800">
                    Name*
                  </label>
                  <input
                    type="text"
                    className="rounded-full w-full py-2 px-3 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="email" className="font-bold text-gray-800">
                    Email*
                  </label>
                  <input
                    type="email"
                    className="rounded-full w-full py-2 px-3 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="phone" className="font-bold text-gray-800">
                    Phone Number*
                  </label>
                  <div className="flex gap-3 items-center">
                    <p className="bg-white py-2 px-3 rounded-full">+91</p>
                    <input
                      type="tel"
                      className="rounded-full w-full py-2 px-3 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="location" className="font-bold text-gray-800">
                    Location*
                  </label>
                  <input
                    type="text"
                    className="rounded-full w-full py-2 px-3 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="query" className="font-bold text-gray-800">
                    Query*
                  </label>
                  <input
                    type="text"
                    className="rounded-full w-full py-2 px-3 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="query" className="font-bold text-gray-800">
                    Upload Resume*
                  </label>
                  <input
                    type="file"
                    className="rounded-full w-full py-2 px-3 focus:outline-none"
                  />
                </div>

                <Button customClass="w-fit px-7 py-2">Submit</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
