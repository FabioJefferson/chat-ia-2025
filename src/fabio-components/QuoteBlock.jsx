// QuoteBlock.jsx

import React from 'react';

/**
 * Composant pour afficher une citation ou une définition mise en avant.
 * @param {object} props
 * @param {string} props.citation - Le corps de la citation.
 * @param {string} props.source - La source ou l'auteur de la citation.
 * @returns {JSX.Element}
 */
const QuoteBlock = ({ citation, source }) => {
  return (
    // Conteneur principal avec marges
    <div className="my-6">
      
      {/* Conteneur stylisé pour la citation */}
      <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-gray-800 rounded-lg shadow-inner">
        
        {/* Corps de la citation */}
        <p className="text-lg italic text-gray-200">
          <span className="font-serif mr-1">“</span>
          {citation}
          <span className="font-serif ml-1">”</span>
        </p>
        
        {/* Source de la citation (alignée à droite) */}
        {source && (
          <p className="text-right text-sm font-semibold text-indigo-400 mt-2 mr-2">
            — {source}
          </p>
        )}
        
      </div>
    </div>
  );
};

export default QuoteBlock;