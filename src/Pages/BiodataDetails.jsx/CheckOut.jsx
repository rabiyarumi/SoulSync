import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";
import { useParams } from "react-router-dom";

const CheckOut = () => {
  const { user } = useAuth();
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const handleCheckout = () => {
    setLoading(true);
    const biodataId = id;
    const email = user?.email;
    const status= 'Pending'

    const contactPurchase = {biodataId, email, status}
    console.log(contactPurchase)
    //post contact request to db
  };
  return (
    <div className="p-8">
      {/* <form onSubmit={handleCheckout}> */}
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Age */}
            <div className="space-y-1 text-sm">
              <label htmlFor="biodataId" className="block text-gray-600">
                Biodata Id
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                name="biodataId"
                value={id}
                id="biodataId"
                type="number"
                placeholder=" Biodata Id"
                readOnly
                required
              />
            </div>

            {/*Self Email */}
            <div className="space-y-1 text-sm">
              <label htmlFor="contactEmail" className="block text-gray-600">
                Self Email
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                name="email"
                id="email"
                type="email"
                placeholder="Self Email"
                value={`${user?.email}`}
                readOnly
                required
              />
            </div>

            {/* Submit Button */}
            <button
            onClick={handleCheckout}
              className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-lime-500 "
            >
              {loading ? (
                <TbFidgetSpinner className="animate-spin m-auto" />
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </div>
      {/* </form> */}
    </div>
  );
};

export default CheckOut;
