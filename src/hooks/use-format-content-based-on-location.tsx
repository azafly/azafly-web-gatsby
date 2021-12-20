import * as React from 'react';
import { useSelector } from 'react-redux';

import { getFormattedImageUrl } from '../lib/constants';
import { RootState } from '../app/store';

interface Content {
    local: string;
    abroad: string;
}

export const useFormatContentBasedOnLocation = (): any => {
    const { isAfrica } = useSelector((state: RootState) => state.global);

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
