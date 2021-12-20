import { createModel } from '@rematch/core';

import { RootModel } from './index';

export type ViewState = 'local' | 'abroad';

interface GlobalState {
    isAfrica?: boolean;
}

const authState: GlobalState = {
    isAfrica: false
};

export const global = createModel<RootModel>()({
    state: authState,
    reducers: {
        setIsLocationAfrica(state, payload: boolean | undefined) {
            return { ...state, isAfrica: payload ?? false };
        }
    }
});
