import * as React from 'react';
import { useGeolocation } from '../features/home/hooks/useGeolocation';
import { getFormattedImageUrl } from '../lib/constants';

interface Content {
    local: string;
    abroad: string;
}

export const useFormatContentBasedOnLocation = () => {
    const {
        location: { isAfrica }
    } = useGeolocation();

    const getFormattedContent = (value: Record<string, string> | string) => {
        if (typeof value === 'string') {
            return value.toLowerCase().includes('image') ? getFormattedImageUrl(value) : value;
        }
        const content: Content = { local: '', abroad: '' };
        Object.keys(value).forEach(key => {
            const formattedValue = key.includes('Image') ? getFormattedImageUrl(value[key]) : value[key];
            if (key.toLocaleLowerCase().includes('local')) {
                content.local = formattedValue;
            } else {
                content.abroad = formattedValue;
            }
        });

        return isAfrica ? content.local : content.abroad;
    };

    return React.useCallback(getFormattedContent, [isAfrica]);
};
