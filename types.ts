
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
  ACCOUNT = '/account'
}
