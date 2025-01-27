import { imageUpload } from "@/api/utils";
import { useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const GotMarried = () => {
  const [uploadImage, setUploadImage] = useState({
    image: { name: "Upload Button" },
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  //got marrid
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const name = form.name.value;
    const gender = form.gender.value;
    const birth = form.birth.value;
    const height = form.height.value;
    const weight = form.weight.value;
    const age = form.age.value;
    const occupation = form.occupation.value;
    const race = form.race.value;
    const fathersName = form.fathersName.value;
    const mothersName = form.mothersName.value;
    const division = form.division.value;
    const district = form.district.value;
    const partnerAge = form.partnerAge.value;
    const partnerHeight = form.partnerHeight.value;
    const partnerWeight = form.partnerWeight.value;
    const contactNumber = form.contactNumber.value;

    const image = form.image.files[0];
    const imageUrl = await imageUpload(image);
  };

  return (
    <div>
      Gor Married
      <form onSubmit={handleSubmit}>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/*Bride Name */}
            <div className="space-y-1 text-sm">
              <label htmlFor="brideName" className="block text-gray-600">
                 Bride Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                name="brideName"
                id="brideName"
                type="text"
                placeholder="Bride Name"
                required
              />
            </div>
            {/*Groom Name */}
            <div className="space-y-1 text-sm">
              <label htmlFor="groomName" className="block text-gray-600">
              Groom Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                name="groomName"
                id="groomName"
                type="text"
                placeholder="Groom Name"
                required
              />
            </div>

             {/* Bride BiodataId */}
             <div className="space-y-1 text-sm">
              <label htmlFor="brideBiodataId" className="block text-gray-600">
              Bride BiodataId
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                name="brideBiodataId"
                id="brideBiodataId"
                type="number"
                placeholder=" Bride BiodataId"
                required
              />
            </div>
             {/* Groom BiodataId */}
             <div className="space-y-1 text-sm">
              <label htmlFor="groomBiodataId" className="block text-gray-600">
              Groom BiodataId
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                name="groomBiodataId"
                id="groomBiodataId"
                type="number"
                placeholder=" Groom BiodataId"
                required
              />
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

export default GotMarried;
