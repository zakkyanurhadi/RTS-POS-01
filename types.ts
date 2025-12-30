
export interface Store {
  id: string;
  name: string;
  address: string;
  category: string;
  status: 'Buka' | 'Tutup';
  image?: string;
  icon?: string;
}

export interface User {
  name: string;
  businessName: string;
  email: string;
  phone?: string;
  profilePic?: string;
}

export enum AppRoute {
  LOGIN = '/login',
  DASHBOARD = '/',
  CREATE_STORE = '/create-store',
  ACCOUNT = '/account',
  POS_HOME = '/pos',
  POS_PRODUCTS = '/pos/products',
  POS_TRANSACTIONS = '/pos/transactions',
  POS_SUMMARY = '/pos/summary',
  POS_PROFILE = '/pos/profile'
}

export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number | 'infinite';
  image?: string;
  category: string;
}

export interface Transaction {
  id: string;
  time: string;
  date: string;
  amount: number;
  status: 'Lunas' | 'Pending' | 'Gagal';
  method: 'QRIS' | 'Tunai' | 'Kartu';
}

export enum Tab {
  Home = 'Home',
  Produk = 'Produk',
  Kasir = 'Kasir',
  Ringkasan = 'Ringkasan',
  Saya = 'Saya'
}
