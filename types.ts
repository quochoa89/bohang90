
export enum View {
  DASHBOARD = 'DASHBOARD',
  ORDERS = 'ORDERS',
  CUSTOMERS = 'CUSTOMERS',
  PRODUCTS = 'PRODUCTS',
  CREATE_ORDER = 'CREATE_ORDER',
  ADD_CUSTOMER = 'ADD_CUSTOMER',
  ADD_PRODUCT = 'ADD_PRODUCT',
  CUSTOMER_DETAIL = 'CUSTOMER_DETAIL'
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  address: string;
  status: 'new' | 'regular' | 'suspended';
  lastOrderDate?: string;
  orderCount: number;
  totalSpent: number;
  avatar?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  cost: number;
  unit: string;
  category: string;
  image: string;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
  cost: number;
}

export interface Order {
  id: string;
  customerId: string;
  customerName: string;
  date: string;
  items: OrderItem[];
  status: 'pending' | 'delivered';
  totalAmount: number;
  totalCost: number;
  profit: number;
}
