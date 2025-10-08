import React, { useState } from 'react';
import {
    IoReload, IoShareOutline, IoThumbsUpOutline, IoThumbsDownOutline, IoEllipsisHorizontalOutline
} from 'react-icons/io5'; // Icônes iOS (rafraîchir, partager, etc.)
import { FiCopy } from 'react-icons/fi'; // Icône de copie
import StarRating from './StarRating'; // Importe le composant de notation

const ChatReactionButtons = () => {
    const [currentRating, setCurrentRating] = useState(0);

    const handleRatingChange = (newRating) => {
        setCurrentRating(newRating);
        console.log("Nouvelle note donnée :", newRating);
        // Ici, vous pouvez envoyer cette note à votre backend si nécessaire
    };

    const ReactionButton = ({ icon: Icon, label, onClick }) => (
        <button
            className="!p-1 -mt-6 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors duration-200 flex items-center justify-center"
            aria-label={label}
            onClick={onClick}
        >
            <Icon size={20} />
        </button>
    );

    return (
        <div className="flex items-center justify-center space-x-1.5 p-2 bg-gray-950 rounded-full shadow-lg">

            {/* Bouton Rafraîchir */}
            <ReactionButton icon={IoReload} label="Rafraîchir" onClick={() => console.log('Rafraîchir')} />

            {/* Bouton Copier */}
            <ReactionButton icon={FiCopy} label="Copier" onClick={() => console.log('Copier')} />

            {/* Bouton Partager */}
            <ReactionButton icon={IoShareOutline} label="Partager" onClick={() => console.log('Partager')} />

            {/* Séparateur visuel */}
            <div className="w-px h-6 bg-gray-700 -mt-6"></div>

            {/* Bouton Pouce Haut */}
            {/* <ReactionButton icon={IoThumbsUpOutline} label="J'aime" onClick={() => console.log('J\'aime')} /> */}

            {/* Bouton Pouce Bas */}
            {/* <ReactionButton icon={IoThumbsDownOutline} label="Je n'aime pas" onClick={() => console.log('Je n\'aime pas')} /> */}

            {/* Séparateur visuel */}
            <div className="w-px h-6 bg-gray-700 mx-1 -mt-6"></div>

            {/* Bouton Notation Étoiles */}
            <div className="ml-1 mr-2 -mt-6">
                <StarRating initialRating={currentRating} onRatingChange={handleRatingChange} />
            </div>

            {/* Bouton Plus (...) */}
            <ReactionButton icon={IoEllipsisHorizontalOutline} label="Plus d'options" onClick={() => console.log('Plus d\'options')} />
        </div>
    );
};

export default ChatReactionButtons;