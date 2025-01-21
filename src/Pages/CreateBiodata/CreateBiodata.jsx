import { imageUpload } from "@/api/utils";
import useAuth from "@/hooks/useAuth";
import React, { useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";

const CreateBiodata = () => {
  const { user } = useAuth();
  const [uploadImage, setUploadImage] = useState({
    image: { name: "Upload Button" },
  });
  console.log(uploadImage);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const name = form.name.value;
    const description = form.description.value;
    const category = form.category.value;
    const price = parseFloat(form.price.value);
    const quantity = parseInt(form.quantity.value);
    const image = form.image.files[0];
    const imageUrl = await imageUpload(image);

    // seller info
    const seller = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    };

    // Create plant data object
    const plantData = {
      name,
      category,
      description,
      price,
      quantity,
      image: imageUrl,
      seller,
    };

    console.table(plantData);
    // save plant in db
    // try {
    //   // post req
    //   await axiosSecure.post('/plants', plantData)
    //   toast.success('Data Added Successfully!')
    // } catch (err) {
    //   console.log(err)
    // } finally {
    //   setLoading(false)
  };
  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            {/* Name */}
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block text-gray-600">
                Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                name="name"
                id="name"
                type="text"
                placeholder="Plant Name"
                required
              />
            </div>
            {/* Biodata Type */}
            <div className="space-y-1 text-sm">
              <label htmlFor="category" className="block text-gray-600 ">
                Gender
              </label>
              <select
                required
                className="w-full px-4 py-3 border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                name="category"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            {/* Image */}
            <div className=" p-4  w-full  m-auto rounded-lg flex-grow">
              <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                <div className="flex flex-col w-max mx-auto text-center">
                  <label>
                    <input
                      onChange={(e) =>
                        setUploadImage({
                          image: e.target.files[0],
                          url: URL.createObjectURL(e.target.files[0]),
                        })
                      }
                      className="text-sm cursor-pointer w-36 hidden"
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                      hidden
                    />
                    <div className="bg-lime-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-lime-500">
                      {uploadImage?.image?.name}
                    </div>
                  </label>
                </div>
              </div>
            </div>
            {uploadImage && uploadImage?.image?.size && (
              <div className="flex gap-5 items-center">
                <img className="w-20" src={uploadImage?.url} alt="" />
                <p>Image Size: {uploadImage?.image?.size} Bytes</p>
              </div>
            )}

            {/* Date of Birth */}
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block text-gray-600">
                Date of Birth
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                name="birth"
                id="birth"
                type="date"
                placeholder="Date of Birth"
                required
              />
            </div>
            {/* Height */}
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block text-gray-600">
                Height (in feet)
              </label>

              <select id="height" name="height" required>
                <option value="" disabled selected>
                  Select your height range
                </option>
                <option value="4-4.5">4-4.5 ft</option>
                <option value="4.6-5">4.6-5 ft</option>
                <option value="5.1-5.5">5.1-5.5 ft</option>
                <option value="5.6-6">5.6-6 ft</option>
                <option value="6.1-6.5">6.1-6.5 ft</option>
              </select>
            </div>
            {/* Weight */}
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block text-gray-600">
                Weight
              </label>
              <select id="weight" name="weight" required>
                <option value="" disabled selected>
                  Select your weight range
                </option>
                <option value="40-45">40-45 kg</option>
                <option value="46-50">46-50 kg</option>
                <option value="51-55">51-55 kg</option>
                <option value="56-60">56-60 kg</option>
                <option value="61-65">61-65 kg</option>
                <option value="66-70">66-70 kg</option>
                <option value="71-75">71-75 kg</option>
                <option value="76-80">76-80 kg</option>
              </select>
            </div>
            {/* Age */}
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block text-gray-600">
                Age
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                name="age"
                id="age"
                type="number"
                placeholder=" Age"
                required
              />
            </div>

            {/* Occupation */}
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block text-gray-600">
                Occupation
              </label>
              <select id="occupation" name="occupation" required>
                <option value="" disabled selected>
                  Select your occupation
                </option>
                <option value="engineer">Engineer</option>
                <option value="doctor">Doctor</option>
                <option value="teacher">Teacher</option>
                <option value="business">Businessperson</option>
                <option value="artist">Artist</option>
                <option value="lawyer">Lawyer</option>
                <option value="banker">Banker</option>
                <option value="software_developer">Software Developer</option>
                <option value="government_service">Government Service</option>
                <option value="student">Student</option>
                <option value="homemaker">Homemaker</option>
                <option value="others">Others</option>
              </select>
            </div>
            {/* Race */}
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block text-gray-600">
                Race / Skin Color
              </label>
              <select id="race" name="race" required>
                <option value="" disabled selected>
                  Select your race/skin color
                </option>
                <option value="fair">Fair</option>
                <option value="wheatish">Wheatish</option>
                <option value="dusky">Dusky</option>
                <option value="dark">Dark</option>
                <option value="others">Others</option>
              </select>
            </div>
            {/* Fathers name */}
            <div className="space-y-1 text-sm">
              <label htmlFor="father's-name" className="block text-gray-600">
                Fathers name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                name="father's-name"
                id="father's-name"
                type="text"
                placeholder="Fathers name"
                required
              />
            </div>
            {/* Mothers name */}
            <div className="space-y-1 text-sm">
              <label htmlFor="mother's-name" className="block text-gray-600">
                Mothers name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                name="mother's-name"
                id="mother's-name"
                type="text"
                placeholder="Mothers name"
                required
              />
            </div>
            {/* Permanent Division name*/}
            <div className="space-y-1 text-sm">
              <label htmlFor="permanent-division" className="block text-gray-600">
                Permanent Division:
              </label>
              <select id="permanent-division" name="permanent-division" required>
                <option value="" disabled selected>
                  Select your permanent division
                </option>
                <option value="dhaka">Dhaka</option>
                <option value="chattogram">Chattogram</option>
                <option value="rangpur">Rangpur</option>
                <option value="barisal">Barisal</option>
                <option value="khulna">Khulna</option>
                <option value="mymensingh">Mymensingh</option>
                <option value="sylhet">Sylhet</option>
              </select>
            </div>
            {/* Present Division name*/}
            <div className="space-y-1 text-sm">
              <label htmlFor="present-division" className="block text-gray-600">
              Present Division:
              </label>
              <select id="present-division" name="present-division" required>
                <option value="" disabled selected>
                  Select your permanent division
                </option>
                <option value="dhaka">Dhaka</option>
                <option value="chattogram">Chattogram</option>
                <option value="rangpur">Rangpur</option>
                <option value="barisal">Barisal</option>
                <option value="khulna">Khulna</option>
                <option value="mymensingh">Mymensingh</option>
                <option value="sylhet">Sylhet</option>
              </select>
            </div>
            {/*Partner Age */}
            <div className="space-y-1 text-sm">
              <label htmlFor="partner-age" className="block text-gray-600">
              Partner Age 

              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                name="partner-age"
                id="partner-age"
                type="number"
                placeholder="Partner Age "
                required
              />
            </div>

            {/* Partner Height */}
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block text-gray-600">
                Partner Height (in feet)
              </label>

              <select id="partner-height" name="partner-height" required>
                <option value="" disabled selected>
                  Select your Expected height range
                </option>
                <option value="4-4.5">4-4.5 ft</option>
                <option value="4.6-5">4.6-5 ft</option>
                <option value="5.1-5.5">5.1-5.5 ft</option>
                <option value="5.6-6">5.6-6 ft</option>
                <option value="6.1-6.5">6.1-6.5 ft</option>
              </select>
            </div>
            {/* Partner Weight */}
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block text-gray-600">
                Partner Weight
              </label>
              <select id="partner-weight" name="partner-weight" required>
                <option value="" disabled selected>
                  Select your Expected weight range
                </option>
                <option value="40-45">40-45 kg</option>
                <option value="46-50">46-50 kg</option>
                <option value="51-55">51-55 kg</option>
                <option value="56-60">56-60 kg</option>
                <option value="61-65">61-65 kg</option>
                <option value="66-70">66-70 kg</option>
                <option value="71-75">71-75 kg</option>
                <option value="76-80">76-80 kg</option>
              </select>
            </div>
            
            {/*Contact Email */}
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block text-gray-600">
              Contact Email
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                name="email"
                id="email"
                type="email"
                placeholder="Contact Email"
                value={`${user?.email}`}
                required
              />
            </div>
            {/* Mobile Number */}
            <div className="space-y-1 text-sm">
              <label htmlFor="number" className="block text-gray-600">
              Mobile Number
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                name="number"
                id="number"
                type="number"
                placeholder="Mobile Number"
                required
              />
            </div>
          
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-lime-500 "
            >
              {loading ? (
                <TbFidgetSpinner className="animate-spin m-auto" />
              ) : (
                "Save & Continue"
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateBiodata;
