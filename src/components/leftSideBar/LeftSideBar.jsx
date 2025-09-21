import React, { useState } from "react";
import { LiaAngleRightSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import userProfile from "../../assets/images/userProfile.png";

import AccountIcon from "../../assets/icons/Account.svg?react";
import BlogIcon from "../../assets/icons/Blog.svg?react";
import CorporateIcon from "../../assets/icons/Corporate.svg?react";
import DashboardIcon from "../../assets/icons/Dashboard.svg?react";
import EcommerceIcon from "../../assets/icons/ECommerce.svg?react";
import IdentificationBadgeIcon from "../../assets/icons/IdentificationBadge.svg?react";
import OnlineCoursesIcon from "../../assets/icons/OnlineCourses.svg?react";
import ProjectsIcon from "../../assets/icons/Projects.svg?react";
import SocialIcon from "../../assets/icons/Social.svg?react";

import MenuItem from "./MenuItem";

const LeftSideBar = () => {
  const [activeTab, setActiveTab] = useState("Default");
  const navigate = useNavigate();

  const tabs = [
    { name: "Favorites", textClass: "text-text-secondary" },
    { name: "Recently", textClass: "text-text-muted" },
  ];

  const items = [{ name: "Overview" }, { name: "Projects" }];

  // Dashboards with icon as image src
  const dashboards = [
    { label: "Default", icon: DashboardIcon, path: "" },
    { label: "Orders", icon: EcommerceIcon, path: "orders" },
    { label: "eCommerce", icon: EcommerceIcon, path: "ecommerce" },
    { label: "Projects", icon: ProjectsIcon, path: "projects" },
    {
      label: "Online Courses",
      icon: OnlineCoursesIcon,
      path: "online-courses",
    },
  ];

  // Pages with icon as image src
  const pages = {
    children: [
      {
        name: "User Profile",
        icon: IdentificationBadgeIcon,
        children: [
          { name: "Overview" },
          { name: "Projects" },
          { name: "Campaigns" },
          { name: "Documents" },
          { name: "Followers" },
        ],
      },
      { name: "Account", icon: AccountIcon, children: [] },
      { name: "Corporate", icon: CorporateIcon, children: [] },
      { name: "Blog", icon: BlogIcon, children: [] },
      { name: "Social", icon: SocialIcon, children: [] },
    ],
  };

  return (
    <section className="hidden py-5 px-4 md:col-span-3 xl:grid gap-y-4 text-sm font-light animate-fade">
      {/* User Profile */}
      <figure className="p-1 flex items-center gap-2">
        <img
          src={userProfile}
          alt="user profile"
          className="size-6 rounded-full"
        />
        <h1 className=" text-text-primary">ByeWind</h1>
      </figure>

      {/* Tabs and Items */}
      <div className="pb-3 flex flex-col gap-1">
        <div className="flex items-center gap-2">
          {tabs.map(({ name, textClass }, i) => (
            <p
              key={i}
              className={`px-2 py-1 ${textClass} cursor-pointer hover:bg-bg-hover rounded-md `}
            >
              {name}
            </p>
          ))}
        </div>

        {items.map(({ name }, i) => (
          <div key={i} className="px-2 py-1 cursor-pointer">
            <div className="flex gap-1 items-center">
              <span className="size-4 flex items-center justify-center">
                <span className="size-[6px] rounded-full bg-text-muted"></span>
              </span>
              <p className="text-text-primary ">{name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dashboards */}
      <div className="pb-4 flex flex-col gap-1">
        <h6 className="px-3 py-1 text-text-secondary">Dashboards</h6>

        {/* eslint-disable-next-line no-unused-vars */}
        {dashboards.map(({ label, icon: Icon, path }, i) => {
          const isActive = activeTab === label;
          return (
            <div
              key={i}
              onClick={() => {
                setActiveTab(label);
                navigate(`/${path}`);
              }}
              className={`
                group relative px-3 py-1 flex items-center gap-1 text-text-primary rounded-md cursor-pointer
                transition-transform hover:scale-105 duration-500 ease-in-out
                hover:bg-bg-hover
                ${isActive ? "bg-bg-hover" : ""}
              `}
            >
              <LiaAngleRightSolid
                className={`text-text-muted -ml-0.5 ${
                  isActive ? "invisible" : ""
                }`}
              />
              <div className="flex items-center gap-1">
              <Icon className="size-5 fill-current selected-icon" />                
              <p>{label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pages */}
      <div className="pb-4 flex flex-col gap-1">
        <h6 className="px-3 py-1 text-text-secondary">Pages</h6>
        {pages.children.map((page, index) => (
          <MenuItem
            key={index}
            page={{
              ...page,
              icon: page.icon
            }}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default LeftSideBar;
