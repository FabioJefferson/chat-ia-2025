import React from "react";

const VerifyEmailMobile = () => {
  // Remplacez cet e-mail par l'e-mail dynamique de l'utilisateur
  const userEmail = "jeffersonambintsoafablo@gmail.com"; 

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      {/* Logo "Xl" en haut à gauche */}
      <div className="absolute top-4 left-4 flex items-center">
        <h1 className="text-3xl font-bold text-gray-200">Xl</h1>
      </div>

      {/* Option "You are signing into Grok" en haut à droite */}
      <div className ="absolute top-4 right-4 text-gray-400 text-sm flex items-center">
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
        {/* Titre de la page de vérification */}
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          Verify your email
        </h2>

        {/* Texte d'instruction */}
        <p className="text-center mb-8 text-white">
          We've emailed a one time security code to{" "}
          <span className="font-semibold">{userEmail}</span>, please enter it below:
        </p>

        {/* Champs de saisie du code OTP (simulés) */}
        <form className="w-full mb-10">
          <div className="flex justify-center space-x-2">
            {/* Ici, nous simulons 6 champs pour le code, comme sur l'image */}
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="w-10 h-12 text-center text-2xl font-bold bg-gray-800 rounded-lg border border-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                // Pour simuler les cases vides
                style={{
                  border: '1px solid #374151', // bordure gris-700
                  backgroundColor: '#1F2937', // fond gris-800
                  // Classes Tailwind pour le focus sont déjà là
                }}
              />
            ))}
          </div>

          {/* Bouton Confirmer l'e-mail */}
          <button
            type="submit"
            className="w-full py-3 mt-10 mb-4 text-base font-semibold text-white bg-white rounded-lg hover:bg-gray-200"
          >
            Confirm email
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

export default VerifyEmailMobile;