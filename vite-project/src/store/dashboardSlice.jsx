import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalSales: 50000,
  settlements: 30000,
  qrGenerated: 2000,
  totalUsers: 500,
  transactions: 1200,
  revenue: 20000,
  products: [
    { id: 1, name: "Product A", price: 50, qty: 10, qr: "QR123" },
    { id: 2, name: "Product B", price: 70, qty: 5, qr: "QR456" },
  ],
  transactionsList: [
    { id: 1, user: "SK", amount: 100, date: "2024-03-05" },
    { id: 2, user: "Anitha", amount: 150, date: "2024-03-06" },
  ],
  users: [
    { id: 1, name: "SK", email: "sk@example.com", role: "Admin" },
    { id: 2, name: "Anitha", email: "anitha@example.com", role: "Merchant" },
  ],
  profile: {
    businessName: "My Business",
    email: "business@example.com",
    phone: "123-456-7890",
  },
  reports: [
    { month: "Jan", revenue: 10000, transactions: 300 },
    { month: "Feb", revenue: 12000, transactions: 350 },
    { month: "Mar", revenue: 15000, transactions: 400 },
  ],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactionsList.push(action.payload);
      state.transactions += 1;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
      state.totalUsers += 1;
    },
    updateProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { addTransaction, addProduct, addUser, updateProfile } = dashboardSlice.actions;
export default dashboardSlice.reducer;