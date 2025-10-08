import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// Nombre d'images affichées par page dans la grille
const IMAGES_PER_PAGE = 2;

const ImageGalleryMobile = ({ images, initialPageIndex, onImageSelect }) => {

    // État pour la page de vignettes actuelle (et non l'image individuelle)
    const [currentPage, setCurrentPage] = React.useState(initialPageIndex || 0);

    const totalImages = images.length;
    const totalPages = Math.ceil(totalImages / IMAGES_PER_PAGE);

    // Calcul de l'index de début et de fin pour la pagination
    const startIndex = currentPage * IMAGES_PER_PAGE;
    const endIndex = startIndex + IMAGES_PER_PAGE;
    const imagesToDisplay = images.slice(startIndex, endIndex);

    // Fonctions de navigation pour les pages de la grille
    const navigate = (direction) => {
        if (direction === 'next' && currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        } else if (direction === 'prev' && currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Fonction pour mapper le nombre d'images par ligne à la classe Tailwind
    const getGridColumnsClass = (count) => {
        switch (count) {
            case 1:
                return 'grid-cols-1';
            case 2:
                return 'grid-cols-2';
            case 3:
                return 'grid-cols-3'; // Comme dans votre tout premier exemple
            case 4:
                return 'grid-cols-4';
            // Ajoutez d'autres cas si nécessaire
            default:
                return 'grid-cols-2'; // Valeur par défaut si non gérée
        }
    };

    const gridClass = getGridColumnsClass(IMAGES_PER_PAGE);

    return (
        <div className="bg-gray-900 p-3 rounded-xl shadow-lg mb-4 max-w-lg mx-auto">

            {/* En-tête de navigation X/Y (ex: 1/2, 2/2) */}
            <div className="flex justify-end items-center mb-3 text-sm text-white">
                <span className="mr-3 text-gray-400">
                    {currentPage + 1} / {totalPages}
                </span>

                {/* Flèche Précédent */}
                <button
                    onClick={() => navigate('prev')}
                    className="p-1 rounded-md text-gray-400 hover:bg-gray-700 disabled:opacity-30 transition-colors"
                    disabled={currentPage === 0}
                >
                    <IoIosArrowBack size={20} />
                </button>

                {/* Flèche Suivant */}
                <button
                    onClick={() => navigate('next')}
                    className="p-1 rounded-md text-white bg-blue-600 hover:bg-blue-500 disabled:bg-gray-700 disabled:text-gray-500 ml-2 transition-colors"
                    disabled={currentPage === totalPages - 1 || totalPages === 0}
                >
                    <IoIosArrowForward size={20} />
                </button>
            </div>

            {/* Grille d'Images (Affichage des Vignettes) */}
            {/* <div className={`grid grid-cols-${IMAGES_PER_PAGE} gap-2`}>Bien que cette syntaxe par concaténation (grid-cols-${IMAGES_PER_PAGE}) soit techniquement valide en JavaScript, elle pose un problème majeur avec l'optimisation de Tailwind CSS appelée "Purging" (ou Tree-Shaking). */}
            <div className={`grid ${gridClass} gap-2`}>
                {imagesToDisplay.map((image) => (
                    <div
                        key={image.id}
                        className="relative cursor-pointer overflow-hidden rounded-lg shadow-md aspect-w-16 aspect-h-9"
                        onClick={() => onImageSelect(image)}
                    >
                        <img
                            src={image.url}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        {/* Texte de la vignette (si pertinent, comme "Fuallly Charts") */}
                        <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-xs font-semibold p-1 text-center">
                            {image.label || image.alt.substring(0, 10) + '...'}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ImageGalleryMobile;