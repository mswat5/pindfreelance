import { useState, useEffect, useContext } from "react";
import { cn } from "@/lib/utils"; // Utility function from SHADCN or your project
import { useNavigate, useLocation } from "react-router-dom";
import { User, Briefcase, DollarSign, Settings } from "lucide-react"; // Updated icons
import { ViewContext } from "../Context";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setView } = useContext(ViewContext);
  const items = [
    {
      id: "1",
      label: "Dashboard",
      path: "dashboard",
      icon: <User />, // Updated icon
    },
    {
      id: "2",
      label: "Projects",
      path: "projects",
      icon: <Briefcase />, // Updated icon
    },
    {
      id: "3",
      label: "Clients",
      path: "clients",
      icon: <User />, // Updated icon
    },
    {
      id: "4",
      label: "Invoices",
      path: "invoices",
      icon: <DollarSign />, // Updated icon
    },
    {
      id: "5",
      label: "Profile",
      path: "profile",
      icon: <Settings />, // Updated icon
    },
  ];

  const [activeItem, setActiveItem] = useState(items[0].id);

  useEffect(() => {
    const currentItem = items.find((item) =>
      location.pathname.startsWith(item.path)
    );
    if (currentItem) {
      setActiveItem(currentItem.id);
    }
    // Adjusted to reflect freelance platform paths
    const lastPathSegment = location.pathname.split("/").pop();
    console.log("last path segment", lastPathSegment);
    if (
      lastPathSegment === "projects" ||
      lastPathSegment === "clients" ||
      lastPathSegment === "invoices" ||
      lastPathSegment === "profile"
    ) {
      setView("cards");
    }
  }, [location.pathname]);

  const handleItemClick = (item: any) => {
    setActiveItem(item.id);
    navigate(item.path);
    setView("cards");
  };

  return (
    <div className="col-span-2 dark:bg-slate-900  min-h-screen p-2 py-4 border-r dark:border-white">
      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.id}
            className={cn(
              "p-2 cursor-pointer rounded-md flex items-center gap-x-2 min-w-fit  font-semibold",
              activeItem === item.id ? "bg-primary text-white" : ""
            )}
            onClick={() => handleItemClick(item)}
          >
            {item.icon}
            <p className="hidden lg:block">{item.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
