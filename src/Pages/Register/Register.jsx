import useAuth from "@/hooks/useAuth";
import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const { user, loading, userRegister, profileUpdate, googleLogin } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      //2. User Registration
      const result = await userRegister(email, password);

      //3. Save username & profile photo
      await profileUpdate(
        name,
        "https://lh3.googleusercontent.com/a/ACg8ocKUMU3XIX-JSUB80Gj_bYIWfYudpibgdwZE1xqmAGxHASgdvCZZ=s96-c"
      );
      console.log(result);

      // navigate('/')
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Registered Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (err) {
      console.log(err);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${err.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };


const handleGoogleSignIn = async () => { try {
    //User Registration using google
    await googleLogin()
    // navigate(from, { replace: true })
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Registered Successfully",
        showConfirmButton: false,
        timer: 1500
      });
  } catch (err) {
    console.log(err)
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${err.message}`,
        showConfirmButton: false,
        timer: 1500
      });
  }};
  
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#800020] bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#800020] bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                //   autoComplete="new-password"
                id="password"
                required
                //   placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#800020] bg-gray-200 text-gray-900"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#800020] w-full rounded-md py-3 text-white"
            >
              Register
              {/* {loading
                  ? "loading"
                  : // <TbFidgetSpinner className='animate-spin m-auto' />
                    "Continue"} */}
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          {/* <FcGoogl size={32} /> */}

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-[#800020] text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Register;
