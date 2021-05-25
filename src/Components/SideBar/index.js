import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="white" backgroundColor="#64BB6A">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            PROPAL
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">About Us</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Services</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Contact Us</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fa fa-question-circle" >
                  
                FAQ's
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            @ 2021 PROPAL LLC
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
