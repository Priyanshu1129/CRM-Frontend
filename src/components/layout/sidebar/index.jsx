"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { Menu, Layout } from "antd";
import { Title } from "../title";
const { Sider } = Layout;
import { colorConfig, resources } from "@/config";
import { getAuthorizedResources } from "@/utilities/checkPermission";
import { fixedRole } from "@/config/fixedRole";

const Sidebar = ({ collapsed, setCollapsed }) => {
  const router = useRouter();
  const [selectedKey, setSelectedKey] = useState("");
  const [authorizedResources, setAuthorizedResources] = useState([]);
  const { data, permissions } = useSelector((state) => state.auth.authDetails);

  useEffect(() => {
    try {
      if (data?.role?.name === fixedRole.SUPER_ADMIN) {
        setAuthorizedResources(resources);
      } else {
        const authorized = getAuthorizedResources(resources, permissions || []);
        setAuthorizedResources(authorized);
      }
    } catch (error) {
      console.error("Error while filtering authorized resources:", error);
      setAuthorizedResources([]); // Fallback to empty array
    }
  }, [permissions, data]);

  useEffect(() => {
    // Set the selected key based on the current route
    const path = window.location.pathname.substring(1);
    setSelectedKey(path || "dashboard");
  }, []);

  const onClick = (e) => {
    setSelectedKey(e.key); // Set the selected menu key
    router.push(`/${e.key}`, undefined, { scroll: false });
  };

  return (
    <Sider
      breakpoint="lg"
      width={264}
      style={{
        fontWeight: "500",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 1,
        scrollbarWidth: "thin",
        // scrollbarColor: "unset",
      }}
      theme="light"
      // trigger={true}
      collapsible
      // collapsedWidth={screens.xs && "0"}
      collapsed={collapsed}
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(value) => {
        setCollapsed(value);
      }}
    >
      <div
        style={{
          width: "256px",
          padding: "0 16px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          height: "64px",
          borderBottom: "none",
        }}
        // className="demo-logo-vertical"
      >
        <Title collapsed={collapsed} />
      </div>
      <Menu
        onClick={onClick}
        style={{
          height: "calc(100% - 64px)", // Adjust to account for header height
          overflow: "auto",
          scrollbarWidth: "none",
          fontWeight: "500",
          paddingLeft: "12px",
          paddingRight: "12px",
          marginTop: "8px",
          fontSize: "0.90rem",
        }}
        theme="light" // Ensures proper base styling
        title="title"
        selectedKeys={[selectedKey]}
        defaultOpenKeys={["opportunity"]}
        mode="inline"
        items={authorizedResources}
      />

      {/* for categorized tabs */}
      {/* <Menu
        onClick={onClick}
        style={{
          height: "calc(100% - 64px)", // Adjust to account for header height
          overflow: "auto",
          scrollbarWidth: "none",
          fontWeight: "500",
          paddingLeft: "12px",
          paddingRight: "12px",
          marginTop: "8px",
          fontSize: "0.90rem",
        }}
        theme="light"
        selectedKeys={[selectedKey]}
        mode="inline"
      >
        {resources.map((group) => (
          <Menu.ItemGroup key={group.category} title={group.category}>
            {group.items.map((item) =>
              item.children ? (
                <Menu.SubMenu
                  key={item.key}
                  icon={item.icon}
                  title={item.label}
                >
                  {item.children.map((child) => (
                    <Menu.Item key={child.key} icon={child.icon}>
                      {child.label}
                    </Menu.Item>
                  ))}
                </Menu.SubMenu>
              ) : (
                <Menu.Item
                  key={item.key}
                  icon={item.icon}
                  disabled={item.disabled}
                >
                  {item.label}
                </Menu.Item>
              )
            )}
          </Menu.ItemGroup>
        ))}
      </Menu> */}
    </Sider>
  );
};
export default Sidebar;
