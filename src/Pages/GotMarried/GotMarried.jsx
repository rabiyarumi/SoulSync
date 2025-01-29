import { imageUpload } from "@/api/utils";
import SectionHeaders from "@/components/Layouts/SectionHeaders";
import useAuth from "@/hooks/useAuth";
import axios from "axios";
import { useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const GotMarried = () => {
    const {user} = useAuth()
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
    const brideName = form.brideName.value;
    const groomName = form.groomName.value;
    const brideBiodataId = form.brideBiodataId.value;
    const groomBiodataId = form.groomBiodataId.value;
    const marriedStory = form.story.value;

    const image = form.image.files[0];
    const imageUrl = await imageUpload(image);

    // Create plant data object
    const marriedData = {brideName, groomName, brideBiodataId,groomBiodataId, image: imageUrl,marriedStory , userEmail: user?.email};
  
      console.table(marriedData);
  
      
        // save biodata in db
        try {
          // post req
          await axios
            .post(`${import.meta.env.VITE_API_URL}/married-stories`, marriedData)
            .then((data) => {
              console.log(data);
            });
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Biodata Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/')
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
      }
  };

  return (
    <div className="px-8">
     <SectionHeaders title={""} coloredTitle={"Share Your Wedding Story"}/>
      <form onSubmit={handleSubmit}>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/*Bride Name */}
            <div className="space-y-1 text-sm">
              <label htmlFor="brideName" className="block text-gray-600">
                 Bride Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#800020] focus:outline-[#800020] rounded-md bg-white"
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
                className="w-full px-4 py-3 text-gray-800 border border-[#800020] focus:outline-[#800020] rounded-md bg-white"
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
                className="w-full px-4 py-3 text-gray-800 border border-[#800020] focus:outline-[#800020] rounded-md bg-white"
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
                className="w-full px-4 py-3 text-gray-800 border border-[#800020] focus:outline-[#800020] rounded-md bg-white"
                name="groomBiodataId"
                id="groomBiodataId"
                type="number"
                placeholder=" Groom BiodataId"
                required
              />
            </div>

            {/* Image */}
            <div className=" p-4  w-full  m-auto rounded-lg flex-grow">
            <label htmlFor="groomBiodataId" className="block text-gray-600 -mt-4">
              Upload Couple Image
              </label>
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
                    <div className="bg-[#800020] text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-[#800020]">
                      {uploadImage?.image?.name}
                    </div>
                  </label>
                </div>
              </div>
            </div>
            {/* {uploadImage && uploadImage?.image?.size && (
              <div className="flex gap-5 items-center">
                <img className="w-20" src={uploadImage?.url} alt="" />
                <p>Image Size: {uploadImage?.image?.size} Bytes</p>
              </div>
            )} */}

            {/* Description */}
            <div className="space-y-1 text-sm">
              <label htmlFor="groomBiodataId" className="block text-gray-600">
              Married Story
              </label>
              <textarea
                className="w-full px-4 py-3 text-gray-800 border border-[#800020] focus:outline-[#800020] rounded-md bg-white"
                name="story"
                id="story"
                type="text"
                placeholder="Write Your Story"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#800020] md:col-span-2"
            >
              {loading ? (
                <TbFidgetSpinner className="animate-spin m-auto" />
              ) : (
                "Share"
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GotMarried;
