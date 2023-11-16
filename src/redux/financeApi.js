import {
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

// type BalanceResponse = {
//   totalBalance: number;
//   currency: string;
// };

// type AnalyticsResponse = {
//   year: number;
//   monthlyData: Array<{ month: string; amount: number }>;
// };

// type TransactionsResponse = Array<{
//   name: string;
//   date: string;
//   amount: number;
//   currency: string;
//   account: string;
//   accountNumber: string;
// }>;

// export const financeApi = createApi({
//   reducerPath: 'financeApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://expense-tracker-app-4959c-default-rtdb.europe-west1.firebasedatabase.app/' }),
//   endpoints: (builder) => ({
//     getBalance: builder.query<BalanceResponse, void>({
//       query: () => '/balance',
//       providesTags: ['Balance'],
//     }),
//     getAnalytics: builder.query<AnalyticsResponse, number>({
//       query: (year) => `/analytics?year=${year}`,
//       providesTags: (result?: AnalyticsResponse, error?: FetchBaseQueryError, year?: number) =>
//       result ? [{ type: 'Analytics', id: year?.toString() }] : [{ type: 'Analytics' }],
//     }),
//     getTransactions: builder.query<TransactionsResponse, void>({
//       query: () => '/transactions',
//       providesTags: ['Transactions'],
//     }),
//   }),
// });

// export const {
//   useGetBalanceQuery,
//   useGetAnalyticsQuery,
//   useGetTransactionsQuery,
// } = financeApi;

export const financeApi = createApi({
  reducerPath: "financeApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://expense-tracker-app-4959c-default-rtdb.europe-west1.firebasedatabase.app/",
  }),
  endpoints: (builder) => ({
    getBalance: builder.query({
      query: () => "/balance",
      providesTags: ["Balance"],
    }),
    getAnalytics: builder.query({
      query: (year) => `/analytics?year=${year}`,
      providesTags: (result, error, year) => [{ type: "Analytics", year }],
    }),
    getTransactions: builder.query({
      query: () => "/transactions",
      providesTags: ["Transactions"],
    }),
  }),
});

export const {
  useGetBalanceQuery,
  useGetAnalyticsQuery,
  useGetTransactionsQuery,
} = financeApi;
