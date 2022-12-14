import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
    const persistedReducers = persistReducer({
        key: 'techshop',
        storage,
        whiteList: ['handleCart']
    }, reducers);

    return persistedReducers;
};