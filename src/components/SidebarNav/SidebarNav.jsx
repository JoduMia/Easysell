import React from "react";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from "react-pro-sidebar";

const SidebarNav = () => {
  const { collapseSidebar } = useProSidebar();
  return (
    <Sidebar className="h-screen">
      {/* <button onClick={() => collapseSidebar()}>Open</button> */}
      <Menu>
        <MenuItem component={<Link to="/" />}>Dashboard</MenuItem>
        <MenuItem component={<Link to="/pos" />}> POS</MenuItem>
        <SubMenu label="Inventory">
          <MenuItem component={<Link to="/manage-products" />}> Manage Products </MenuItem>
          <MenuItem> Add Products </MenuItem>
        </SubMenu>
        <MenuItem> Orders</MenuItem>
        <MenuItem> Reports</MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SidebarNav;
