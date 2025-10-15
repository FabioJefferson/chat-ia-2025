import React, { useState, useEffect, useRef } from 'react';
import {
    IoReload, IoShareOutline, IoThumbsUpOutline, IoThumbsDownOutline, IoEllipsisHorizontalOutline
} from 'react-icons/io5'; // Icônes iOS (rafraîchir, partager, etc.)
import { FiCopy } from 'react-icons/fi'; // Icône de copie
import StarRating from './StarRating'; // Importe le composant de notation

// --- NOUVEAU COMPOSANT : Dropdown pour les options de message ---
const MessageOptionsDropdown = ({ isVisible, onClose, onOptionClick }) => {
    if (!isVisible) return null;

    const options = [
        { label: 'Signaler un problème', action: 'report' },
        { label: 'Exporter en PDF', action: 'export' },
        { label: 'Créer un lien de partage', action: 'share' },
    ];

    return (
        // Positionné juste au-dessus du bouton "..."
        // Notez: 'bottom-full' le place au-dessus du conteneur parent (le flex div)
        <div className="absolute right-0 bottom-full mb-2 w-56 !bg-gray-900 rounded-xl shadow-2xl z-50 overflow-hidden">
            <div className="">
                {options.map((option) => (
                    <button
                        key={option.action}
                        className="w-full text-left p-2 text-white !rounded-none hover:bg-gray-700 transition-colors"
                        onClick={() => {
                            onOptionClick(option.action);
                            onClose();
                        }}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

// -----------------------------------------------------------------

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

    // NOUVEL ÉTAT pour gérer l'affichage du menu
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    // 💡 1. Créer une référence pour le conteneur principal du menu
    const dropdownRef = useRef(null);

    // Gestion du Clic en Dehors
    useEffect(() => {

        const handleClickOutside = (event) => {
            // Si la référence existe ET que le clic est en dehors du conteneur
            // (dropdownRef.current)
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownVisible(false);
            }
        }

        // Attache l'écouteur
        document.addEventListener("mousedown", handleClickOutside);

        // Fonction de nettoyage
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []); // Le tableau de dépendances vide signifie que l'effet ne s'exécute qu'une fois au montage.

    // NOUVELLE FONCTION pour gérer les clics dans le menu
    const handleOptionClick = (action) => {
        console.log(`Option du message sélectionnée : ${action}`);
        // Logique spécifique ici...
    };

    return (
        <div className="flex items-center justify-center space-x-1.5 p-2 bg-gray-950 rounded-full shadow-lg relative" ref={dropdownRef}>

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
            <ReactionButton
                icon={IoEllipsisHorizontalOutline}
                label="Plus d'options"
                // Inverse l'état d'affichage au clic
                onClick={() => setIsDropdownVisible(!isDropdownVisible)}
            />

            {/* Composant Dropdown positionné */}
            <MessageOptionsDropdown
                isVisible={isDropdownVisible}
                onClose={() => setIsDropdownVisible(false)} // Permet de fermer le menu
                onOptionClick={handleOptionClick}
            />
        </div>
    );
};

export default ChatReactionButtons;