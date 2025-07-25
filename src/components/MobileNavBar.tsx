
import { useNavigate, useLocation } from "react-router-dom";
import { Home, Eye, Flame, Zap, Grid3X3 } from "lucide-react";

const MobileNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Eye, label: "Mirror", path: "/mirror" },
    { icon: Flame, label: "Burn", path: "/burn-belief" },
    { icon: Zap, label: "Truth", path: "/godbody-mode" },
    { icon: Grid3X3, label: "Tools", path: "/tools" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-md border-t border-border z-40 md:hidden">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-200 ${
                isActive 
                  ? 'text-divine bg-divine/10' 
                  : 'text-muted-foreground hover:text-divine hover:bg-divine/5'
              }`}
            >
              <IconComponent className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNavBar;
