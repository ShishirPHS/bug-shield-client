import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Register = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        // update user's profile
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then()
          .catch();

        Swal.fire({
          icon: "success",
          text: "Registration successful",
        });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          text: err.message,
        });
      });
  };

  return (
    <div className="bg-[url(https://kit.creativemox.com/bugshield/wp-content/uploads/sites/9/2023/10/brick-wall.png)] min-h-screen">
      <div className="bg-[#f0f1edcc] min-h-screen">
        <div className="container mx-auto w-[90%] lg:w-2/4 py-28">
          <form
            onSubmit={handleRegister}
            className="w-full bg-white px-7 py-10 border rounded-xl drop-shadow-2xl"
          >
            <p className="font-bold text-center text-3xl text-[#26272C] mb-7">
              Please Register
            </p>
            <div>
              <label className="text-[#676C75] font-semibold">Name</label>
              <input
                type="text"
                name="name"
                className="mt-1 py-2 px-3 block bg-[#F0F1ED] w-full border-none rounded-md text-sm"
                placeholder="Name"
                required
              />
            </div>
            <div className="mt-3">
              <label className="text-[#676C75] font-semibold">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="mt-1 py-2 px-3 block bg-[#F0F1ED] w-full border-none rounded-md text-sm"
                placeholder="Photo URL"
                required
              />
            </div>
            <div className="mt-3">
              <label className="text-[#676C75] font-semibold">Email</label>
              <input
                type="email"
                name="email"
                className="mt-1 py-2 px-3 block bg-[#F0F1ED] w-full border-none rounded-md text-sm"
                placeholder="Email"
                required
              />
            </div>
            <div className="mt-3">
              <label className="text-[#676C75] font-semibold">Password</label>
              <input
                type="Password"
                name="password"
                className="mt-1 py-2 px-3 block bg-[#F0F1ED] w-full border-none rounded-md text-sm"
                placeholder="Password"
                required
              />
            </div>
            <p className="mt-2 text-sm">
              Already have an account?{" "}
              <span className="text-blue-600">
                <Link to="/login">Login</Link>
              </span>
            </p>
            <input
              type="submit"
              className="text-white uppercase font-semibold btn mt-5 rounded-lg py-3 w-full bg-[#E39C0D] hover:bg-[#698F3F]"
              value="Register"
            />
            <SocialLogin></SocialLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
