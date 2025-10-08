import React from "react";
// Importez les icônes nécessaires
import { GiHamburgerMenu } from "react-icons/gi"; // Menu (☰)
import { IoIosNotificationsOutline } from "react-icons/io"; // Cloche (notification)
import { RiGpsLine } from "react-icons/ri"; // DeepSearch / Grok Logo
import { BsCardText } from "react-icons/bs"; // Dernières nouvelles
import { HiUserGroup } from "react-icons/hi"; // Modes
import { LuMic } from "react-icons/lu"; // Microphone
import { IoSend } from "react-icons/io5"; // Envoyer

const ChatHomeMobile = () => {
    // Définition des couleurs spécifiques pour l'exemple (si non définies dans tailwind.config.js)
    const colorGrokBlue = "rgba(37, 150, 190, 1)";
    const colorSuperGrok = "#4a4a4a"; // Gris foncé pour la bannière SuperGrok

    return (
        <div className="relative flex flex-col min-h-screen bg-black text-white p-4">
            {/* En-tête de la navigation (Haut de l'écran) */}
            <header className="flex justify-between items-center w-full mb-10 pt-2">
                <GiHamburgerMenu className="text-2xl text-white cursor-pointer" />
                <IoIosNotificationsOutline className="text-2xl text-white cursor-pointer" />
            </header>

            {/* Contenu principal (Logo Grok) */}
            <div className="flex-grow flex flex-col items-center justify-center">
                <div className="text-center mb-16">
                    {/* Logo Grok (simulé avec l'icône DeepSearch) */}
                    <div className="flex items-center justify-center mb-6">
                        <img className="max-h-20" src="/src/assets/ioasis-logo-removebg-preview.png" alt="" /> {/* Remplacez par votre vrai logo Grok */}
                        <span className=" text-4xl md:text-5xl lg:text-7xl   whitespace-nowrap font-bold ml-3">I-oasis Chat</span>
                    </div>

                    {/* Bouton DeepSearch */}
                    {/*           <button className="flex items-center mx-auto mb-6 px-4 py-2 text-sm font-semibold rounded-full border border-gray-600 bg-gray-800 hover:bg-gray-700">
            <RiGpsLine className="mr-2 text-white" /> DeepSearch
          </button> */}

                    {/* Options de chat rapides */}
                    <div className="flex space-x-3 justify-center">
                        <button className="flex items-center px-4 py-2 text-sm font-semibold whitespace-nowrap !rounded-full border border-gray-600 bg-gray-800 hover:bg-gray-700">
                            <BsCardText className="mr-2" /> Dernières nouvelles
                        </button>
                        <button className="flex  items-center px-4 py-2 text-sm font-semibold !rounded-full border border-gray-600 bg-gray-800 hover:bg-gray-700">
                            <HiUserGroup className="mr-2" /> Modes
                            <span className="ml-1 text-xs">▼</span>
                        </button>
                    </div>
                </div>

                {/* Bannière SuperGrok (Bas du contenu) */}
                <div className="w-full max-w-sm p-4 !rounded-3xl" style={{ backgroundColor: colorSuperGrok, backgroundImage: "radial-gradient(circle at top right, rgba(255, 255, 255, 0.1), transparent)", boxShadow: '0 4px 6px rgba(0,0,0,0.5)' }}>
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="text-xl font-bold mb-1">I-oasis SuperChat</h3>
                            <p className="text-sm text-gray-300">Accédez aux capacités étendues</p>
                        </div>
                        <button className="px-5 py-2 whitespace-nowrap text-sm font-bold text-WHITE bg-white !rounded-full hover:bg-gray-200">
                            Mettre à niveau
                        </button>
                    </div>
                </div>
            </div>

            {/* Barre de saisie flottante (Bas de l'écran) */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-black border-t border-gray-800">
                <div className="flex items-center w-full max-w-lg mx-auto bg-gray-800 rounded-full h-12 px-2">
                    <LuMic className="text-xl text-gray-400 cursor-pointer ml-2" />
                    <input
                        type="text"
                        placeholder="Demandez à Grok"
                        className="flex-grow h-full bg-transparent text-white placeholder-gray-400 focus:outline-none px-4 text-base"
                    />
                    <div className="flex items-center text-sm font-semibold text-white bg-gray-600 !rounded-full h-7.5 px-1.5 cursor-pointer mr-1">
                        <IoSend className="ml-0.5 text-base" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatHomeMobile;