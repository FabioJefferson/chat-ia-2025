import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'; // Importe une icône d'étoile pleine

const StarRating = ({ initialRating = 0, onRatingChange }) => {
    const [rating, setRating] = useState(initialRating);
    const [hover, setHover] = useState(0); // Pour l'effet de survol

    return (
        <div className="flex items-center space-x-0.5">
            {[...Array(5)].map((_, index) => {
                const currentRating = index + 1;
                return (
                    <label key={index} className="cursor-pointer">
                        <input
                            type="radio"
                            name="rating"
                            value={currentRating}
                            onClick={() => {
                                setRating(currentRating);
                                if (onRatingChange) onRatingChange(currentRating);
                            }}
                            className="hidden" // Cache le bouton radio natif
                        />
                        <FaStar
                            className="text-xl transition-colors duration-200"
                            color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"} // Couleur or si sélectionnée/survolée
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(0)}
                        />
                    </label>
                );
            })}
        </div>
    );
};

export default StarRating;