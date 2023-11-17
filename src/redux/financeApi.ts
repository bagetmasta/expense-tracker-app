import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

type BalanceResponse = {
  totalBalance: number;
  currency: string;
  cardNumber: number;
};

type AnalyticsResponse = {
  year: number;
  monthlyData: Array<{ month: string; amount: number }>;
};

type TransactionsResponse = Array<{
  name: string;
  date: string;
  amount: number;
  currency: string;
  account: string;
  accountNumber: string;
  id: number;
  logoUrl: string;
}>;

export const financeApi = createApi({
  reducerPath: 'financeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://expense-tracker-app-4959c-default-rtdb.europe-west1.firebasedatabase.app/' }),
  endpoints: (builder) => ({
    getBalance: builder.query<BalanceResponse, void>({
      query: () => '/balance.json',
    }),
    getAnalytics: builder.query<AnalyticsResponse, number>({
      query: (year) => `/analytics/${year}.json`,
    }),
    getTransactions: builder.query<TransactionsResponse, void>({
      query: () => '/transactions.json',
    }),
  }),
});

export const {
  useGetBalanceQuery,
  useGetAnalyticsQuery,
  useGetTransactionsQuery,
} = financeApi;
