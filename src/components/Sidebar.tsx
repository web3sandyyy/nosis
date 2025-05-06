"use client";
import React, { useState } from "react";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "./ui/sidebar";
import Image from "next/image";
import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  CircleHelpIcon,
  Users,
  CircleUserIcon,
  Scale,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const SidebarComponent = () => {
  const [selected, setSelected] = useState("Home");
    

  const menuItems = [
    {
      label: "Home",
      icon: <HomeIcon className="w-5 h-5" />,
      href: "/",
    },
    {
      label: "Explore",
      icon: <SearchIcon className="w-5 h-5" />,
      href: "/",
    },
    {
      label: "Library",
      icon: <LibraryIcon className="w-5 h-5" />,
      href: "/",
    },
  ];

  const footerItems = [
    {
      label: "Request more books",
      icon: <CircleHelpIcon className="w-5 h-5" />,
      href: "/",
    },
    {
      label: "About Us",
      icon: <Users className="w-5 h-5" />,
      href: "/",
    },
    {
      label: "My Account",
      icon: <CircleUserIcon className="w-5 h-5" />,
      href: "/",
    },
    {
      label: "Legal Center",
      icon: <Scale className="w-5 h-5" />,
      href: "/",
    },
  ];

  const socialItems = [
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "/",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "/",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "/",
    },
  ];

  return (
    <SidebarProvider className="w-fit bg-amber-300">
      <Sidebar className=" p-4 py-6 bg-primary">
        <SidebarHeader className="bg-primary p-0">
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={100}
            height={100}
            className="h-10 mx-auto"
          />
        </SidebarHeader>

        <SidebarContent className="bg-primary">
          <SidebarMenu className="mt-4 font-medium">
            {menuItems.map((item) => (
              <SidebarMenuItem onClick={() => setSelected(item.label)} key={item.label} className="p-1">
                <SidebarMenuButton className={`${selected === item.label ? "font-semibold " : "opacity-50 hover:opacity-80"}  flex-row gap-2`}>
                  <span>{item.icon}</span> {item.label}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter className="bg-primary">
          <SidebarMenu className="py-2 gap-4">
            {footerItems.map((item) => (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton className="opacity-50 hover:opacity-100">
                  <span>{item.icon}</span> {item.label}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>

          <SidebarMenu className="flex-row  ">
            {socialItems.map((item, index) => (
              <SidebarMenuItem key={index} className="w-fit">
                <SidebarMenuButton className="opacity-50 hover:opacity-100">
                  <span>{item.icon}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
};

export default SidebarComponent;
