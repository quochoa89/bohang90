
import { Customer, Product, Order } from './types';

export const MOCK_CUSTOMERS: Customer[] = [
  { 
    id: '1', 
    name: 'Nguyễn Văn An', 
    phone: '0901234567', 
    address: 'Quận 1, TP.HCM', 
    status: 'regular', 
    lastOrderDate: '2024-03-25T10:00:00', 
    orderCount: 12, 
    totalSpent: 50000000,
    avatar: 'https://i.pravatar.cc/150?u=1'
  },
  { 
    id: '2', 
    name: 'Trần Thị Bình', 
    phone: '0987654321', 
    address: 'Quận 3, TP.HCM', 
    status: 'new', 
    lastOrderDate: '2024-03-22T14:30:00', 
    orderCount: 2, 
    totalSpent: 1250000,
    avatar: 'https://i.pravatar.cc/150?u=2'
  },
  { 
    id: '3', 
    name: 'Lê Văn Cường', 
    phone: '0912233445', 
    address: 'Quận 7, TP.HCM', 
    status: 'suspended', 
    lastOrderDate: '2024-03-10T09:15:00', 
    orderCount: 8, 
    totalSpent: 14200000,
    avatar: 'https://i.pravatar.cc/150?u=3'
  },
  { 
    id: '4', 
    name: 'Phạm Minh Hoàng', 
    phone: '0933445566', 
    address: 'Bình Thạnh, TP.HCM', 
    status: 'regular', 
    lastOrderDate: '2024-03-24T16:20:00', 
    orderCount: 15, 
    totalSpent: 28400000,
    avatar: 'https://i.pravatar.cc/150?u=4'
  },
];

export const MOCK_PRODUCTS: Product[] = [
  { id: 'p1', name: 'Táo Envy Mỹ (Size L)', price: 120000, cost: 85000, unit: 'kg', category: 'Trái cây', image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&q=80&w=400' },
  { id: 'p2', name: 'Nho Mẫu Đơn Hàn Quốc', price: 450000, cost: 320000, unit: 'kg', category: 'Trái cây', image: 'https://images.unsplash.com/photo-1596364776417-691ca979313a?auto=format&fit=crop&q=80&w=400' },
  { id: 'p3', name: 'Cam Sành Loại 1', price: 35000, cost: 20000, unit: 'kg', category: 'Trái cây', image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&q=80&w=400' },
  { id: 'p4', name: 'Mật ong hữu cơ (500ml)', price: 120000, cost: 75000, unit: 'chai', category: 'Thực phẩm', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=400' },
  { id: 'p5', name: 'Bánh mì nguyên cám', price: 45000, cost: 21000, unit: 'ổ', category: 'Bánh kẹo', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400' },
];

export const MOCK_ORDERS: Order[] = [
  { id: '#ORD-99283', customerId: '1', customerName: 'Nguyễn Văn An', date: '2024-03-25T14:30:00', status: 'delivered', items: [{ productId: 'p1', quantity: 2, price: 120000, cost: 85000 }], totalAmount: 850000, totalCost: 620000, profit: 230000 },
  { id: '#ORD-99150', customerId: '2', customerName: 'Trần Thị Bình', date: '2024-03-05T09:15:00', status: 'pending', items: [{ productId: 'p5', quantity: 5, price: 45000, cost: 21000 }], totalAmount: 1250000, totalCost: 1050000, profit: 200000 },
];
