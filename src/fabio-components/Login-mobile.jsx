import React from "react";
import { BsGoogle } from "react-icons/bs";
import { FaApple } from "react-icons/fa";

const LoginMobile = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-ioasis-purple-darker text-white p-4" >
      <div className="flex flex-col items-center w-full max-w-sm">
        {/* En-tête avec le logo ou le nom de l'application */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-400">Ioasis</h1>
        </div>

        {/* Titre de connexion */}
        <h2 className="text-2xl font-bold mb-8 text-center">
          Log into your account
        </h2>

        {/* Formulaire de connexion avec email et mot de passe */}
        <form className="w-full mb-4">
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 mb-4 text-sm font-semibold text-white bg-white rounded-lg hover:bg-gray-200"
          >
            Log in
          </button>
        </form>
        
        {/* Bouton "Login with X" (déplacé après le formulaire) */}
        <button className="flex items-center justify-center w-full py-3 mb-4 text-sm font-semibold text-white bg-white rounded-lg hover:bg-gray-200">
          Login with X
        </button>

        {/* Séparateur "or" */}
        <div className="flex items-center w-full mb-4">
          <hr className="flex-grow border-gray-600" />
          <span className="mx-4 text-gray-500">or</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        {/* Boutons de connexion sociaux */}
        <button className="flex items-center justify-center w-full py-3 mb-4 text-sm font-semibold text-gray-700 bg-white rounded-lg hover:bg-gray-200">
          <BsGoogle className="mr-2 text-google-blue" /> Login with Google
        </button>
        <button className="flex items-center justify-center w-full py-3 mb-4 text-sm font-semibold text-white bg-black rounded-lg hover:bg-gray-800">
          <FaApple className="mr-2" /> Login with Apple
        </button>

        {/* Lien "Sign up" */}
        <p className="text-sm mt-4 text-center">
          Don't have an account?{" "}
          <span className="text-blue-400 cursor-pointer">Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default LoginMobile;