// MoreOptionsDropdown.jsx

import React from 'react';

// Si vous avez des icônes pour ces options, importez-les ici

const MoreOptionsDropdown = ({ isVisible, onClose, onOptionClick }) => {
    // Si le menu n'est pas visible, ne rien afficher
    if (!isVisible) return null;

    // Les options du menu
    const options = [
        { label: 'Signaler un problème', action: 'report' },
        { label: 'Exporter en PDF', action: 'export' },
        { label: 'Créer un lien de partage', action: 'share' },
    ];

    return (
        // Le conteneur principal du menu (positionné absolument)
        // Note: 'right-4 top-14' positionne le menu juste sous l'icône des trois points
        <div className="absolute right-4 top-14 mt-1 w-60 bg-gray-800 rounded-xl shadow-2xl z-50 overflow-hidden">

            {/* L'overlay semi-transparent pour fermer le menu en cliquant à l'extérieur */}
            {/* On s'assure qu'il est grand (min-h-screen) pour couvrir tout le contenu */}
            <div
                className="fixed inset-0 min-h-screen bg-black/5 z-40"
                onClick={onClose}
            />

            {/* Le contenu du menu lui-même (doit être au-dessus de l'overlay) */}
            <div className="relative z-50 p-2">
                {options.map((option) => (
                    <button
                        key={option.action}
                        className="w-full text-left p-3 text-white rounded-lg hover:bg-white transition-colors"
                        onClick={() => {
                            onOptionClick(option.action);
                            onClose(); // Ferme le menu après le clic
                        }}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MoreOptionsDropdown;