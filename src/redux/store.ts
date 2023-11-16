import { configureStore } from '@reduxjs/toolkit';
import { financeApi } from './financeApi';

export const store = configureStore({
  reducer: {
    [financeApi.reducerPath]: financeApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    financeApi.middleware,
  ],
});
