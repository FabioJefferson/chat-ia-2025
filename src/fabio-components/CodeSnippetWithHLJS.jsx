// CodeSnippetWithHLJS.jsx

import React, { useState, useCallback } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { IoCopyOutline } from 'react-icons/io5';
import { RiCodeSSlashLine, RiCodeLine, RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';

const MIN_LINES_VISIBLE = 4;

const CodeSnippetWithHLJS = ({ code, language }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isWrapped, setIsWrapped] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    const totalLines = code.split('\n').length;
    const isCollapsible = totalLines > MIN_LINES_VISIBLE;
    const displayLanguage = language || 'Auto';

    const handleCopy = useCallback(() => {
        navigator.clipboard.writeText(code).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        }).catch(err => {
            console.error('Erreur lors de la copie:', err);
        });
    }, [code]);

    const handleToggleExpand = () => {
        setIsExpanded(prev => !prev);
    };

    const handleToggleWrap = () => {
        setIsWrapped(prev => !prev);
    };

    let displayedCode = code;
    let hiddenLinesCount = 0;

    if (!isExpanded && isCollapsible) {
        const lines = code.split('\n');
        displayedCode = lines.slice(0, MIN_LINES_VISIBLE).join('\n');
        hiddenLinesCount = totalLines - MIN_LINES_VISIBLE;
    }

    const wrapStyle = {
        whiteSpace: isWrapped ? 'pre-wrap' : 'pre',
        overflowX: isWrapped ? 'auto' : 'scroll',
    };

    const showLineNumbers = !isWrapped;


    return (
        <div className="w-full bg-gray-900 rounded-lg overflow-hidden shadow-lg mb-6">

            {/* 1. En-tête du Bloc de Code */}
            <div className="flex justify-between items-center px-4 py-2 bg-gray-800 border-b border-gray-700">

                {/* Nom du Langage */}
                <span className="text-sm font-medium text-blue-400 uppercase">
                    {displayLanguage}
                </span>

                {/* Boutons d'Action */}
                {/* Ajustement de l'espacement et des styles des boutons pour un "petit contour" */}
                <div className="flex items-center space-x-1 text-gray-400"> {/* space-x-1 pour un espacement serré */}

                    {/* Bouton Agrandir/Réduire */}
                    {isCollapsible && (
                        <button
                            onClick={handleToggleExpand}
                            title={isExpanded ? "Réduire" : "Agrandir"}
                            // AJOUTÉ: p-1.5, rounded-md, hover:bg-gray-700, flex items-center
                            className="p-1.5 rounded-md flex items-center justify-center hover:bg-gray-700 hover:text-white transition duration-150"
                        >
                            {isExpanded ? (
                                <>
                                    <RiArrowUpSLine className="text-xl" /> {/* Pas de mr-1 car le span gère l'espacement */}
                                    <span className="hidden md:inline ml-1 text-sm">Réduire</span> {/* ml-1 pour l'espacement avec l'icône */}
                                </>
                            ) : (
                                <>
                                    <RiArrowDownSLine className="text-xl" />
                                    <span className="hidden md:inline ml-1 text-sm">Agrandir</span>
                                </>
                            )}
                        </button>
                    )}

                    {/* Bouton Envelopper */}
                    <button
                        onClick={handleToggleWrap}
                        title={isWrapped ? "Ne pas Envelopper" : "Envelopper"}
                        // AJOUTÉ: p-1.5, rounded-md, hover:bg-gray-700, flex items-center
                        className="p-1.5 rounded-md flex items-center justify-center hover:bg-gray-700 hover:text-white transition duration-150"
                    >
                        {isWrapped ? (
                            <>
                                <RiCodeLine className="text-base" />
                                <span className="hidden md:inline ml-1 text-sm">Développer</span>
                            </>
                        ) : (
                            <>
                                <RiCodeSSlashLine className="text-base" />
                                <span className="hidden md:inline ml-1 text-sm">Envelopper</span>
                            </>
                        )}
                    </button>

                    {/* Bouton Copier */}
                    <button
                        onClick={handleCopy}
                        title="Copier le code"
                        // AJOUTÉ: p-1.5, rounded-md, hover:bg-gray-700, flex items-center
                        className="p-1.5 rounded-md flex items-center justify-center hover:bg-gray-700 hover:text-white transition duration-150"
                    >
                        <IoCopyOutline className="text-base" />
                        <span className="hidden md:inline ml-1 text-sm">
                            {isCopied ? 'Copié !' : 'Copier'}
                        </span>
                    </button>

                </div>
            </div>

            {/* 2. Corps du Code (avec Highlight.js) */}
            <SyntaxHighlighter
                language={language}
                style={atomOneDark}
                showLineNumbers={showLineNumbers}
                wrapLines={isWrapped}
                customStyle={{
                    padding: '16px 2',
                    margin: 0,
                    borderRadius: '0',
                    ...wrapStyle,
                }}
                lineNumberStyle={{
                    color: '#5c6370',
                    paddingRight: '0.5rem',
                    borderRight: '1px solid #32353e',
                }}
                codeTagProps={{
                    style: {
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