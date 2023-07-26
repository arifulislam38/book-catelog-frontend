import { configureStore } from "@reduxjs/toolkit";
// import productReducer from "./features/products/productSlice";
import { api } from "./Api/apiSlice";

const Store = configureStore({
  reducer: {
    // product: productReducer,
    // [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
