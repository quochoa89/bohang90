
import React, { useState, useEffect, useMemo } from 'react';
import { View, Customer, Product, Order } from './types';
import { MOCK_CUSTOMERS, MOCK_PRODUCTS, MOCK_ORDERS } from './constants';
import Dashboard from './components/Dashboard';
import OrderList from './components/OrderList';
import CustomerList from './components/CustomerList';
import ProductList from './components/ProductList';
import CreateOrder from './components/CreateOrder';
import AddCustomer from './components/AddCustomer';
import AddProduct from './components/AddProduct';
import CustomerDetail from './components/CustomerDetail';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.DASHBOARD);
  const [customers, setCustomers] = useState<Customer[]>(MOCK_CUSTOMERS);
  const [products, setProducts] = useState<Product[]>(MOCK_PRODUCTS);
  const [orders, setOrders] = useState<Order[]>(MOCK_ORDERS);
  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sync dark mode with HTML class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleAddOrder = (newOrder: Order) => {
    setOrders([newOrder, ...orders]);
    setCurrentView(View.ORDERS);
  };

  const handleAddCustomer = (newCustomer: Customer) => {
    setCustomers([newCustomer, ...customers]);
    setCurrentView(View.CUSTOMERS);
  };

  const handleAddProduct = (newProduct: Product) => {
    setProducts([newProduct, ...products]);
    setCurrentView(View.PRODUCTS);
  };

  const viewHistory = (customerId: string) => {
    setSelectedCustomerId(customerId);
    setCurrentView(View.CUSTOMER_DETAIL);
  };

  const renderView = () => {
    switch (currentView) {
      case View.DASHBOARD:
        return <Dashboard customers={customers} orders={orders} products={products} />;
      case View.ORDERS:
        return <OrderList orders={orders} setOrders={setOrders} />;
      case View.CUSTOMERS:
        return <CustomerList customers={customers} onViewHistory={viewHistory} onAddCustomer={() => setCurrentView(View.ADD_CUSTOMER)} onAddOrder={(cid) => {
          setSelectedCustomerId(cid);
          setCurrentView(View.CREATE_ORDER);
        }} />;
      case View.PRODUCTS:
        return <ProductList products={products} onAddProduct={() => setCurrentView(View.ADD_PRODUCT)} />;
      case View.CREATE_ORDER:
        return <CreateOrder 
          customers={customers} 
          products={products} 
          initialCustomerId={selectedCustomerId}
          onBack={() => setCurrentView(View.DASHBOARD)} 
          onSubmit={handleAddOrder} 
        />;
      case View.ADD_CUSTOMER:
        return <AddCustomer onBack={() => setCurrentView(View.CUSTOMERS)} onSubmit={handleAddCustomer} />;
      case View.ADD_PRODUCT:
        return <AddProduct onBack={() => setCurrentView(View.PRODUCTS)} onSubmit={handleAddProduct} />;
      case View.CUSTOMER_DETAIL:
        const customer = customers.find(c => c.id === selectedCustomerId);
        if (!customer) return <div className="p-4">Customer not found</div>;
        return <CustomerDetail customer={customer} orders={orders.filter(o => o.customerId === selectedCustomerId)} onBack={() => setCurrentView(View.CUSTOMERS)} />;
      default:
        return <Dashboard customers={customers} orders={orders} products={products} />;
    }
  };

  const navItems = [
    { view: View.DASHBOARD, label: 'Tổng quan', icon: 'dashboard' },
    { view: View.ORDERS, label: 'Đơn hàng', icon: 'receipt_long' },
    { view: View.CUSTOMERS, label: 'Khách hàng', icon: 'group' },
    { view: View.PRODUCTS, label: 'Sản phẩm', icon: 'inventory_2' },
  ];

  return (
    <div className="min-h-screen flex flex-col max-w-md mx-auto relative bg-background-light dark:bg-background-dark overflow-x-hidden">
      {/* Dynamic Render Area */}
      <div className="flex-1 pb-24">
        {renderView()}
      </div>

      {/* Persistent Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-[#1a2e21]/80 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800 flex items-center justify-around py-2 px-4 z-40 pb-6 max-w-md mx-auto">
        {navItems.map((item, idx) => (
          <React.Fragment key={item.view}>
            {idx === 2 && (
              <div className="relative -top-6">
                <button 
                  onClick={() => setCurrentView(View.CREATE_ORDER)}
                  className="bg-primary size-14 rounded-full shadow-lg shadow-primary/40 flex items-center justify-center text-white ring-4 ring-white dark:ring-[#1a2e21] active:scale-90 transition-transform"
                >
                  <span className="material-symbols-outlined text-3xl font-bold">add</span>
                </button>
              </div>
            )}
            <button
              onClick={() => setCurrentView(item.view)}
              className={`flex flex-col items-center gap-1 w-16 transition-colors ${
                currentView === item.view ? 'text-primary' : 'text-gray-400 dark:text-gray-500'
              }`}
            >
              <span className={`material-symbols-outlined text-2xl ${currentView === item.view ? 'material-symbols-fill' : ''}`}>
                {item.icon}
              </span>
              <span className={`text-[10px] font-bold ${currentView === item.view ? 'font-bold' : 'font-medium'}`}>
                {item.label}
              </span>
            </button>
          </React.Fragment>
        ))}
        
        {/* Dark Mode Toggle - Hidden in UI but useful for testing */}
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="absolute -top-12 right-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md text-gray-500"
        >
          <span className="material-symbols-outlined">
            {isDarkMode ? 'light_mode' : 'dark_mode'}
          </span>
        </button>
      </nav>
    </div>
  );
};

export default App;
