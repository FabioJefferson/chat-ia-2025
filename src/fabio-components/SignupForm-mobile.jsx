import React from "react";

const SignupEmailMobile = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      {/* Logo "Xl" en haut à gauche */}
      <div className="absolute top-4 left-4 flex items-center">
        <h1 className="text-3xl font-bold text-gray-200">Xl</h1>
      </div>

      {/* Option "You are signing into Grok" en haut à droite */}
      <div className="absolute top-4 right-4 text-gray-400 text-sm flex items-center">
        You are signing into{" "}
        <span className="font-semibold ml-1 mr-1">Grok</span>
        <svg
          className="w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>

      <div className="flex flex-col items-center w-full max-w-sm pt-20 pb-16">
        {/* Titre de la page d'inscription par e-mail */}
        <h2 className="text-3xl font-bold mb-10 text-center">
          Sign up with your email
        </h2>

        {/* Formulaire pour l'adresse e-mail */}
        <form className="w-full">
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder=""
              className="w-full px-4 py-3 bg-gray-800 rounded-lg text-white border border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 mb-4 text-base font-semibold text-white bg-white rounded-lg hover:bg-gray-200"
          >
            Sign up
          </button>
        </form>

        {/* Bouton "Go back" */}
        <button className="w-full py-3 text-base font-semibold text-white bg-gray-800 rounded-lg border border-gray-700 hover:bg-gray-700">
          Go back
        </button>
      </div>

      {/* Mentions légales en bas */}
      <div className="absolute bottom-4 text-xs text-gray-500 text-center px-4 max-w-sm">
        By continuing, you agree to xAI's{" "}
        <a href="#" className="text-blue-400 hover:underline">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="text-blue-400 hover:underline">
          Privacy Policy
        </a>
        .
      </div>
    </div>
  );
};

export default SignupEmailMobile;