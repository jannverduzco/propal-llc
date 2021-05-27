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
import "./style.css";

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
            PROPAL LLC
            <h5>Professinal Tax Services </h5>
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/about" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">About Us</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/services" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Services</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/contact" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Contact Us</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/faqs" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fa fa-question-circle">
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
