import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../../Assets/logo.png";

function Sidebar() {
  return (
    <nav
      style={{
        display: "flex",
        height: "100vh",
        overflow: "auto",
        // flexDirection: "column",
        position: "fixed",
      }}
    >
      <CDBSidebar textColor="white" backgroundColor="#64BB6A">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>} >
          <a href="/about">
            <img className="logo" src={Logo} alt="logo"></img>
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <Link to="/about" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">About Us</CDBSidebarMenuItem>
            </Link>
            <Link to="/services" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Services</CDBSidebarMenuItem>
            </Link>
            <Link to="/contact" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Contact Us</CDBSidebarMenuItem>
            </Link>
            <Link to="/faqs" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fa fa-question-circle">
                FAQ's
              </CDBSidebarMenuItem>
            </Link>
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
    </nav>
  );
}

export default Sidebar;
