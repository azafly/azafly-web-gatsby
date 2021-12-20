import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import storage from 'redux-persist/lib/storage';
import createPersistPlugin from '@rematch/persist';

import { models, RootModel } from './models';

const persistPlugin = createPersistPlugin<RematchRootState<RootModel>, RootModel>({
    key: 'root',
    storage,
    version: 2
});

export const store = init<RootModel>({
    models,
    plugins: [persistPlugin],
    redux: {
        devtoolOptions: {
            trace: true
        }
    }
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
