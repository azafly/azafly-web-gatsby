import * as React from 'react';
import { useGeolocation } from '../features/home/hooks/useGeolocation';

interface Content {
    local: string;
    abroad: string;
}

export const useFormatContentBasedOnLocation = () => {
    const {
        location: { isAfrica }
    } = useGeolocation();

    const getFormattedContent = (contentObject: Record<string, any>) => {
        const content: Content = { local: '', abroad: '' };
        Object.keys(contentObject).forEach(key => {
            if (key.includes('local')) {
                content.local = contentObject[key];
            } else {
                content.abroad = contentObject[key];
            }
        });

        return isAfrica ? content.local : content.abroad;
    };

    return React.useCallback(getFormattedContent, [isAfrica]);
};
