interface AdminNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const AdminNavigation = ({ activeTab, onTabChange }: AdminNavigationProps) => {
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'products', label: 'Products' },
    { id: 'orders', label: 'Orders' },
    { id: 'bookings', label: 'Bookings' },
    { id: 'analytics', label: 'Analytics' }
  ];

  return (
    <div className="mb-8">
      <nav className="flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`pb-3 px-2 border-b-2 font-medium text-sm transition-smooth hover:-translate-y-0.5 ${
              activeTab === tab.id
                ? 'border-primary text-primary shadow-glow gradient-text'
                : 'border-transparent text-muted-foreground hover:text-foreground hover:border-primary/30'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default AdminNavigation;