import React from "react";
import SideNavbar from "../components/commonComponents/SideNavbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex ">
      <SideNavbar />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default DashboardLayout;
