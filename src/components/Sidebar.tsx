
import { Eye, Flag, Award, Paperclip } from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { icon: Eye, label: "Overview", active: true },
    { icon: Flag, label: "Features" },
    { icon: Award, label: "Pricing" },
    { icon: Paperclip, label: "Contact" },
  ];

  return (
    <aside className="w-100 bg-brand-dark p-8">
      <div className="space-y-0">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`nav-link ${item.active ? 'bg-brand-card text-brand-light' : ''}`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
