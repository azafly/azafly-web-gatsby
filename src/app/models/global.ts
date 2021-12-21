import { createModel } from '@rematch/core';

import { RootModel } from './index';

export type ViewState = 'local' | 'abroad';

interface GlobalState {
    userCurrentCountry: any;
    isAfrica?: boolean;
    images: {
        home: {
            hero: any;
        };
    };
}

const authState: GlobalState = {
    userCurrentCountry: {},
    isAfrica: false,
    images: {
        home: {
            hero: ''
        }
    }
};

export const global = createModel<RootModel>()({
    state: authState,
    reducers: {
        setIsLocationAfrica(state, payload: boolean | undefined) {
            return { ...state, isAfrica: payload ?? false };
        },
        setUserCountry(state, payload: any) {
            return { ...state, userCurrentCountry: payload };
        },
        setHomeImage(state, payload: GlobalState['images']) {
            return { ...state, images: payload };
        }
    }
});
