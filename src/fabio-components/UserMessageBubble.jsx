// UserMessageBubble.jsx

import React from 'react';

/**
 * Composant de bulle de message affichant le texte de l'utilisateur.
 * @param {object} props
 * @param {string} props.message - Le contenu du message à afficher.
 * @returns {JSX.Element}
 */
const UserMessageBubble = ({ message }) => {
    return (
        // Conteneur principal : aligne la bulle à droite (l'utilisateur)
        <div className="flex justify-end w-full mb-6">

            {/* Bulle de message : fond gris, coins arrondis, taille maximale */}
            <div className="bg-gray-700 pl-4 py-2 rounded-xl rounded-br-none max-w-xs md:max-w-md">

                {/* Texte du message */}
                <p className="text-left text-base font-medium">
                    {message}
                </p>

            </div>
        </div>
    );
};

export default UserMessageBubble;