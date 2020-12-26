import React from 'react'
import { starRating } from '../utils/starRating'
import propTypes from 'prop-types';

const Rating = ({ rating, text, color }) => {
    return (
        <div className="rating">
            <span>
                <i style={{ color }} className={starRating(rating, 1, 0.5)}></i>
            </span>
            <span>
                <i style={{ color }} className={starRating(rating, 2, 1.5)}></i>
            </span>
            <span>
                <i style={{ color }} className={starRating(rating, 3, 2.5)}></i>
            </span>
            <span>
                <i style={{ color }} className={starRating(rating, 4, 3.5)}></i>
            </span>
            <span>
                <i style={{ color }} className={starRating(rating, 5, 4.5)}></i>
            </span>
            <span>{text && text}</span>
        </div>
    )
}

Rating.defaultProps = {
    color: '#74db78'
}

Rating.propTypes = {
    rating: propTypes.number.isRequired,
    text: propTypes.string.isRequired,
    color: propTypes.string
}

export default Rating
