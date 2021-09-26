import Rating from '@material-ui/lab/Rating';
import React, { SetStateAction } from 'react';

interface StarRatingProps {
    rating: number | null;
    setRating: (rating: number | null) => SetStateAction<number | null>;
    isReadOnly?: boolean;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    classNames?: string;
}

export function StarRating({
    rating,
    setRating,
    isReadOnly = true,
    disabled = false,
    size = 'small',
    classNames = ''
}: StarRatingProps) {
    return (
        <Rating
            name='read-only'
            value={rating}
            size={size}
            className={classNames}
            readOnly={isReadOnly}
            disabled={disabled}
            onChange={(event, newValue) => {
                setRating(newValue);
            }}
        />
    );
}
