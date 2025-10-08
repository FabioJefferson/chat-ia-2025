import React from "react";
import { BsGoogle } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md"; // Nouvelle icône pour l'email

const SignupMobile = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      {/* Logo "Xl" en haut à gauche */}
      <div className="absolute top-4 left-4 flex items-center">
        {/* Vous pouvez remplacer ce 'h1' par une balise 'img' si vous avez un fichier logo */}
        <h1 className="text-3xl font-bold text-gray-200">Xl</h1>
      </div>

      {/* Option "You are signing into Grok" en haut à droite (facultatif) */}
      <div className="absolute top-4 right-4 text-gray-400 text-sm flex items-center">
        You are signing into{" "}
        <span className="font-semibold ml-1 mr-1">Grok</span>
        {/* Vous pouvez ajouter une icône de flèche déroulante ici si vous utilisez react-icons */}
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>

      <div className="flex flex-col items-center w-full max-w-sm pt-20 pb-16"> {/* Ajout de padding top et bottom pour le contenu central */}
        {/* Titre d'inscription */}
        <h2 className="text-3xl font-bold mb-10 text-center">
          Create your account
        </h2>

        {/* Bouton "Sign up with X" */}
{/*         {<button className="flex items-center justify-center w-full py-3 mb-4 text-base font-semibold text-gray-900 bg-white rounded-lg hover:bg-gray-200">
          <img src="/path/to/your/x-logo.png" alt="X logo" className="w-5 h-5 mr-2" />
          Sign up with X
        </button>} */}

        {/* Bouton "Sign up with email" */}
        <button className="flex items-center justify-center w-full py-3 mb-4 text-base font-semibold text-white bg-gray-800 rounded-lg border border-gray-700 hover:bg-gray-700">
          <MdOutlineMail className="mr-2 text-white text-xl" /> Sign up with email
        </button>

        {/* Bouton "Sign up with Apple" */}
        <button className="flex items-center justify-center w-full py-3 mb-4 text-base font-semibold text-white bg-black rounded-lg hover:bg-gray-800">
          <FaApple className="mr-2 text-white text-xl" /> Sign up with Apple
        </button>

        {/* Bouton "Sign up with Google" */}
        <button className="flex items-center justify-center w-full py-3 mb-6 text-base font-semibold text-white bg-white rounded-lg hover:bg-gray-200">
          <BsGoogle className="mr-2 text-white text-xl" /> Sign up with Google
        </button>

        {/* Lien "Already have an account?" */}
        <p className="text-sm text-gray-400 mt-4 text-center">
          Already have an account?{" "}
          <span className="text-blue-400 cursor-pointer hover:underline">Sign in</span>
        </p>
      </div>

      {/* Mentions légales en bas */}
      <div className="absolute bottom-4 text-xs text-gray-500 text-center px-4 max-w-sm">
        By continuing, you agree to xAI's{" "}
        <a href="#" className="text-blue-400 hover:underline">Terms of Service</a>{" "}
        and{" "}
        <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a>.
      </div>
    </div>
  );
};

export default SignupMobile;