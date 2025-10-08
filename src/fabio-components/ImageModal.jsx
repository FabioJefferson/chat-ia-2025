import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { RiDownloadLine } from 'react-icons/ri';

const ImageModal = ({ imageUrl, altText, onClose }) => {
    if (!imageUrl) return null; // Ne rien rendre si aucune image n'est sélectionnée

    const handleDownload = () => {
        // Logique pour le téléchargement (ouvrir l'URL dans une nouvelle fenêtre pour le téléchargement)
        window.open(imageUrl, '_blank');
    };

    return (
        // Conteneur Modal (Fond sombre et semi-transparent)
        <div
            className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4"
            // Fermer la modale en cliquant sur le fond
            onClick={onClose}
        >

            {/* Contenu de l'Image (Stop propagation pour ne pas fermer en cliquant sur l'image) */}
            <div
                className="relative max-w-full max-h-full"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={imageUrl}
                    alt={altText}
                    className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                />

                {/* Bouton Fermer (en haut à droite, blanc) */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-gray-800 bg-opacity-70 rounded-full text-white hover:bg-gray-700 transition duration-150"
                >
                    <IoCloseOutline size={28} />
                </button>

                {/* Bouton Télécharger (en bas de l'image, comme sur votre image) */}
                <button
                    onClick={handleDownload}
                    className="absolute bottom-4 right-4 px-4 py-2 bg-gray-800 bg-opacity-80 rounded-full text-white flex items-center hover:bg-gray-700 transition duration-150"
                >
                    <RiDownloadLine className="mr-2" size={20} /> Télécharger
                </button>
            </div>
        </div>
    );
};

export default ImageModal; // À utiliser dans votre composant principal