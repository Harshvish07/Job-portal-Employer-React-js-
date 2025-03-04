import { useLocation } from "react-router-dom";
import Sidebar from "../JobPost/components/Sidebar/Sidebar";
import Header from "../JobPost/components/header/MainHeader";

const MyLayout = ({ children }) => {
  const location = useLocation(); // Get the current path

  // List of routes where Header & Sidebar should be hidden
  const hiddenRoutes = ["/my-jobs"];

  // Check if the current route matches any hidden route
  const hideComponents = hiddenRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  console.log("Current Path:", location.pathname);
  console.log("Should Hide Components:", hideComponents);

  return (
    <div className="min-h-screen">
      {/* Conditionally render Header */}
      {!hideComponents && <Header />}

      <main className="p-4">{children}</main>

      {/* Conditionally render Sidebar */}
      {!hideComponents && <Sidebar />}
    </div>
  );
};

export default MyLayout;
