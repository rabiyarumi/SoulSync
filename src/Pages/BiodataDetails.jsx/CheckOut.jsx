import useAuth from "@/hooks/useAuth";
import axios from "axios";
import { useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const CheckOut = () => {
  const { user } = useAuth();
  const {id} = useParams();
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);


  const handleCheckout =async () => {
    setLoading(true);
    const biodataId = id;
    const email = user?.email;
    const status= 'Pending'
    const amount= 5

    const purchaseInfo = {biodataId, email, status, amount}
    
    //post contact request to db
     // save biodata in db
     try {
        // post req
        await axios
          .post(`${import.meta.env.VITE_API_URL}/purchase-contacts`, purchaseInfo)
          .then((data) => {
            
          });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: " Your Request Has bees Recorded",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/biodatas')
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
    }
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
                className="w-full px-4 py-3 text-gray-800 border border-[#800020] focus:outline-[#800020] rounded-md bg-white"
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
                className="w-full px-4 py-3 text-gray-800 border border-[#800020] focus:outline-[#800020] rounded-md bg-white"
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
              className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#800020] "
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
