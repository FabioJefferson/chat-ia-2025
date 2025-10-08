import React from "react";
import { BsGoogle } from "react-icons/bs"; // Vous devrez installer react-icons
import { FaApple } from "react-icons/fa"; // Vous devrez installer react-icons

const Login = () => { // ce login est pour le design sur PC
  var myLogo = "./src/assets/ioasis-logo.png";
  myLogo = null;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white w-full">
      <div className="flex w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg">
        {/* Partie gauche : le formulaire de connexion */}
        <div className="w-1/2 p-10 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold mb-8">Log into your account</h2>
          <button className="flex items-center justify-center w-3/4 py-3 mb-4 text-sm font-semibold text-gray-900 bg-white rounded-lg hover:bg-gray-200">
            Login with X
          </button>
          <div className="flex items-center w-3/4 mb-4">
            <hr className="flex-grow border-gray-600" />
            <span className="mx-4 text-gray-500">or</span>
            <hr className="flex-grow border-gray-600" />
          </div>
          <button className="flex items-center justify-center w-3/4 py-3 mb-4 text-sm font-semibold text-white bg-gray-700 rounded-lg hover:bg-gray-600">
            <BsGoogle className="mr-2" /> Login with Google
          </button>
          <button className="flex items-center justify-center w-3/4 py-3 mb-4 text-sm font-semibold text-white bg-gray-700 rounded-lg hover:bg-gray-600">
            <FaApple className="mr-2" /> Login with Apple
          </button>
          <p className="text-sm mt-4">
            Don't have an account?{" "}
            <span className="text-blue-400 cursor-pointer">Sign up</span>
          </p>
        </div>

        {/* Partie droite : l'image ou le logo */}
        <div className="w-1/2 bg-gray-900 rounded-r-lg">
          <div className="flex items-center justify-center h-full">
            {myLogo != null ? (
              <img src={myLogo} alt="logo I-oasis" />
            ) : (
              <span className="text-gray-600 text-4xl font-bold">
                Your Logo Here
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
