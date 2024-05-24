import { combineReducers, configureStore } from '@reduxjs/toolkit'
import CartReducer from './CartReducer'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

const persistConfig = { key: 'root', storage,}

const appReducer = combineReducers({ CartReducer });
 
const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = configureStore({
  reducer:  persistedReducer ,
});

export const persistor = persistStore(store);