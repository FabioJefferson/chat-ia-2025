// AITableMessage.jsx

import React, { useCallback, useState } from 'react';

import { IoCopyOutline } from 'react-icons/io5';

// Icônes simples (Remplacer par des composants d'icônes réels si possible)
const CopyIcon = () => '📋';
const CheckIcon = () => '✅';

// Fonction utilitaire pour rendre les clés (e.g., "acces_gratuit") plus lisibles (e.g., "Accès Gratuit")
const formatLabel = (key) => {
    return key
        .replace(/_/g, ' ') // Remplacer les underscores par des espaces
        .replace(/\b\w/g, char => char.toUpperCase()); // Mettre en majuscule le début de chaque mot
};


/**
 * Composant de message affichant des données sous forme de tableau avec fonctionnalité de copie CSV.
 * Les en-têtes du tableau sont générés dynamiquement à partir des clés du premier objet dans 'data'.
 */
const AITableMessage = ({ data, title }) => {
    const [copied, setCopied] = useState(false);

    if (!data || data.length === 0) {
        return null;
    }

    // 💡 LOGIQUE DYNAMIQUE DES HEADERS
    // 1. Extraire les clés du premier objet de données.
    const dataKeys = Object.keys(data[0]);

    // 2. Créer la structure des headers : { key: 'plateforme', label: 'Plateforme' }
    const dynamicHeaders = dataKeys.map(key => ({
        key: key,
        label: formatLabel(key)
    }));


    // Fonction pour convertir les données en chaîne CSV (utilise maintenant dynamicHeaders)
    const convertToCSV = (data, headers) => {
        // 1. En-têtes (labels séparés par des virgules)
        const headerRow = headers.map(h => h.label).join(',');

        // 2. Lignes de données
        const dataRows = data.map(row =>
            headers.map(h =>
                // Assurez-vous d'entourer les champs de guillemets doubles si nécessaire
                `"${row[h.key] ? String(row[h.key]).replace(/"/g, '""') : ''}"`
            ).join(',')
        );

        return [headerRow, ...dataRows].join('\n');
    };

    // Fonction de gestion de la copie
    const handleCopy = useCallback(() => {
        const csvContent = convertToCSV(data, dynamicHeaders);

        navigator.clipboard.writeText(csvContent).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }).catch(err => {
            console.error('Erreur lors de la copie CSV:', err);
        });
    }, [data, dynamicHeaders]); // Dépendance ajoutée pour la flexibilité


    return (
        <div className="my-6">
            {/* Texte d'introduction et icône de copie */}
            {title && (
                <div className="flex justify-between items-center mb-2">
                    <p className="text-gray-300 text-sm">{title}</p>
                    <button
                        onClick={handleCopy}
                        className="p-2 ml-4 rounded-full hover:bg-gray-800 transition duration-150 relative group"
                        aria-label="Copier le tableau au format CSV"
                    >
                        {copied ? (
                            <>
                                <CheckIcon />
                                <span className="absolute right-full top-1/2 transform -translate-y-1/2 mr-2 px-2 py-1 bg-gray-600 text-white text-xs rounded opacity-100 transition-opacity whitespace-nowrap">
                                    Copié !
                                </span>
                            </>
                        ) : (
                            <>
                                <IoCopyOutline />
                                <span className="absolute right-full top-1/2 transform -translate-y-1/2 mr-2 px-2 py-1 bg-gray-600 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    Copier en CSV
                                </span>
                            </>
                        )}
                    </button>
                </div>
            )}

            {/* Conteneur du Tableau */}
            <div className="overflow-x-auto border border-gray-700 rounded-lg">
                <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                        <tr className="bg-black">
                            {/* Utilise les headers générés dynamiquement */}
                            {dynamicHeaders.map((header) => (
                                <th
                                    key={header.key}
                                    className="px-4 py-3 text-left text-sm font-semibold text-gray-400 uppercase tracking-wider"
                                >
                                    {header.label}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody className="bg-black divide-y divide-gray-700">
                        {/* Itération sur les lignes de données */}
                        {data.map((row, index) => (
                            <tr key={index} className="hover:bg-gray-800">
                                {/* Itération sur les cellules basées sur les clés du header */}
                                {dynamicHeaders.map((header, cellIndex) => (
                                    <td
                                        key={`${index}-${header.key}`}
                                        // Optionnel: Style le premier td en gras (première colonne)
                                        className={`px-4 py-3 text-gray-300 ${cellIndex === 0 ? 'font-bold text-white whitespace-nowrap' : ''}`}
                                    >
                                        {row[header.key]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AITableMessage;