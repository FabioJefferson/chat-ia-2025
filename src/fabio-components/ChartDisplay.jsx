import React from 'react';
import {
    Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement, PointElement, RadialLinearScale,
    BubbleController,
    ScatterController,
} from 'chart.js';
import { Bar, Doughnut, Line, Pie, PolarArea, Radar, Scatter, Bubble } from 'react-chartjs-2'; // 💡 Bubble est ici

// 1. Enregistrement des éléments et échelles nécessaires pour Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    LineElement,
    PointElement,
    RadialLinearScale,

    // 💡 ENREGISTREMENT DES NOUVEAUX CONTRÔLEURS
    // BubbleController est essentiel pour le type Bubble
    BubbleController,
    ScatterController,
);

// Composant ChartDisplay
const ChartDisplay = ({ chartType, data, title, legendLabel }) => {

    // 2. Configuration des options communes et spécifiques
    const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    color: '#a0a0a0',
                    generateLabels: (chart) => {
                        const labels = ChartJS.defaults.plugins.legend.labels.generateLabels(chart);
                        if (legendLabel && labels.length > 0) {
                            // Assurez-vous que c'est un type de graphique qui a des labels simples
                            if (chart.config.type !== 'pie' && chart.config.type !== 'doughnut') {
                                labels[0].text = legendLabel;
                            }
                        }
                        return labels;
                    }
                },
            },
            title: {
                display: true,
                text: title,
                color: '#ffffff',
                font: {
                    size: 18,
                    weight: 'bold',
                },
                padding: {
                    top: 10,
                    bottom: 10
                }
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = context.dataset.label || '';

                        // 💡 LOGIQUE SPÉCIFIQUE POUR BUBBLE
                        if (context.chart.config.type === 'bubble') {
                            const dataPoint = context.raw;
                            // Assurez-vous que x, y, et r existent pour le contexte
                            return `${context.dataset.label} | X: ${dataPoint.x}, Y: ${dataPoint.y}, R: ${dataPoint.r}`;
                        }
                        // LOGIQUE PAR DÉFAUT pour les autres types
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += new Intl.NumberFormat('fr-FR').format(context.parsed.y);
                        }
                        return label;
                    }
                },
                bodyColor: '#ffffff',
                titleColor: '#ffffff',
                backgroundColor: 'rgba(0,0,0,0.7)',
                borderColor: '#555',
                borderWidth: 1
            }
        },
        scales: {
            x: {
                ticks: { color: '#a0a0a0' },
                grid: { color: '#333' }
            },
            y: {
                ticks: { color: '#a0a0a0' },
                grid: { color: '#333' }
            }
        }
    };

    // 3. Rendu conditionnel du type de graphique
    const renderChart = () => {
        switch (chartType) {
            case 'Bar':
                return <Bar data={data} options={commonOptions} />;
            case 'Doughnut':
                const doughnutOptions = { ...commonOptions };
                delete doughnutOptions.scales;
                return <Doughnut data={data} options={doughnutOptions} />;
            case 'Line':
                return <Line data={data} options={commonOptions} />;
            case 'Pie':
                const pieOptions = { ...commonOptions };
                delete pieOptions.scales;
                return <Pie data={data} options={pieOptions} />;
            case 'PolarArea':
                const polarAreaOptions = { ...commonOptions };
                delete polarAreaOptions.scales;
                return <PolarArea data={data} options={polarAreaOptions} />;
            case 'Radar':
                const radarOptions = {
                    ...commonOptions,
                    scales: {
                        r: {
                            ticks: { color: '#a0a0a0', backdropColor: '#282c34' },
                            grid: { color: '#333' },
                            pointLabels: { color: '#a0a0a0' }
                        }
                    }
                };
                return <Radar data={data} options={radarOptions} />;
            case 'Scatter':
                return <Scatter data={data} options={commonOptions} />;

            // 💡 NOUVEAU CASE POUR BUBBLE
            case 'Bubble':
                // Bubble utilise des axes X et Y linéaires, donc commonOptions est parfait
                return <Bubble data={data} options={commonOptions} />;

            default:
                return <p className="text-red-400">Type de graphique non supporté : {chartType}</p>;
        }
    };

    return (
        <>
            <div className="bg-gray-900 p-4 rounded-lg shadow-lg mb-6 max-w-lg mx-auto">
                <div className="h-80 w-full flex items-center justify-center">
                    {renderChart()}
                </div>
                {/* ... Pied de page inchangé ... */}
            </div>
            {/* Le séparateur horizontal indépendant */}
            <hr className="border-t-1 border-gray-500 w-full mx-auto" />
        </>
    );
};

export default ChartDisplay;