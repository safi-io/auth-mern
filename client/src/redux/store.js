import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice.js';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Combine reducers to add the user slice to the root state
const rootReducer = combineReducers({
  user: userReducer, // The user state will be available under state.user
});

// Configuration for persisting the Redux store
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

// Create a persisted reducer with the persist configuration
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Create the persistor for the persisted store
export const persistor = persistStore(store);
