import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import SocialLogin from "../../components/socialLogin/socialLogin";

const Login = () => {
  const { userLogIn } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    userLogIn(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          icon: "success",
          text: "Login successful",
        });
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        Swal.fire({
          icon: "error",
          text: "Incorrect Email or Password",
        });
      });
  };

  return (
    <div className="bg-[url(https://i.ibb.co/tJC1tND/brick-wall.png)] min-h-screen">
      <div className="bg-[#f0f1edcc] min-h-screen">
        <div className="container mx-auto w-[90%] lg:w-2/4 py-28">
          <form
            onSubmit={handleLogin}
            className="w-full bg-white px-7 py-10 border rounded-xl drop-shadow-2xl"
          >
            <p className="font-bold text-center text-3xl text-[#26272C] mb-7">
              Please Login
            </p>
            <div>
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
              Do not have an account?{" "}
              <span className="text-blue-600">
                <Link to="/register">Register</Link>
              </span>
            </p>
            <input
              type="submit"
              className="text-white uppercase font-semibold btn mt-5 rounded-lg py-3 w-full bg-[#E39C0D] hover:bg-[#698F3F]"
              value="Login"
            />
            <SocialLogin></SocialLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
