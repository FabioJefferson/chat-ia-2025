// CodeSnippetWithHLJS.jsx

import React, { useState, useCallback } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
// Utilisation du thème atomOneDark pour un style moderne sombre
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { IoCopyOutline } from 'react-icons/io5';
// RiCodeSSlashLine: Icône pour Envelopper / RiCodeLine: Icône pour Ne pas Envelopper
import { RiCodeSSlashLine, RiCodeLine, RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';

// Constante pour le nombre de lignes affichées en mode réduit
const MIN_LINES_VISIBLE = 4;

/**
 * Composant pour afficher un snippet de code avec en-tête, coloration syntaxique,
 * et fonctionnalités de Réduire/Agrandir, Envelopper et Copier.
 */
const CodeSnippetWithHLJS = ({ code, language }) => {
    // --- États du composant ---
    const [isExpanded, setIsExpanded] = useState(false); // Gère l'état réduit/agrandi
    const [isWrapped, setIsWrapped] = useState(false);   // Gère l'enveloppement du texte
    const [isCopied, setIsCopied] = useState(false);     // Gère l'état de la copie

    const totalLines = code.split('\n').length;
    const isCollapsible = totalLines > MIN_LINES_VISIBLE;
    const displayLanguage = language || 'Auto';

    // ------------------------------------
    // 💡 LOGIQUE DES ACTIONS
    // ------------------------------------

    // 1. Gère la copie du code dans le presse-papiers
    const handleCopy = useCallback(() => {
        navigator.clipboard.writeText(code).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        }).catch(err => {
            console.error('Erreur lors de la copie:', err);
        });
    }, [code]);

    // 2. Gère l'état Réduire/Agrandir
    const handleToggleExpand = () => {
        setIsExpanded(prev => !prev);
    };

    // 3. Gère l'enveloppement (wrap) du texte
    const handleToggleWrap = () => {
        setIsWrapped(prev => !prev);
    };

    // ------------------------------------
    // 💡 LOGIQUE D'AFFICHAGE DU CODE
    // ------------------------------------

    // Contenu réel à afficher (réduit ou complet)
    let displayedCode = code;
    let hiddenLinesCount = 0;

    if (!isExpanded && isCollapsible) {
        // En mode réduit, on tronque le code
        const lines = code.split('\n');
        displayedCode = lines.slice(0, MIN_LINES_VISIBLE).join('\n');
        hiddenLinesCount = totalLines - MIN_LINES_VISIBLE;
    }


    // Style pour l'enveloppement du texte
    const wrapStyle = {
        // 'pre-wrap' permet à la ligne de se briser. 'pre' est par défaut (défilement horizontal).
        whiteSpace: isWrapped ? 'pre-wrap' : 'pre',
        overflowX: isWrapped ? 'auto' : 'scroll',
    };

    // On masque les numéros de ligne quand le texte est enveloppé
    const showLineNumbers = !isWrapped;


    return (
        <div className="w-full bg-gray-900 rounded-lg overflow-hidden shadow-lg mb-6">

            {/* 1. En-tête du Bloc de Code */}
            <div className
                ="flex justify-between items-center px-4 py-2 bg-gray-800 border-b border-gray-700">

                {/* Nom du Langage */}
                <span className="text-sm font-medium text-blue-400 uppercase">
                    {displayLanguage}
                </span>

                {/* Boutons d'Action */}
                <div className="flex space-x-4 text-gray-400">

                    {/* Bouton Agrandir/Réduire */}
                    {isCollapsible && (
                        <button
                            onClick={handleToggleExpand}
                            title={isExpanded ? "Réduire" : "Agrandir"}
                            className="flex items-center text-sm hover:text-white transition duration-150"
                        >
                            {isExpanded ? (
                                <>
                                    <RiArrowUpSLine className="text-xl mr-1" /> Réduire
                                </>
                            ) : (
                                <>
                                    <RiArrowDownSLine className="text-xl mr-1" /> Agrandir
                                </>
                            )}
                        </button>
                    )}

                    {/* Bouton Envelopper */}
                    <button
                        onClick={handleToggleWrap}
                        title={isWrapped ? "Ne pas Envelopper" : "Envelopper"}
                        className="flex items-center text-sm hover:text-white transition duration-150"
                    >
                        {/* 💡 L'icône change en fonction de l'état */}
                        {isWrapped ? (
                            <>
                                <RiCodeLine className="mr-1 text-base" />
                                Développer
                            </>
                        ) : (
                            <>
                                <RiCodeSSlashLine className="mr-1 text-base" />
                                Envelopper
                            </>
                        )}

                    </button>

                    {/* Bouton Copier */}
                    <button
                        onClick={handleCopy}
                        title="Copier le code"
                        className="flex items-center text-sm transition duration-150"
                    >
                        <IoCopyOutline className="mr-1 text-base" /> {isCopied ? 'Copié !' : 'Copier'}
                    </button>

                </div>
            </div>

            {/* 2. Corps du Code (avec Highlight.js) */}
            <SyntaxHighlighter
                language={language}
                style={atomOneDark}
                // 💡 showLineNumbers: Masqué si le contenu est enveloppé
                showLineNumbers={showLineNumbers}
                wrapLines={isWrapped}
                customStyle={{
                    padding: '16px 2',
                    margin: 0,
                    borderRadius: '0',
                    ...wrapStyle,
                }}
                // Le style des numéros de ligne n'est appliqué que si showLineNumbers est true
                lineNumberStyle={{
                    color: '#5c6370',
                    paddingRight: '0.5rem',
                    borderRight: '1px solid #32353e',
                }}
                codeTagProps={{
                    style: {
                        // Nécessaire pour forcer le wrapping des lignes dans le codeTag
                        whiteSpace: isWrapped ? 'pre-wrap' : 'pre',
                    }
                }}
            >
                {displayedCode}
            </SyntaxHighlighter>

            {/* 3. Message "X lignes cachées" en mode réduit */}
            {hiddenLinesCount > 0 && (
                <div
                    className="px-4 py-2 bg-gray-800 text-gray-400 text-sm cursor-pointer hover:bg-gray-700"
                    onClick={handleToggleExpand}
                >
                    {hiddenLinesCount} ligne{hiddenLinesCount > 1 ? 's' : ''} cachée{hiddenLinesCount > 1 ? 's' : ''}
                </div>
            )}
        </div>
    );
};

export default CodeSnippetWithHLJS;