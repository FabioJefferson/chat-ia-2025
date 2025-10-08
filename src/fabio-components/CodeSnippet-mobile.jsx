import React from 'react';
import { IoCopyOutline } from 'react-icons/io5'; // Icône Copier
import { RiCodeSSlashLine, RiDeleteBin6Line } from 'react-icons/ri'; // Icônes Envelopper, Réduire

const CodeSnippetMobile = ({ language, code }) => {
    // Fonction pour générer les numéros de ligne
    const lines = code.split('\n');

    return (
        <div className="w-full bg-gray-900 rounded-lg overflow-hidden shadow-lg mb-6">

            {/* En-tête du Bloc de Code */}
            <div className="flex justify-between items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
                <span className="text-sm font-medium text-blue-400 uppercase">{language}</span>
                <div className="flex space-x-3 text-gray-400">
                    {/* Bouton Réduire */}
                    <button title="Réduire" className="flex items-center text-sm hover:text-white">
                        <RiDeleteBin6Line className="mr-1" /> Réduire
                    </button>
                    {/* Bouton Envelopper */}
                    <button title="Envelopper" className="flex items-center text-sm hover:text-white">
                        <RiCodeSSlashLine className="mr-1" /> Envelopper
                    </button>
                    {/* Bouton Copier */}
                    <button title="Copier" className="flex items-center text-sm hover:text-white">
                        <IoCopyOutline className="mr-1" /> Copier
                    </button>
                </div>
            </div>

            {/* Corps du Code (Numéros de Ligne + Code) */}
            <div className="p-4 pt-3 overflow-x-auto text-sm text-white font-mono">
                <pre className="flex">
                    {/* Colonne des Numéros de Ligne */}
                    <code className="pr-4 mr-4 text-right text-gray-500 select-none border-r border-gray-700">
                        {lines.map((_, index) => (
                            <div key={index} className="leading-relaxed">
                                {index + 1}
                            </div>
                        ))}
                    </code>

                    {/* Colonne du Code */}
                    <code className="flex-grow">
                        {lines.map((line, index) => (
                            <div key={index} className="leading-relaxed whitespace-pre">
                                {line}
                            </div>
                        ))}
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default CodeSnippetMobile;