import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
        });
        navigate("/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Something went wrong, Try again later.",
        });
      });
  };

  return (
    <div className="mt-5">
      <div className="h-[1px] bg-[#a7a8a5] w-full"></div>
      <div className="flex justify-center items-center">
        <button
          className="flex items-center border px-8 py-3 text-xl rounded-lg mt-5"
          onClick={handleGoogleLogin}
          type="button"
        >
          <img
            className="w-6 mr-2"
            src="https://i.ibb.co/kyggTTw/Logo-google-icon-PNG.png"
            alt=""
          />
          Login With Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
